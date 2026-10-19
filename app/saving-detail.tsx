import React, { useState, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  TextInput, KeyboardAvoidingView, Platform, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useLocalSearchParams } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useApp } from '@/context/AppContext';
import { formatCurrency, formatShortDate, getDaysRemaining } from '@/utils/formatters';
import { ProgressBar } from '@/components/ProgressBar';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import ConfettiCannon from 'react-native-confetti-cannon';

function getParamValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default function SavingDetailScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { savingGoals, depositToGoal, deleteSavingGoal, prefs } = useApp();
  const params = useLocalSearchParams<{ id?: string }>();
  const id = getParamValue(params.id);
  const goal = savingGoals.find(g => g.id === id);
  const [depositInput, setDepositInput] = useState('');
  const [depositing, setDepositing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef<any>(null);

  if (!goal) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
        <View style={styles.center}>
          <Text style={[styles.notFound, { color: colors.textPrimary }]}>Goal not found</Text>
          <Button title="Go Back" onPress={() => router.back()} fullWidth={false} />
        </View>
      </SafeAreaView>
    );
  }

  const activeGoal = goal;
  const progress = activeGoal.targetAmount > 0 ? Math.min(1, activeGoal.currentAmount / activeGoal.targetAmount) : 0;
  const pct = Math.round(progress * 100);
  const remaining = Math.max(0, activeGoal.targetAmount - activeGoal.currentAmount);
  const daysLeft = getDaysRemaining(activeGoal.deadline);

  function handleDeposit() {
    const val = parseFloat(depositInput);
    if (isNaN(val) || val <= 0) { Alert.alert('Invalid', 'Enter a valid deposit amount'); return; }
    
    depositToGoal(activeGoal.id, val);
    setDepositInput('');
    setDepositing(false);
    
    // Check if this deposit completed the goal
    if (activeGoal.currentAmount + val >= activeGoal.targetAmount && activeGoal.currentAmount < activeGoal.targetAmount) {
      setShowConfetti(true);
    }
  }

  function handleDelete() {
    Alert.alert('Delete Goal', 'This will permanently delete this savings goal.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => { deleteSavingGoal(activeGoal.id); router.back(); } },
    ]);
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.textPrimary }]} numberOfLines={1}>{activeGoal.title}</Text>
          <TouchableOpacity onPress={handleDelete} style={[styles.iconBtn, { backgroundColor: colors.dangerLight }]}>
            <Ionicons name="trash-outline" size={20} color={colors.danger} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Hero */}
          <View style={[styles.hero, { backgroundColor: activeGoal.color + '14' }]}>
            <Text style={[styles.heroLabel, { color: activeGoal.color }]}>Current Savings</Text>
            <Text style={[styles.heroAmount, { color: activeGoal.color }]}>{formatCurrency(activeGoal.currentAmount, prefs.currency)}</Text>
            <Text style={[styles.heroTarget, { color: colors.textSecondary }]}>
              of {formatCurrency(activeGoal.targetAmount, prefs.currency)} goal
            </Text>

            <View style={styles.progressWrap}>
              <ProgressBar progress={progress} color={activeGoal.color} height={10} backgroundColor={colors.border} />
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={[styles.statVal, { color: colors.textPrimary }]}>{pct}%</Text>
                <Text style={[styles.statLbl, { color: colors.textSecondary }]}>Complete</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
              <View style={styles.statItem}>
                <Text style={[styles.statVal, { color: colors.textPrimary }]}>{formatCurrency(remaining, prefs.currency)}</Text>
                <Text style={[styles.statLbl, { color: colors.textSecondary }]}>Remaining</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
              <View style={styles.statItem}>
                <Text style={[styles.statVal, { color: colors.textPrimary }]}>{daysLeft}</Text>
                <Text style={[styles.statLbl, { color: colors.textSecondary }]}>Days Left</Text>
              </View>
            </View>
          </View>

          {/* Deposit */}
          <View style={{ paddingHorizontal: Theme.spacing.md }}>
            {depositing ? (
              <Card variant="elevated" style={styles.depositCard}>
                <Text style={[styles.depositTitle, { color: colors.textPrimary }]}>Add Money</Text>
                <View style={[styles.depositRow, { backgroundColor: colors.inputBg, borderColor: activeGoal.color }]}>
                  <Text style={[styles.depositDollar, { color: activeGoal.color }]}>$</Text>
                  <TextInput
                    style={[styles.depositInput, { color: colors.textPrimary }]}
                    value={depositInput}
                    onChangeText={setDepositInput}
                    keyboardType="decimal-pad"
                    placeholder="0.00"
                    placeholderTextColor={colors.textTertiary}
                    autoFocus
                  />
                </View>
                <View style={styles.depositBtns}>
                  <Button title="Cancel" variant="secondary" onPress={() => setDepositing(false)} style={{ flex: 1 }} />
                  <Button title="Add" onPress={handleDeposit} style={{ flex: 1 }} />
                </View>
              </Card>
            ) : (
              <Button
                title={`+ Add Money to ${activeGoal.title}`}
                onPress={() => setDepositing(true)}
                style={{ marginBottom: 20 }}
              />
            )}

            {/* Deposit History */}
            {activeGoal.deposits.length > 0 && (
              <>
                <Text style={[styles.historyTitle, { color: colors.textPrimary }]}>Deposit History</Text>
                <Card padding={0} noBorder>
                  {[...activeGoal.deposits].reverse().map((d, i) => (
                    <View key={i}>
                      <View style={styles.depositItem}>
                        <View style={[styles.depositIcon, { backgroundColor: activeGoal.color + '20' }]}>
                          <Ionicons name="arrow-up" size={16} color={activeGoal.color} />
                        </View>
                        <Text style={[styles.depositDate, { color: colors.textSecondary }]}>{formatShortDate(d.date)}</Text>
                        <Text style={[styles.depositAmount, { color: activeGoal.color }]}>+{formatCurrency(d.amount, prefs.currency)}</Text>
                      </View>
                      {i < activeGoal.deposits.length - 1 && <View style={[styles.sep, { backgroundColor: colors.separator }]} />}
                    </View>
                  ))}
                </Card>
              </>
            )}
          </View>

          <View style={{ height: 32 }} />
        </ScrollView>
      </KeyboardAvoidingView>
      {showConfetti && Platform.OS !== 'web' && (
        <ConfettiCannon
          ref={confettiRef}
          count={200}
          origin={{ x: -10, y: 0 }}
          autoStart={true}
          fadeOut={true}
          onAnimationEnd={() => setShowConfetti(false)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 },
  notFound: { fontSize: 18, fontWeight: '700' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: Theme.spacing.md, borderBottomWidth: 1 },
  iconBtn: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 17, fontWeight: '700', marginHorizontal: 8 },
  scroll: { paddingBottom: 40 },
  hero: { margin: Theme.spacing.md, borderRadius: Theme.radius.xl, padding: 24, alignItems: 'center', gap: 4 },
  heroLabel: { fontSize: 13, fontWeight: '600' },
  heroAmount: { fontSize: 44, fontWeight: '800', letterSpacing: -2 },
  heroTarget: { fontSize: 14, marginBottom: 16 },
  progressWrap: { width: '100%', marginBottom: 20 },
  statsRow: { flexDirection: 'row', alignItems: 'center', width: '100%' },
  statItem: { flex: 1, alignItems: 'center' },
  statVal: { fontSize: 16, fontWeight: '800' },
  statLbl: { fontSize: 11, fontWeight: '500', marginTop: 2 },
  statDivider: { width: 1, height: 36, marginHorizontal: 8 },
  depositCard: { marginBottom: 20, gap: 12 },
  depositTitle: { fontSize: 16, fontWeight: '700' },
  depositRow: { flexDirection: 'row', alignItems: 'center', borderRadius: Theme.radius.md, borderWidth: 2, paddingHorizontal: 16, height: 58 },
  depositDollar: { fontSize: 24, fontWeight: '800', marginRight: 4 },
  depositInput: { flex: 1, fontSize: 28, fontWeight: '700' },
  depositBtns: { flexDirection: 'row', gap: 10 },
  historyTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  depositItem: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: Theme.spacing.md, paddingVertical: 12 },
  depositIcon: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  depositDate: { flex: 1, fontSize: 14 },
  depositAmount: { fontSize: 15, fontWeight: '700' },
  sep: { height: 1, marginHorizontal: Theme.spacing.md },
});
