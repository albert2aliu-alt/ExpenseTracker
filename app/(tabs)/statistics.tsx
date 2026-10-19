import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
    filterByPeriod,
    getExpensesByCategory,
    getMonthlyTotals,
    getTotalExpenses,
    TimePeriod,
} from "@/utils/calculations";
import { getCategoryByKey } from "@/utils/categories";
import { formatWithCurrency } from "@/utils/currency";
import { formatCurrency } from "@/utils/formatters";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
    Animated,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StatisticsScreen() {
  const { width } = useWindowDimensions();
  const W = width;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { expenses, savingGoals, income, prefs, isPremium } = useApp();

  const [filter, setFilter] = useState<TimePeriod>("all");

  const filteredExpenses = useMemo(
    () => filterByPeriod(expenses, filter),
    [expenses, filter],
  );
  const byCat = useMemo(
    () => getExpensesByCategory(filteredExpenses),
    [filteredExpenses],
  );
  const totalExp = useMemo(
    () => getTotalExpenses(filteredExpenses),
    [filteredExpenses],
  );
  const totalSaved = savingGoals.reduce((s, g) => s + g.currentAmount, 0);

  const chartMonths =
    filter === "month"
      ? 1
      : filter === "3months"
        ? 3
        : filter === "year"
          ? 12
          : 6;
  const monthly = useMemo(
    () => getMonthlyTotals(expenses, chartMonths),
    [expenses, chartMonths],
  );

  const chartConfig = {
    backgroundColor: colors.card,
    backgroundGradientFrom: colors.card,
    backgroundGradientTo: colors.card,
    color: (opacity = 1) =>
      `${colors.primary}${Math.round(opacity * 255)
        .toString(16)
        .padStart(2, "0")}`,
    labelColor: () => colors.textSecondary,
    barPercentage: 0.6,
    decimalPlaces: 0,
    propsForBackgroundLines: { stroke: colors.border, strokeDasharray: "" },
  };

  const chartData = {
    labels: monthly.map((m) => m.label),
    datasets: [
      {
        data: monthly.map(() => income),
        color: (opacity = 1) => `rgba(52, 196, 124, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: monthly.map((m) => m.total || 0),
        color: (opacity = 1) => `rgba(244, 91, 105, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Income", "Expenses"],
  };

  const catEntries = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  const travelExpenses = useMemo(
    () => expenses.filter((e) => e.isTravelExpense),
    [expenses],
  );
  const travelSpentHome = travelExpenses.reduce((sum, e) => sum + e.amount, 0);
  const travelSpentOriginal = travelExpenses
    .filter((e) => e.originalCurrency === prefs.travelCurrency)
    .reduce((sum, e) => sum + (e.originalAmount ?? 0), 0);
  const travelDays =
    new Set(travelExpenses.map((e) => new Date(e.date).toDateString())).size ||
    1;
  const travelDailyAverage = travelSpentOriginal / travelDays;
  const pieColors = [
    colors.primary,
    colors.success,
    colors.danger,
    colors.warning,
    "#4ECDC4",
    "#4D7EA8",
    "#7C62A3",
    "#E77A5D",
    "#27AE60",
    "#1ABC9C",
  ];
  const pieData = catEntries.slice(0, 6).map(([key, value], i) => ({
    name: getCategoryByKey(key).label,
    amount: value,
    color: pieColors[i % pieColors.length],
    legendFontColor: colors.textSecondary,
    legendFontSize: 11,
  }));

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Header — slides in from top */}
        <AnimatedSection delay={0} distance={-20}>
          <PageHeader
            eyebrow="Analytics"
            title="Statistics"
            value={formatCurrency(totalExp, prefs.currency)}
            valueColor={colors.danger}
            subtitle={`Spent · ${formatCurrency(income - totalExp, prefs.currency)} net vs income`}
          />
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={80}>
          <View style={styles.filterRow}>
            {[
              { label: "Month", value: "month" },
              { label: "3M", value: "3months" },
              { label: "Year", value: "year" },
              { label: "All", value: "all" },
            ].map((f) => (
              <FilterPill
                key={f.value}
                label={f.label}
                active={filter === f.value}
                activeColor={colors.primary}
                cardColor={colors.card}
                borderColor={colors.border}
                textColor={colors.textPrimary}
                onPress={() => setFilter(f.value as TimePeriod)}
              />
            ))}
          </View>
        </AnimatedSection>

        {/* Summary Row — count-up numbers */}
        <AnimatedSection delay={160}>
          <View style={styles.summaryRow}>
            {[
              { label: "Income", value: income, color: colors.primary },
              { label: "Spent", value: totalExp, color: colors.danger },
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
                  delay={idx * 100}
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

        {/* Travel Insights */}
        {prefs.travelMode && (
          <AnimatedSection delay={240}>
            <View style={styles.section}>
              <Text
                style={[styles.sectionTitle, { color: colors.textPrimary }]}
              >
                Travel Insights
              </Text>
              {isPremium ? (
                <Card variant="elevated" padding={16}>
                  <View style={styles.travelStatsGrid}>
                    <TravelStat
                      label="Trip spent"
                      value={formatWithCurrency(
                        travelSpentOriginal,
                        prefs.travelCurrency,
                      )}
                      color="#4ECDC4"
                    />
                    <TravelStat
                      label="Home value"
                      value={formatCurrency(travelSpentHome, prefs.currency)}
                      color={colors.primary}
                    />
                    <TravelStat
                      label="Daily avg"
                      value={formatWithCurrency(
                        travelDailyAverage,
                        prefs.travelCurrency,
                      )}
                      color={colors.warning}
                    />
                  </View>
                </Card>
              ) : (
                <TouchableOpacity
                  onPress={() => router.push("/premium" as never)}
                  style={[
                    styles.lockedTravelStats,
                    {
                      backgroundColor: colors.card,
                      borderColor: colors.border,
                    },
                  ]}
                >
                  <Ionicons
                    name="lock-closed-outline"
                    size={17}
                    color={colors.primary}
                  />
                  <Text
                    style={[
                      styles.lockedTravelStatsText,
                      { color: colors.textPrimary },
                    ]}
                  >
                    Premium unlocks travel analytics
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={15}
                    color={colors.textTertiary}
                  />
                </TouchableOpacity>
              )}
            </View>
          </AnimatedSection>
        )}

        {/* Line Chart */}
        <AnimatedSection delay={320}>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
              Cash Flow Trend
            </Text>
            {monthly.length > 1 ? (
              <Card padding={8} variant="elevated">
                <LineChart
                  data={chartData}
                  width={W - 56}
                  height={220}
                  chartConfig={{
                    ...chartConfig,
                    propsForDots: { r: "4", strokeWidth: "2" },
                  }}
                  bezier
                  style={{ borderRadius: 12 }}
                  fromZero
                  yAxisLabel="$"
                  yAxisSuffix=""
                />
              </Card>
            ) : (
              <Card style={styles.noData}>
                <Text style={styles.noDataEmoji}>📈</Text>
                <Text
                  style={[styles.noDataText, { color: colors.textSecondary }]}
                >
                  Not enough data for a trend line
                </Text>
              </Card>
            )}
          </View>
        </AnimatedSection>

        {/* Pie Chart */}
        {pieData.length > 0 && (
          <AnimatedSection delay={400}>
            <View style={styles.section}>
              <Text
                style={[styles.sectionTitle, { color: colors.textPrimary }]}
              >
                Spending by Category
              </Text>
              <Card padding={12} variant="elevated">
                <PieChart
                  data={pieData}
                  width={W - 56}
                  height={180}
                  chartConfig={chartConfig}
                  accessor="amount"
                  backgroundColor="transparent"
                  paddingLeft="12"
                  hasLegend={false}
                  style={{ borderRadius: 12 }}
                />
                <View style={styles.legend}>
                  {pieData.map((d, i) => (
                    <View key={i} style={styles.legendItem}>
                      <View
                        style={[styles.legendDot, { backgroundColor: d.color }]}
                      />
                      <Text
                        style={[
                          styles.legendLabel,
                          { color: colors.textSecondary },
                        ]}
                        numberOfLines={1}
                      >
                        {d.name}
                      </Text>
                      <Text
                        style={[
                          styles.legendValue,
                          { color: colors.textPrimary },
                        ]}
                      >
                        {formatCurrency(d.amount, prefs.currency)}
                      </Text>
                    </View>
                  ))}
                </View>
              </Card>
            </View>
          </AnimatedSection>
        )}

        {/* Category Breakdown — staggered rows */}
        {catEntries.length > 0 && (
          <AnimatedSection delay={480}>
            <View style={styles.section}>
              <Text
                style={[styles.sectionTitle, { color: colors.textPrimary }]}
              >
                Category Breakdown
              </Text>
              <Card variant="elevated" padding={16}>
                {catEntries.map(([key, value], i) => {
                  const cat = getCategoryByKey(key);
                  const pct = totalExp > 0 ? value / totalExp : 0;
                  return (
                    <AnimatedSection
                      key={key}
                      delay={500 + i * 60}
                      distance={12}
                    >
                      <View
                        style={[
                          styles.catRow,
                          i < catEntries.length - 1 && { marginBottom: 14 },
                        ]}
                      >
                        <View
                          style={[
                            styles.catDot,
                            { backgroundColor: cat.color + "22" },
                          ]}
                        >
                          <Text style={{ fontSize: 13 }}>{cat.emoji}</Text>
                        </View>
                        <View style={styles.catInfo}>
                          <View style={styles.catHeader}>
                            <Text
                              style={[
                                styles.catName,
                                { color: colors.textPrimary },
                              ]}
                            >
                              {cat.label}
                            </Text>
                            <Text
                              style={[
                                styles.catAmount,
                                { color: colors.textPrimary },
                              ]}
                            >
                              {formatCurrency(value, prefs.currency)}
                            </Text>
                          </View>
                          <ProgressBar
                            progress={pct}
                            color={cat.color}
                            height={5}
                            backgroundColor={colors.border}
                          />
                        </View>
                      </View>
                    </AnimatedSection>
                  );
                })}
              </Card>
            </View>
          </AnimatedSection>
        )}

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/** Animated filter pill with scale press feedback */
function FilterPill({
  label,
  active,
  activeColor,
  cardColor,
  borderColor,
  textColor,
  onPress,
}: {
  label: string;
  active: boolean;
  activeColor: string;
  cardColor: string;
  borderColor: string;
  textColor: string;
  onPress: () => void;
}) {
  const scale = React.useRef(new Animated.Value(1)).current;
  const press = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.97,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
    onPress();
  };
  return (
    <TouchableOpacity onPress={press} activeOpacity={1}>
      <Animated.View
        style={[
          styles.filterBtn,
          {
            backgroundColor: active ? activeColor : cardColor,
            borderColor: active ? activeColor : borderColor,
            transform: [{ scale }],
          },
        ]}
      >
        <Text
          style={[styles.filterText, { color: active ? "#fff" : textColor }]}
        >
          {label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

function TravelStat({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <View style={styles.travelStat}>
      <Text style={[styles.travelStatValue, { color }]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.travelStatLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 32 },
  filterRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    gap: 8,
    marginBottom: 16,
  },
  filterBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: Theme.radius.full,
    borderWidth: 1,
    alignItems: "center",
  },
  filterText: { fontSize: 13, fontWeight: "600" },
  summaryRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    gap: 8,
    marginBottom: 8,
  },
  summaryCard: { flex: 1, alignItems: "center", padding: 12 },
  statValue: { fontSize: 15, fontWeight: "800", marginBottom: 2 },
  statLabel: { fontSize: 11, fontWeight: "500" },
  section: { paddingHorizontal: Theme.spacing.md, marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  travelStatsGrid: { flexDirection: "row", gap: 8 },
  travelStat: { flex: 1, alignItems: "center" },
  travelStatValue: { fontSize: 13, fontWeight: "800", marginBottom: 3 },
  travelStatLabel: { fontSize: 10, fontWeight: "700", color: "#8A86A8" },
  lockedTravelStats: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  lockedTravelStatsText: { flex: 1, fontSize: 13, fontWeight: "700" },
  noData: { alignItems: "center", paddingVertical: 24, gap: 8 },
  noDataEmoji: { fontSize: 36 },
  noDataText: { fontSize: 14 },
  legend: { marginTop: 12, gap: 8 },
  legendItem: { flexDirection: "row", alignItems: "center", gap: 8 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendLabel: { flex: 1, fontSize: 13 },
  legendValue: { fontSize: 13, fontWeight: "700" },
  catRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  catDot: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  catInfo: { flex: 1, gap: 6 },
  catHeader: { flexDirection: "row", justifyContent: "space-between" },
  catName: { fontSize: 14, fontWeight: "600" },
  catAmount: { fontSize: 14, fontWeight: "700" },
});
