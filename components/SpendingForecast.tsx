import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { Expense } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency } from "@/utils/formatters";
import React, { useMemo } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { ForecastChart, ForecastPoint } from "./ForecastChart";

interface SpendingForecastProps {
  expenses: Expense[];
  income: number;
  currency: string;
}

export function SpendingForecast({ expenses, income, currency }: SpendingForecastProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { width } = useWindowDimensions();
  const chartWidth = width - Theme.spacing.md * 4;

  const forecast = useMemo(() => buildForecast(expenses, income), [expenses, income]);

  return (
    <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Spending Forecast</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Projected month-end burn</Text>
        </View>
        <Text style={[styles.projected, { color: forecast.projectedTotal > income ? colors.danger : colors.success }]}>
          {formatCurrency(forecast.projectedTotal, currency)}
        </Text>
      </View>

      <ForecastChart data={forecast.points} width={chartWidth} colors={colors} />

      <View style={styles.stats}>
        <Stat label="Average/day" value={formatCurrency(forecast.averageDaily, currency)} colors={colors} />
        <Stat label="Income buffer" value={formatCurrency(Math.max(0, income - forecast.projectedTotal), currency)} colors={colors} />
      </View>
    </View>
  );
}

function buildForecast(expenses: Expense[], income: number) {
  const now = new Date();
  const currentDay = Math.max(1, now.getDate());
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthExpenses = expenses.filter((expense) => new Date(expense.date) >= monthStart);
  const spentSoFar = monthExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const averageDaily = spentSoFar / currentDay;
  const projectedTotal = averageDaily * daysInMonth;

  const points: ForecastPoint[] = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const date = new Date(now.getFullYear(), now.getMonth(), day);
    const actualSpend = monthExpenses
      .filter((expense) => {
        const expenseDate = new Date(expense.date);
        return expenseDate <= date;
      })
      .reduce((sum, expense) => sum + expense.amount, 0);

    return {
      timestamp: date.getTime(),
      value: day <= currentDay ? actualSpend : Math.min(income * 1.2, averageDaily * day),
    };
  });

  return {
    points: points.length > 1 ? points : [{ timestamp: now.getTime(), value: 0 }],
    averageDaily,
    projectedTotal,
  };
}

function Stat({ label, value, colors }: { label: string; value: string; colors: typeof Colors.light }) {
  return (
    <View style={[styles.statCard, { backgroundColor: colors.inputBg }]}>
      <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{label}</Text>
      <Text style={[styles.statValue, { color: colors.textPrimary }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.lg,
    marginHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.lg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: "800" },
  subtitle: { fontSize: 12, fontWeight: "600", marginTop: 3 },
  projected: { fontSize: 16, fontWeight: "800" },
  stats: { flexDirection: "row", gap: Theme.spacing.md, marginTop: 16 },
  statCard: { flex: 1, borderRadius: Theme.radius.md, padding: Theme.spacing.md },
  statLabel: { fontSize: 11, fontWeight: "600", marginBottom: 4 },
  statValue: { fontSize: 14, fontWeight: "800" },
});

export default SpendingForecast;
