import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type PageHeaderProps = {
  /** Small label above the title (e.g. "Analytics") */
  eyebrow?: string;
  /** Main page title */
  title: string;
  /** Optional large value displayed prominently (e.g. total spent) */
  value?: string | React.ReactNode;
  /** Color for the value text */
  valueColor?: string;
  /** Optional subtitle / description below the value */
  subtitle?: string;
  /** Optional right-side slot for buttons / icons */
  right?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, value, valueColor, subtitle, right }: PageHeaderProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.textBlock}>
          {eyebrow ? (
            <Text style={[styles.eyebrow, { color: colors.primary }]}>{eyebrow}</Text>
          ) : null}
          <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
          {value ? (
            typeof value === 'string' ? (
              <Text style={[styles.value, { color: valueColor ?? colors.primary }]}>{value}</Text>
            ) : (
              <View style={{ marginTop: 4 }}>{value}</View>
            )
          ) : null}
          {subtitle ? (
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{subtitle}</Text>
          ) : null}
        </View>
        {right ? <View style={styles.rightSlot}>{right}</View> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.spacing.md,
    paddingTop: 16,
    paddingBottom: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textBlock: {
    flex: 1,
    gap: 2,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  title: {
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: -1,
  },
  value: {
    fontSize: 24,
    fontWeight: '900',
    marginTop: 4,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 2,
  },
  rightSlot: {
    marginLeft: 12,
    alignItems: 'flex-end',
  },
});
