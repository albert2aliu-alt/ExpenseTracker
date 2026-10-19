import { Card } from '@/components/Card';
import { ProgressBar } from '@/components/ProgressBar';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useApp } from '@/context/AppContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getExpensesByCategory, getMonthlyTotals, getTotalExpenses, filterByPeriod, TimePeriod } from '@/utils/calculations';
import { getCategoryByKey } from '@/utils/categories';
import { formatCurrency } from '@/utils/formatters';
import { formatWithCurrency } from '@/utils/currency';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StatisticsScreen() {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { expenses, savingGoals, income, prefs, isPremium } = useApp();

  const [filter, setFilter] = useState<TimePeriod>('all');

  const filteredExpenses = useMemo(() => filterByPeriod(expenses, filter), [expenses, filter]);
  const byCat = useMemo(() => getExpensesByCategory(filteredExpenses), [filteredExpenses]);
  const totalExp = useMemo(() => getTotalExpenses(filteredExpenses), [filteredExpenses]);
  const totalSaved = savingGoals.reduce((s, g) => s + g.currentAmount, 0);

  const chartMonths = filter === 'month' ? 1 : filter === '3months' ? 3 : filter === 'year' ? 12 : 6;
  const monthly = useMemo(() => getMonthlyTotals(expenses, chartMonths), [expenses, chartMonths]);
  const catEntries = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  const travelExpenses = useMemo(() => expenses.filter(e => e.isTravelExpense), [expenses]);
  const travelSpentHome = travelExpenses.reduce((sum, e) => sum + e.amount, 0);
  const travelSpentOriginal = travelExpenses
    .filter(e => e.originalCurrency === prefs.travelCurrency)
    .reduce((sum, e) => sum + (e.originalAmount ?? 0), 0);
  const travelDays = new Set(travelExpenses.map(e => new Date(e.date).toDateString())).size || 1;
  const travelDailyAverage = travelSpentOriginal / travelDays;
  const pieColors = ['#6C3FEF', '#34C47C', '#F45B69', '#FFAD0D', '#4ECDC4', '#9B59B6'];
  const pieData = catEntries.slice(0, 6).map(([key, value], i) => ({
    name: getCategoryByKey(key).label,
    amount: value,
    color: pieColors[i % pieColors.length],
  }));
  const maxMonthly = Math.max(...monthly.map((m) => Math.max(m.total || 0, income)), 1);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Statistics</Text>
        </View>

        <View style={styles.filterRow}>
          {[
            { label: 'Month', value: 'month' },
            { label: '3M', value: '3months' },
            { label: 'Year', value: 'year' },
            { label: 'All', value: 'all' },
          ].map(f => (
            <TouchableOpacity
              key={f.value}
              onPress={() => setFilter(f.value as TimePeriod)}
              style={[
                styles.filterBtn,
                filter === f.value ? { backgroundColor: colors.primary } : { backgroundColor: colors.card, borderColor: colors.border }
              ]}
            >
              <Text style={[styles.filterText, { color: filter === f.value ? '#fff' : colors.textPrimary }]}>{f.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.summaryRow}>
          {[
            { label: 'Income', value: income, color: colors.primary },
            { label: 'Spent', value: totalExp, color: colors.danger },
            { label: 'Saved', value: totalSaved, color: colors.success },
          ].map(item => (
            <Card key={item.label} style={styles.summaryCard} variant="elevated">
              <Text style={[styles.statValue, { color: item.color }]}>{formatCurrency(item.value, prefs.currency)}</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{item.label}</Text>
            </Card>
          ))}
        </View>

        {prefs.travelMode && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Travel Insights</Text>
            {isPremium ? (
              <Card variant="elevated" padding={16}>
                <View style={styles.travelStatsGrid}>
                  <TravelStat label="Trip spent" value={formatWithCurrency(travelSpentOriginal, prefs.travelCurrency)} color="#4ECDC4" />
                  <TravelStat label="Home value" value={formatCurrency(travelSpentHome, prefs.currency)} color={colors.primary} />
                  <TravelStat label="Daily avg" value={formatWithCurrency(travelDailyAverage, prefs.travelCurrency)} color={colors.warning} />
                </View>
              </Card>
            ) : (
              <TouchableOpacity
                onPress={() => router.push('/premium' as never)}
                style={[styles.lockedTravelStats, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <Ionicons name="lock-closed-outline" size={17} color={colors.primary} />
                <Text style={[styles.lockedTravelStatsText, { color: colors.textPrimary }]}>Premium unlocks travel analytics</Text>
                <Ionicons name="chevron-forward" size={15} color={colors.textTertiary} />
              </TouchableOpacity>
            )}
          </View>
        )}

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Cash Flow Trend</Text>
          {monthly.length > 1 ? (
            <Card padding={16} variant="elevated">
              <View style={[styles.barChart, { width: width - 56 }]}>
                {monthly.map((m) => (
                  <View key={m.label} style={styles.barGroup}>
                    <View style={styles.barPair}>
                      <View style={[styles.bar, { height: `${Math.max(8, (income / maxMonthly) * 100)}%`, backgroundColor: colors.success }]} />
                      <View style={[styles.bar, { height: `${Math.max(8, ((m.total || 0) / maxMonthly) * 100)}%`, backgroundColor: colors.danger }]} />
                    </View>
                    <Text style={[styles.barLabel, { color: colors.textSecondary }]} numberOfLines={1}>{m.label}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.legendRow}>
                <LegendSwatch color={colors.success} label="Income" textColor={colors.textSecondary} />
                <LegendSwatch color={colors.danger} label="Expenses" textColor={colors.textSecondary} />
              </View>
            </Card>
          ) : (
            <Card style={styles.noData}>
              <Text style={styles.noDataEmoji}>📈</Text>
              <Text style={[styles.noDataText, { color: colors.textSecondary }]}>Not enough data for a trend line</Text>
            </Card>
          )}
        </View>

        {pieData.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Spending by Category</Text>
            <Card padding={12} variant="elevated">
              <View style={styles.legend}>
                {pieData.map((d, i) => (
                  <View key={i} style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: d.color }]} />
                    <Text style={[styles.legendLabel, { color: colors.textSecondary }]} numberOfLines={1}>{d.name}</Text>
                    <Text style={[styles.legendValue, { color: colors.textPrimary }]}>{formatCurrency(d.amount, prefs.currency)}</Text>
                  </View>
                ))}
              </View>
            </Card>
          </View>
        )}

        {catEntries.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Category Breakdown</Text>
            <Card variant="elevated" padding={16}>
              {catEntries.map(([key, value], i) => {
                const cat = getCategoryByKey(key);
                const pct = totalExp > 0 ? value / totalExp : 0;
                return (
                  <View key={key} style={[styles.catRow, i < catEntries.length - 1 && { marginBottom: 14 }]}>
                    <View style={[styles.catDot, { backgroundColor: cat.color + '22' }]}>
                      <Text style={{ fontSize: 13 }}>{cat.emoji}</Text>
                    </View>
                    <View style={styles.catInfo}>
                      <View style={styles.catHeader}>
                        <Text style={[styles.catName, { color: colors.textPrimary }]}>{cat.label}</Text>
                        <Text style={[styles.catAmount, { color: colors.textPrimary }]}>{formatCurrency(value, prefs.currency)}</Text>
                      </View>
                      <ProgressBar progress={pct} color={cat.color} height={5} backgroundColor={colors.border} />
                    </View>
                  </View>
                );
              })}
            </Card>
          </View>
        )}

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function TravelStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <View style={styles.travelStat}>
      <Text style={[styles.travelStatValue, { color }]} numberOfLines={1}>{value}</Text>
      <Text style={styles.travelStatLabel}>{label}</Text>
    </View>
  );
}

