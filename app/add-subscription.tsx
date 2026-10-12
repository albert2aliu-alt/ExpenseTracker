import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useApp } from '@/context/AppContext';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { CATEGORIES } from '@/utils/categories';
import { CategoryIcon } from '@/components/CategoryIcon';

export default function AddSubscriptionScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { addSubscription } = useApp();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].key);
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = 'Title is required';
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) e.amount = 'Enter a valid amount';
    if (!startDate.trim() || Number.isNaN(new Date(startDate).getTime())) e.startDate = 'Enter a valid date';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    addSubscription({
      title: title.trim(),
      amount: parseFloat(amount),
      category,
      period,
      startDate: new Date(startDate).toISOString(),
    });
    router.back();
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>New Subscription</Text>
          <View style={styles.closeBtn} />
        </View>

        <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>
          <Input label="Subscription Name" value={title} onChangeText={setTitle} placeholder="e.g. Netflix" error={errors.title} />
          <Input label="Amount" value={amount} onChangeText={setAmount} keyboardType="decimal-pad" placeholder="0.00" error={errors.amount} />
          <Input label="Start Date (or Next Billing Date)" value={startDate} onChangeText={setStartDate} placeholder="YYYY-MM-DD" error={errors.startDate} />

          <Text style={[styles.label, { color: colors.textSecondary }]}>Billing Period</Text>
          <View style={styles.periodRow}>
            {(['monthly', 'yearly'] as const).map(p => (
              <TouchableOpacity
                key={p}
                onPress={() => setPeriod(p)}
                style={[
                  styles.periodBtn,
                  { backgroundColor: period === p ? colors.primary : colors.card, borderColor: period === p ? colors.primary : colors.border }
                ]}
              >
                <Text style={[styles.periodText, { color: period === p ? '#fff' : colors.textPrimary }]}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[styles.label, { color: colors.textSecondary }]}>Category</Text>
          <View style={styles.catGrid}>
            {CATEGORIES.map(cat => (
              <TouchableOpacity
                key={cat.key}
                onPress={() => setCategory(cat.key)}
                style={[
                  styles.catBtn,
                  {
                    backgroundColor: category === cat.key ? cat.color + '22' : colors.card,
                    borderColor: category === cat.key ? cat.color : colors.border,
                    borderWidth: category === cat.key ? 2 : 1,
                  }
                ]}
              >
                <CategoryIcon category={cat.key} size={36} />
                <Text style={[styles.catName, { color: category === cat.key ? cat.color : colors.textSecondary }]} numberOfLines={1}>
                  {cat.label.split(' ')[0]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button title="Save Subscription" onPress={handleSave} style={{ marginTop: 20 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.spacing.md,
    paddingTop: Platform.OS === 'android' ? 10 : Theme.spacing.md,
    paddingBottom: Theme.spacing.md,
    borderBottomWidth: 1,
  },
  closeBtn: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '700' },
  form: { padding: Theme.spacing.md, paddingBottom: 40, gap: 12 },
  label: { fontSize: 13, fontWeight: '500', marginTop: 8 },
  periodRow: { flexDirection: 'row', gap: 12 },
  periodBtn: { flex: 1, paddingVertical: 12, borderRadius: Theme.radius.md, borderWidth: 1, alignItems: 'center' },
  periodText: { fontSize: 15, fontWeight: '600' },
  catGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  catBtn: { width: '18%', alignItems: 'center', padding: 8, borderRadius: Theme.radius.md, gap: 4 },
  catName: { fontSize: 9, textAlign: 'center', fontWeight: '600' },
});
