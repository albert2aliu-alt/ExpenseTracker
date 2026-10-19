import AnimatedSection from "@/components/AnimatedSection";
import { BiometricGate } from "@/components/BiometricGate";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ExpenseItem } from "@/components/ExpenseItem";
import { FinancialHealthCard } from "@/components/FinancialHealthCard";
import { SpendingForecast } from "@/components/SpendingForecast";
import { UpcomingPaymentsCard } from "@/components/UpcomingPaymentsCard";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { BiometricService } from "@/services/biometric";
import { getBalance, getTotalExpenses } from "@/utils/calculations";
import { convertAmount, formatWithCurrency } from "@/utils/currency";
import { formatCurrency } from "@/utils/formatters";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
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
  const tripBudgetProgress =
    prefs.tripBudget > 0
      ? Math.min(1, travelSpentOriginal / prefs.tripBudget)
      : 0;

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
          <AnimatedSection delay={0} distance={-16}>
            <View style={styles.v2Header}>
              <View>
                <Text style={[styles.v2Kicker, { color: colors.primary }]}>
                  EXPENSE TRACKER 2.0
                </Text>
                <Text
                  style={[styles.v2Greeting, { color: colors.textPrimary }]}
                >
                  Good {getGreeting()}, {currentUser?.username ?? "there"}.
                </Text>
              </View>
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
              </View>
            </View>
          </AnimatedSection>

          <AnimatedSection delay={80} distance={16}>
            <LinearGradient
              colors={colors.primaryGradient as [string, string]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.v2Hero}
            >
              <View style={styles.heroOrbOne} />
              <View style={styles.heroOrbTwo} />
              <View style={styles.heroTop}>
                <View>
                  <Text style={styles.heroLabel}>AVAILABLE BALANCE</Text>
                  <Text style={styles.heroBalance}>
                    {prefs.showBalance
                      ? formatCurrency(balance, prefs.currency)
                      : "••••••"}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setIncomeModal(true)}
                  style={styles.heroEdit}
                >
                  <Ionicons name="create-outline" size={17} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.heroRule} />
              <View style={styles.heroStats}>
                <View>
                  <Text style={styles.heroStatLabel}>Spent this month</Text>
                  <Text style={styles.heroStatValue}>
                    {formatCurrency(totalExpenses, prefs.currency)}
                  </Text>
                </View>
                <View>
                  <Text style={styles.heroStatLabel}>Safe to spend today</Text>
                  <Text style={styles.heroStatValue}>
                    {formatCurrency(safeToSpend, prefs.currency)}
                  </Text>
                </View>
              </View>
              <View style={styles.heroProgressTrack}>
                <View
                  style={[
                    styles.heroProgressFill,
                    { width: `${Math.max(3, spendPercentage)}%` },
                  ]}
                />
              </View>
              <Text style={styles.heroProgressCaption}>
                {Math.round(spendPercentage)}% of monthly income used
              </Text>
            </LinearGradient>
          </AnimatedSection>

          <AnimatedSection delay={150} distance={16}>
            <View style={styles.v2ActionDock}>
              <TouchableOpacity
                onPress={() => router.push("/add-expense")}
                style={[
                  styles.primaryAction,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
              >
                <View
                  style={[
                    styles.primaryActionIcon,
                    { backgroundColor: colors.primary + "18" },
                  ]}
                >
                  <Ionicons name="add" size={22} color={colors.primary} />
                </View>
                <View>
                  <Text
                    style={[
                      styles.primaryActionTitle,
                      { color: colors.textPrimary },
                    ]}
                  >
                    Add expense
                  </Text>
                  <Text
                    style={[
                      styles.primaryActionSub,
                      { color: colors.textSecondary },
                    ]}
                  >
                    Keep your plan accurate
                  </Text>
                </View>
              </TouchableOpacity>
              {Platform.OS !== "web" && (
                <MiniAction
                  icon="scan-outline"
                  label="Scan"
                  color={colors.primary}
                  backgroundColor={colors.primary + "18"}
                  onPress={() => router.push("/receipt-scanner" as never)}
                />
              )}
              <MiniAction
                icon="flag-outline"
                label="Goal"
                color={colors.success}
                backgroundColor={colors.successLight}
                onPress={() => router.push("/add-saving")}
              />
            </View>
          </AnimatedSection>

          <AnimatedSection delay={220} distance={16}>
            <View style={styles.v2Insights}>
              <View
                style={[
                  styles.v2InsightCard,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
              >
                <View
                  style={[
                    styles.v2InsightIcon,
                    { backgroundColor: colors.successLight },
                  ]}
                >
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={19}
                    color={colors.success}
                  />
                </View>
                <Text
                  style={[styles.v2InsightValue, { color: colors.textPrimary }]}
                >
                  {formatCurrency(budgetLeft, prefs.currency)}
                </Text>
                <Text
                  style={[
                    styles.v2InsightLabel,
                    { color: colors.textSecondary },
                  ]}
                >
                  budget remaining
                </Text>
              </View>
              <View
                style={[
                  styles.v2InsightCard,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
              >
                <View
                  style={[
                    styles.v2InsightIcon,
                    { backgroundColor: colors.primary + "18" },
                  ]}
                >
                  <Ionicons
                    name="trending-up-outline"
                    size={19}
                    color={colors.primary}
                  />
                </View>
                <Text
                  style={[styles.v2InsightValue, { color: colors.textPrimary }]}
                >
                  {formatCurrency(totalSaved, prefs.currency)}
                </Text>
                <Text
                  style={[
                    styles.v2InsightLabel,
                    { color: colors.textSecondary },
                  ]}
                >
                  toward your goals
                </Text>
              </View>
            </View>
          </AnimatedSection>

          <AnimatedSection delay={280} distance={14}>
            <FinancialHealthCard
              expenses={expenses}
              subscriptions={subscriptions}
              savingGoals={savingGoals}
              income={income}
              categoryBudgets={categoryBudgets}
              currency={prefs.currency}
            />
          </AnimatedSection>

          <AnimatedSection delay={340} distance={12}>
            <UpcomingPaymentsCard
              subscriptions={subscriptions}
              currency={prefs.currency}
            />
          </AnimatedSection>

          {prefs.travelMode && !isPremium && (
            <AnimatedSection delay={400} distance={12}>
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
                    Premium unlocks converter, trip budgets, and travel
                    summaries.
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={colors.textTertiary}
                />
              </TouchableOpacity>
            </AnimatedSection>
          )}

          {/* Travel Mode Converter Card */}
          {prefs.travelMode &&
            isPremium &&
            Object.keys(exchangeRates).length > 0 && (
              <AnimatedSection delay={420} distance={12}>
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
                    <Ionicons
                      name="swap-horizontal"
                      size={20}
                      color="#4ECDC4"
                    />
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
              </AnimatedSection>
            )}

          {prefs.travelMode && isPremium && prefs.tripBudget > 0 && (
            <AnimatedSection delay={440} distance={12}>
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
                      {formatWithCurrency(
                        travelSpentOriginal,
                        prefs.travelCurrency,
                      )}{" "}
                      of{" "}
                      {formatWithCurrency(
                        prefs.tripBudget,
                        prefs.travelCurrency,
                      )}
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
                        width: `${tripBudgetProgress * 100}%`,
                        backgroundColor:
                          tripBudgetProgress > 0.9 ? colors.danger : "#4ECDC4",
                      },
                    ]}
                  />
                </View>
              </View>
            </AnimatedSection>
          )}

          <AnimatedSection delay={480} distance={12}>
            <SpendingForecast
              expenses={expenses}
              income={income}
              currency={prefs.currency}
            />
          </AnimatedSection>

          <AnimatedSection delay={520} distance={12}>
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

function MiniAction({
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
        styles.miniAction,
        { backgroundColor, borderColor: backgroundColor },
      ]}
      onPress={onPress}
      activeOpacity={0.78}
    >
      <View style={[styles.miniActionIcon, { backgroundColor: colors.card }]}>
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <Text style={[styles.miniActionLabel, { color }]}>{label}</Text>
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
  v2Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Theme.spacing.md,
    paddingTop: 8,
    paddingBottom: 14,
    gap: 12,
  },
  v2Kicker: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.25,
    marginBottom: 5,
  },
  v2Greeting: { fontSize: 24, fontWeight: "900", letterSpacing: -0.8 },
  v2Hero: {
    marginHorizontal: Theme.spacing.md,
    borderRadius: 28,
    padding: 22,
    overflow: "hidden",
    minHeight: 224,
    ...Theme.shadow.lg,
  },
  heroOrbOne: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(255,255,255,0.10)",
    right: -66,
    top: -80,
  },
  heroOrbTwo: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.07)",
    left: -35,
    bottom: -40,
  },
  heroTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  heroLabel: {
    color: "rgba(255,255,255,0.68)",
    fontSize: 10,
    letterSpacing: 1.2,
    fontWeight: "800",
  },
  heroBalance: {
    color: "#fff",
    fontSize: 34,
    lineHeight: 42,
    fontWeight: "900",
    letterSpacing: -1.2,
    marginTop: 4,
  },
  heroEdit: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
  },
  heroRule: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.20)",
    marginVertical: 17,
  },
  heroStats: { flexDirection: "row", justifyContent: "space-between", gap: 12 },
  heroStatLabel: {
    color: "rgba(255,255,255,0.64)",
    fontSize: 11,
    fontWeight: "500",
  },
  heroStatValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 3,
  },
  heroProgressTrack: {
    height: 6,
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,0.20)",
    overflow: "hidden",
    marginTop: 17,
  },
  heroProgressFill: {
    height: "100%",
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  heroProgressCaption: {
    color: "rgba(255,255,255,0.68)",
    fontSize: 10,
    fontWeight: "600",
    marginTop: 6,
  },
  v2ActionDock: {
    flexDirection: "row",
    gap: 9,
    marginTop: 14,
    paddingHorizontal: Theme.spacing.md,
  },
  primaryAction: {
    flex: 1,
    borderRadius: 18,
    minHeight: 74,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    borderWidth: 1,
  },
  primaryActionIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryActionTitle: { fontSize: 13, fontWeight: "800" },
  primaryActionSub: { fontSize: 10, marginTop: 2 },
  miniAction: {
    width: 66,
    borderRadius: 18,
    minHeight: 74,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderWidth: 1,
  },
  miniActionIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  miniActionLabel: { fontSize: 10, fontWeight: "800" },
  v2Insights: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
    paddingHorizontal: Theme.spacing.md,
  },
  v2InsightCard: {
    flex: 1,
    minHeight: 122,
    borderRadius: 19,
    borderWidth: 1,
    padding: 14,
    justifyContent: "space-between",
  },
  v2InsightIcon: {
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  v2InsightValue: {
    fontSize: 17,
    fontWeight: "900",
    letterSpacing: -0.4,
    marginTop: 12,
  },
  v2InsightLabel: { fontSize: 11, fontWeight: "600", marginTop: 2 },
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
    alignItems: "flex-start",
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    gap: 10,
    minHeight: 96,
    justifyContent: "center",
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: { fontSize: 12, fontWeight: "700", textAlign: "left" },
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
