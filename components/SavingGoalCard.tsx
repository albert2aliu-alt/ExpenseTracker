import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { SavingGoal, useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency, getDaysRemaining } from "@/utils/formatters";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProgressBar } from "./ProgressBar";

interface SavingGoalCardProps {
  goal: SavingGoal;
  onPress?: () => void;
}

export function SavingGoalCard({ goal, onPress }: SavingGoalCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { prefs } = useApp();
  const progress =
    goal.targetAmount > 0
      ? Math.min(1, goal.currentAmount / goal.targetAmount)
      : 0;
  const daysLeft = getDaysRemaining(goal.deadline);
  const pct = Math.round(progress * 100);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.cardBorder },
        Theme.shadow.sm,
      ]}
    >
      <View style={[styles.dot, { backgroundColor: goal.color }]} />
      <Text
        style={[styles.title, { color: colors.textPrimary }]}
        numberOfLines={1}
      >
        {goal.title}
      </Text>
      <Text style={[styles.amount, { color: goal.color }]}>
        {formatCurrency(goal.currentAmount, prefs.currency)}
      </Text>
      <Text style={[styles.target, { color: colors.textSecondary }]}>
        of {formatCurrency(goal.targetAmount, prefs.currency)}
      </Text>
      <View style={styles.barWrap}>
        <ProgressBar
          progress={progress}
          color={goal.color}
          height={6}
          backgroundColor={colors.border}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={[styles.pct, { color: goal.color }]}>{pct}%</Text>
        <Text style={[styles.days, { color: colors.textTertiary }]}>
          {daysLeft > 0 ? `${daysLeft}d left` : "🎉 Done!"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Theme.radius.lg,
    padding: 16,
    borderWidth: 1,
    width: 175,
    gap: 3,
  },
  dot: { width: 10, height: 10, borderRadius: 5, marginBottom: 4 },
  title: { fontSize: 14, fontWeight: "600", marginBottom: 2 },
  amount: { fontSize: 22, fontWeight: "800", letterSpacing: -0.5 },
  target: { fontSize: 11, marginBottom: 10 },
  barWrap: { marginVertical: 4 },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  pct: { fontSize: 12, fontWeight: "700" },
  days: { fontSize: 11 },
});
