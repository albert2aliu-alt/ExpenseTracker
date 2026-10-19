// Financial Goal Simulator screen
import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedSection from "@/components/AnimatedSection";
import { PageHeader } from "@/components/PageHeader";
import PressableScale from "@/components/PressableScale";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { calcProjection, ProjectionPoint } from "@/utils/forecast";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useCallback, useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

// ── Main screen ────────────────────────────────────────────────────────
export default function SimulatorScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { width } = useWindowDimensions();

  // 5 slider controls
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(200);
  const [rate, setRate] = useState(5); // annual %
  const [years, setYears] = useState(10);
  const [targetGoal, setTargetGoal] = useState(15000);

  const projection: ProjectionPoint[] = useMemo(
    () => calcProjection(initial, monthly, rate, years),
    [initial, monthly, rate, years],
  );

  // Build chart data – sample ~12 labels max for readability
  const chartData = useMemo(() => {
    if (projection.length === 0) return null;
    const totalPoints = projection.length;
    const sampleStep = Math.max(1, Math.floor(totalPoints / 12));
    const sampled: ProjectionPoint[] = projection.filter(
      (_, i) => i % sampleStep === 0 || i === totalPoints - 1,
    );
    return {
      labels: sampled.map((p) => {
        const yr = Math.floor(p.month / 12);
        const mo = p.month % 12;
        return yr > 0 ? `${yr}y` : `${mo}m`;
      }),
      datasets: [
        {
          data: sampled.map((p) => p.balance),
          color: (opacity = 1) => `rgba(108, 63, 239, ${opacity})`,
          strokeWidth: 3,
        },
        {
          data: sampled.map(() => targetGoal),
          color: (opacity = 1) => `rgba(52, 196, 124, ${opacity})`,
          strokeWidth: 2,
        },
      ],
      legend: ["Projected", "Goal"],
    };
  }, [projection, targetGoal]);

  const finalBalance =
    projection.length > 0 ? projection[projection.length - 1].balance : 0;
  const reachesGoal = finalBalance >= targetGoal;

  const chartConfig = {
    backgroundColor: colors.card,
    backgroundGradientFrom: colors.card,
    backgroundGradientTo: colors.card,
    color: (opacity = 1) => `rgba(108, 63, 239, ${opacity})`,
    labelColor: () => colors.textSecondary,
    decimalPlaces: 0,
    propsForBackgroundLines: { stroke: colors.border, strokeDasharray: "" },
    propsForDots: { r: "3", strokeWidth: "1" },
  };

  const handleSave = useCallback(() => {
    alert("Simulation saved (preview only).");
  }, []);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <AnimatedSection delay={0} distance={-20}>
          <PageHeader
            eyebrow="Forecast"
            title="Goal Simulator"
            value={
              <AnimatedNumber
                value={finalBalance}
                format={(n) => "$" + Math.round(n).toLocaleString()}
                style={{
                  fontSize: 22,
                  fontWeight: "800",
                  color: reachesGoal ? colors.success : colors.danger,
                  letterSpacing: -0.5,
                }}
              />
            }
            subtitle="Project savings with compound interest"
          />
        </AnimatedSection>

        {/* Result banner */}
        <AnimatedSection delay={80}>
          <View
            style={[
              styles.resultCard,
              {
                backgroundColor: reachesGoal
                  ? colors.successLight
                  : colors.dangerLight,
              },
            ]}
          >
            <Ionicons
              name={reachesGoal ? "checkmark-circle" : "alert-circle"}
              size={22}
              color={reachesGoal ? colors.success : colors.danger}
            />
            <View style={styles.resultBody}>
              <Text
                style={[
                  styles.resultTitle,
                  { color: reachesGoal ? colors.success : colors.danger },
                ]}
              >
                {reachesGoal ? "Goal Reached!" : "Not Enough"}
              </Text>
              <Text style={[styles.resultSub, { color: colors.textSecondary }]}>
                {"Projected: $" +
                  Math.round(finalBalance).toLocaleString() +
                  " in " +
                  years +
                  (years > 1 ? " yrs" : " yr")}
              </Text>
            </View>
          </View>
        </AnimatedSection>

        {/* Chart */}
        {chartData && (
          <AnimatedSection delay={160}>
            <View
              style={[
                styles.chartWrap,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <LineChart
                data={chartData}
                width={width - 56}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
                fromZero
                yAxisLabel="$"
                yAxisSuffix=""
              />
            </View>
          </AnimatedSection>
        )}

        {/* Sliders */}
        <AnimatedSection delay={240}>
          <View
            style={[
              styles.sliderCard,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <SliderRow
              label="Initial Amount"
              icon="cash-outline"
              value={initial}
              min={0}
              max={50000}
              step={100}
              prefix="$"
              trackColor={colors.primary}
              colors={colors}
              onChange={setInitial}
            />
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <SliderRow
              label="Monthly Contribution"
              icon="repeat-outline"
              value={monthly}
              min={0}
              max={5000}
              step={50}
              prefix="$"
              trackColor={colors.primary}
              colors={colors}
              onChange={setMonthly}
            />
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <SliderRow
              label="Annual Interest Rate"
              icon="trending-up-outline"
              value={rate}
              min={0}
              max={15}
              step={0.5}
              suffix="%"
              trackColor="#FFAD0D"
              colors={colors}
              onChange={setRate}
            />
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <SliderRow
              label="Time Horizon"
              icon="time-outline"
              value={years}
              min={1}
              max={30}
              step={1}
              suffix=" yrs"
              trackColor="#4ECDC4"
              colors={colors}
              onChange={setYears}
            />
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <SliderRow
              label="Target Goal"
              icon="flag-outline"
              value={targetGoal}
              min={1000}
              max={500000}
              step={1000}
              prefix="$"
              trackColor={colors.success}
              colors={colors}
              onChange={setTargetGoal}
            />
          </View>
        </AnimatedSection>

        {/* Save button */}
        <AnimatedSection delay={300}>
          <PressableScale
            style={[styles.saveBtn, { backgroundColor: colors.primary }]}
            onPress={handleSave}
          >
            <Ionicons name="bookmark-outline" size={20} color="#fff" />
            <Text style={styles.saveBtnText}>Save Simulation</Text>
          </PressableScale>
        </AnimatedSection>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Slider row component ───────────────────────────────────────────────
interface SliderRowProps {
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  trackColor: string;
  colors: typeof Colors.light;
  onChange: (v: number) => void;
}

function SliderRow({
  label,
  icon,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  trackColor,
  colors,
  onChange,
}: SliderRowProps) {
  const display =
    (prefix ?? "") +
    (step < 1 ? value.toFixed(1) : Math.round(value).toLocaleString()) +
    (suffix ?? "");

  const pct = ((value - min) / (max - min)) * 100;

  return (
    <View style={styles.sliderRow}>
      <View style={styles.sliderHeader}>
        <Ionicons name={icon} size={18} color={trackColor} />
        <Text style={[styles.sliderLabel, { color: colors.textPrimary }]}>
          {label}
        </Text>
        <Text style={[styles.sliderValue, { color: trackColor }]}>
          {display}
        </Text>
      </View>
      {/* Progress bar */}
      <View style={[styles.track, { backgroundColor: colors.border }]}>
        <View
          style={[
            styles.trackFill,
            {
              width: `${pct}%` as unknown as number,
              backgroundColor: trackColor,
            },
          ]}
        />
      </View>
      {/* +/- buttons */}
      <View style={styles.stepRow}>
        <PressableScale
          onPress={() => onChange(Math.max(min, value - step))}
          style={[styles.stepBtn, { borderColor: colors.border }]}
        >
          <Ionicons name="remove" size={16} color={colors.textSecondary} />
        </PressableScale>
        <PressableScale
          onPress={() => onChange(Math.max(min, value - step * 10))}
          style={[styles.stepBtn, { borderColor: colors.border }]}
        >
          <Text style={[styles.stepLabel, { color: colors.textSecondary }]}>
            -10
          </Text>
        </PressableScale>
        <View style={styles.flex1} />
        <PressableScale
          onPress={() => onChange(Math.min(max, value + step * 10))}
          style={[styles.stepBtn, { borderColor: colors.border }]}
        >
          <Text style={[styles.stepLabel, { color: colors.textSecondary }]}>
            +10
          </Text>
        </PressableScale>
        <PressableScale
          onPress={() => onChange(Math.min(max, value + step))}
          style={[styles.stepBtn, { borderColor: colors.border }]}
        >
          <Ionicons name="add" size={16} color={colors.textSecondary} />
        </PressableScale>
      </View>
    </View>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: {
    paddingHorizontal: Theme.spacing.md,
    paddingTop: 8,
    paddingBottom: 32,
  },
  title: { fontSize: 28, fontWeight: "800", letterSpacing: -0.8 },
  subtitle: { fontSize: 14, fontWeight: "500", marginTop: 4, marginBottom: 16 },
  flex1: { flex: 1 },
  bottomSpacer: { height: 32 },

  resultCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: Theme.radius.md,
    marginBottom: 16,
  },
  resultBody: { flex: 1, marginLeft: 10 },
  resultTitle: { fontSize: 15, fontWeight: "700" },
  resultSub: { fontSize: 12, marginTop: 2 },

  chartWrap: {
    borderRadius: Theme.radius.lg,
    padding: 8,
    borderWidth: 1,
    marginBottom: 16,
    overflow: "hidden",
  },
  chart: { borderRadius: 12 },

  sliderCard: {
    borderRadius: Theme.radius.lg,
    padding: 16,
    borderWidth: 1,
    marginBottom: 20,
  },
  divider: { height: 1, marginVertical: 14 },

  sliderRow: { gap: 8 },
  sliderHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  sliderLabel: { flex: 1, fontSize: 14, fontWeight: "600" },
  sliderValue: { fontSize: 15, fontWeight: "800" },

  track: { height: 6, borderRadius: 3, overflow: "hidden" },
  trackFill: { height: 6, borderRadius: 3 },

  stepRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  stepBtn: {
    width: 36,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  stepLabel: { fontSize: 11, fontWeight: "700" },

  saveBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: Theme.radius.full,
    gap: 8,
  },
  saveBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
