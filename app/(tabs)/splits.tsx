/**
 * splits.tsx  —  Split Bills & Group Ledger (IOU Tracker)
 *
 * Two sub-tabs:
 *   Bills    — add / view / settle split expenses
 *   Balances — net balances + minimal transactions to settle up
 */

import AnimatedSection from "@/components/AnimatedSection";
import PressableScale from "@/components/PressableScale";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import {
    Member,
    SplitMode,
    SplitShare,
    useSplit,
} from "@/context/SplitContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo, useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtAmount(n: number, cur: string) {
  return `${cur} ${Math.abs(n).toFixed(2)}`;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// ─── Avatar ──────────────────────────────────────────────────────────────────

function Avatar({ member, size = 36 }: { member: Member; size?: number }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: member.color + "28",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: member.color + "50",
      }}
    >
      <Text
        style={{
          fontSize: size * 0.38,
          fontWeight: "800",
          color: member.color,
        }}
      >
        {initials(member.name)}
      </Text>
    </View>
  );
}

// ─── Add Member Modal ────────────────────────────────────────────────────────

function AddMemberModal({
  visible,
  onClose,
  colors,
}: {
  visible: boolean;
  onClose: () => void;
  colors: any;
}) {
  const { addMember } = useSplit();
  const [name, setName] = useState("");

  function handleAdd() {
    if (!name.trim()) return;
    addMember(name.trim());
    setName("");
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.centeredOverlay}
      >
        <TouchableOpacity style={StyleSheet.absoluteFill} onPress={onClose} />
        <View
          style={[
            styles.miniModal,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.miniModalTitle, { color: colors.textPrimary }]}>
            Add Person
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Name (e.g. Alice)"
            placeholderTextColor={colors.textTertiary}
            style={[
              styles.miniInput,
              {
                backgroundColor: colors.inputBg,
                borderColor: colors.border,
                color: colors.textPrimary,
              },
            ]}
            autoFocus
            onSubmitEditing={handleAdd}
            returnKeyType="done"
          />
          <View style={styles.miniModalRow}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.miniBtn, { backgroundColor: colors.inputBg }]}
            >
              <Text style={{ color: colors.textSecondary, fontWeight: "600" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleAdd}
              style={[styles.miniBtn, { backgroundColor: colors.primary }]}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

// ─── Add Bill Modal ──────────────────────────────────────────────────────────

function AddBillModal({
  visible,
  onClose,
  colors,
  currency,
}: {
  visible: boolean;
  onClose: () => void;
  colors: any;
  currency: string;
}) {
  const { members, addBill } = useSplit();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState<string>("");
  const [splitMode, setSplitMode] = useState<SplitMode>("equal");
  const [exactAmounts, setExactAmounts] = useState<Record<string, string>>({});
  const [percentages, setPercentages] = useState<Record<string, string>>({});
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [note, setNote] = useState("");

  function reset() {
    setTitle("");
    setAmount("");
    setPaidBy("");
    setSplitMode("equal");
    setExactAmounts({});
    setPercentages({});
    setSelectedMembers([]);
    setNote("");
  }

  function handleClose() {
    reset();
    onClose();
  }

  function toggleMember(id: string) {
    if (id === paidBy) return;
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    );
  }

  function handleAdd() {
    const total = parseFloat(amount);
    const selectedParticipants = selectedMembers.filter((id) => id !== paidBy);
    if (!title.trim()) {
      Alert.alert("Missing Title", "Please enter a bill title.");
      return;
    }
    if (isNaN(total) || total <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid amount.");
      return;
    }
    if (!paidBy) {
      Alert.alert("Who Paid?", "Please select who paid the bill.");
      return;
    }
    if (selectedParticipants.length === 0) {
      Alert.alert("Select Members", "Please select who to split with.");
      return;
    }

    const allParticipants = Array.from(
      new Set([paidBy, ...selectedParticipants]),
    );

    let shares: SplitShare[] = [];
    if (splitMode === "equal") {
      const perPerson = total / allParticipants.length;
      shares = allParticipants.map((id) => ({
        memberId: id,
        value: perPerson,
      }));
    } else if (splitMode === "exact") {
      const enteredTotal = selectedParticipants.reduce(
        (s, id) => s + (parseFloat(exactAmounts[id] || "0") || 0),
        0,
      );
      if (enteredTotal > total) {
        Alert.alert(
          "Check Exact Amounts",
          "The amounts assigned to others cannot be greater than the bill total.",
        );
        return;
      }
      const payerShare = total - enteredTotal;
      shares = [
        { memberId: paidBy, value: payerShare },
        ...selectedParticipants.map((id) => ({
          memberId: id,
          value: parseFloat(exactAmounts[id] || "0") || 0,
        })),
      ];
    } else {
      const enteredPct = selectedParticipants.reduce(
        (s, id) => s + (parseFloat(percentages[id] || "0") || 0),
        0,
      );
      if (enteredPct > 100) {
        Alert.alert(
          "Check Percentages",
          "The percentages assigned to others cannot be greater than 100%.",
        );
        return;
      }
      const payerPct = 100 - enteredPct;
      shares = [
        { memberId: paidBy, value: payerPct },
        ...selectedParticipants.map((id) => ({
          memberId: id,
          value: parseFloat(percentages[id] || "0") || 0,
        })),
      ];
    }

    addBill({
      title: title.trim(),
      totalAmount: total,
      currency,
      paidByMemberId: paidBy,
      splitMode,
      shares,
      note: note.trim() || undefined,
    });
    handleClose();
  }

  const modeOptions: { key: SplitMode; label: string; icon: string }[] = [
    { key: "equal", label: "Equal", icon: "git-branch-outline" },
    { key: "exact", label: "Exact", icon: "cash-outline" },
    { key: "percentage", label: "%", icon: "pie-chart-outline" },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.overlayBottom}>
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          onPress={handleClose}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View
            style={[styles.bigSheet, { backgroundColor: colors.background }]}
          >
            {/* Header */}
            <LinearGradient
              colors={["#6C3FEF", "#3C82FF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.bigSheetHeader}
            >
              <Text style={styles.bigSheetTitle}>Add Split Bill</Text>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.bigSheetClose}
              >
                <Ionicons name="close" size={20} color="white" />
              </TouchableOpacity>
            </LinearGradient>

            <ScrollView
              style={styles.bigSheetContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Title */}
              <Text
                style={[styles.fieldLabel, { color: colors.textSecondary }]}
              >
                BILL TITLE
              </Text>
              <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="e.g. Dinner at Trattoria"
                placeholderTextColor={colors.textTertiary}
                style={[
                  styles.fieldInput,
                  {
                    backgroundColor: colors.inputBg,
                    borderColor: colors.border,
                    color: colors.textPrimary,
                  },
                ]}
              />

              {/* Amount */}
              <Text
                style={[styles.fieldLabel, { color: colors.textSecondary }]}
              >
                TOTAL AMOUNT
              </Text>
              <View
                style={[
                  styles.amountRow,
                  {
                    backgroundColor: colors.inputBg,
                    borderColor: colors.border,
                  },
                ]}
              >
                <Text style={[styles.currencySign, { color: colors.primary }]}>
                  {currency}
                </Text>
                <TextInput
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="decimal-pad"
                  placeholder="0.00"
                  placeholderTextColor={colors.textTertiary}
                  style={[styles.amountInput, { color: colors.textPrimary }]}
                />
              </View>

              {/* Split Mode */}
              <Text
                style={[styles.fieldLabel, { color: colors.textSecondary }]}
              >
                SPLIT METHOD
              </Text>
              <View style={styles.modeRow}>
                {modeOptions.map((opt) => {
                  const active = splitMode === opt.key;
                  return (
                    <TouchableOpacity
                      key={opt.key}
                      onPress={() => setSplitMode(opt.key)}
                      style={[
                        styles.modeChip,
                        {
                          backgroundColor: active
                            ? colors.primary
                            : colors.inputBg,
                          borderColor: active ? colors.primary : colors.border,
                        },
                      ]}
                    >
                      <Ionicons
                        name={opt.icon as any}
                        size={14}
                        color={active ? "white" : colors.textSecondary}
                      />
                      <Text
                        style={[
                          styles.modeChipText,
                          { color: active ? "white" : colors.textSecondary },
                        ]}
                      >
                        {opt.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Who Paid */}
              <Text
                style={[styles.fieldLabel, { color: colors.textSecondary }]}
              >
                WHO PAID?
              </Text>
              {members.length === 0 ? (
                <Text
                  style={[styles.emptyHint, { color: colors.textTertiary }]}
                >
                  Add people in the Members section first.
                </Text>
              ) : (
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.memberScroll}
                >
                  {members.map((m) => {
                    const sel = paidBy === m.id;
                    return (
                      <TouchableOpacity
                        key={m.id}
                        onPress={() => {
                          setPaidBy(m.id);
                          setSelectedMembers((prev) =>
                            prev.filter((id) => id !== m.id),
                          );
                        }}
                        style={[
                          styles.memberChip,
                          {
                            backgroundColor: sel
                              ? m.color + "22"
                              : colors.inputBg,
                            borderColor: sel ? m.color : colors.border,
                          },
                        ]}
                      >
                        <Avatar member={m} size={28} />
                        <Text
                          style={[
                            styles.memberChipText,
                            { color: sel ? m.color : colors.textPrimary },
                          ]}
                        >
                          {m.name}
                        </Text>
                        {sel && (
                          <Ionicons
                            name="checkmark-circle"
                            size={14}
                            color={m.color}
                          />
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              )}

              {/* Split With */}
              <Text
                style={[styles.fieldLabel, { color: colors.textSecondary }]}
              >
                SPLIT WITH
              </Text>
              <View style={styles.splitWithGrid}>
                {members
                  .filter((m) => m.id !== paidBy)
                  .map((m) => {
                    const sel = selectedMembers.includes(m.id);
                    return (
                      <View key={m.id}>
                        <TouchableOpacity
                          onPress={() => toggleMember(m.id)}
                          style={[
                            styles.splitMemberRow,
                            {
                              backgroundColor: sel
                                ? m.color + "12"
                                : colors.inputBg,
                              borderColor: sel ? m.color : colors.border,
                            },
                          ]}
                        >
                          <Avatar member={m} size={30} />
                          <Text
                            style={[
                              styles.splitMemberName,
                              { color: colors.textPrimary, flex: 1 },
                            ]}
                          >
                            {m.name}
                          </Text>
                          <View
                            style={[
                              styles.checkbox,
                              {
                                borderColor: sel ? m.color : colors.border,
                                backgroundColor: sel ? m.color : "transparent",
                              },
                            ]}
                          >
                            {sel && (
                              <Ionicons
                                name="checkmark"
                                size={12}
                                color="white"
                              />
                            )}
                          </View>
                        </TouchableOpacity>

                        {/* Exact amount input */}
                        {sel && splitMode === "exact" && (
                          <TextInput
                            value={exactAmounts[m.id] ?? ""}
                            onChangeText={(v) =>
                              setExactAmounts((p) => ({ ...p, [m.id]: v }))
                            }
                            keyboardType="decimal-pad"
                            placeholder={`Amount for ${m.name}`}
                            placeholderTextColor={colors.textTertiary}
                            style={[
                              styles.subInput,
                              {
                                backgroundColor: colors.inputBg,
                                borderColor: colors.border,
                                color: colors.textPrimary,
                              },
                            ]}
                          />
                        )}

                        {/* Percentage input */}
                        {sel && splitMode === "percentage" && (
                          <TextInput
                            value={percentages[m.id] ?? ""}
                            onChangeText={(v) =>
                              setPercentages((p) => ({ ...p, [m.id]: v }))
                            }
                            keyboardType="decimal-pad"
                            placeholder={`% for ${m.name}`}
                            placeholderTextColor={colors.textTertiary}
                            style={[
                              styles.subInput,
                              {
                                backgroundColor: colors.inputBg,
                                borderColor: colors.border,
                                color: colors.textPrimary,
                              },
                            ]}
                          />
                        )}
                      </View>
                    );
                  })}
              </View>

              {/* Note */}
              <Text
                style={[styles.fieldLabel, { color: colors.textSecondary }]}
              >
                NOTE (OPTIONAL)
              </Text>
              <TextInput
                value={note}
                onChangeText={setNote}
                placeholder="Any details..."
                placeholderTextColor={colors.textTertiary}
                style={[
                  styles.fieldInput,
                  {
                    backgroundColor: colors.inputBg,
                    borderColor: colors.border,
                    color: colors.textPrimary,
                  },
                ]}
              />

              <View style={{ height: 24 }} />
            </ScrollView>

            {/* Add Button */}
            <View
              style={[styles.bigSheetFooter, { borderColor: colors.border }]}
            >
              <TouchableOpacity
                onPress={handleAdd}
                style={styles.addBillBtn}
                activeOpacity={0.85}
              >
                <LinearGradient
                  colors={["#6C3FEF", "#3C82FF"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.addBillBtnInner}
                >
                  <Ionicons name="add-circle-outline" size={18} color="white" />
                  <Text style={styles.addBillBtnText}>Add Bill</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

// ─── Bills Tab ────────────────────────────────────────────────────────────────

function BillsTab({ colors, currency }: { colors: any; currency: string }) {
  const { bills, members, deleteBill, settleBill } = useSplit();

  const getMember = (id: string) => members.find((m) => m.id === id);

  const activeBills = bills.filter((b) => !b.settled);
  const settledBills = bills.filter((b) => b.settled);

  function handleDelete(id: string) {
    Alert.alert("Delete Bill", "Remove this bill?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => deleteBill(id) },
    ]);
  }

  function handleSettle(id: string) {
    Alert.alert("Mark as Settled", "Mark this bill as fully settled?", [
      { text: "Cancel", style: "cancel" },
      { text: "Settle", style: "default", onPress: () => settleBill(id) },
    ]);
  }

  const renderBill = (
    bill: (typeof bills)[0],
    idx: number,
    settled: boolean,
  ) => {
    const payer = getMember(bill.paidByMemberId);
    const participantIds = Array.from(
      new Set([bill.paidByMemberId, ...bill.shares.map((s) => s.memberId)]),
    );
    const participants = participantIds
      .map((id) => getMember(id))
      .filter(Boolean) as Member[];

    // Compute per-person amount for display
    let perPersonLabel = "";
    if (bill.splitMode === "equal") {
      perPersonLabel = `${currency} ${(bill.totalAmount / bill.shares.length).toFixed(2)} each`;
    } else if (bill.splitMode === "percentage") {
      perPersonLabel = "Custom %";
    } else {
      perPersonLabel = "Custom amounts";
    }

    return (
      <AnimatedSection key={bill.id} delay={idx * 50} distance={15}>
        <View
          style={[
            styles.billCard,
            {
              backgroundColor: colors.card,
              borderColor: settled ? colors.border : colors.border,
              opacity: settled ? 0.65 : 1,
            },
          ]}
        >
          {/* Top row */}
          <View style={styles.billCardTop}>
            <View
              style={[
                styles.billIcon,
                { backgroundColor: colors.primary + "18" },
              ]}
            >
              <Ionicons
                name="receipt-outline"
                size={18}
                color={colors.primary}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.billTitle, { color: colors.textPrimary }]}>
                {bill.title}
              </Text>
              <Text style={[styles.billMeta, { color: colors.textSecondary }]}>
                {fmtDate(bill.date)} • {bill.splitMode} split
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={[styles.billAmount, { color: colors.primary }]}>
                {fmtAmount(bill.totalAmount, currency)}
              </Text>
              <Text style={[styles.billMeta, { color: colors.textTertiary }]}>
                {perPersonLabel}
              </Text>
            </View>
          </View>

          {/* Payer & participants */}
          <View
            style={[
              styles.billCardMid,
              { borderColor: colors.separator ?? colors.border },
            ]}
          >
            <View style={styles.billInfoRow}>
              <Text
                style={[styles.billInfoLabel, { color: colors.textSecondary }]}
              >
                Paid by
              </Text>
              {payer && (
                <View style={styles.payerRow}>
                  <Avatar member={payer} size={22} />
                  <Text
                    style={[styles.payerName, { color: colors.textPrimary }]}
                  >
                    {payer.name}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.billInfoRow}>
              <Text
                style={[styles.billInfoLabel, { color: colors.textSecondary }]}
              >
                Split with
              </Text>
              <View style={styles.avatarStack}>
                {participants.slice(0, 5).map((m, i) => (
                  <View
                    key={m.id}
                    style={{ marginLeft: i > 0 ? -8 : 0, zIndex: 10 - i }}
                  >
                    <Avatar member={m} size={24} />
                  </View>
                ))}
                {participants.length > 5 && (
                  <View
                    style={[
                      styles.moreAvatar,
                      { backgroundColor: colors.inputBg },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 9,
                        color: colors.textSecondary,
                        fontWeight: "700",
                      }}
                    >
                      +{participants.length - 5}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* Note */}
          {bill.note ? (
            <Text style={[styles.billNote, { color: colors.textTertiary }]}>
              {bill.note}
            </Text>
          ) : null}

          {/* Actions */}
          {!settled && (
            <View style={styles.billActions}>
              <TouchableOpacity
                onPress={() => handleSettle(bill.id)}
                style={[
                  styles.billActionBtn,
                  { backgroundColor: colors.successLight ?? "#34C47C15" },
                ]}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={15}
                  color={colors.success}
                />
                <Text
                  style={[styles.billActionText, { color: colors.success }]}
                >
                  Settle
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDelete(bill.id)}
                style={[
                  styles.billActionBtn,
                  { backgroundColor: colors.dangerLight },
                ]}
              >
                <Ionicons
                  name="trash-outline"
                  size={15}
                  color={colors.danger}
                />
                <Text style={[styles.billActionText, { color: colors.danger }]}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {settled && (
            <View
              style={[
                styles.settledBadge,
                { backgroundColor: colors.successLight ?? "#34C47C15" },
              ]}
            >
              <Ionicons
                name="checkmark-circle"
                size={12}
                color={colors.success}
              />
              <Text
                style={[styles.settledBadgeText, { color: colors.success }]}
              >
                Settled
              </Text>
            </View>
          )}
        </View>
      </AnimatedSection>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      {/* Active Bills */}
      {activeBills.length === 0 && settledBills.length === 0 ? (
        <View style={styles.emptyState}>
          <View
            style={[
              styles.emptyIcon,
              { backgroundColor: colors.primary + "15" },
            ]}
          >
            <Ionicons name="receipt-outline" size={40} color={colors.primary} />
          </View>
          <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
            No Bills Yet
          </Text>
          <Text style={[styles.emptySub, { color: colors.textSecondary }]}>
            Tap the add button to split a shared expense with your group.
          </Text>
        </View>
      ) : (
        <>
          {activeBills.length > 0 && (
            <>
              <Text
                style={[styles.groupHeader, { color: colors.textSecondary }]}
              >
                ACTIVE
              </Text>
              {activeBills.map((b, idx) => renderBill(b, idx, false))}
            </>
          )}
          {settledBills.length > 0 && (
            <>
              <Text
                style={[styles.groupHeader, { color: colors.textSecondary }]}
              >
                SETTLED
              </Text>
              {settledBills.map((b, idx) => renderBill(b, idx, true))}
            </>
          )}
        </>
      )}
    </ScrollView>
  );
}

// ─── Balances Tab ─────────────────────────────────────────────────────────────

function BalancesTab({ colors, currency }: { colors: any; currency: string }) {
  const { members, getNetBalances, getMinimalTransactions, addSettlement } =
    useSplit();
  const balances = useMemo(() => getNetBalances(), [getNetBalances]);
  const transactions = useMemo(
    () => getMinimalTransactions(),
    [getMinimalTransactions],
  );

  function handleSettle(fromId: string, toId: string, amount: number) {
    Alert.alert(
      "Record Payment",
      `Mark that ${members.find((m) => m.id === fromId)?.name} paid ${fmtAmount(amount, currency)} to ${members.find((m) => m.id === toId)?.name}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Confirm",
          onPress: () =>
            addSettlement({ fromMemberId: fromId, toMemberId: toId, amount }),
        },
      ],
    );
  }

  if (members.length === 0) {
    return (
      <View style={styles.emptyState}>
        <View
          style={[styles.emptyIcon, { backgroundColor: colors.primary + "15" }]}
        >
          <Ionicons name="people-outline" size={40} color={colors.primary} />
        </View>
        <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
          No People Yet
        </Text>
        <Text style={[styles.emptySub, { color: colors.textSecondary }]}>
          Add people in the Members section to start tracking balances.
        </Text>
      </View>
    );
  }

  const allSettled = transactions.length === 0;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      {/* Net Balance Cards */}
      <Text style={[styles.groupHeader, { color: colors.textSecondary }]}>
        NET BALANCES
      </Text>
      {members.map((m, idx) => {
        const bal = balances[m.id] ?? 0;
        const isPositive = bal > 0.005;
        const isNegative = bal < -0.005;
        return (
          <AnimatedSection key={m.id} delay={idx * 40} distance={12}>
            <View
              style={[
                styles.balanceCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <Avatar member={m} size={42} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text
                  style={[styles.balanceName, { color: colors.textPrimary }]}
                >
                  {m.name}
                </Text>
                <Text
                  style={[
                    styles.balanceStatus,
                    {
                      color: isPositive
                        ? colors.success
                        : isNegative
                          ? colors.danger
                          : colors.textTertiary,
                    },
                  ]}
                >
                  {isPositive ? "is owed" : isNegative ? "owes" : "settled up"}
                </Text>
              </View>
              <Text
                style={[
                  styles.balanceAmount,
                  {
                    color: isPositive
                      ? colors.success
                      : isNegative
                        ? colors.danger
                        : colors.textTertiary,
                  },
                ]}
              >
                {Math.abs(bal) < 0.005 ? "—" : fmtAmount(bal, currency)}
              </Text>
            </View>
          </AnimatedSection>
        );
      })}

      {/* Minimal Transactions */}
      <Text style={[styles.groupHeader, { color: colors.textSecondary }]}>
        SETTLE UP
      </Text>
      {allSettled ? (
        <View
          style={[
            styles.allSettledBox,
            {
              backgroundColor: colors.successLight ?? "#34C47C10",
              borderColor: colors.success + "40",
            },
          ]}
        >
          <Ionicons name="checkmark-circle" size={28} color={colors.success} />
          <Text style={[styles.allSettledText, { color: colors.success }]}>
            All settled up! 🎉
          </Text>
        </View>
      ) : (
        transactions.map((tx, i) => (
          <AnimatedSection key={i} delay={i * 45} distance={12}>
            <View
              style={[
                styles.txCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <View style={styles.txRow}>
                <Avatar member={tx.from} size={36} />
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                  <Text style={[styles.txText, { color: colors.textPrimary }]}>
                    <Text style={{ fontWeight: "800", color: tx.from.color }}>
                      {tx.from.name}
                    </Text>
                    {" pays "}
                    <Text style={{ fontWeight: "800", color: tx.to.color }}>
                      {tx.to.name}
                    </Text>
                  </Text>
                  <Text style={[styles.txAmount, { color: colors.primary }]}>
                    {fmtAmount(tx.amount, currency)}
                  </Text>
                </View>
                <Avatar member={tx.to} size={36} />
              </View>
              <TouchableOpacity
                onPress={() => handleSettle(tx.from.id, tx.to.id, tx.amount)}
                style={[styles.markPaidBtn, { borderColor: colors.success }]}
              >
                <Ionicons name="checkmark" size={13} color={colors.success} />
                <Text style={[styles.markPaidText, { color: colors.success }]}>
                  Mark Paid
                </Text>
              </TouchableOpacity>
            </View>
          </AnimatedSection>
        ))
      )}
    </ScrollView>
  );
}

// ─── Members Panel ────────────────────────────────────────────────────────────

function MembersPanel({ colors }: { colors: any }) {
  const { members, removeMember } = useSplit();
  const [showAddMember, setShowAddMember] = useState(false);

  function handleRemove(m: Member) {
    Alert.alert("Remove Person", `Remove ${m.name} from the group?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => removeMember(m.id),
      },
    ]);
  }

  return (
    <View
      style={[
        styles.membersPanel,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={styles.membersPanelHeader}>
        <Text style={[styles.membersPanelTitle, { color: colors.textPrimary }]}>
          Group Members
        </Text>
        <TouchableOpacity
          onPress={() => setShowAddMember(true)}
          style={[styles.addMemberBtn, { backgroundColor: colors.primary }]}
        >
          <Ionicons name="person-add-outline" size={14} color="white" />
          <Text style={styles.addMemberBtnText}>Add</Text>
        </TouchableOpacity>
      </View>

      {members.length === 0 ? (
        <Text style={[styles.emptyHint, { color: colors.textTertiary }]}>
          No people yet. Add someone to get started.
        </Text>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10, paddingVertical: 4 }}
        >
          {members.map((m) => (
            <PressableScale
              key={m.id}
              onLongPress={() => handleRemove(m)}
              style={[
                styles.memberPill,
                {
                  backgroundColor: m.color + "18",
                  borderColor: m.color + "40",
                },
              ]}
            >
              <Avatar member={m} size={26} />
              <Text style={[styles.memberPillText, { color: m.color }]}>
                {m.name}
              </Text>
            </PressableScale>
          ))}
        </ScrollView>
      )}

      <AddMemberModal
        visible={showAddMember}
        onClose={() => setShowAddMember(false)}
        colors={colors}
      />
    </View>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

type SubTab = "bills" | "balances";

export default function SplitsScreen() {
  const colorScheme = useColorScheme();
  const C = Colors[colorScheme ?? "dark"];
  const { prefs } = useApp();
  const currency = prefs.currency;

  const [activeTab, setActiveTab] = useState<SubTab>("bills");
  const [showAddBill, setShowAddBill] = useState(false);
  const { bills } = useSplit();
  const activeBillCount = bills.filter((b) => !b.settled).length;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: C.background }]}>
      {/* Header */}
      <LinearGradient
        colors={["#6C3FEF", "#3C82FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View>
          <Text style={styles.headerTitle}>Split Bills</Text>
          <Text style={styles.headerSub}>
            {activeBillCount > 0
              ? `${activeBillCount} active bill${activeBillCount > 1 ? "s" : ""}`
              : "IOU Tracker"}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowAddBill(true)}
          style={styles.headerAddBtn}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Members Panel */}
      <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
        <MembersPanel colors={C} />
      </View>

      {/* Sub-Tabs */}
      <View
        style={[
          styles.subTabBar,
          { backgroundColor: C.card, borderColor: C.border },
        ]}
      >
        {(["bills", "balances"] as SubTab[]).map((tab) => {
          const active = activeTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.subTab, active && { backgroundColor: C.primary }]}
              activeOpacity={0.8}
            >
              <Ionicons
                name={
                  tab === "bills"
                    ? active
                      ? "receipt"
                      : "receipt-outline"
                    : active
                      ? "people"
                      : "people-outline"
                }
                size={15}
                color={active ? "white" : C.textSecondary}
              />
              <Text
                style={[
                  styles.subTabText,
                  { color: active ? "white" : C.textSecondary },
                ]}
              >
                {tab === "bills" ? "Bills" : "Balances"}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Content */}
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
        {activeTab === "bills" ? (
          <BillsTab colors={C} currency={currency} />
        ) : (
          <BalancesTab colors={C} currency={currency} />
        )}
      </View>

      {/* Add Bill Modal (global, opened from header +) */}
      <AddBillModal
        visible={showAddBill}
        onClose={() => setShowAddBill(false)}
        colors={C}
        currency={currency}
      />
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1 },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  headerTitle: { fontSize: 22, fontWeight: "800", color: "white" },
  headerSub: { fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 2 },
  headerAddBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.22)",
    alignItems: "center",
    justifyContent: "center",
  },

  // Members
  membersPanel: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 12,
    marginBottom: 4,
  },
  membersPanelHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  membersPanelTitle: { fontSize: 14, fontWeight: "700" },
  addMemberBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: Theme.radius.full,
  },
  addMemberBtnText: { color: "white", fontSize: 12, fontWeight: "700" },
  memberPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: Theme.radius.full,
    borderWidth: 1,
  },
  memberPillText: { fontSize: 13, fontWeight: "700" },

  // Sub-tabs
  subTabBar: {
    flexDirection: "row",
    margin: 16,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    padding: 3,
    gap: 3,
  },
  subTab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 8,
    borderRadius: Theme.radius.sm,
  },
  subTabText: { fontSize: 13, fontWeight: "700" },

  // Group headers
  groupHeader: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
    marginBottom: 8,
    marginTop: 4,
  },

  // Bills
  billCard: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
  },
  billCardTop: { flexDirection: "row", alignItems: "flex-start", gap: 10 },
  billIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  billTitle: { fontSize: 15, fontWeight: "700", marginBottom: 2 },
  billMeta: { fontSize: 12 },
  billAmount: { fontSize: 16, fontWeight: "800" },
  billCardMid: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: 6,
  },
  billInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  billInfoLabel: { fontSize: 12, fontWeight: "500" },
  payerRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  payerName: { fontSize: 13, fontWeight: "700" },
  avatarStack: { flexDirection: "row", alignItems: "center" },
  moreAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -8,
  },
  billNote: { fontSize: 12, marginTop: 8, fontStyle: "italic" },
  billActions: { flexDirection: "row", gap: 8, marginTop: 10 },
  billActionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 8,
    borderRadius: Theme.radius.md,
  },
  billActionText: { fontSize: 13, fontWeight: "700" },
  settledBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-start",
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Theme.radius.full,
  },
  settledBadgeText: { fontSize: 11, fontWeight: "700" },

  // Balances
  balanceCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    marginBottom: 8,
  },
  balanceName: { fontSize: 15, fontWeight: "700" },
  balanceStatus: { fontSize: 12, marginTop: 2 },
  balanceAmount: { fontSize: 18, fontWeight: "800" },
  txCard: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
    gap: 10,
  },
  txRow: { flexDirection: "row", alignItems: "center" },
  txText: { fontSize: 14, fontWeight: "500" },
  txAmount: { fontSize: 17, fontWeight: "800", marginTop: 2 },
  markPaidBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 8,
    borderRadius: Theme.radius.md,
    borderWidth: 1.5,
  },
  markPaidText: { fontSize: 13, fontWeight: "700" },
  allSettledBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    marginBottom: 10,
  },
  allSettledText: { fontSize: 16, fontWeight: "800" },

  // Empty state
  emptyState: {
    alignItems: "center",
    paddingVertical: 48,
    paddingHorizontal: 32,
    gap: 12,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: { fontSize: 20, fontWeight: "800" },
  emptySub: { fontSize: 14, textAlign: "center", lineHeight: 22 },
  emptyHint: { fontSize: 13 },

  // Add Member Mini Modal
  centeredOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 32,
  },
  miniModal: {
    width: "100%",
    borderRadius: Theme.radius.xl,
    borderWidth: 1,
    padding: 20,
    gap: 14,
  },
  miniModalTitle: { fontSize: 17, fontWeight: "800", textAlign: "center" },
  miniInput: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  miniModalRow: { flexDirection: "row", gap: 10 },
  miniBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: Theme.radius.md,
    alignItems: "center",
  },

  // Add Bill Big Modal
  overlayBottom: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  bigSheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: "92%",
    overflow: "hidden",
  },
  bigSheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  bigSheetTitle: { fontSize: 18, fontWeight: "800", color: "white" },
  bigSheetClose: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  bigSheetContent: { padding: 20 },
  bigSheetFooter: {
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  addBillBtn: { borderRadius: Theme.radius.md, overflow: "hidden" },
  addBillBtnInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
  },
  addBillBtnText: { color: "white", fontSize: 16, fontWeight: "800" },

  // Form fields
  fieldLabel: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
    marginBottom: 6,
    marginTop: 14,
  },
  fieldInput: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    height: 52,
  },
  currencySign: { fontSize: 18, fontWeight: "800", marginRight: 6 },
  amountInput: { flex: 1, fontSize: 22, fontWeight: "800" },
  modeRow: { flexDirection: "row", gap: 8 },
  modeChip: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 9,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
  },
  modeChipText: { fontSize: 13, fontWeight: "700" },
  memberScroll: { gap: 8, paddingVertical: 4 },
  memberChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: Theme.radius.full,
    borderWidth: 1.5,
  },
  memberChipText: { fontSize: 13, fontWeight: "700" },
  splitWithGrid: { gap: 8 },
  splitMemberRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
  },
  splitMemberName: { fontSize: 14, fontWeight: "600" },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  subInput: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    marginTop: 4,
  },
});
