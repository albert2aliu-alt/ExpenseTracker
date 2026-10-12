import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useApp } from '@/context/AppContext';
import { CATEGORIES } from '@/utils/categories';
import { CategoryIcon } from '@/components/CategoryIcon';
import { formatCurrency } from '@/utils/formatters';

export default function ManageBudgetsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { categoryBudgets, setCategoryBudget, prefs } = useApp();

  const [editCat, setEditCat] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  function handleSave(catKey: string) {
    const val = parseFloat(inputValue);
    if (!isNaN(val) && val >= 0) {
      setCategoryBudget(catKey, val);
    } else if (inputValue === '') {
      // Clear budget if empty
      setCategoryBudget(catKey, 0);
    }
    setEditCat(null);
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Budget Limits</Text>
          <View style={styles.closeBtn} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
          <Text style={[styles.desc, { color: colors.textSecondary }]}>
            Set monthly spending limits for each category. We&apos;ll warn you when you get close to your limit.
          </Text>

          {CATEGORIES.map(cat => {
            const budget = categoryBudgets[cat.key] || 0;
            const isEditing = editCat === cat.key;

            return (
              <View key={cat.key} style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={[styles.iconWrap, { backgroundColor: cat.color + '20' }]}>
                  <CategoryIcon category={cat.key} size={36} />
                </View>
                <View style={styles.info}>
                  <Text style={[styles.catName, { color: colors.textPrimary }]}>{cat.label}</Text>
                  
                  {isEditing ? (
                    <View style={styles.editWrap}>
                      <TextInput
                        style={[styles.input, { color: colors.textPrimary, borderColor: colors.primary }]}
                        value={inputValue}
                        onChangeText={setInputValue}
                        keyboardType="decimal-pad"
                        placeholder="0.00"
                        placeholderTextColor={colors.textTertiary}
                        autoFocus
                        onBlur={() => handleSave(cat.key)}
                        onSubmitEditing={() => handleSave(cat.key)}
                      />
                      <TouchableOpacity onPress={() => handleSave(cat.key)} style={[styles.saveBtn, { backgroundColor: colors.primary }]}>
                        <Ionicons name="checkmark" size={16} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={() => { setEditCat(cat.key); setInputValue(budget ? budget.toString() : ''); }}>
                      <Text style={[styles.amount, { color: budget ? colors.primary : colors.textTertiary }]}>
                        {budget ? formatCurrency(budget, prefs.currency) + ' / mo' : 'Tap to set limit'}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            );
          })}
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
  list: { padding: Theme.spacing.md, paddingBottom: 40, gap: 12 },
  desc: { fontSize: 14, marginBottom: 8, lineHeight: 20 },
  row: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: Theme.radius.lg, borderWidth: 1, gap: 12 },
  iconWrap: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  info: { flex: 1 },
  catName: { fontSize: 15, fontWeight: '600', marginBottom: 4 },
  amount: { fontSize: 15, fontWeight: '700' },
  editWrap: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  input: { flex: 1, borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6, fontSize: 15, fontWeight: '700' },
  saveBtn: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
});
