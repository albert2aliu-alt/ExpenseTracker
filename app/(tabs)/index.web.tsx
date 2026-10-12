import { BalanceCard } from "@/components/BalanceCard";
import { CategoryIcon } from "@/components/CategoryIcon";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { getBalance, getTotalExpenses } from "@/utils/calculations";
import { getCategoryByKey } from "@/utils/categories";
import { formatCurrency, formatShortDate } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WebDashboardScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { width } = useWindowDimensions();
  const wide = width >= 1000;
  const { expenses, savingGoals, income, prefs, categoryBudgets } = useApp();
  const totalExpenses = useMemo(() => getTotalExpenses(expenses), [expenses]);
  const balance = useMemo(() => getBalance(income, expenses), [income, expenses]);
  const totalSaved = useMemo(() => savingGoals.reduce((sum, goal) => sum + goal.currentAmount, 0), [savingGoals]);
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const daysLeft = Math.max(1, daysInMonth - now.getDate() + 1);
  const available = Math.max(0, income - totalExpenses - totalSaved);
  const dailyBudget = available / daysLeft;
  const spentPercent = income > 0 ? Math.min(100, (totalExpenses / income) * 100) : 0;
  const recentExpenses = expenses.slice(0, 5);
  const topCategory = useMemo(() => {
    const totals = expenses.reduce<Record<string, number>>((all, expense) => { all[expense.category] = (all[expense.category] ?? 0) + expense.amount; return all; }, {});
    const key = Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0];
    return key ? { ...getCategoryByKey(key), amount: totals[key] } : null;
  }, [expenses]);
  const greeting = now.getHours() < 12 ? "Good morning" : now.getHours() < 18 ? "Good afternoon" : "Good evening";

  return <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
      <View style={[styles.container, wide && styles.containerWide]}>
        <View style={styles.topbar}>
          <View><Text style={[styles.eyebrow, { color: colors.primary }]}>EXPENSE TRACKER 2.0</Text><Text style={[styles.title, { color: colors.textPrimary }]}>{greeting}.</Text><Text style={[styles.subtitle, { color: colors.textSecondary }]}>Here’s your money at a glance for {now.toLocaleString("en", { month: "long" })}.</Text></View>
          <TouchableOpacity accessibilityRole="button" accessibilityLabel="Open settings" onPress={() => router.push("/settings")} style={[styles.avatar, { backgroundColor: colors.card, borderColor: colors.border }]}><Ionicons name="settings-outline" size={20} color={colors.textSecondary} /></TouchableOpacity>
        </View>
        <View style={[styles.mainGrid, wide && styles.mainGridWide]}>
          <View style={styles.balanceColumn}>
            <BalanceCard balance={balance} income={income} totalExpenses={totalExpenses} />
            <View style={styles.quickRow}>
              <QuickAction icon="add" label="Add expense" tone={colors.danger} background={colors.dangerLight} onPress={() => router.push("/add-expense")} />
              <QuickAction icon="scan-outline" label="Scan receipt" tone={colors.primary} background={colors.primary + "16"} onPress={() => router.push("/receipt-scanner" as never)} />
              <QuickAction icon="flag-outline" label="New goal" tone={colors.success} background={colors.successLight} onPress={() => router.push("/add-saving")} />
            </View>
          </View>
          <View style={[styles.pulseCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.cardHeadingRow}><View><Text style={[styles.cardEyebrow, { color: colors.textSecondary }]}>MONTHLY PULSE</Text><Text style={[styles.cardTitle, { color: colors.textPrimary }]}>Spending overview</Text></View><View style={[styles.statusPill, { backgroundColor: spentPercent > 85 ? colors.dangerLight : colors.successLight }]}><View style={[styles.statusDot, { backgroundColor: spentPercent > 85 ? colors.danger : colors.success }]} /><Text style={[styles.statusText, { color: spentPercent > 85 ? colors.danger : colors.success }]}>{spentPercent > 85 ? "Watch spending" : "On track"}</Text></View></View>
            <Text style={[styles.progressNumber, { color: colors.textPrimary }]}>{Math.round(spentPercent)}<Text style={styles.progressSuffix}>%</Text></Text><Text style={[styles.progressLabel, { color: colors.textSecondary }]}>of your income has been spent</Text><View style={[styles.progressTrack, { backgroundColor: colors.inputBg }]}><View style={[styles.progressFill, { backgroundColor: spentPercent > 85 ? colors.danger : colors.primary, width: `${Math.max(4, spentPercent)}%` }]} /></View><View style={[styles.pulseDivider, { backgroundColor: colors.separator }]} />
            <View style={styles.pulseStats}><PulseStat label="Safe today" value={formatCurrency(dailyBudget, prefs.currency)} color={colors.primary} /><PulseStat label="Days remaining" value={String(daysLeft)} color={colors.textPrimary} /><PulseStat label="Saved" value={formatCurrency(totalSaved, prefs.currency)} color={colors.success} /></View>
          </View>
        </View>
        <View style={[styles.infoGrid, wide && styles.infoGridWide]}>
          <InsightCard icon="wallet-outline" label="Available to spend" value={formatCurrency(available, prefs.currency)} detail="After savings & expenses" color={colors.primary} colors={colors} />
          <InsightCard icon="pie-chart-outline" label="Top category" value={topCategory?.label ?? "No expenses yet"} detail={topCategory ? formatCurrency(topCategory.amount, prefs.currency) : "Start tracking to see trends"} color={colors.warning} colors={colors} />
          <InsightCard icon="stats-chart-outline" label="Budget allocation" value={formatCurrency(Object.values(categoryBudgets).reduce((sum, value) => sum + value, 0), prefs.currency)} detail="Across your categories" color={colors.success} colors={colors} />
        </View>
        <View style={[styles.contentGrid, wide && styles.contentGridWide]}>
          <View style={[styles.recentCard, { backgroundColor: colors.card, borderColor: colors.border }]}><View style={styles.sectionHead}><View><Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Recent activity</Text><Text style={[styles.sectionSub, { color: colors.textSecondary }]}>Your latest transactions</Text></View><TouchableOpacity onPress={() => router.push("/expenses")}><Text style={[styles.link, { color: colors.primary }]}>See all</Text></TouchableOpacity></View>
            {recentExpenses.length ? recentExpenses.map((expense, index) => <Pressable key={expense.id} onPress={() => router.push({ pathname: "/add-expense", params: { id: expense.id } })} style={({ pressed }) => [styles.expenseRow, index > 0 && { borderTopColor: colors.separator, borderTopWidth: 1 }, { opacity: pressed ? 0.72 : 1 }]}><CategoryIcon category={expense.category} size={42} /><View style={styles.expenseInfo}><Text numberOfLines={1} style={[styles.expenseTitle, { color: colors.textPrimary }]}>{expense.title}</Text><Text style={[styles.expenseMeta, { color: colors.textSecondary }]}>{getCategoryByKey(expense.category).label} · {formatShortDate(expense.date)}</Text></View><Text style={[styles.expenseAmount, { color: colors.danger }]}>-{formatCurrency(expense.amount, prefs.currency)}</Text></Pressable>) : <EmptyState colors={colors} />}
          </View>
          <View style={[styles.focusCard, { backgroundColor: colors.primary, borderColor: colors.primary }]}><Ionicons name="sparkles" size={24} color="#fff" /><Text style={styles.focusOverline}>TODAY’S FOCUS</Text><Text style={styles.focusTitle}>{income > 0 ? `Keep today below ${formatCurrency(dailyBudget, prefs.currency)}.` : "Set your monthly income to unlock your daily plan."}</Text><Text style={styles.focusText}>{income > 0 ? "Small choices add up. Your daily allowance updates as you track spending." : "A baseline makes your spending insights much more useful."}</Text><TouchableOpacity onPress={() => router.push(income > 0 ? "/statistics" : "/settings")} style={styles.focusButton}><Text style={[styles.focusButtonText, { color: colors.primary }]}>{income > 0 ? "Explore insights" : "Set up finances"}</Text><Ionicons name="arrow-forward" size={16} color={colors.primary} /></TouchableOpacity></View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>;
}

