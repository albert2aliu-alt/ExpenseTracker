import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import PressableScale from "@/components/PressableScale";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useSharedWallet } from "@/context/SharedWalletContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { getCategoryByKey } from "@/utils/categories";
import { formatCurrency } from "@/utils/formatters";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useMemo, useState } from "react";
import {
    Alert,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FamilyWalletScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    wallet,
    cloudEnabled,
    createWallet,
    addMember,
    addSharedTransaction,
    clearEditedElsewhere,
  } = useSharedWallet();
  const { cards, addCard, updateCardBalance, deleteCard, prefs } = useApp();

  const [walletName, setWalletName] = useState("Family Wallet");
  const [ownerName, setOwnerName] = useState("Me");
  const [memberName, setMemberName] = useState("");
  const [txTitle, setTxTitle] = useState("");
  const [txAmount, setTxAmount] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardBalance, setCardBalance] = useState("");
  const [cardType, setCardType] = useState<"debit" | "credit" | "cash">(
    "debit",
  );
  const [editingCard, setEditingCard] = useState<{
    id: string;
    balance: string;
  } | null>(null);

  const sharedTotal = useMemo(
    () => wallet?.transactions.reduce((s, t) => s + t.amount, 0) ?? 0,
    [wallet?.transactions],
  );
  const cardsTotal = useMemo(
    () => cards.reduce((sum, card) => sum + card.balance, 0),
    [cards],
  );

  function handleCreate() {
    createWallet(walletName, ownerName);
  }

  function handleAddMember() {
    if (!memberName.trim()) {
      Alert.alert("Name required", "Enter a member display name.");
      return;
    }
    addMember(memberName, "editor");
    setMemberName("");
  }

  function handleAddTx() {
    const amount = Number.parseFloat(txAmount);
    if (!txTitle.trim() || !Number.isFinite(amount) || amount <= 0) {
      Alert.alert(
        "Invalid transaction",
        "Enter a title and amount greater than zero.",
      );
      return;
    }
    const owner = wallet?.members.find((m) => m.role === "owner");
    addSharedTransaction({
      title: txTitle.trim(),
      amount,
      category: "other",
      date: new Date().toISOString(),
      createdBy: owner?.id ?? "local",
    });
    setTxTitle("");
    setTxAmount("");
  }

  function handleAddCard() {
    const balance = Number.parseFloat(cardBalance);
    if (!cardName.trim() || !Number.isFinite(balance) || balance < 0) {
      Alert.alert(
        "Invalid card",
        "Enter a card name and a balance of zero or more.",
      );
      return;
    }
    addCard({ name: cardName.trim(), balance, type: cardType });
    setCardName("");
    setCardBalance("");
  }

  function handleEditCard(cardId: string, currentBalance: number) {
    setEditingCard({ id: cardId, balance: String(currentBalance) });
  }

  function handleSaveCardBalance() {
    if (!editingCard) return;
    const balance = Number.parseFloat(editingCard.balance);
    if (!Number.isFinite(balance) || balance < 0) {
      Alert.alert("Invalid balance", "Enter a balance of zero or more.");
      return;
    }
    updateCardBalance(editingCard.id, balance);
    setEditingCard(null);
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <AnimatedSection delay={0} distance={-20}>
          <PageHeader
            eyebrow="Shared"
            title="Family Wallet"
            value={
              wallet ? (
                <AnimatedNumber
                  value={sharedTotal}
                  format={(n) => formatCurrency(n)}
                  style={{
                    fontSize: 22,
                    fontWeight: "800",
                    color: colors.danger,
                    letterSpacing: -0.5,
                  }}
                />
              ) : undefined
            }
            subtitle={
              cloudEnabled
                ? "Cloud sync on · personal expenses stay private"
                : "Local-only · personal expenses stay private"
            }
          />
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <View
            style={[
              styles.card,
              { backgroundColor: colors.card, borderColor: colors.cardBorder },
            ]}
          >
            <View style={styles.cardSectionHeader}>
              <View>
                <Text style={[styles.section, { color: colors.textPrimary }]}>
                  My Cards
                </Text>
                <Text style={[styles.meta, { color: colors.textSecondary }]}>
                  Money currently available
                </Text>
              </View>
              <Text style={[styles.cardsTotal, { color: colors.primary }]}>
                {formatCurrency(cardsTotal, prefs.currency)}
              </Text>
            </View>

            {cards.length === 0 ? (
              <Text style={[styles.emptyHint, { color: colors.textSecondary }]}>
                Add your bank, debit, credit, or cash balance below.
              </Text>
            ) : (
              cards.map((card) => (
                <View
                  key={card.id}
                  style={[
                    styles.moneyCard,
                    {
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.moneyCardIcon,
                      { backgroundColor: colors.primary + "18" },
                    ]}
                  >
                    <Ionicons
                      name={
                        card.type === "cash" ? "cash-outline" : "card-outline"
                      }
                      size={20}
                      color={colors.primary}
                    />
                  </View>
                  <View style={styles.moneyCardInfo}>
                    <Text
                      style={[
                        styles.moneyCardName,
                        { color: colors.textPrimary },
                      ]}
                    >
                      {card.name}
                    </Text>
                    <Text
                      style={[styles.meta, { color: colors.textSecondary }]}
                    >
                      {card.type}
                    </Text>
                  </View>
                  <View style={styles.moneyCardActions}>
                    <Text
                      style={[
                        styles.moneyCardBalance,
                        { color: colors.textPrimary },
                      ]}
                    >
                      {formatCurrency(card.balance, prefs.currency)}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleEditCard(card.id, card.balance)}
                      accessibilityLabel={`Update ${card.name} balance`}
                    >
                      <Ionicons
                        name="create-outline"
                        size={18}
                        color={colors.primary}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteCard(card.id)}
                      accessibilityLabel={`Delete ${card.name}`}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={18}
                        color={colors.danger}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}

            <Text style={[styles.label, { color: colors.textSecondary }]}>
              Add a card or account
            </Text>
            <Input
              label="Name"
              value={cardName}
              onChangeText={setCardName}
              placeholder="e.g. Main bank card"
            />
            <Input
              label="Current balance"
              value={cardBalance}
              onChangeText={setCardBalance}
              keyboardType="decimal-pad"
              placeholder="0.00"
            />
            <View style={styles.typeRow}>
              {(["debit", "credit", "cash"] as const).map((type) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => setCardType(type)}
                  style={[
                    styles.typeChip,
                    {
                      backgroundColor:
                        cardType === type ? colors.primary : colors.inputBg,
                      borderColor:
                        cardType === type ? colors.primary : colors.border,
                    },
                  ]}
                >
                  <Text
                    style={{
                      color:
                        cardType === type ? "#FFFFFF" : colors.textSecondary,
                      fontWeight: "700",
                      fontSize: 12,
                    }}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Button title="Add card balance" onPress={handleAddCard} />
          </View>
        </AnimatedSection>

        {!wallet ? (
          <AnimatedSection delay={100}>
            <View
              style={[
                styles.card,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.cardBorder,
                },
              ]}
            >
              <Text style={[styles.section, { color: colors.textPrimary }]}>
                Create shared wallet
              </Text>
              <Input
                label="Wallet name"
                value={walletName}
                onChangeText={setWalletName}
              />
              <Input
                label="Your name"
                value={ownerName}
                onChangeText={setOwnerName}
              />
              <Button title="Create wallet" onPress={handleCreate} />
            </View>
          </AnimatedSection>
        ) : (
          <>
            <AnimatedSection delay={100}>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: colors.card,
                    borderColor: colors.cardBorder,
                  },
                ]}
              >
                <Text style={[styles.section, { color: colors.textPrimary }]}>
                  {wallet.name}
                </Text>
                <Text style={[styles.meta, { color: colors.textSecondary }]}>
                  {wallet.members.length} members · {wallet.transactions.length}{" "}
                  shared txs
                </Text>

                <Text style={[styles.label, { color: colors.textSecondary }]}>
                  Members
                </Text>
                {wallet.members.map((m) => (
                  <View key={m.id} style={styles.row}>
                    <Ionicons
                      name="person-outline"
                      size={16}
                      color={colors.textSecondary}
                    />
                    <Text
                      style={[styles.rowText, { color: colors.textPrimary }]}
                    >
                      {m.displayName} · {m.role}
                    </Text>
                  </View>
                ))}
                <Input
                  label="Add member"
                  value={memberName}
                  onChangeText={setMemberName}
                  placeholder="Name"
                />
                <Button
                  title="Invite as editor"
                  onPress={handleAddMember}
                  variant="secondary"
                />
              </View>
            </AnimatedSection>

            <AnimatedSection delay={180}>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: colors.card,
                    borderColor: colors.cardBorder,
                  },
                ]}
              >
                <Text style={[styles.section, { color: colors.textPrimary }]}>
                  Add shared expense
                </Text>
                <Input
                  label="Title"
                  value={txTitle}
                  onChangeText={setTxTitle}
                />
                <Input
                  label="Amount"
                  value={txAmount}
                  onChangeText={setTxAmount}
                  keyboardType="decimal-pad"
                />
                <Button title="Add to shared wallet" onPress={handleAddTx} />
              </View>
            </AnimatedSection>

            <AnimatedSection delay={260}>
              <Text
                style={[styles.activityTitle, { color: colors.textPrimary }]}
              >
                Shared activity
              </Text>
            </AnimatedSection>

            {wallet.transactions.length === 0 ? (
              <AnimatedSection delay={300}>
                <Text
                  style={[styles.emptyHint, { color: colors.textSecondary }]}
                >
                  No shared transactions yet.
                </Text>
              </AnimatedSection>
            ) : (
              wallet.transactions.map((tx, idx) => {
                const cat = getCategoryByKey(tx.category);
                return (
                  <AnimatedSection
                    key={tx.id}
                    delay={300 + idx * 50}
                    distance={15}
                  >
                    <PressableScale
                      accessibilityLabel={`${tx.title}, ${formatCurrency(tx.amount)}`}
                      onPress={() =>
                        tx.editedElsewhere && clearEditedElsewhere(tx.id)
                      }
                      style={[
                        styles.tx,
                        {
                          backgroundColor: colors.card,
                          borderColor: tx.editedElsewhere
                            ? colors.warning
                            : colors.cardBorder,
                        },
                      ]}
                    >
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.txTitle,
                            { color: colors.textPrimary },
                          ]}
                        >
                          {tx.title}
                        </Text>
                        <Text
                          style={{
                            color: colors.textSecondary,
                            fontSize: Theme.fontSize.sm,
                          }}
                        >
                          {cat.label}
                          {tx.editedElsewhere
                            ? " · Edited elsewhere — tap to dismiss"
                            : ""}
                        </Text>
                      </View>
                      <Text style={{ color: colors.danger, fontWeight: "700" }}>
                        -{formatCurrency(tx.amount)}
                      </Text>
                    </PressableScale>
                  </AnimatedSection>
                );
              })
            )}
          </>
        )}
      </ScrollView>
      <Modal
        visible={editingCard !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setEditingCard(null)}
      >
        <View style={styles.modalBackdrop}>
          <View
            style={[
              styles.editModal,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <Text style={[styles.section, { color: colors.textPrimary }]}>
              Update card balance
            </Text>
            <Input
              label="Current balance"
              value={editingCard?.balance ?? ""}
              onChangeText={(balance) =>
                setEditingCard((current) =>
                  current ? { ...current, balance } : current,
                )
              }
              keyboardType="decimal-pad"
              autoFocus
            />
            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                variant="secondary"
                onPress={() => setEditingCard(null)}
              />
              <Button title="Save balance" onPress={handleSaveCardBalance} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 48, gap: Theme.spacing.md },
  card: {
    marginHorizontal: Theme.spacing.md,
    borderWidth: 1,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.md,
    gap: Theme.spacing.sm,
  },
  cardSectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Theme.spacing.sm,
  },
  cardsTotal: { fontSize: 20, fontWeight: Theme.fontWeight.extraBold },
  moneyCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: Theme.spacing.sm,
    gap: Theme.spacing.sm,
  },
  moneyCardIcon: {
    width: 40,
    height: 40,
    borderRadius: Theme.radius.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  moneyCardInfo: { flex: 1 },
  moneyCardName: {
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.semiBold,
  },
  moneyCardActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: Theme.spacing.sm,
  },
  moneyCardBalance: {
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.bold,
  },
  typeRow: {
    flexDirection: "row",
    gap: Theme.spacing.sm,
    marginBottom: Theme.spacing.sm,
  },
  typeChip: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.sm,
    paddingVertical: 10,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
    padding: Theme.spacing.md,
  },
  editModal: {
    width: "100%",
    maxWidth: 420,
    borderWidth: 1,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.md,
    gap: Theme.spacing.sm,
  },
  modalButtons: { flexDirection: "row", gap: Theme.spacing.sm },
  section: {
    fontSize: Theme.fontSize.lg,
    fontWeight: Theme.fontWeight.bold,
  },
  activityTitle: {
    marginHorizontal: Theme.spacing.md,
    fontSize: Theme.fontSize.lg,
    fontWeight: Theme.fontWeight.bold,
  },
  emptyHint: {
    marginHorizontal: Theme.spacing.md,
    fontSize: Theme.fontSize.sm,
  },
  meta: { fontSize: Theme.fontSize.sm },
  label: {
    fontSize: Theme.fontSize.xs,
    fontWeight: Theme.fontWeight.semiBold,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
  rowText: { fontSize: Theme.fontSize.md },
  tx: {
    marginHorizontal: Theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.sm,
    gap: Theme.spacing.sm,
  },
  txTitle: {
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.semiBold,
  },
});
