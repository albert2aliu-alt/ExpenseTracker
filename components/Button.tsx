import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "md",
  style,
  textStyle,
  disabled,
  fullWidth = true,
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { prefs } = useApp();
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () =>
    Animated.timing(scale, {
      toValue: 0.96,
      duration: 120,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 120,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };
  const handlePress = () => {
    if (prefs.haptics)
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onPress();
  };

  const heights: Record<string, number> = { sm: 42, md: 54, lg: 62 };
  const fontSizes: Record<string, number> = { sm: 14, md: 16, lg: 18 };

  const baseStyle = [
    styles.btn,
    { height: heights[size], opacity: disabled ? 0.6 : 1 },
    fullWidth && { alignSelf: "stretch" as const },
  ];

  if (variant === "primary") {
    return (
      <Animated.View
        style={[{ transform: [{ scale }] }, fullWidth && styles.stretch, style]}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          disabled={disabled}
        >
          <LinearGradient
            colors={colors.primaryGradient as [string, string, ...string[]]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={baseStyle}
          >
            <Text
              style={[
                styles.primaryText,
                { fontSize: fontSizes[size] },
                textStyle,
              ]}
            >
              {title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  if (variant === "danger") {
    return (
      <Animated.View
        style={[{ transform: [{ scale }] }, fullWidth && styles.stretch, style]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          disabled={disabled}
          style={[
            baseStyle,
            {
              borderWidth: 1.5,
              borderColor: colors.danger,
              borderRadius: Theme.radius.md,
              backgroundColor: colors.dangerLight,
            },
          ]}
        >
          <Text
            style={[
              styles.dangerText,
              { fontSize: fontSizes[size], color: colors.danger },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
    <Animated.View
      style={[{ transform: [{ scale }] }, fullWidth && styles.stretch, style]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        style={[
          baseStyle,
          {
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.inputBg,
            borderRadius: Theme.radius.md,
          },
        ]}
      >
        <Text
          style={[
            styles.secText,
            { fontSize: fontSizes[size], color: colors.textPrimary },
            textStyle,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: Theme.radius.full,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  stretch: { alignSelf: "stretch" },
  primaryText: { color: "#fff", fontWeight: "700", letterSpacing: 0.2 },
  dangerText: { fontWeight: "600", letterSpacing: 0.2 },
  secText: { fontWeight: "600", letterSpacing: 0.2 },
});