function QuickAction({ icon, label, tone, background, onPress }: { icon: keyof typeof Ionicons.glyphMap; label: string; tone: string; background: string; onPress: () => void }) { return <TouchableOpacity onPress={onPress} style={[styles.quickAction, { backgroundColor: background }]}><View style={[styles.quickIcon, { backgroundColor: tone }]}><Ionicons name={icon} size={17} color="#fff" /></View><Text style={[styles.quickLabel, { color: tone }]}>{label}</Text></TouchableOpacity>; }
function PulseStat({ label, value, color }: { label: string; value: string; color: string }) { return <View style={styles.pulseStat}><Text style={[styles.pulseStatValue, { color }]} numberOfLines={1}>{value}</Text><Text style={styles.pulseStatLabel}>{label}</Text></View>; }
function InsightCard({ icon, label, value, detail, color, colors }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string; detail: string; color: string; colors: (typeof Colors)["light"] }) { return <View style={[styles.insightCard, { backgroundColor: colors.card, borderColor: colors.border }]}><View style={[styles.insightIcon, { backgroundColor: color + "18" }]}><Ionicons name={icon} size={19} color={color} /></View><View style={styles.insightContent}><Text style={[styles.insightLabel, { color: colors.textSecondary }]}>{label}</Text><Text numberOfLines={1} style={[styles.insightValue, { color: colors.textPrimary }]}>{value}</Text><Text numberOfLines={1} style={[styles.insightDetail, { color: colors.textTertiary }]}>{detail}</Text></View></View>; }
function EmptyState({ colors }: { colors: (typeof Colors)["light"] }) { return <View style={styles.empty}><View style={[styles.emptyIcon, { backgroundColor: colors.primary + "14" }]}><Ionicons name="receipt-outline" size={24} color={colors.primary} /></View><Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>Your activity will appear here</Text><Text style={[styles.emptyText, { color: colors.textSecondary }]}>Add your first expense to start building a clear picture.</Text></View>; }

