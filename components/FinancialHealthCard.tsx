import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { Expense, SavingGoal, Subscription } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { analyzeFinancialHealth, HealthAlertSeverity } from "@/utils/financialHealth";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FinancialHealthCardProps {
  expenses: Expense[];
  subscriptions: Subscription[];
  savingGoals: SavingGoal[];
  income: number;
  categoryBudgets: Record<string, number>;
  currency: string;
}

export function FinancialHealthCard({
  expenses,
  subscriptions,
  savingGoals,
  income,
  categoryBudgets,
  currency,
}: FinancialHealthCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const analysis = useMemo(
    () => analyzeFinancialHealth({ expenses, subscriptions, savingGoals, income, categoryBudgets }),
    [expenses, subscriptions, savingGoals, income, categoryBudgets]
  );
  const scoreColor = getScoreColor(analysis.score, colors);
  const topAlerts = analysis.alerts.slice(0, 3);

  return (
    <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.header}>
        <View style={styles.scoreWrap}>
          <View style={[styles.scoreRing, { borderColor: scoreColor, backgroundColor: scoreColor + "12" }]}>
            <Text style={[styles.score, { color: scoreColor }]}>{analysis.score}</Text>
            <Text style={[styles.scoreMax, { color: colors.textSecondary }]}>/100</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.title, { color: colors.textPrimary }]}>Financial Health</Text>
            <Text style={[styles.status, { color: scoreColor }]}>{analysis.status}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/manage-budgets" as never)}
          style={[styles.budgetBtn, { backgroundColor: colors.inputBg, borderColor: colors.border }]}
        >
          <Ionicons name="options-outline" size={15} color={colors.primary} />
          <Text style={[styles.budgetBtnText, { color: colors.primary }]}>Budgets</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.metrics}>
        <Metric label="Projected" value={formatCurrency(analysis.metrics.projectedMonthSpend, currency)} colors={colors} />
        <Metric label="Cash left" value={formatCurrency(analysis.metrics.cashLeft, currency)} colors={colors} />
        <Metric label="Saved" value={`${Math.round(analysis.metrics.savingsRate * 100)}%`} colors={colors} />
      </View>

      <View style={styles.alerts}>
        {topAlerts.map((alert) => {
          const alertColor = getSeverityColor(alert.severity, colors);
          return (
            <View key={alert.id} style={[styles.alertRow, { backgroundColor: alertColor + "10" }]}>
              <View style={[styles.alertIcon, { backgroundColor: alertColor + "18" }]}>
                <Ionicons name={alert.icon as keyof typeof Ionicons.glyphMap} size={16} color={alertColor} />
              </View>
              <View style={styles.alertText}>
                <Text style={[styles.alertTitle, { color: colors.textPrimary }]}>{alert.title}</Text>
                <Text style={[styles.alertMessage, { color: colors.textSecondary }]}>{alert.message}</Text>
                <Text style={[styles.alertAction, { color: alertColor }]}>{alert.action}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

function Metric({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: typeof Colors.light;
}) {
  return (
    <View style={[styles.metric, { backgroundColor: colors.inputBg }]}>
      <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>{label}</Text>
      <Text style={[styles.metricValue, { color: colors.textPrimary }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

function getScoreColor(score: number, colors: typeof Colors.light) {
  if (score >= 80) return colors.success;
  if (score >= 60) return colors.warning;
  return colors.danger;
}

function getSeverityColor(severity: HealthAlertSeverity, colors: typeof Colors.light) {
  if (severity === "critical") return colors.danger;
  if (severity === "warning") return colors.warning;
  if (severity === "positive") return colors.success;
  return colors.primary;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.lg,
    marginHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: 14,
  },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 },
  scoreWrap: { flex: 1, flexDirection: "row", alignItems: "center", gap: 12 },
  scoreRing: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  score: { fontSize: 24, fontWeight: "900", lineHeight: 28 },
  scoreMax: { fontSize: 11, fontWeight: "800" },
  title: { fontSize: 17, fontWeight: "800" },
  status: { fontSize: 13, fontWeight: "800", marginTop: 3 },
  budgetBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderRadius: Theme.radius.full,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },
  budgetBtnText: { fontSize: 12, fontWeight: "800" },
  metrics: { flexDirection: "row", gap: 8 },
  metric: { flex: 1, borderRadius: Theme.radius.md, padding: 10, minWidth: 0 },
  metricLabel: { fontSize: 11, fontWeight: "700", marginBottom: 4 },
  metricValue: { fontSize: 13, fontWeight: "900" },
  alerts: { gap: 9 },
  alertRow: {
    flexDirection: "row",
    gap: 10,
    borderRadius: Theme.radius.md,
    padding: 10,
  },
  alertIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  alertText: { flex: 1, gap: 3 },
  alertTitle: { fontSize: 13, fontWeight: "900" },
  alertMessage: { fontSize: 12, lineHeight: 17, fontWeight: "600" },
  alertAction: { fontSize: 12, lineHeight: 17, fontWeight: "800" },
});

export default FinancialHealthCard;
