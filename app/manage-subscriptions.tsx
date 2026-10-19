import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useApp } from '@/context/AppContext';
import { CategoryIcon } from '@/components/CategoryIcon';
import { formatCurrency } from '@/utils/formatters';

export default function ManageSubscriptionsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { subscriptions, deleteSubscription, prefs } = useApp();

  function handleDelete(id: string) {
    Alert.alert('Delete Subscription', 'Are you sure you want to remove this subscription?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteSubscription(id) },
    ]);
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
          <Ionicons name="close" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Subscriptions</Text>
        <TouchableOpacity onPress={() => router.push('/add-subscription')} style={styles.closeBtn}>
          <Ionicons name="add" size={28} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        <Text style={[styles.desc, { color: colors.textSecondary }]}>
          Manage your recurring expenses. They will automatically be added to your expenses when their billing date arrives.
        </Text>

        {subscriptions.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="calendar-outline" size={48} color={colors.textTertiary} />
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>No subscriptions added yet.</Text>
            <TouchableOpacity onPress={() => router.push('/add-subscription')} style={[styles.addBtn, { backgroundColor: colors.primary }]}>
              <Text style={styles.addBtnText}>Add your first subscription</Text>
            </TouchableOpacity>
          </View>
        ) : (
          subscriptions.map(sub => (
            <View key={sub.id} style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.cardHeader}>
                <CategoryIcon category={sub.category} size={40} />
                <View style={styles.cardInfo}>
                  <Text style={[styles.subTitle, { color: colors.textPrimary }]}>{sub.title}</Text>
                  <Text style={[styles.subPeriod, { color: colors.textSecondary }]}>
                    Billed {sub.period} • Next: {new Date(sub.lastProcessedDate).toLocaleDateString()}
                  </Text>
                </View>
                <Text style={[styles.subAmount, { color: colors.textPrimary }]}>
                  {formatCurrency(sub.amount, prefs.currency)}
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleDelete(sub.id)} style={[styles.deleteBtn, { backgroundColor: colors.dangerLight }]}>
                <Ionicons name="trash-outline" size={16} color={colors.danger} />
                <Text style={[styles.deleteBtnText, { color: colors.danger }]}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
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
  list: { padding: Theme.spacing.md, paddingBottom: 40, gap: 12 },
  desc: { fontSize: 14, marginBottom: 12, lineHeight: 20 },
  empty: { alignItems: 'center', paddingVertical: 40, gap: 12 },
  emptyText: { fontSize: 15, fontWeight: '500' },
  addBtn: { paddingHorizontal: 20, paddingVertical: 12, borderRadius: Theme.radius.md, marginTop: 12 },
  addBtnText: { color: 'white', fontSize: 15, fontWeight: '600' },
  card: { padding: 16, borderRadius: Theme.radius.lg, borderWidth: 1, gap: 12 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  cardInfo: { flex: 1 },
  subTitle: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  subPeriod: { fontSize: 12 },
  subAmount: { fontSize: 16, fontWeight: '800' },
  deleteBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: Theme.radius.md, gap: 6 },
  deleteBtnText: { fontSize: 13, fontWeight: '700' },
});
