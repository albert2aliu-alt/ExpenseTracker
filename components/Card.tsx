  import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'elevated' | 'flat';
  padding?: number;
  noBorder?: boolean;
}

export function Card({ children, style, variant = 'default', padding = Theme.spacing.md, noBorder }: CardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  return (
    <View style={[
      styles.base,
      { backgroundColor: colors.card, borderColor: noBorder ? 'transparent' : colors.cardBorder, borderWidth: noBorder ? 0 : 1, padding },
      variant === 'elevated' && Theme.shadow.md,
      variant === 'default' && Theme.shadow.sm,
      style,
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({ base: { borderRadius: Theme.radius.lg, overflow: 'hidden' } });
