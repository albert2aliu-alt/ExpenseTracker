import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

interface SafeToSpendCardProps {
  income: number;
  totalExpenses: number;
  totalSaved: number;
  safeToSpend: number;
  daysRemaining: number;
  currency: string;
}

export function SafeToSpendCard({
  income,
  totalExpenses,
  totalSaved,
  safeToSpend,
  daysRemaining,
  currency,
}: SafeToSpendCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const scaleAnim = React.useRef(new Animated.Value(0.96)).current;
  const burnRate = totalExpenses / Math.max(1, new Date().getDate());
  const spendPercentage =
    income > 0 ? Math.min((totalExpenses / income) * 100, 100) : 0;
  const status = getSpendStatus(safeToSpend, colors);

  React.useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <View style={styles.header}>
        <View>
          <Text style={[styles.eyebrow, { color: colors.textSecondary }]}>
            Safe to Spend Today
          </Text>
          <Text style={[styles.amount, { color: status.color }]}>
            {formatCurrency(safeToSpend, currency)}
          </Text>
        </View>
        <View style={[styles.badge, { backgroundColor: status.color + "20" }]}>
          <Ionicons name={status.icon} size={14} color={status.color} />
          <Text style={[styles.badgeText, { color: status.color }]}>
            {status.label}
          </Text>
        </View>
      </View>

      <Text style={[styles.description, { color: colors.textSecondary }]}>
        Based on monthly income, spending so far, saved cash, and{" "}
        {daysRemaining} days left.
      </Text>

      <View style={styles.breakdown}>
        <BreakdownItem
          label="Income"
          value={formatCurrency(income, currency)}
          color={colors.success}
          colors={colors}
        />
        <BreakdownItem
          label="Spent"
          value={formatCurrency(totalExpenses, currency)}
          color={colors.danger}
          colors={colors}
        />
        <BreakdownItem
          label="Saved"
          value={formatCurrency(totalSaved, currency)}
          color={colors.primary}
          colors={colors}
        />
      </View>

      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { backgroundColor: colors.inputBg }]}>
          <Animated.View
            style={[
              styles.progressFill,
              { backgroundColor: status.color, width: `${spendPercentage}%` },
            ]}
          />
        </View>
        <View style={styles.progressMeta}>
          <Text style={[styles.progressLabel, { color: colors.textSecondary }]}>
            {Math.round(spendPercentage)}% of income spent
          </Text>
          <Text style={[styles.progressLabel, { color: colors.textSecondary }]}>
            {formatCurrency(burnRate, currency)}/day
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

function getSpendStatus(safeToSpend: number, colors: typeof Colors.light) {
  if (safeToSpend >= 75) {
    return {
      label: "Healthy",
      color: colors.success,
      icon: "checkmark-circle" as const,
    };
  }
  if (safeToSpend >= 25) {
    return {
      label: "Watch",
      color: colors.warning,
      icon: "alert-circle" as const,
    };
  }
  return { label: "Tight", color: colors.danger, icon: "warning" as const };
}

function BreakdownItem({
  label,
  value,
  color,
  colors,
}: {
  label: string;
  value: string;
  color: string;
  colors: typeof Colors.light;
}) {
  return (
    <View style={styles.breakdownItem}>
      <View style={styles.breakdownLabel}>
        <View style={[styles.dot, { backgroundColor: color }]} />
        <Text
          style={[styles.breakdownLabelText, { color: colors.textSecondary }]}
        >
          {label}
        </Text>
      </View>
      <Text
        style={[styles.breakdownValue, { color: colors.textPrimary }]}
        numberOfLines={1}
      >
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
    marginTop: Theme.spacing.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  eyebrow: { fontSize: 13, fontWeight: "700", marginBottom: 6 },
  amount: { fontSize: 38, fontWeight: "800" },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 18,
    gap: 4,
  },
  badgeText: { fontSize: 12, fontWeight: "800" },
  description: { fontSize: 13, lineHeight: 19, marginTop: 8, marginBottom: 18 },
  breakdown: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },
  breakdownItem: { flex: 1, minWidth: 0 },
  breakdownLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  breakdownLabelText: { fontSize: 11, fontWeight: "600" },
  breakdownValue: { fontSize: 13, fontWeight: "800" },
  progressContainer: { gap: 8 },
  progressBar: { height: 8, borderRadius: 4, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 4 },
  progressMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  progressLabel: { fontSize: 12, fontWeight: "600" },
});

export default SafeToSpendCard;
