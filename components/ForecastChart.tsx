import { Colors } from "@/constants/Colors";
import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

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
  const height = 180;
  const padding = 8;
  const values = data.map((point) => point.value);
  const maxValue = Math.max(...values, 1);
  const chartWidth = Math.max(width - padding * 2, 1);
  const chartHeight = height - padding * 2;
  const denominator = Math.max(data.length - 1, 1);
  const coordinates = data.map((point, index) => ({
    x: padding + (index / denominator) * chartWidth,
    y: padding + (1 - point.value / maxValue) * chartHeight,
  }));
  const linePath = coordinates
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)},${point.y.toFixed(1)}`)
    .join(" ");
  const first = coordinates[0];
  const last = coordinates[coordinates.length - 1];
  const areaPath = `${linePath} L${last.x.toFixed(1)},${(height - padding).toFixed(1)} L${first.x.toFixed(1)},${(height - padding).toFixed(1)} Z`;

  return (
    <Svg
      width={width}
      height={height}
      accessibilityLabel="Monthly spending forecast chart"
      accessible
    >
      <Defs>
        <LinearGradient id="forecastFill" x1="0" x2="0" y1="0" y2="1">
          <Stop offset="0" stopColor={colors.primary} stopOpacity="0.32" />
          <Stop offset="1" stopColor={colors.primary} stopOpacity="0" />
        </LinearGradient>
      </Defs>
      <Path d={areaPath} fill="url(#forecastFill)" />
      <Path
        d={linePath}
        fill="none"
        stroke={colors.primary}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
