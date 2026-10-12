import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  prefix?: string;
  suffix?: string;
}

export function Input({
  label,
  error,
  prefix,
  suffix,
  style,
  ...props
}: InputProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [focused, setFocused] = useState(false);
  const borderWidthAnim = useRef(new Animated.Value(0)).current;
  const labelColorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(labelColorAnim, {
      toValue: focused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(borderWidthAnim, {
      toValue: focused ? 1.5 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused, borderWidthAnim, labelColorAnim]);

  const labelColor = labelColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.textSecondary, colors.primary],
  });

  const borderWidth = borderWidthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  return (
    <View style={styles.container}>
      {label ? (
        <Animated.Text style={[styles.label, { color: labelColor }]}>
          {label}
        </Animated.Text>
      ) : null}
      <Animated.View
        style={[
          styles.row,
          {
            backgroundColor: colors.inputBg,
            borderColor: focused
              ? colors.primary
              : error
                ? colors.danger
                : colors.inputBorder,
            borderWidth,
          },
        ]}
      >
        {prefix ? (
          <Text style={[styles.affix, { color: colors.textSecondary }]}>
            {prefix}
          </Text>
        ) : null}
        <TextInput
          {...props}
          style={[styles.input, style, { color: colors.textPrimary }]}
          placeholderTextColor={colors.textTertiary}
          onFocus={(event) => {
            setFocused(true);
            props.onFocus?.(event);
          }}
          onBlur={(event) => {
            setFocused(false);
            props.onBlur?.(event);
          }}
        />
        {suffix ? (
          <Text style={[styles.affix, { color: colors.textSecondary }]}>
            {suffix}
          </Text>
        ) : null}
      </Animated.View>
      {error ? (
        <Text style={[styles.error, { color: colors.danger }]}>{error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: Theme.spacing.md },
  label: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 6,
    letterSpacing: 0.1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    paddingHorizontal: Theme.spacing.md,
    height: 52,
  },
  affix: { fontSize: 16, fontWeight: "600", marginRight: 4 },
  input: { flex: 1, fontSize: 16, fontWeight: "500" },
  error: { fontSize: 12, marginTop: 4 },
});
