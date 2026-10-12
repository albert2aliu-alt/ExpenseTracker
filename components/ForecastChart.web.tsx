import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";

export interface ForecastPoint {
  timestamp: number;
  value: number;
}

export function ForecastChart({
  data,
  width,
  colors,
}: {
  data: ForecastPoint[];
  width: number;
  colors: typeof Colors.light;
}) {
  const maxValue = Math.max(...data.map((point) => point.value), 1);
  const sample = data.filter((_, index) => index % Math.max(1, Math.floor(data.length / 18)) === 0);

  return (
    <View style={[styles.chart, { width }]}>
      {sample.map((point) => (
        <View key={point.timestamp} style={styles.barSlot}>
          <View
            style={[
              styles.bar,
              {
                height: `${Math.max(6, (point.value / maxValue) * 100)}%`,
                backgroundColor: colors.primary,
              },
            ]}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    height: 180,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 3,
    paddingTop: 12,
  },
  barSlot: { flex: 1, height: "100%", justifyContent: "flex-end" },
  bar: { width: "100%", borderRadius: 999, opacity: 0.7 },
});
