import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency } from "@/utils/formatters";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  safeToSpend: number;
  daysRemaining: number;
  currency: string;
  spendPercentage: number;
};

/** Compact companion tile for the dashboard duo row. */
export function SafeTodayTile({
  safeToSpend,
  daysRemaining,
  currency,
  spendPercentage,
}: Props) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const tone =
    safeToSpend >= 75 ? colors.success : safeToSpend >= 25 ? colors.warning : colors.danger;

  return (
    <View
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
      accessibilityLabel={`Safe to spend today ${formatCurrency(safeToSpend, currency)}`}
    >
      <View style={[styles.icon, { backgroundColor: tone + "22" }]}>
        <Ionicons name="sunny-outline" size={18} color={tone} />
      </View>
      <Text style={[styles.label, { color: colors.textSecondary }]}>Safe today</Text>
      <Text style={[styles.amount, { color: tone }]} numberOfLines={1}>
        {formatCurrency(safeToSpend, currency)}
      </Text>
      <Text style={[styles.meta, { color: colors.textTertiary }]}>
        {daysRemaining}d left · {Math.round(spendPercentage)}% used
      </Text>
      <View style={[styles.track, { backgroundColor: colors.inputBg }]}>
        <View
          style={[
            styles.fill,
            { width: `${Math.min(100, spendPercentage)}%`, backgroundColor: tone },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.md,
    gap: 6,
    minHeight: 148,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: Theme.radius.sm,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  label: { fontSize: Theme.fontSize.xs, fontWeight: Theme.fontWeight.semiBold },
  amount: { fontSize: Theme.fontSize.xl, fontWeight: Theme.fontWeight.extraBold },
  meta: { fontSize: Theme.fontSize.xs, marginBottom: 4 },
  track: { height: 6, borderRadius: 3, overflow: "hidden", marginTop: 8 },
  fill: { height: "100%", borderRadius: 3 },
});