const styles = StyleSheet.create({
  safe: { flex: 1 }, scroll: { padding: 24, paddingBottom: 120 }, container: { width: "100%", gap: 22 }, containerWide: { maxWidth: 1320, alignSelf: "center" }, topbar: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }, eyebrow: { fontSize: 11, fontWeight: "800", letterSpacing: 1.2, marginBottom: 7 }, title: { fontSize: 32, lineHeight: 39, fontWeight: "900", letterSpacing: -1.1 }, subtitle: { fontSize: 14, lineHeight: 21, marginTop: 4 }, avatar: { width: 44, height: 44, borderRadius: 14, borderWidth: 1, alignItems: "center", justifyContent: "center" },
  mainGrid: { gap: 22 }, mainGridWide: { flexDirection: "row" }, balanceColumn: { flex: 1.08, gap: 14 }, quickRow: { flexDirection: "row", gap: 10, paddingHorizontal: Theme.spacing.md }, quickAction: { flex: 1, minHeight: 48, borderRadius: 14, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingHorizontal: 8 }, quickIcon: { width: 26, height: 26, borderRadius: 9, alignItems: "center", justifyContent: "center" }, quickLabel: { fontSize: 12, fontWeight: "800" },
  pulseCard: { flex: 0.92, borderRadius: Theme.radius.xl, borderWidth: 1, padding: 22, minHeight: 224 }, cardHeadingRow: { flexDirection: "row", justifyContent: "space-between", gap: 12 }, cardEyebrow: { fontSize: 10, letterSpacing: 1, fontWeight: "800" }, cardTitle: { marginTop: 4, fontSize: 17, fontWeight: "800" }, statusPill: { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", gap: 6, paddingHorizontal: 9, paddingVertical: 6, borderRadius: 999 }, statusDot: { width: 6, height: 6, borderRadius: 3 }, statusText: { fontSize: 11, fontWeight: "800" }, progressNumber: { fontSize: 42, fontWeight: "900", letterSpacing: -1.6, marginTop: 18 }, progressSuffix: { fontSize: 20 }, progressLabel: { fontSize: 12, marginTop: -2 }, progressTrack: { height: 8, borderRadius: 999, overflow: "hidden", marginTop: 14 }, progressFill: { height: "100%", borderRadius: 999 }, pulseDivider: { height: 1, marginVertical: 17 }, pulseStats: { flexDirection: "row", justifyContent: "space-between", gap: 12 }, pulseStat: { flex: 1 }, pulseStatValue: { fontSize: 13, fontWeight: "800" }, pulseStatLabel: { color: "#8E8AA6", fontSize: 10, marginTop: 3 },
  infoGrid: { gap: 12 }, infoGridWide: { flexDirection: "row" }, insightCard: { flex: 1, borderWidth: 1, borderRadius: Theme.radius.lg, padding: 16, minHeight: 102, flexDirection: "row", alignItems: "flex-start", gap: 12 }, insightIcon: { width: 38, height: 38, borderRadius: 12, alignItems: "center", justifyContent: "center" }, insightContent: { flex: 1 }, insightLabel: { fontSize: 11, fontWeight: "700" }, insightValue: { fontSize: 16, fontWeight: "800", marginTop: 4 }, insightDetail: { fontSize: 11, marginTop: 3 },
  contentGrid: { gap: 22 }, contentGridWide: { flexDirection: "row" }, recentCard: { flex: 1.4, borderRadius: Theme.radius.xl, borderWidth: 1, padding: 20 }, sectionHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }, sectionTitle: { fontSize: 18, fontWeight: "800" }, sectionSub: { fontSize: 12, marginTop: 3 }, link: { fontSize: 12, fontWeight: "800", paddingVertical: 3 }, expenseRow: { minHeight: 64, flexDirection: "row", alignItems: "center", gap: 11, paddingVertical: 10 }, expenseInfo: { flex: 1 }, expenseTitle: { fontSize: 14, fontWeight: "700" }, expenseMeta: { fontSize: 11, marginTop: 3 }, expenseAmount: { fontSize: 14, fontWeight: "800" },
  focusCard: { flex: 0.78, borderRadius: Theme.radius.xl, borderWidth: 1, padding: 22, minHeight: 260, justifyContent: "flex-start" }, focusOverline: { color: "rgba(255,255,255,0.65)", fontSize: 10, fontWeight: "800", letterSpacing: 1, marginTop: 16 }, focusTitle: { color: "#fff", fontSize: 22, fontWeight: "900", letterSpacing: -0.5, lineHeight: 28, marginTop: 7 }, focusText: { color: "rgba(255,255,255,0.76)", fontSize: 13, lineHeight: 19, marginTop: 10 }, focusButton: { marginTop: "auto", backgroundColor: "#fff", borderRadius: 12, minHeight: 43, paddingHorizontal: 14, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 }, focusButtonText: { fontSize: 13, fontWeight: "800" },
  empty: { minHeight: 245, alignItems: "center", justifyContent: "center", paddingHorizontal: 24 }, emptyIcon: { width: 52, height: 52, borderRadius: 17, justifyContent: "center", alignItems: "center" }, emptyTitle: { fontSize: 15, fontWeight: "800", marginTop: 12 }, emptyText: { textAlign: "center", fontSize: 12, lineHeight: 18, marginTop: 5 },
});
