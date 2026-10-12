import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useApp } from '@/context/AppContext';
import { formatCurrency } from '@/utils/formatters';

interface BalanceCardProps {
  balance: number;
  income: number;
  totalExpenses: number;
}

export function BalanceCard({ balance, income, totalExpenses }: BalanceCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { prefs } = useApp();
  const balanceText = prefs.showBalance ? formatCurrency(balance, prefs.currency) : '••••••';

  return (
    <LinearGradient
      colors={colors.primaryGradient as [string, string, ...string[]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.circle1} />
      <View style={styles.circle2} />

      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Total balance</Text>
          <Text style={styles.balance} accessibilityRole="header">
            {balanceText}
          </Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{prefs.currency}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Income</Text>
          <Text style={styles.statValue}>{formatCurrency(income, prefs.currency)}</Text>
        </View>
        <View style={styles.vDivider} />
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Spent</Text>
          <Text style={styles.statValue}>{formatCurrency(totalExpenses, prefs.currency)}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Theme.radius.xl,
    padding: Theme.spacing.lg,
    marginHorizontal: Theme.spacing.md,
    overflow: 'hidden',
    ...Theme.shadow.lg,
  },
  circle1: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255,255,255,0.08)',
    top: -50,
    right: -36,
  },
  circle2: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.05)',
    bottom: -36,
    left: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Theme.spacing.lg,
    gap: Theme.spacing.md,
  },
  label: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: Theme.fontSize.sm,
    fontWeight: Theme.fontWeight.medium,
    marginBottom: 4,
  },
  balance: {
    color: '#fff',
    fontSize: 36,
    fontWeight: Theme.fontWeight.extraBold,
    letterSpacing: -1,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: Theme.radius.full,
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center' },
  stat: { flex: 1, gap: 2 },
  vDivider: {
    width: 1,
    height: 36,
    backgroundColor: 'rgba(255,255,255,0.22)',
    marginHorizontal: Theme.spacing.md,
  },
  statLabel: { color: 'rgba(255,255,255,0.65)', fontSize: 11, fontWeight: '500' },
  statValue: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
