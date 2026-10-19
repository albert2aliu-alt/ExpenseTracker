import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { Expense, useApp } from '@/context/AppContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getCategoryByKey } from '@/utils/categories';
import { formatWithCurrency } from '@/utils/currency';
import { formatCurrency, formatShortDate } from '@/utils/formatters';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { CategoryIcon } from './CategoryIcon';

interface ExpenseItemProps {
  expense: Expense;
  onPress?: () => void;
  onDelete?: () => void;
}

export function ExpenseItem({ expense, onPress, onDelete }: ExpenseItemProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const cat = getCategoryByKey(expense.category);
  const { prefs } = useApp();
  const travelLabel = expense.isTravelExpense && expense.originalAmount && expense.originalCurrency
    ? `${formatWithCurrency(expense.originalAmount, expense.originalCurrency)} travel`
    : null;

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity onPress={onDelete} style={styles.deleteAction} activeOpacity={0.8}>
        <Animated.View style={[styles.deleteIconWrap, { transform: [{ scale }] }]}>
          <Ionicons name="trash" size={24} color="#fff" />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const itemContent = (
    <TouchableOpacity
      activeOpacity={0.72}
      onPress={onPress}
      style={[styles.container, { backgroundColor: colors.card }]}
    >
      <CategoryIcon category={expense.category} size={46} />
      <View style={styles.info}>
        <Text style={[styles.title, { color: colors.textPrimary }]} numberOfLines={1}>{expense.title}</Text>
        <Text style={[styles.meta, { color: colors.textSecondary }]}>
          {cat.label}  ·  {formatShortDate(expense.date)}
        </Text>
        {travelLabel && (
          <View style={[styles.travelPill, { backgroundColor: '#4ECDC418' }]}>
            <Ionicons name="airplane" size={10} color="#4ECDC4" />
            <Text style={styles.travelText}>{travelLabel}</Text>
          </View>
        )}
      </View>
      <Text style={[styles.amount, { color: colors.danger }]}>-{formatCurrency(expense.amount, prefs.currency)}</Text>
    </TouchableOpacity>
  );

  if (onDelete) {
    return (
      <Swipeable
        renderRightActions={renderRightActions}
        overshootRight={false}
        rightThreshold={36}
        friction={2}
      >
        {itemContent}
      </Swipeable>
    );
  }

  return itemContent;
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', paddingVertical: 11, paddingHorizontal: Theme.spacing.md, gap: 13 },
  info: { flex: 1 },
  title: { fontSize: 15, fontWeight: '600', marginBottom: 2 },
  meta: { fontSize: 12 },
  amount: { fontSize: 15, fontWeight: '700', marginLeft: 8 },
  travelPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: Theme.radius.full,
    paddingHorizontal: 7,
    paddingVertical: 3,
    marginTop: 5,
  },
  travelText: { color: '#4ECDC4', fontSize: 10, fontWeight: '800' },
  deleteAction: {
    backgroundColor: '#FF6B7A',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  deleteIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