function LegendSwatch({ color, label, textColor }: { color: string; label: string; textColor: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={[styles.legendLabel, { color: textColor }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 32 },
  header: { paddingHorizontal: Theme.spacing.md, paddingTop: 8, paddingBottom: 16 },
  title: { fontSize: 28, fontWeight: '800', letterSpacing: -0.8 },
  filterRow: { flexDirection: 'row', paddingHorizontal: Theme.spacing.md, gap: 8, marginBottom: 16 },
  filterBtn: { flex: 1, paddingVertical: 8, borderRadius: Theme.radius.full, borderWidth: 1, alignItems: 'center' },
  filterText: { fontSize: 13, fontWeight: '600' },
  summaryRow: { flexDirection: 'row', paddingHorizontal: Theme.spacing.md, gap: 8, marginBottom: 8 },
  summaryCard: { flex: 1, alignItems: 'center', padding: 12 },
  statValue: { fontSize: 15, fontWeight: '800', marginBottom: 2 },
  statLabel: { fontSize: 11, fontWeight: '500' },
  section: { paddingHorizontal: Theme.spacing.md, marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  travelStatsGrid: { flexDirection: 'row', gap: 8 },
  travelStat: { flex: 1, alignItems: 'center' },
  travelStatValue: { fontSize: 13, fontWeight: '800', marginBottom: 3 },
  travelStatLabel: { fontSize: 10, fontWeight: '700', color: '#8A86A8' },
  lockedTravelStats: { borderWidth: 1, borderRadius: Theme.radius.md, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 8 },
  lockedTravelStatsText: { flex: 1, fontSize: 13, fontWeight: '700' },
  barChart: { height: 180, flexDirection: 'row', alignItems: 'flex-end', gap: 8 },
  barGroup: { flex: 1, alignItems: 'center', height: '100%' },
  barPair: { flex: 1, width: '100%', flexDirection: 'row', alignItems: 'flex-end', gap: 3, justifyContent: 'center' },
  bar: { width: '42%', borderRadius: 6, minHeight: 8 },
  barLabel: { fontSize: 10, marginTop: 6, fontWeight: '600' },
  legendRow: { flexDirection: 'row', gap: 16, marginTop: 12 },
  noData: { alignItems: 'center', paddingVertical: 24, gap: 8 },
  noDataEmoji: { fontSize: 36 },
  noDataText: { fontSize: 14 },
  legend: { gap: 8 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendLabel: { flex: 1, fontSize: 13 },
  legendValue: { fontSize: 13, fontWeight: '700' },
  catRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  catDot: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  catInfo: { flex: 1, gap: 6 },
  catHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  catName: { fontSize: 14, fontWeight: '600' },
  catAmount: { fontSize: 14, fontWeight: '700' },
});
