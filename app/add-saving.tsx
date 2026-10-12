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
import { formatCurrency } from '@/utils/formatters';

const GOAL_COLORS = ['#6C3FEF','#34C47C','#F45B69','#FFAD0D','#4ECDC4','#9B59B6','#2980B9','#E74C3C','#27AE60','#1ABC9C'];

function isValidDateInput(value: string): boolean {
  return value.trim().length > 0 && !Number.isNaN(new Date(value).getTime());
}

export default function AddSavingScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { addSavingGoal, prefs } = useApp();

  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState(() => {
    const d = new Date(); d.setMonth(d.getMonth() + 3);
    return d.toISOString().split('T')[0];
  });
  const [color, setColor] = useState(GOAL_COLORS[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = 'Title is required';
    if (!target || isNaN(parseFloat(target)) || parseFloat(target) <= 0) e.target = 'Enter a valid target amount';
    if (!isValidDateInput(deadline)) e.deadline = 'Enter a valid target date';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    addSavingGoal({ title: title.trim(), targetAmount: parseFloat(target), deadline: new Date(deadline).toISOString(), color });
    router.back();
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>New Savings Goal</Text>
          <View style={styles.closeBtn} />
        </View>

        <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>
          {/* Preview Card */}
          <View style={[styles.preview, { backgroundColor: color + '18', borderColor: color + '40' }]}>
            <View style={[styles.previewDot, { backgroundColor: color }]} />
            <Text style={[styles.previewTitle, { color: colors.textPrimary }]}>
              {title || 'Your Goal Name'}
            </Text>
            <Text style={[styles.previewAmount, { color }]}>
              {formatCurrency(parseFloat(target || '0'), prefs.currency)}
            </Text>
            <Text style={[styles.previewSub, { color: colors.textSecondary }]}>target goal</Text>
          </View>

          <Input label="Goal Name" value={title} onChangeText={setTitle} placeholder="e.g. Emergency Fund" error={errors.title} />
          <Input label="Target Amount" value={target} onChangeText={setTarget} keyboardType="decimal-pad" placeholder="0.00" prefix={formatCurrency(0, prefs.currency).replace(/[0-9.,\s]/g, '')} error={errors.target} />
          <Input label="Target Date" value={deadline} onChangeText={setDeadline} placeholder="YYYY-MM-DD" error={errors.deadline} />

          {/* Color Picker */}
          <Text style={[styles.colorLabel, { color: colors.textSecondary }]}>Pick a Color</Text>
          <View style={styles.colorRow}>
            {GOAL_COLORS.map(c => (
              <TouchableOpacity
                key={c}
                onPress={() => setColor(c)}
                style={[styles.colorDot, { backgroundColor: c }, color === c && styles.selectedDot]}
              >
                {color === c && <Ionicons name="checkmark" size={14} color="#fff" />}
              </TouchableOpacity>
            ))}
          </View>

          <Button title="Create Goal" onPress={handleSave} style={{ marginTop: 8 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: Theme.spacing.md, borderBottomWidth: 1 },
  closeBtn: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '700' },
  form: { padding: Theme.spacing.md, paddingBottom: 40, gap: 4 },
  preview: { borderRadius: Theme.radius.xl, borderWidth: 1.5, padding: 20, alignItems: 'center', marginBottom: 20, gap: 4 },
  previewDot: { width: 12, height: 12, borderRadius: 6, marginBottom: 4 },
  previewTitle: { fontSize: 18, fontWeight: '700' },
  previewAmount: { fontSize: 32, fontWeight: '800', letterSpacing: -1 },
  previewSub: { fontSize: 12 },
  colorLabel: { fontSize: 13, fontWeight: '500', marginBottom: 10 },
  colorRow: { flexDirection: 'row', gap: 10, flexWrap: 'wrap', marginBottom: 20 },
  colorDot: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  selectedDot: { borderWidth: 3, borderColor: 'rgba(255,255,255,0.7)', transform: [{ scale: 1.15 }] },
});
