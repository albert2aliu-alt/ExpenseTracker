import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

interface ProgressBarProps {
  progress: number; // 0–1
  color: string;
  height?: number;
  backgroundColor?: string;
}

export function ProgressBar({
  progress,
  color,
  height = 8,
  backgroundColor = "#E8E6F0",
}: ProgressBarProps) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: Math.min(1, Math.max(0, progress)),
      duration: 240,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [progress, anim]);

  return (
    <View
      style={[
        styles.track,
        { height, backgroundColor, borderRadius: height / 2 },
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          {
            height,
            borderRadius: height / 2,
            backgroundColor: color,
            width: anim.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
            }),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { width: "100%", overflow: "hidden" },
  fill: {},
});
