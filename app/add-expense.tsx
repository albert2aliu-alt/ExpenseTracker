import { Button } from "@/components/Button";
import { CategoryIcon } from "@/components/CategoryIcon";
import { Input } from "@/components/Input";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
    CategorySuggestion,
    recordCategoryCorrection,
    shouldAutoApply,
    suggestCategory,
} from "@/services/categorization";
import {
    getCategorySpentThisMonth,
    getProjectedBudgetWarning,
} from "@/utils/budgetThresholds";
import { CATEGORIES } from "@/utils/categories";
import { convertAmount, formatWithCurrency } from "@/utils/currency";
import { formatCurrency } from "@/utils/formatters";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function getParamValue(
  value: string | string[] | undefined,
): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function isValidDateInput(value: string): boolean {
  return value.trim().length > 0 && !Number.isNaN(new Date(value).getTime());
}

export default function AddExpenseScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    addExpense,
    editExpense,
    deleteExpense,
    expenses,
    prefs,
    categoryBudgets,
    exchangeRates,
    isPremium,
  } = useApp();
  const params = useLocalSearchParams<{
    id?: string;
    scannedTitle?: string;
    scannedAmount?: string;
    scannedDate?: string;
    scannedNote?: string;
  }>();
  const editId = getParamValue(params.id);
  const existing = editId ? expenses.find((e) => e.id === editId) : undefined;

  const [amount, setAmount] = useState(
    getParamValue(params.scannedAmount) ??
      existing?.originalAmount?.toString() ??
      existing?.amount.toString() ??
      "",
  );
  const [expenseCurrency, setExpenseCurrency] = useState(
    existing?.originalCurrency ?? prefs.currency,
  );
  const [title, setTitle] = useState(
    getParamValue(params.scannedTitle) ?? existing?.title ?? "",
  );
  const lastCat = expenses.length > 0 ? expenses[0].category : "food";
  const [category, setCategory] = useState(existing?.category ?? lastCat);
  const [date, setDate] = useState(
    getParamValue(params.scannedDate)
      ? new Date(getParamValue(params.scannedDate)!).toISOString().split("T")[0]
      : existing?.date
        ? new Date(existing.date).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
  );
  const [note, setNote] = useState(
    getParamValue(params.scannedNote) ?? existing?.note ?? "",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [suggestion, setSuggestion] = useState<CategorySuggestion | null>(null);
  const categoryTouched = useRef(Boolean(editId));

  useEffect(() => {
    if (editId || categoryTouched.current) return;
    let cancelled = false;
    const handle = setTimeout(() => {
      void suggestCategory(title, note).then((result) => {
        if (cancelled) return;
        setSuggestion(result);
        if (shouldAutoApply(result)) {
          setCategory(result.categoryKey);
        }
      });
    }, 350);
    return () => {
      cancelled = true;
      clearTimeout(handle);
    };
  }, [title, note, editId]);

  const val = parseFloat(amount);
  const isTravelCurrency =
    prefs.travelMode && isPremium && expenseCurrency !== prefs.currency;
  const convertedHomeAmount = isTravelCurrency
    ? convertAmount(
        Number.isFinite(val) ? val : 0,
        expenseCurrency,
        prefs.currency,
        exchangeRates,
      )
    : val;

  // Budget Logic
  const budget = categoryBudgets[category];
  const spentThisMonth = getCategorySpentThisMonth(expenses, category, editId);
  const budgetWarningResult =
    budget && budget > 0
      ? getProjectedBudgetWarning(
          spentThisMonth,
          budget,
          isNaN(convertedHomeAmount) ? 0 : convertedHomeAmount,
          prefs.currency,
          formatCurrency,
        )
      : null;
  const budgetWarning = budgetWarningResult?.message ?? null;
  const isOverBudget = budgetWarningResult?.isOverBudget ?? false;

  function validate() {
    const e: Record<string, string> = {};
    if (isNaN(val) || val <= 0) e.amount = "Enter a valid amount";
    if (!title.trim()) e.title = "Title is required";
    if (!isValidDateInput(date)) e.date = "Enter a valid date";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) {
      if (prefs.haptics)
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(
          () => {},
        );
      return;
    }
    const data = {
      title: title.trim(),
      amount: isTravelCurrency ? convertedHomeAmount : parseFloat(amount),
      category,
      date: new Date(date).toISOString(),
      note,
      isTravelExpense: prefs.travelMode && isPremium,
      originalAmount:
        prefs.travelMode && isPremium ? parseFloat(amount) : undefined,
      originalCurrency:
        prefs.travelMode && isPremium ? expenseCurrency : undefined,
      convertedAmount:
        prefs.travelMode && isPremium
          ? isTravelCurrency
            ? convertedHomeAmount
            : parseFloat(amount)
          : undefined,
      convertedCurrency:
        prefs.travelMode && isPremium ? prefs.currency : undefined,
      exchangeRateAtPurchase:
        isTravelCurrency && val > 0 ? convertedHomeAmount / val : undefined,
    };
    if (editId) {
      editExpense(editId, data);
    } else {
      addExpense(data);
    }
    // On-device learning from final category choice (never leaves device)
    void recordCategoryCorrection(data.title, data.note, data.category);
    if (prefs.haptics)
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(
        () => {},
      );
    router.back();
  }

  function handleDelete() {
    Alert.alert(
      "Delete Expense",
      "Are you sure you want to delete this expense?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteExpense(editId!);
            router.back();
          },
        },
      ],
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 8 : 0}
      >
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.closeBtn}
          >
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
            {editId ? "Edit Expense" : "Add Expense"}
          </Text>
          {editId ? (
            <TouchableOpacity
              onPress={handleDelete}
              style={[styles.closeBtn, { backgroundColor: colors.dangerLight }]}
            >
              <Ionicons name="trash-outline" size={20} color={colors.danger} />
            </TouchableOpacity>
          ) : (
            <View style={styles.closeBtn} />
          )}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.form}
        >
          {!editId && Platform.OS !== "web" && (
            <TouchableOpacity
              onPress={() => router.push("/receipt-scanner" as never)}
              style={[
                styles.scanBtn,
                {
                  backgroundColor: colors.primary + "18",
                  borderColor: colors.primary,
                },
              ]}
            >
              <Ionicons name="camera" size={20} color={colors.primary} />
              <Text style={[styles.scanBtnText, { color: colors.primary }]}>
                Scan Receipt
              </Text>
            </TouchableOpacity>
          )}

          {/* Amount */}
          <View
            style={[
              styles.amountCard,
              {
                backgroundColor: colors.primary + "12",
                borderColor: colors.primary + "30",
              },
            ]}
          >
            <Text style={[styles.amountPre, { color: colors.primary }]}>
              {formatCurrency(0, expenseCurrency).replace(/[0-9.,\s]/g, "")}
            </Text>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              placeholder="0.00"
              placeholderTextColor={colors.textTertiary}
              style={[styles.amountInput, { color: colors.textPrimary }]}
              selectionColor={colors.primary}
              cursorColor={colors.primary}
              textContentType="none"
              autoFocus={true}
            />
            {errors.amount ? (
              <Text style={[styles.amountError, { color: colors.danger }]}>
                {errors.amount}
              </Text>
            ) : null}
          </View>

          {prefs.travelMode &&
            (isPremium ? (
              <View
                style={[
                  styles.travelBox,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
              >
                <View style={styles.travelHeader}>
                  <View style={styles.travelTitleRow}>
                    <Ionicons
                      name="airplane-outline"
                      size={16}
                      color="#4ECDC4"
                    />
                    <Text
                      style={[
                        styles.travelTitle,
                        { color: colors.textPrimary },
                      ]}
                    >
                      Traveling?
                    </Text>
                  </View>
                  {isTravelCurrency && (
                    <Text
                      style={[
                        styles.convertedText,
                        { color: colors.textSecondary },
                      ]}
                    >
                      {formatWithCurrency(
                        convertedHomeAmount || 0,
                        prefs.currency,
                      )}
                    </Text>
                  )}
                </View>
                <View style={styles.currencyToggle}>
                  {[prefs.currency, prefs.travelCurrency].map((currency) => {
                    const active = expenseCurrency === currency;
                    return (
                      <TouchableOpacity
                        key={currency}
                        onPress={() => setExpenseCurrency(currency)}
                        style={[
                          styles.currencyBtn,
                          {
                            backgroundColor: active
                              ? colors.primary
                              : colors.inputBg,
                            borderColor: active
                              ? colors.primary
                              : colors.border,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.currencyText,
                            { color: active ? "#fff" : colors.textPrimary },
                          ]}
                        >
                          {currency}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => router.push("/premium" as never)}
                style={[
                  styles.lockedTravelBox,
                  {
                    backgroundColor: colors.inputBg,
                    borderColor: colors.border,
                  },
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={16}
                  color={colors.primary}
                />
                <Text
                  style={[
                    styles.lockedTravelText,
                    { color: colors.textPrimary },
                  ]}
                >
                  Premium unlocks travel currency entry
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={colors.textTertiary}
                />
              </TouchableOpacity>
            ))}

          {prefs.budgetAlerts && budgetWarning && (
            <View
              style={[
                styles.warningBox,
                {
                  backgroundColor: isOverBudget
                    ? colors.dangerLight
                    : colors.warningLight,
                },
              ]}
            >
              <Ionicons
                name="warning"
                size={16}
                color={isOverBudget ? colors.danger : colors.warning}
              />
              <Text
                style={[
                  styles.warningText,
                  { color: isOverBudget ? colors.danger : colors.warning },
                ]}
              >
                {budgetWarning}
              </Text>
            </View>
          )}

          <Input
            label="Title"
            value={title}
            onChangeText={setTitle}
            placeholder="e.g. Lunch at café"
            error={errors.title}
          />
          <Input
            label="Date"
            value={date}
            onChangeText={setDate}
            placeholder="YYYY-MM-DD"
            error={errors.date}
          />
          <Input
            label="Note (optional)"
            value={note}
            onChangeText={setNote}
            placeholder="Add a note..."
            multiline
            style={{ height: 72, textAlignVertical: "top" }}
          />

          {/* Category Picker */}
          <Text style={[styles.catLabel, { color: colors.textSecondary }]}>
            Category
          </Text>
          {suggestion && suggestion.confidence >= 0.4 && !editId && (
            <TouchableOpacity
              accessibilityLabel={`Suggested category ${suggestion.label}`}
              onPress={() => {
                categoryTouched.current = true;
                setCategory(suggestion.categoryKey);
              }}
              style={[
                styles.suggestChip,
                {
                  backgroundColor: colors.primary + "18",
                  borderColor: colors.primary,
                },
              ]}
            >
              <Ionicons
                name="sparkles-outline"
                size={14}
                color={colors.primary}
              />
              <Text style={[styles.suggestText, { color: colors.primary }]}>
                Suggest {suggestion.label} ·{" "}
                {Math.round(suggestion.confidence * 100)}% · on-device
              </Text>
            </TouchableOpacity>
          )}
          <View style={styles.catGrid}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.key}
                onPress={() => {
                  categoryTouched.current = true;
                  setCategory(cat.key);
                }}
                accessibilityLabel={`Category ${cat.label}`}
                style={[
                  styles.catBtn,
                  {
                    backgroundColor:
                      category === cat.key ? cat.color + "22" : colors.card,
                    borderColor:
                      category === cat.key ? cat.color : colors.border,
                    borderWidth: category === cat.key ? 2 : 1,
                  },
                ]}
              >
                <CategoryIcon category={cat.key} size={36} />
                <Text
                  style={[
                    styles.catName,
                    {
                      color:
                        category === cat.key ? cat.color : colors.textSecondary,
                    },
                  ]}
                  numberOfLines={1}
                >
                  {cat.label.split(" ")[0]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button
            title={editId ? "Save Changes" : "Add Expense"}
            onPress={handleSave}
            style={{ marginTop: 8 }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Theme.spacing.md,
    paddingTop: Platform.OS === "android" ? 10 : Theme.spacing.md,
    paddingBottom: Theme.spacing.md,
    borderBottomWidth: 1,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 17, fontWeight: "700" },
  form: { padding: Theme.spacing.md, paddingBottom: 40, gap: 4 },
  amountCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
  },
  amountPre: { fontSize: 32, fontWeight: "800", marginRight: 4 },
  amountInput: {
    fontSize: 32,
    fontWeight: "800",
    flex: 1,
    minWidth: 0,
    padding: 0,
  },
  amountError: { position: "absolute", left: 12, bottom: -20, fontSize: 12 },
  scanBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 16,
    gap: 8,
  },
  scanBtnText: {
    fontSize: 16,
    fontWeight: "700",
  },
  warningBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: Theme.radius.md,
    marginBottom: 16,
    gap: 8,
  },
  warningText: { fontSize: 13, fontWeight: "600", flex: 1 },
  travelBox: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: 12,
    marginBottom: 16,
    gap: 10,
  },
  travelHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  travelTitleRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  travelTitle: { fontSize: 14, fontWeight: "700" },
  convertedText: { fontSize: 12, fontWeight: "700" },
  currencyToggle: { flexDirection: "row", gap: 8 },
  currencyBtn: {
    flex: 1,
    minHeight: 42,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.md,
  },
  currencyText: { fontSize: 14, fontWeight: "800" },
  lockedTravelBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  lockedTravelText: { flex: 1, fontSize: 13, fontWeight: "700" },
  catLabel: { fontSize: 13, fontWeight: "500", marginBottom: 8 },
  suggestChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: Theme.radius.full,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  suggestText: { fontSize: 12, fontWeight: "700" },
  catGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 },
  catBtn: {
    width: "18%",
    alignItems: "center",
    padding: 8,
    borderRadius: Theme.radius.md,
    gap: 4,
  },
  catName: { fontSize: 9, textAlign: "center", fontWeight: "600" },
});
