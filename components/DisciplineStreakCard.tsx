import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { buildHeatmap, DisciplineState } from '@/utils/disciplineStreak';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  discipline: DisciplineState;
  legacyStreak?: number;
  /** Side-by-side tile on dashboard */
  compact?: boolean;
};

export function DisciplineStreakCard({ discipline, legacyStreak = 0, compact = false }: Props) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const cells = useMemo(
    () => buildHeatmap(discipline.dayHistory, compact ? 7 : 14),
    [discipline.dayHistory, compact],
  );

  const logging = Math.max(discipline.loggingStreak, legacyStreak);
  const budget = discipline.budgetStreak;

  if (compact) {
    return (
      <View
        style={[styles.compactCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
        accessibilityRole="summary"
        accessibilityLabel={`Logging streak ${logging} days, budget streak ${budget} days`}
      >
        <View style={styles.compactTop}>
          <View style={[styles.iconWrap, { backgroundColor: colors.warningLight }]}>
            <Ionicons name="flame" size={16} color={colors.warning} />
          </View>
          <Text style={[styles.compactTitle, { color: colors.textPrimary }]}>Discipline</Text>
        </View>
        <View style={styles.compactMetrics}>
          <View>
            <Text style={[styles.compactValue, { color: colors.textPrimary }]}>{logging}</Text>
            <Text style={[styles.compactLabel, { color: colors.textSecondary }]}>Logging</Text>
          </View>
          <View>
            <Text style={[styles.compactValue, { color: colors.success }]}>{budget}</Text>
            <Text style={[styles.compactLabel, { color: colors.textSecondary }]}>Budget</Text>
          </View>
        </View>
        <View style={styles.heatRow}>
          {cells.map((cell) => (
            <View
              key={cell.key}
              style={[
                styles.heatCell,
                {
                  backgroundColor:
                    cell.status === 'logged_ok'
                      ? colors.success
                      : cell.status === 'logged_over'
                        ? colors.warning
                        : colors.border,
                },
              ]}
            />
          ))}
        </View>
        <Text style={[styles.bestLine, { color: colors.textTertiary }]}>
          Best {Math.max(discipline.longestLoggingStreak, discipline.longestBudgetStreak)}d
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
      accessibilityRole="summary"
      accessibilityLabel={`Logging streak ${logging} days, budget streak ${budget} days. Missed days pause progress but keep your best run.`}
    >
      <View style={styles.header}>
        <View style={[styles.iconWrap, { backgroundColor: colors.warningLight }]}>
          <Ionicons name="flame" size={18} color={colors.warning} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Discipline</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Gaps pause — they never erase your best run
          </Text>
        </View>
      </View>

      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={[styles.metricValue, { color: colors.textPrimary }]}>{logging}</Text>
          <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>Logging</Text>
          <Text style={[styles.best, { color: colors.textTertiary }]}>
            Best {discipline.longestLoggingStreak}
          </Text>
        </View>
        <View style={[styles.divider, { backgroundColor: colors.separator }]} />
        <View style={styles.metric}>
          <Text style={[styles.metricValue, { color: colors.success }]}>{budget}</Text>
          <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>Under budget</Text>
          <Text style={[styles.best, { color: colors.textTertiary }]}>
            Best {discipline.longestBudgetStreak}
          </Text>
        </View>
      </View>

      <View style={styles.heatRow}>
        {cells.map((cell) => (
          <View
            key={cell.key}
            accessibilityLabel={`${cell.key} ${cell.status}`}
            style={[
              styles.heatCell,
              {
                backgroundColor:
                  cell.status === 'logged_ok'
                    ? colors.success
                    : cell.status === 'logged_over'
                      ? colors.warning
                      : colors.border,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.md,
    marginHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: Theme.spacing.md,
  },
  compactCard: {
    flex: 1,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.md,
    gap: 8,
    minHeight: 148,
  },
  compactTop: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  compactTitle: { fontSize: Theme.fontSize.sm, fontWeight: Theme.fontWeight.bold },
  compactMetrics: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  compactValue: { fontSize: Theme.fontSize.xxl, fontWeight: Theme.fontWeight.extraBold },
  compactLabel: { fontSize: Theme.fontSize.xs, fontWeight: Theme.fontWeight.semiBold },
  bestLine: { fontSize: Theme.fontSize.xs },
  header: { flexDirection: 'row', alignItems: 'center', gap: Theme.spacing.sm },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: Theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: Theme.fontSize.lg, fontWeight: Theme.fontWeight.bold },
  subtitle: { fontSize: Theme.fontSize.xs, marginTop: 2 },
  metrics: { flexDirection: 'row', alignItems: 'center' },
  metric: { flex: 1, alignItems: 'center', gap: 2 },
  metricValue: { fontSize: Theme.fontSize.xxl, fontWeight: Theme.fontWeight.extraBold },
  metricLabel: { fontSize: Theme.fontSize.sm, fontWeight: Theme.fontWeight.semiBold },
  best: { fontSize: Theme.fontSize.xs },
  divider: { width: 1, height: 40 },
  heatRow: { flexDirection: 'row', gap: 4 },
  heatCell: { flex: 1, height: 8, borderRadius: 3 },
});
