import { Button } from '@/components/Button';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useApp } from '@/context/AppContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React from 'react';
import { Alert, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PREMIUM_FEATURES = [
  { icon: 'airplane-outline', title: 'Advanced Travel Mode', desc: 'Trip budgets, travel summaries, and currency-aware expense tracking.' },
  { icon: 'filter-outline', title: 'Travel Expense Filters', desc: 'Separate home spending from trip spending in your expense history.' },
  { icon: 'analytics-outline', title: 'Travel Statistics', desc: 'See category totals, daily averages, and converted trip costs.' },
  { icon: 'download-outline', title: 'Premium CSV Export', desc: 'Export original currency, converted amount, and exchange rate details.' },
] as const;

export default function PremiumScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { isPremium, setPremiumPlan } = useApp();

  function handleSubscribe() {
    setPremiumPlan('premium');
    Alert.alert(
      'Premium unlocked',
      'This demo unlocks Premium locally. Connect Google Play Billing or RevenueCat later for real payments.',
      [{ text: 'Done', onPress: () => router.back() }],
    );
  }

  function handleCancelDemo() {
    setPremiumPlan('free');
    Alert.alert('Premium disabled', 'Premium features are locked again.');
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="close" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Premium</Text>
        <View style={styles.iconBtn} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={[styles.hero, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.heroIcon}>
            <Ionicons name="sparkles" size={28} color="#fff" />
          </View>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Unlock smarter travel finance</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Premium adds the advanced tools that frequent travelers and power users need.
          </Text>
          <View style={[styles.pricePill, { backgroundColor: colors.primary + '18', borderColor: colors.primary + '40' }]}>
            <Text style={[styles.price, { color: colors.primary }]}>$2.99 / month</Text>
          </View>
        </View>

        <View style={styles.features}>
          {PREMIUM_FEATURES.map(feature => (
            <View key={feature.title} style={[styles.featureRow, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={[styles.featureIcon, { backgroundColor: colors.primary + '18' }]}>
                <Ionicons name={feature.icon} size={19} color={colors.primary} />
              </View>
              <View style={styles.featureBody}>
                <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>{feature.title}</Text>
                <Text style={[styles.featureDesc, { color: colors.textSecondary }]}>{feature.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        <Button title={isPremium ? 'Premium Active' : 'Start Premium'} onPress={handleSubscribe} disabled={isPremium} />
        {isPremium && (
          <Button
            title="Disable Demo Premium"
            variant="secondary"
            onPress={handleCancelDemo}
            style={{ marginTop: 10 }}
          />
        )}
        <Text style={[styles.disclaimer, { color: colors.textTertiary }]}>
          Demo unlock only. Real payments should be connected with Google Play Billing or RevenueCat before release.
        </Text>
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
    paddingTop: Platform.OS === 'android' ? 8 : 0,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  iconBtn: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '700' },
  scroll: { padding: Theme.spacing.md, paddingBottom: 36 },
  hero: { alignItems: 'center', borderRadius: Theme.radius.lg, borderWidth: 1, padding: 20, marginBottom: 16 },
  heroIcon: { width: 58, height: 58, borderRadius: 29, backgroundColor: '#6C3FEF', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  title: { fontSize: 24, fontWeight: '800', textAlign: 'center' },
  subtitle: { fontSize: 14, lineHeight: 20, textAlign: 'center', marginTop: 8 },
  pricePill: { borderWidth: 1, borderRadius: Theme.radius.full, paddingHorizontal: 14, paddingVertical: 8, marginTop: 16 },
  price: { fontSize: 15, fontWeight: '800' },
  features: { gap: 10, marginBottom: 18 },
  featureRow: { flexDirection: 'row', borderWidth: 1, borderRadius: Theme.radius.md, padding: 14, gap: 12 },
  featureIcon: { width: 38, height: 38, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  featureBody: { flex: 1 },
  featureTitle: { fontSize: 15, fontWeight: '700', marginBottom: 3 },
  featureDesc: { fontSize: 12, lineHeight: 17 },
  disclaimer: { fontSize: 11, lineHeight: 16, textAlign: 'center', marginTop: 12 },
});
