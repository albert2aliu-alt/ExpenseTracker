// Dashboard screen with reordered layout and animations
import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedSection from "@/components/AnimatedSection";
import { BalanceCard } from "@/components/BalanceCard";
import { BiometricGate } from "@/components/BiometricGate";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { DisciplineStreakCard } from "@/components/DisciplineStreakCard";
import { ExpenseItem } from "@/components/ExpenseItem";
import { FinancialHealthCard } from "@/components/FinancialHealthCard";
import { PageHeader } from "@/components/PageHeader";
import { SafeTodayTile } from "@/components/SafeTodayTile";
import { SafeToSpendCard } from "@/components/SafeToSpendCard";
import { SpendingForecast } from "@/components/SpendingForecast";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { BiometricService } from "@/services/biometric";
import { getBalance, getTotalExpenses } from "@/utils/calculations";
import { convertAmount, formatWithCurrency } from "@/utils/currency";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
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

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    expenses,
    subscriptions,
    savingGoals,
    income,
    streak,
    discipline,
    setIncome,
    deleteExpense,
    prefs,
    categoryBudgets,
    exchangeRates,
    ratesUpdatedAt,
    refreshExchangeRates,
    isPremium,
  } = useApp();
  const { currentUser } = useAuth();
  const [incomeModal, setIncomeModal] = useState(false);
  const [incomeInput, setIncomeInput] = useState(String(income));
  const [converterInput, setConverterInput] = useState("");

  const totalExpenses = useMemo(() => getTotalExpenses(expenses), [expenses]);
  const balance = useMemo(
    () => getBalance(income, expenses),
    [income, expenses],
  );
  const recentExpenses = expenses.slice(0, 5);
  const totalSaved = savingGoals.reduce(
    (sum, goal) => sum + goal.currentAmount,
    0,
  );
  const budgetAllocated = Object.values(categoryBudgets).reduce(
    (sum, amount) => sum + amount,
    0,
  );

  const now = new Date();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
  const daysRemaining = Math.max(1, daysInMonth - now.getDate() + 1);
  const safeToSpend = Math.max(
    0,
    (income - totalExpenses - totalSaved) / daysRemaining,
  );
  const budgetLeft = Math.max(0, income - totalExpenses - budgetAllocated);
  const spendPercentage =
    income > 0 ? Math.min((totalExpenses / income) * 100, 100) : 0;
  const travelExpenses = expenses.filter((expense) => expense.isTravelExpense);
  const travelSpentHome = travelExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );
  const travelSpentOriginal = travelExpenses
    .filter((expense) => expense.originalCurrency === prefs.travelCurrency)
    .reduce((sum, expense) => sum + (expense.originalAmount ?? 0), 0);

  function handleSaveIncome() {
    const value = Number.parseFloat(incomeInput);
    if (!Number.isFinite(value) || value <= 0) {
      Alert.alert(
        "Invalid income",
        "Please enter a monthly income greater than zero.",
      );
      return;
    }
    setIncome(value);
    setIncomeModal(false);
  }

  async function handleEnableBiometrics() {
    const available = await BiometricService.isBiometricAvailable();
    if (!available) {
      Alert.alert(
        "Biometrics unavailable",
        "This device does not report Face ID or fingerprint support.",
      );
      return;
    }
    const enabled = await BiometricService.enableBiometric();
    Alert.alert(
      enabled ? "Biometrics enabled" : "Authentication cancelled",
      enabled
        ? "The dashboard will request biometric unlock on future launches."
        : "Biometric protection was not turned on.",
    );
  }

  function confirmDeleteExpense(id: string) {
    Alert.alert(
      "Delete expense?",
      "This transaction will be removed from your records.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteExpense(id),
        },
      ],
    );
  }

  return (
    <BiometricGate title="Unlock Expense Tracker">
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.background }]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {/* Header slides in from top */}
          <AnimatedSection delay={0} distance={-20}>
            <PageHeader
              eyebrow={`Good ${getGreeting()}`}
              title={currentUser ? `@${currentUser.username}` : "My Finance"}
              right={
                <View style={styles.headerRight}>
                  {streak > 0 && (
                    <View
                      style={[
                        styles.streak,
                        { backgroundColor: colors.warningLight },
                      ]}
                    >
                      <Ionicons name="flame" size={14} color={colors.warning} />
                      <Text
                        style={[styles.streakText, { color: colors.warning }]}
                      >
                        {streak}
                      </Text>
                    </View>
                  )}
                  <TouchableOpacity
                    accessibilityLabel="Enable biometric lock"
                    onPress={handleEnableBiometrics}
                    style={[
                      styles.iconBtn,
                      {
                        backgroundColor: colors.card,
                        borderColor: colors.border,
                      },
                    ]}
                  >
                    <Ionicons
                      name="finger-print-outline"
                      size={20}
                      color={colors.textSecondary}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    accessibilityLabel="Set monthly income"
                    onPress={() => setIncomeModal(true)}
                    style={[
                      styles.iconBtn,
                      {
                        backgroundColor: colors.card,
                        borderColor: colors.border,
                      },
                    ]}
                  >
                    <Ionicons
                      name="cash-outline"
                      size={20}
                      color={colors.textSecondary}
                    />
                  </TouchableOpacity>
                </View>
              }
            />
          </AnimatedSection>

          {/* Balance card */}
          <AnimatedSection delay={80}>
            <BalanceCard
              balance={balance}
              income={income}
              totalExpenses={totalExpenses}
            />
          </AnimatedSection>
          {/* Discipline + Safe Today */}
          <AnimatedSection delay={160}>
            <View style={styles.duoRow}>
              <DisciplineStreakCard
                discipline={discipline}
                legacyStreak={streak}
                compact
              />
              <SafeTodayTile
                safeToSpend={safeToSpend}
                daysRemaining={daysRemaining}
                currency={prefs.currency}
                spendPercentage={spendPercentage}
              />
            </View>
          </AnimatedSection>

          {/* Summary row with count-up numbers */}
          <AnimatedSection delay={240}>
            <View style={styles.summaryRow}>
              {[
                { label: "Income", value: income, color: colors.primary },
                { label: "Spent", value: totalExpenses, color: colors.danger },
                { label: "Saved", value: totalSaved, color: colors.success },
              ].map((item, idx) => (
                <Card
                  key={item.label}
                  style={styles.summaryCard}
                  variant="elevated"
                >
                  <AnimatedNumber
                    value={item.value}
                    format={(n) => formatCurrency(n, prefs.currency)}
                    style={[styles.statValue, { color: item.color }]}
                    duration={900}
                    delay={idx * 80}
                  />
                  <Text
                    style={[styles.statLabel, { color: colors.textSecondary }]}
                  >
                    {item.label}
                  </Text>
                </Card>
              ))}
            </View>
          </AnimatedSection>

          {/* Quick actions */}
          <AnimatedSection delay={320}>
            <View style={styles.quickActions}>
              <DashboardAction
                icon="add"
                label="Expense"
                color={colors.danger}
                backgroundColor={colors.dangerLight}
                onPress={() => router.push("/add-expense")}
              />
              {Platform.OS !== "web" && (
                <DashboardAction
                  icon="camera-outline"
                  label="Scan"
                  color={colors.primary}
                  backgroundColor={colors.primary + "18"}
                  onPress={() => router.push("/receipt-scanner" as never)}
                />
              )}
              <DashboardAction
                icon="trending-up"
                label="Goal"
                color={colors.success}
                backgroundColor={colors.successLight}
                onPress={() => router.push("/add-saving")}
              />
            </View>
          </AnimatedSection>

          {/* Insight chips (budget left, saved) */}
          <View style={styles.insightRow}>
            <View
              style={[
                styles.insightChip,
                { backgroundColor: colors.successLight },
              ]}
            >
              <Ionicons
                name="shield-checkmark"
                size={14}
                color={colors.success}
              />
              <Text style={[styles.insightText, { color: colors.success }]}>
                {formatCurrency(budgetLeft, prefs.currency)} left
              </Text>
            </View>
            <View
              style={[
                styles.insightChip,
                { backgroundColor: colors.primary + "18" },
              ]}
            >
              <Ionicons name="wallet" size={14} color={colors.primary} />
              <Text style={[styles.insightText, { color: colors.primary }]}>
                {formatCurrency(totalSaved, prefs.currency)} saved
              </Text>
            </View>
          </View>

          <FinancialHealthCard
            expenses={expenses}
            subscriptions={subscriptions}
            savingGoals={savingGoals}
            income={income}
            categoryBudgets={categoryBudgets}
            currency={prefs.currency}
          />

          <SafeToSpendCard
            income={income}
            totalExpenses={totalExpenses}
            totalSaved={totalSaved}
            safeToSpend={safeToSpend}
            daysRemaining={daysRemaining}
            currency={prefs.currency}
          />

          {prefs.travelMode && !isPremium && (
            <TouchableOpacity
              onPress={() => router.push("/premium" as never)}
              style={[
                styles.travelLockedCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
              activeOpacity={0.78}
            >
              <View
                style={[
                  styles.travelLockIcon,
                  { backgroundColor: colors.primary + "18" },
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color={colors.primary}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.travelLockedTitle,
                    { color: colors.textPrimary },
                  ]}
                >
                  Travel Mode Active
                </Text>
                <Text
                  style={[
                    styles.travelLockedDesc,
                    { color: colors.textSecondary },
                  ]}
                >
                  Premium unlocks converter, trip budgets, and travel summaries.
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={colors.textTertiary}
              />
            </TouchableOpacity>
          )}

          {/* Travel Mode Converter Card */}
          {prefs.travelMode &&
            isPremium &&
            Object.keys(exchangeRates).length > 0 && (
              <View
                style={[
                  styles.travelCard,
                  { backgroundColor: "#4ECDC415", borderColor: "#4ECDC440" },
                ]}
              >
                <View style={styles.travelCardHeader}>
                  <View style={styles.travelBadge}>
                    <Ionicons name="airplane" size={14} color="#4ECDC4" />
                    <Text
                      style={[styles.travelBadgeText, { color: "#4ECDC4" }]}
                    >
                      Travel Mode Active
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={refreshExchangeRates}
                    style={styles.refreshRateBtn}
                  >
                    <Ionicons name="refresh" size={15} color="#4ECDC4" />
                    <Text style={[styles.travelRate, { color: "#4ECDC4" }]}>
                      1 {prefs.currency} ={" "}
                      {(
                        exchangeRates[prefs.travelCurrency] /
                        exchangeRates[prefs.currency]
                      ).toFixed(4)}{" "}
                      {prefs.travelCurrency}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.travelConverterRow}>
                  <View
                    style={[
                      styles.travelInput,
                      {
                        backgroundColor: colors.inputBg,
                        borderColor: colors.border,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color: colors.textSecondary,
                        fontSize: 12,
                        fontWeight: "600",
                      }}
                    >
                      {prefs.currency}
                    </Text>
                    <TextInput
                      value={converterInput}
                      onChangeText={setConverterInput}
                      keyboardType="decimal-pad"
                      placeholder="0.00"
                      placeholderTextColor={colors.textTertiary}
                      style={[
                        styles.travelInputText,
                        { color: colors.textPrimary },
                      ]}
                    />
                  </View>
                  <Ionicons name="swap-horizontal" size={20} color="#4ECDC4" />
                  <View
                    style={[
                      styles.travelInput,
                      {
                        backgroundColor: "#4ECDC410",
                        borderColor: "#4ECDC440",
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color: "#4ECDC4",
                        fontSize: 12,
                        fontWeight: "600",
                      }}
                    >
                      {prefs.travelCurrency}
                    </Text>
                    <Text
                      style={[
                        styles.travelInputText,
                        { color: "#4ECDC4", fontWeight: "800" },
                      ]}
                    >
                      {converterInput
                        ? formatWithCurrency(
                            convertAmount(
                              parseFloat(converterInput) || 0,
                              prefs.currency,
                              prefs.travelCurrency,
                              exchangeRates,
                            ),
                            prefs.travelCurrency,
                          )
                        : "—"}
                    </Text>
                  </View>
                </View>
                {ratesUpdatedAt && (
                  <Text
                    style={[
                      styles.travelUpdated,
                      { color: colors.textTertiary },
                    ]}
                  >
                    Rates updated:{" "}
                    {new Date(ratesUpdatedAt).toLocaleDateString()}
                  </Text>
                )}
              </View>
            )}

          {prefs.travelMode && isPremium && prefs.tripBudget > 0 && (
            <View
              style={[
                styles.tripBudgetCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <View style={styles.tripBudgetHeader}>
                <View>
                  <Text
                    style={[
                      styles.tripBudgetTitle,
                      { color: colors.textPrimary },
                    ]}
                  >
                    Trip Budget
                  </Text>
                  <Text
                    style={[
                      styles.tripBudgetSub,
                      { color: colors.textSecondary },
                    ]}
                  >
                    {" "}
                    {formatWithCurrency(
                      travelSpentOriginal,
                      prefs.travelCurrency,
                    )}{" "}
                    of{" "}
                    {formatWithCurrency(prefs.tripBudget, prefs.travelCurrency)}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.tripBudgetHome,
                    { color: colors.textSecondary },
                  ]}
                >
                  {formatCurrency(travelSpentHome, prefs.currency)}
                </Text>
              </View>
              <View
                style={[
                  styles.tripProgressTrack,
                  { backgroundColor: colors.border },
                ]}
              >
                <View
                  style={[
                    styles.tripProgressFill,
                    {
                      width: `${(travelSpentOriginal / prefs.tripBudget) * 100}%`,
                      backgroundColor:
                        travelSpentOriginal / prefs.tripBudget > 0.9
                          ? colors.danger
                          : "#4ECDC4",
                    },
                  ]}
                />
              </View>
            </View>
          )}

          <AnimatedSection delay={400}>
            <SpendingForecast
              expenses={expenses}
              income={income}
              currency={prefs.currency}
            />
          </AnimatedSection>

          <AnimatedSection delay={480}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text
                  style={[styles.sectionTitle, { color: colors.textPrimary }]}
                >
                  Recent
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/(tabs)/expenses")}
                >
                  <Text style={[styles.seeAll, { color: colors.primary }]}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
              {recentExpenses.length === 0 ? (
                <Card style={styles.emptyCard}>
                  <Ionicons
                    name="receipt-outline"
                    size={40}
                    color={colors.primary}
                  />
                  <Text
                    style={[styles.emptyTitle, { color: colors.textPrimary }]}
                  >
                    No expenses yet
                  </Text>
                  <Text
                    style={[styles.emptyDesc, { color: colors.textSecondary }]}
                  >
                    Add a transaction or scan a receipt to start forecasting.
                  </Text>
                  <Button
                    title="Add Expense"
                    onPress={() => router.push("/add-expense")}
                    style={{ marginTop: 12 }}
                  />
                </Card>
              ) : (
                <Card padding={0} noBorder>
                  {recentExpenses.map((expense, index) => (
                    <View key={expense.id}>
                      <ExpenseItem
                        expense={expense}
                        onPress={() =>
                          router.push({
                            pathname: "/add-expense",
                            params: { id: expense.id },
                          })
                        }
                        onDelete={() => confirmDeleteExpense(expense.id)}
                      />
                      {index < recentExpenses.length - 1 && (
                        <View
                          style={[
                            styles.separator,
                            { backgroundColor: colors.separator },
                          ]}
                        />
                      )}
                    </View>
                  ))}
                </Card>
              )}
            </View>
          </AnimatedSection>

          <View style={{ height: 110 }} />
        </ScrollView>
        <Modal
          visible={incomeModal}
          transparent
          animationType="slide"
          onRequestClose={() => setIncomeModal(false)}
        >
          <View
            style={[styles.modalOverlay, { backgroundColor: colors.overlay }]}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
              <View
                style={[styles.modalCard, { backgroundColor: colors.modalBg }]}
              >
                <Text
                  style={[styles.modalTitle, { color: colors.textPrimary }]}
                >
                  Set Monthly Income
                </Text>
                <View
                  style={[
                    styles.incomeInputRow,
                    {
                      backgroundColor: colors.inputBg,
                      borderColor: colors.inputBorder,
                    },
                  ]}
                >
                  <Text
                    style={[styles.currencyPrefix, { color: colors.primary }]}
                  >
                    $
                  </Text>
                  <TextInput
                    style={[styles.incomeInput, { color: colors.textPrimary }]}
                    value={incomeInput}
                    onChangeText={setIncomeInput}
                    keyboardType="decimal-pad"
                    placeholder="0.00"
                    placeholderTextColor={colors.textTertiary}
                    autoFocus
                  />
                </View>
                <View style={styles.modalBtns}>
                  <Button
                    title="Cancel"
                    variant="secondary"
                    onPress={() => setIncomeModal(false)}
                    style={{ flex: 1 }}
                  />
                  <Button
                    title="Save"
                    onPress={handleSaveIncome}
                    style={{ flex: 1 }}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </SafeAreaView>
    </BiometricGate>
  );
}

function DashboardAction({
  icon,
  label,
  color,
  backgroundColor,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  color: string;
  backgroundColor: string;
  onPress: () => void;
}) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  return (
    <TouchableOpacity
      style={[
        styles.actionBtn,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
      onPress={onPress}
      activeOpacity={0.78}
    >
      <View style={[styles.actionIcon, { backgroundColor }]}>
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <Text style={[styles.actionLabel, { color: colors.textPrimary }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  return "Evening";
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 32 },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 8 },
  streak: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 3,
  },
  streakText: { fontSize: 13, fontWeight: "700" },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  duoRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: Theme.spacing.sm,
  },
  insightRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: 8,
    flexWrap: "wrap",
  },
  insightChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 5,
  },
  insightText: { fontSize: 12, fontWeight: "600" },
  quickActions: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    gap: 8,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: { fontSize: 12, fontWeight: "700", textAlign: "center" },
  summaryRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    gap: 8,
    marginBottom: 8,
  },
  summaryCard: { flex: 1, alignItems: "center", padding: 12 },
  statValue: { fontSize: 15, fontWeight: "800", marginBottom: 2 },
  statLabel: { fontSize: 11, fontWeight: "500" },
  section: { marginTop: 24, paddingHorizontal: Theme.spacing.md },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700" },
  seeAll: { fontSize: 13, fontWeight: "600" },
  emptyCard: { alignItems: "center", paddingVertical: 32 },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 4,
  },
  emptyDesc: { fontSize: 14, textAlign: "center", lineHeight: 20 },
  separator: { height: 1, marginHorizontal: Theme.spacing.md },
  modalOverlay: { flex: 1, justifyContent: "flex-end" },
  modalCard: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    gap: 16,
  },
  modalTitle: { fontSize: 20, fontWeight: "700", textAlign: "center" },
  incomeInputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 60,
  },
  currencyPrefix: { fontSize: 24, fontWeight: "700", marginRight: 4 },
  incomeInput: { flex: 1, fontSize: 28, fontWeight: "700" },
  modalBtns: { flexDirection: "row", gap: 12 },
  travelCard: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  travelCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  travelBadge: { flexDirection: "row", alignItems: "center", gap: 6 },
  travelBadgeText: { fontSize: 13, fontWeight: "700" },
  travelRate: { fontSize: 12, fontWeight: "600" },
  travelConverterRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  travelInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: 10,
    gap: 2,
  },
  travelInputText: { fontSize: 18, fontWeight: "700" },
  travelUpdated: { fontSize: 11, textAlign: "right" },
  travelLockedCard: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  travelLockIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  travelLockedTitle: { fontSize: 15, fontWeight: "800", marginBottom: 3 },
  travelLockedDesc: { fontSize: 12, lineHeight: 17 },
  refreshRateBtn: { flexDirection: "row", alignItems: "center", gap: 5 },
  tripBudgetCard: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 12,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  tripBudgetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  tripBudgetTitle: { fontSize: 15, fontWeight: "800" },
  tripBudgetSub: { fontSize: 12, marginTop: 3, fontWeight: "600" },
  tripBudgetHome: { fontSize: 12, fontWeight: "800" },
  tripProgressTrack: { height: 8, borderRadius: 999, overflow: "hidden" },
  tripProgressFill: { height: "100%", borderRadius: 999 },
});

export { };

