This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
.expo-tmp-export/
  _expo/
    static/
      js/
        android/
          entry-7fe3107306f135ab7bc84431eee7a870.hbc
  assets/
    017bc6ba3fc25503e5eb5e53826d48a8
    02bc1fa7c0313217bde2d65ccbff40c9
    069d99eb1fa6712c0b9034a58c6b57dd
    0747a1317bbe9c6fc340b889ef8ab3ae
    0a328cd9c1afd0afe8e3b1ec5165b1b4
    1190ab078c57159f4245a328118fcd9a
    140c53a7643ea949007aa9a282153849
    1681f34aaca71b8dfb70756bca331eb2
    19eeb73b9593a38f8e9f418337fc7d10
    1f77739ca9ff2188b539c36f30ffa2be
    20e71bdf79e3a97bf55fd9e164041578
    286d67d3f74808a60a78d3ebf1a5fb57
    31b5ffea3daddc69dd01a1f3d6cf63c5
    35ba0eaec5a4f5ed12ca16fabeae451d
    370dd5af19f8364907b6e2c41f45dbbf
    3b89dd103490708d19a95adcae52210e
    3cd68ccdb8938e3711da2e8831b85493
    3f78af31cca60105799838a1a7a59fbd
    412dd9275b6b48ad28f5e3d81bb1f626
    4403c6117ec30c859bc95d70ce4a71d3
    4e85bc9ebe07e0340c9c4fc2f6c38908
    56c8d80832e37783f12c05db7c8849e2
    605ed7926cf39a2ad5ec2d1f9d391d3d
    61ca7e64b7d605716c57706cef640b9a
    6e435534bd35da5fef04168860a9b8fa
    778ffc9fe8773a878e9c30a6304784de
    78c625386b4d0690b421eb0fc78f7b9c
    871378c6eab492a3e689a9385dc45a12
    ab19f4cbc543357183a20571f68380a3
    adec7d6f310bc577f05e8fe06a5daccf
    aff2c65b39a296d4f7e96d0f58169170
    b06871f281fee6b241d60582ae9369b9
    b49ae8ab2dbccb02c4d11caaacf09eab
    b4eb097d35f44ed943676fd56f6bdc51
    c3273c9e5321f20d1e42c2efae2578c4
    c79c3606a1cf168006ad3979763c7e0c
    ca4b48e04dc1ce10bfbddb262c8b835f
    d1ea1496f9057eb392d5bbf3732a61b7
    d2285965fe34b05465047401b8595dd0
    d84e297c3b3e49a614248143d53e40ca
    d8b800c443b8972542883e0b9de2bdc6
    d8e7601e3df962f83c62371ac14964d8
    e20945d7c929279ef7a6f1db184a4470
  metadata.json
app/
  (tabs)/
    _layout.tsx
    expenses.tsx
    explore.tsx
    index.tsx
    index.web.tsx
    savings.tsx
    settings.tsx
    simulator.tsx
    splits.tsx
    statistics.tsx
    statistics.web.tsx
    wallet.tsx
  _layout.tsx
  add-expense.tsx
  add-saving.tsx
  add-subscription.tsx
  index.tsx
  login.tsx
  manage-budgets.tsx
  manage-subscriptions.tsx
  modal.tsx
  onboarding.tsx
  premium.tsx
  receipt-scanner.tsx
  saving-detail.tsx
assets/
  images/
    android-icon-background.png
    android-icon-foreground.png
    android-icon-monochrome.png
    favicon.png
    icon.png
    partial-react-logo.png
    react-logo.png
    react-logo@2x.png
    react-logo@3x.png
    splash-icon.png
components/
  ui/
    collapsible.tsx
  AnimatedNumber.tsx
  AnimatedSection.tsx
  BalanceCard.tsx
  BiometricGate.tsx
  Button.tsx
  Card.tsx
  CategoryIcon.tsx
  DisciplineStreakCard.tsx
  ExpenseItem.tsx
  ExportModal.tsx
  external-link.tsx
  FinancialHealthCard.tsx
  FloatingTabBar.tsx
  Folder.tsx
  ForecastChart.tsx
  ForecastChart.web.tsx
  haptic-tab.tsx
  hello-wave.tsx
  Input.tsx
  PageHeader.tsx
  parallax-scroll-view.tsx
  PressableScale.tsx
  ProgressBar.tsx
  QuickAddFAB.tsx
  ReceiptScanner.tsx
  SafeTodayTile.tsx
  SafeToSpendCard.tsx
  SavingGoalCard.tsx
  SpendingForecast.tsx
  themed-text.tsx
  themed-view.tsx
constants/
  Colors.ts
  Colors2.ts
  Magic.ts
  Theme.ts
context/
  AppContext.tsx
  AuthContext.tsx
  authDb.native.ts
  authDb.ts
  SharedWalletContext.tsx
  SplitContext.tsx
  ThemeContext.tsx
hooks/
  use-color-scheme.ts
  use-color-scheme.web.ts
  use-theme-color.ts
  useNotificationSync.ts
lib/
  supabase.ts
scripts/
  reset-project.js
  verify-android-size.js
services/
  biometric.ts
  categorization.ts
  notifications.ts
  secrets.ts
  storage.ts
  widgetSnapshot.ts
store/
  types.ts
  useAppStore.ts
supabase/
  shared-wallet-rls.sql
utils/
  budgetThresholds.ts
  calculations.ts
  categories.ts
  currency.ts
  disciplineStreak.ts
  exportReport.ts
  financialHealth.ts
  forecast.ts
  formatters.ts
.gitignore
.npmrc
app.json
ARCHITECTURE.md
babel.config.js
eslint-report.json
eslint.config.js
expo_error.txt
expo_output.txt
expo-qr.png
package.json
README.md
search_hash_private2.js
search_hash_private3.js
search_private.js
SETUP_GUIDE.md
tsc-output.txt
tsconfig.json
````

# Files

## File: .expo-tmp-export/metadata.json
````json
{"version":0,"bundler":"metro","fileMetadata":{"android":{"bundle":"_expo/static/js/android/entry-7fe3107306f135ab7bc84431eee7a870.hbc","assets":[{"path":"assets\\778ffc9fe8773a878e9c30a6304784de","ext":"png"},{"path":"assets\\c79c3606a1cf168006ad3979763c7e0c","ext":"png"},{"path":"assets\\02bc1fa7c0313217bde2d65ccbff40c9","ext":"png"},{"path":"assets\\35ba0eaec5a4f5ed12ca16fabeae451d","ext":"png"},{"path":"assets\\0a328cd9c1afd0afe8e3b1ec5165b1b4","ext":"png"},{"path":"assets\\3cd68ccdb8938e3711da2e8831b85493","ext":"png"},{"path":"assets\\61ca7e64b7d605716c57706cef640b9a","ext":"png"},{"path":"assets\\aff2c65b39a296d4f7e96d0f58169170","ext":"png"},{"path":"assets\\d8e7601e3df962f83c62371ac14964d8","ext":"png"},{"path":"assets\\3cd68ccdb8938e3711da2e8831b85493","ext":"png"},{"path":"assets\\0747a1317bbe9c6fc340b889ef8ab3ae","ext":"png"},{"path":"assets\\d84e297c3b3e49a614248143d53e40ca","ext":"png"},{"path":"assets\\1190ab078c57159f4245a328118fcd9a","ext":"png"},{"path":"assets\\78c625386b4d0690b421eb0fc78f7b9c","ext":"png"},{"path":"assets\\0747a1317bbe9c6fc340b889ef8ab3ae","ext":"png"},{"path":"assets\\4403c6117ec30c859bc95d70ce4a71d3","ext":"png"},{"path":"assets\\069d99eb1fa6712c0b9034a58c6b57dd","ext":"png"},{"path":"assets\\c3273c9e5321f20d1e42c2efae2578c4","ext":"png"},{"path":"assets\\286d67d3f74808a60a78d3ebf1a5fb57","ext":"png"},{"path":"assets\\d1ea1496f9057eb392d5bbf3732a61b7","ext":"png"},{"path":"assets\\19eeb73b9593a38f8e9f418337fc7d10","ext":"png"},{"path":"assets\\ab19f4cbc543357183a20571f68380a3","ext":"png"},{"path":"assets\\d8b800c443b8972542883e0b9de2bdc6","ext":"png"},{"path":"assets\\412dd9275b6b48ad28f5e3d81bb1f626","ext":"png"},{"path":"assets\\017bc6ba3fc25503e5eb5e53826d48a8","ext":"png"},{"path":"assets\\20e71bdf79e3a97bf55fd9e164041578","ext":"png"},{"path":"assets\\3f78af31cca60105799838a1a7a59fbd","ext":"ttf"},{"path":"assets\\31b5ffea3daddc69dd01a1f3d6cf63c5","ext":"ttf"},{"path":"assets\\140c53a7643ea949007aa9a282153849","ext":"ttf"},{"path":"assets\\ca4b48e04dc1ce10bfbddb262c8b835f","ext":"ttf"},{"path":"assets\\b49ae8ab2dbccb02c4d11caaacf09eab","ext":"ttf"},{"path":"assets\\b06871f281fee6b241d60582ae9369b9","ext":"ttf"},{"path":"assets\\1f77739ca9ff2188b539c36f30ffa2be","ext":"ttf"},{"path":"assets\\605ed7926cf39a2ad5ec2d1f9d391d3d","ext":"ttf"},{"path":"assets\\3b89dd103490708d19a95adcae52210e","ext":"ttf"},{"path":"assets\\370dd5af19f8364907b6e2c41f45dbbf","ext":"ttf"},{"path":"assets\\adec7d6f310bc577f05e8fe06a5daccf","ext":"ttf"},{"path":"assets\\56c8d80832e37783f12c05db7c8849e2","ext":"ttf"},{"path":"assets\\e20945d7c929279ef7a6f1db184a4470","ext":"ttf"},{"path":"assets\\b4eb097d35f44ed943676fd56f6bdc51","ext":"ttf"},{"path":"assets\\6e435534bd35da5fef04168860a9b8fa","ext":"ttf"},{"path":"assets\\4e85bc9ebe07e0340c9c4fc2f6c38908","ext":"ttf"},{"path":"assets\\871378c6eab492a3e689a9385dc45a12","ext":"ttf"},{"path":"assets\\d2285965fe34b05465047401b8595dd0","ext":"ttf"},{"path":"assets\\1681f34aaca71b8dfb70756bca331eb2","ext":"ttf"}]}}}
````

## File: app/(tabs)/_layout.tsx
````typescript
"use client";

import { FloatingTabBar } from "@/components/FloatingTabBar";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import React from "react";

/**
 * Core tabs stay in the bar; secondary screens stay registered (href: null)
 * and are opened from the FloatingTabBar FAB menu — same routes, new trigger.
 */
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="expenses" options={{ title: "Expenses" }} />
      <Tabs.Screen name="wallet" options={{ title: "Wallet" }} />
      <Tabs.Screen name="statistics" options={{ title: "Stats" }} />

      {/* Secondary — hidden from default tab items; reached via FAB */}
      <Tabs.Screen name="splits" options={{ title: "Splits", href: null }} />
      <Tabs.Screen name="savings" options={{ title: "Savings", href: null }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", href: null }} />
      <Tabs.Screen name="simulator" options={{ title: "Simulator", href: null }} />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
````

## File: app/(tabs)/expenses.tsx
````typescript
import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { ExpenseItem } from "@/components/ExpenseItem";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  filterByPeriod,
  getTotalExpenses,
  groupByDate,
} from "@/utils/calculations";
import { getCategoryByKey } from "@/utils/categories";
import { formatCurrency, formatDate } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { router } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Period = "all" | "day" | "week" | "month";
type TravelFilter = "all" | "home" | "travel";
const PERIODS: { key: Period; label: string }[] = [
  { key: "all", label: "All" },
  { key: "day", label: "Today" },
  { key: "week", label: "Week" },
  { key: "month", label: "Month" },
];

export default function ExpensesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { expenses, deleteExpense, prefs, isPremium } = useApp();
  const [period, setPeriod] = useState<Period>("all");
  const [travelFilter, setTravelFilter] = useState<TravelFilter>("all");
  const [search, setSearch] = useState("");

  // FAB pulse animation
  const fabPulse = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(fabPulse, {
          toValue: 1.08,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(fabPulse, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [fabPulse]);

  // FAB press scale
  const fabScale = useRef(new Animated.Value(1)).current;
  const onFabPressIn = () =>
    Animated.spring(fabScale, {
      toValue: 0.9,
      useNativeDriver: true,
      speed: 50,
      bounciness: 2,
    }).start();
  const onFabPressOut = () =>
    Animated.spring(fabScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 8,
    }).start();

  const filtered = useMemo(() => {
    let list = filterByPeriod(expenses, period);
    if (isPremium && travelFilter !== "all") {
      list = list.filter((e) =>
        travelFilter === "travel" ? e.isTravelExpense : !e.isTravelExpense,
      );
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((e) => {
        const category = getCategoryByKey(e.category);
        const haystack = [
          e.title,
          e.category,
          category.label,
          formatCurrency(e.amount, prefs.currency),
          e.amount.toString(),
          formatDate(e.date),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }
    return list;
  }, [expenses, period, prefs.currency, search, isPremium, travelFilter]);

  const grouped = useMemo(() => groupByDate(filtered), [filtered]);
  const total = useMemo(() => getTotalExpenses(filtered), [filtered]);

  function confirmDelete(id: string) {
    Alert.alert(
      "Delete expense?",
      "This expense will be removed from your records.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteExpense(id),
        },
      ],
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      {/* Header with count-up total */}
      <AnimatedSection delay={0} distance={-16}>
        <View style={styles.header}>
          <Text style={[styles.eyebrow, { color: colors.textSecondary }]}>
            CASH FLOW
          </Text>
          <View style={styles.headerRow}>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
              Expenses
            </Text>
            <AnimatedNumber
              value={total}
              format={(n) => formatCurrency(n, prefs.currency)}
              style={[styles.totalValue, { color: colors.danger }]}
              duration={900}
            />
          </View>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {period === "all" ? "All time" : `Filtered · ${period}`}
          </Text>
        </View>
      </AnimatedSection>

      {/* Search bar */}
      <AnimatedSection delay={80}>
        <View style={styles.searchWrap}>
          <View
            style={[
              styles.searchBar,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <Ionicons name="search" size={18} color={colors.textSecondary} />
            <TextInput
              style={[styles.searchInput, { color: colors.textPrimary }]}
              placeholder="Search title, category, amount, or date"
              placeholderTextColor={colors.textTertiary}
              value={search}
              onChangeText={setSearch}
              returnKeyType="search"
            />
            {search.length > 0 && (
              <TouchableOpacity onPress={() => setSearch("")} hitSlop={10}>
                <Ionicons
                  name="close-circle"
                  size={20}
                  color={colors.textSecondary}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </AnimatedSection>

      {/* Period filter chips */}
      <AnimatedSection delay={160}>
        <View style={styles.filterRow}>
          {PERIODS.map((p) => (
            <PeriodChip
              key={p.key}
              label={p.label}
              active={period === p.key}
              activeColor={colors.primary}
              cardColor={colors.card}
              borderColor={colors.border}
              onPress={() => setPeriod(p.key)}
            />
          ))}
        </View>
      </AnimatedSection>

      {/* Travel filter */}
      {prefs.travelMode && (
        <AnimatedSection delay={240}>
          <View style={styles.travelFilterRow}>
            {isPremium ? (
              (
                [
                  { key: "all", label: "All spending" },
                  { key: "home", label: "Home" },
                  { key: "travel", label: "Travel" },
                ] as const
              ).map((item) => (
                <TouchableOpacity
                  key={item.key}
                  onPress={() => setTravelFilter(item.key)}
                  style={[
                    styles.travelChip,
                    {
                      backgroundColor:
                        travelFilter === item.key ? "#4ECDC4" : colors.card,
                      borderColor:
                        travelFilter === item.key ? "#4ECDC4" : colors.border,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.travelChipText,
                      {
                        color:
                          travelFilter === item.key
                            ? "#fff"
                            : colors.textSecondary,
                      },
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <TouchableOpacity
                onPress={() => router.push("/premium" as never)}
                style={[
                  styles.lockedFilter,
                  {
                    backgroundColor: colors.inputBg,
                    borderColor: colors.border,
                  },
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={14}
                  color={colors.primary}
                />
                <Text
                  style={[
                    styles.lockedFilterText,
                    { color: colors.textPrimary },
                  ]}
                >
                  Premium unlocks home/travel filters
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </AnimatedSection>
      )}

      {/* Expense list */}
      {grouped.length === 0 ? (
        <AnimatedSection delay={300}>
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🧾</Text>
            <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
              No expenses found
            </Text>
            <Text style={[styles.emptyDesc, { color: colors.textSecondary }]}>
              {search
                ? "Try a different search term"
                : period === "all"
                  ? "Tap + to add your first expense"
                  : "No expenses in this period"}
            </Text>
          </View>
        </AnimatedSection>
      ) : (
        <View style={{ flex: 1 }}>
          <FlashList
            data={grouped}
            keyExtractor={(g) => g.date}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({ item: group, index }) => (
              <AnimatedSection delay={index * 60} distance={16}>
                <View style={styles.group}>
                  <View style={styles.dateHeader}>
                    <Text
                      style={[
                        styles.dateLabel,
                        { color: colors.textSecondary },
                      ]}
                    >
                      {formatDate(group.items[0].date)}
                    </Text>
                    <Text style={[styles.dateTotal, { color: colors.danger }]}>
                      -
                      {formatCurrency(
                        group.items.reduce((s, e) => s + e.amount, 0),
                        prefs.currency,
                      )}
                    </Text>
                  </View>
                  <Card padding={0} noBorder>
                    {group.items.map((e, i) => (
                      <View key={e.id}>
                        <ExpenseItem
                          expense={e}
                          onPress={() =>
                            router.push({
                              pathname: "/add-expense",
                              params: { id: e.id },
                            })
                          }
                          onDelete={() => confirmDelete(e.id)}
                        />
                        {i < group.items.length - 1 && (
                          <View
                            style={[
                              styles.sep,
                              { backgroundColor: colors.separator },
                            ]}
                          />
                        )}
                      </View>
                    ))}
                  </Card>
                </View>
              </AnimatedSection>
            )}
          />
        </View>
      )}

      {/* FAB with pulse + press scale */}
      <Animated.View
        style={[
          styles.fabWrap,
          { transform: [{ scale: Animated.multiply(fabPulse, fabScale) }] },
        ]}
      >
        <TouchableOpacity
          onPress={() => router.push("/add-expense")}
          onPressIn={onFabPressIn}
          onPressOut={onFabPressOut}
          style={[styles.fab, { backgroundColor: colors.primary }]}
          activeOpacity={1}
        >
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

/** Period chip with bounce press animation */
function PeriodChip({
  label,
  active,
  activeColor,
  cardColor,
  borderColor,
  onPress,
}: {
  label: string;
  active: boolean;
  activeColor: string;
  cardColor: string;
  borderColor: string;
  onPress: () => void;
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const press = () => {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 0.88,
        useNativeDriver: true,
        speed: 50,
        bounciness: 0,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 20,
        bounciness: 10,
      }),
    ]).start();
    onPress();
  };
  return (
    <TouchableOpacity onPress={press} activeOpacity={1}>
      <Animated.View
        style={[
          styles.chip,
          {
            backgroundColor: active ? activeColor : cardColor,
            borderColor: active ? activeColor : borderColor,
            transform: [{ scale }],
          },
        ]}
      >
        <Text style={[styles.chipText, { color: active ? "#fff" : "#888" }]}>
          {label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    paddingHorizontal: Theme.spacing.md,
    paddingTop: 12,
    paddingBottom: 8,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  title: { fontSize: 28, fontWeight: "800", letterSpacing: -0.8 },
  totalValue: {
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.5,
    marginBottom: 2,
  },
  subtitle: { fontSize: 13, fontWeight: "500", marginTop: 4 },
  searchWrap: { paddingHorizontal: Theme.spacing.md, marginBottom: 12 },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 44,
    gap: 8,
  },
  searchInput: { flex: 1, fontSize: 16 },
  filterRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    gap: 8,
    marginBottom: 12,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: Theme.radius.full,
    borderWidth: 1,
  },
  chipText: { fontSize: 13, fontWeight: "600" },
  travelFilterRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    gap: 8,
    marginBottom: 12,
  },
  travelChip: {
    flex: 1,
    minHeight: 36,
    borderRadius: Theme.radius.full,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  travelChipText: { fontSize: 12, fontWeight: "800" },
  lockedFilter: {
    flex: 1,
    minHeight: 40,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingHorizontal: 12,
  },
  lockedFilterText: { fontSize: 12, fontWeight: "700" },
  list: { paddingHorizontal: Theme.spacing.md, paddingBottom: 100 },
  group: { marginBottom: 16 },
  dateHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  dateLabel: { fontSize: 13, fontWeight: "600" },
  dateTotal: { fontSize: 13, fontWeight: "700" },
  sep: { height: 1, marginHorizontal: Theme.spacing.md },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
    gap: 8,
    marginTop: 80,
  },
  emptyEmoji: { fontSize: 52 },
  emptyTitle: { fontSize: 18, fontWeight: "700" },
  emptyDesc: { fontSize: 14, textAlign: "center" },
  fabWrap: { position: "absolute", bottom: 24, right: 24 },
  fab: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    ...Theme.shadow.lg,
  },
});
````

## File: app/(tabs)/explore.tsx
````typescript
import AnimatedSection from "@/components/AnimatedSection";
import PressableScale from "@/components/PressableScale";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FEATURES = [
  {
    title: "Budget Planning",
    description:
      "Set category budgets, track spending progress, and get alerts when you near your limits.",
    icon: "wallet-outline",
  },
  {
    title: "Savings Goals",
    description:
      "Create goals, watch progress bars, and save toward specific targets across platforms.",
    icon: "egg-outline",
  },
  {
    title: "Expense Tracking",
    description:
      "Add expenses quickly, organize by category, and review trends on desktop and mobile.",
    icon: "receipt-outline",
  },
  {
    title: "Reports & Export",
    description:
      "Download CSV reports, share budgets, and keep copies of your transactions on any device.",
    icon: "download-outline",
  },
  {
    title: "Installable PWA",
    description:
      "Use the app from Chrome, Edge, Safari, or Firefox and install it like a native app.",
    icon: "cloud-download-outline",
  },
  {
    title: "Works on Windows, Mac, Linux, and Web",
    description:
      "This app adapts to desktop and mobile browsers with responsive layouts and touch + mouse support.",
    icon: "laptop-outline",
  },
];

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWide = width >= 900;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={[styles.scroll, isWide && styles.scrollWide]}
      >
        <AnimatedSection delay={0} distance={-20}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
              Cross-Platform Expense Tracker
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              A responsive Expo web app that works on Windows, macOS, Linux,
              Android, and iOS.
            </Text>
          </View>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <View style={styles.badgeRow}>
            <View
              style={[styles.badge, { backgroundColor: colors.primary + "15" }]}
            >
              <Ionicons name="globe-outline" size={18} color={colors.primary} />
              <Text style={[styles.badgeText, { color: colors.primary }]}>
                Web Ready
              </Text>
            </View>
            <View style={[styles.badge, { backgroundColor: "#34C47C15" }]}>
              <Ionicons
                name="checkmark-done-outline"
                size={18}
                color="#34C47C"
              />
              <Text style={[styles.badgeText, { color: "#34C47C" }]}>
                PWA Installable
              </Text>
            </View>
          </View>
        </AnimatedSection>

        <View style={[styles.grid, isWide && styles.gridWide]}>
          {FEATURES.map((feature, idx) => (
            <AnimatedSection
              key={feature.title}
              delay={120 + idx * 50}
              distance={15}
            >
              <PressableScale
                style={[
                  styles.card,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
              >
                <View
                  style={[
                    styles.cardIcon,
                    { backgroundColor: colors.primary + "12" },
                  ]}
                >
                  <Ionicons
                    name={feature.icon as any}
                    size={22}
                    color={colors.primary}
                  />
                </View>
                <Text
                  style={[styles.featureTitle, { color: colors.textPrimary }]}
                >
                  {feature.title}
                </Text>
                <Text
                  style={[styles.featureText, { color: colors.textSecondary }]}
                >
                  {feature.description}
                </Text>
              </PressableScale>
            </AnimatedSection>
          ))}
        </View>

        <AnimatedSection delay={120 + FEATURES.length * 50} distance={15}>
          <View
            style={[
              styles.callout,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <Text style={[styles.calloutTitle, { color: colors.textPrimary }]}>
              Install this app as a PWA
            </Text>
            <Text style={[styles.calloutText, { color: colors.textSecondary }]}>
              Open the app in your browser, then choose install from the browser
              menu. On mobile, use the Add to Home Screen prompt.
            </Text>
          </View>
        </AnimatedSection>

        <AnimatedSection delay={180 + FEATURES.length * 50} distance={10}>
          <PressableScale
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={() => router.push("/settings")}
          >
            <Text style={styles.buttonText}>Open Settings & Export Tools</Text>
          </PressableScale>
        </AnimatedSection>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { padding: 24, gap: 20 },
  scrollWide: { alignItems: "center", paddingHorizontal: 40 },
  header: { gap: 8, marginBottom: 16 },
  title: { fontSize: 30, fontWeight: "800", maxWidth: 760 },
  subtitle: { fontSize: 15, lineHeight: 22, maxWidth: 760 },
  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 16,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  badgeText: { fontSize: 13, fontWeight: "700" },
  grid: { gap: 16 },
  gridWide: {
    width: "100%",
    maxWidth: 1200,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 22,
    flex: 1,
    minWidth: 280,
    maxWidth: 420,
    gap: 14,
  },
  cardIcon: {
    width: 46,
    height: 46,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  featureTitle: { fontSize: 17, fontWeight: "800" },
  featureText: { fontSize: 14, lineHeight: 20 },
  callout: { borderWidth: 1, borderRadius: 20, padding: 20 },
  calloutTitle: { fontSize: 16, fontWeight: "800", marginBottom: 8 },
  calloutText: { fontSize: 14, lineHeight: 20 },
  button: {
    marginTop: 8,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "800", fontSize: 15 },
});
````

## File: app/(tabs)/index.tsx
````typescript
import AnimatedSection from "@/components/AnimatedSection";
import { BiometricGate } from "@/components/BiometricGate";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ExpenseItem } from "@/components/ExpenseItem";
import { FinancialHealthCard } from "@/components/FinancialHealthCard";
import { SpendingForecast } from "@/components/SpendingForecast";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { BiometricService } from "@/services/biometric";
import { getBalance, getTotalExpenses } from "@/utils/calculations";
import { convertAmount, formatWithCurrency } from "@/utils/currency";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    expenses,
    subscriptions,
    savingGoals,
    income,
    streak,
    setIncome,
    deleteExpense,
    prefs,
    categoryBudgets,
    exchangeRates,
    ratesUpdatedAt,
    refreshExchangeRates,
    isPremium,
  } = useApp();
  const { currentUser } = useAuth();
  const [incomeModal, setIncomeModal] = useState(false);
  const [incomeInput, setIncomeInput] = useState(String(income));
  const [converterInput, setConverterInput] = useState("");

  const totalExpenses = useMemo(() => getTotalExpenses(expenses), [expenses]);
  const balance = useMemo(
    () => getBalance(income, expenses),
    [income, expenses],
  );
  const recentExpenses = expenses.slice(0, 5);
  const totalSaved = savingGoals.reduce(
    (sum, goal) => sum + goal.currentAmount,
    0,
  );
  const budgetAllocated = Object.values(categoryBudgets).reduce(
    (sum, amount) => sum + amount,
    0,
  );

  const now = new Date();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
  const daysRemaining = Math.max(1, daysInMonth - now.getDate() + 1);
  const safeToSpend = Math.max(
    0,
    (income - totalExpenses - totalSaved) / daysRemaining,
  );
  const budgetLeft = Math.max(0, income - totalExpenses - budgetAllocated);
  const spendPercentage =
    income > 0 ? Math.min((totalExpenses / income) * 100, 100) : 0;
  const travelExpenses = expenses.filter((expense) => expense.isTravelExpense);
  const travelSpentHome = travelExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );
  const travelSpentOriginal = travelExpenses
    .filter((expense) => expense.originalCurrency === prefs.travelCurrency)
    .reduce((sum, expense) => sum + (expense.originalAmount ?? 0), 0);
  const tripBudgetProgress =
    prefs.tripBudget > 0
      ? Math.min(1, travelSpentOriginal / prefs.tripBudget)
      : 0;

  function handleSaveIncome() {
    const value = Number.parseFloat(incomeInput);
    if (!Number.isFinite(value) || value <= 0) {
      Alert.alert(
        "Invalid income",
        "Please enter a monthly income greater than zero.",
      );
      return;
    }

    setIncome(value);
    setIncomeModal(false);
  }

  async function handleEnableBiometrics() {
    const available = await BiometricService.isBiometricAvailable();
    if (!available) {
      Alert.alert(
        "Biometrics unavailable",
        "This device does not report Face ID or fingerprint support.",
      );
      return;
    }

    const enabled = await BiometricService.enableBiometric();
    Alert.alert(
      enabled ? "Biometrics enabled" : "Authentication cancelled",
      enabled
        ? "The dashboard will request biometric unlock on future launches."
        : "Biometric protection was not turned on.",
    );
  }

  function confirmDeleteExpense(id: string) {
    Alert.alert(
      "Delete expense?",
      "This transaction will be removed from your records.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteExpense(id),
        },
      ],
    );
  }

  return (
    <BiometricGate title="Unlock Expense Tracker">
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.background }]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          <AnimatedSection delay={0} distance={-16}>
            <View style={styles.v2Header}>
              <View>
                <Text style={[styles.v2Kicker, { color: colors.primary }]}>EXPENSE TRACKER 2.0</Text>
                <Text style={[styles.v2Greeting, { color: colors.textPrimary }]}>Good {getGreeting()}, {currentUser?.username ?? "there"}.</Text>
              </View>
              <View style={styles.headerRight}>
                {streak > 0 && <View style={[styles.streak, { backgroundColor: colors.warningLight }]}><Ionicons name="flame" size={14} color={colors.warning} /><Text style={[styles.streakText, { color: colors.warning }]}>{streak}</Text></View>}
                <TouchableOpacity accessibilityLabel="Enable biometric lock" onPress={handleEnableBiometrics} style={[styles.iconBtn, { backgroundColor: colors.card, borderColor: colors.border }]}><Ionicons name="finger-print-outline" size={20} color={colors.textSecondary} /></TouchableOpacity>
              </View>
            </View>
          </AnimatedSection>

          <AnimatedSection delay={80} distance={16}>
            <LinearGradient colors={colors.primaryGradient as [string, string]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.v2Hero}>
              <View style={styles.heroOrbOne} /><View style={styles.heroOrbTwo} />
              <View style={styles.heroTop}><View><Text style={styles.heroLabel}>AVAILABLE BALANCE</Text><Text style={styles.heroBalance}>{prefs.showBalance ? formatCurrency(balance, prefs.currency) : "••••••"}</Text></View><TouchableOpacity onPress={() => setIncomeModal(true)} style={styles.heroEdit}><Ionicons name="create-outline" size={17} color="#fff" /></TouchableOpacity></View>
              <View style={styles.heroRule} />
              <View style={styles.heroStats}><View><Text style={styles.heroStatLabel}>Spent this month</Text><Text style={styles.heroStatValue}>{formatCurrency(totalExpenses, prefs.currency)}</Text></View><View><Text style={styles.heroStatLabel}>Safe to spend today</Text><Text style={styles.heroStatValue}>{formatCurrency(safeToSpend, prefs.currency)}</Text></View></View>
              <View style={styles.heroProgressTrack}><View style={[styles.heroProgressFill, { width: `${Math.max(3, spendPercentage)}%` }]} /></View><Text style={styles.heroProgressCaption}>{Math.round(spendPercentage)}% of monthly income used</Text>
            </LinearGradient>
          </AnimatedSection>

          <AnimatedSection delay={150} distance={16}>
            <View style={styles.v2ActionDock}>
              <TouchableOpacity onPress={() => router.push("/add-expense")} style={[styles.primaryAction, { backgroundColor: colors.textPrimary }]}><View style={styles.primaryActionIcon}><Ionicons name="add" size={22} color={colors.textPrimary} /></View><View><Text style={styles.primaryActionTitle}>Add expense</Text><Text style={styles.primaryActionSub}>Keep your plan accurate</Text></View></TouchableOpacity>
              {Platform.OS !== "web" && <MiniAction icon="scan-outline" label="Scan" color={colors.primary} backgroundColor={colors.primary + "18"} onPress={() => router.push("/receipt-scanner" as never)} />}
              <MiniAction icon="flag-outline" label="Goal" color={colors.success} backgroundColor={colors.successLight} onPress={() => router.push("/add-saving")} />
            </View>
          </AnimatedSection>

          <AnimatedSection delay={220} distance={16}>
            <View style={styles.v2Insights}>
              <View style={[styles.v2InsightCard, { backgroundColor: colors.card, borderColor: colors.border }]}><View style={[styles.v2InsightIcon, { backgroundColor: colors.successLight }]}><Ionicons name="shield-checkmark-outline" size={19} color={colors.success} /></View><Text style={[styles.v2InsightValue, { color: colors.textPrimary }]}>{formatCurrency(budgetLeft, prefs.currency)}</Text><Text style={[styles.v2InsightLabel, { color: colors.textSecondary }]}>budget remaining</Text></View>
              <View style={[styles.v2InsightCard, { backgroundColor: colors.card, borderColor: colors.border }]}><View style={[styles.v2InsightIcon, { backgroundColor: colors.primary + "18" }]}><Ionicons name="trending-up-outline" size={19} color={colors.primary} /></View><Text style={[styles.v2InsightValue, { color: colors.textPrimary }]}>{formatCurrency(totalSaved, prefs.currency)}</Text><Text style={[styles.v2InsightLabel, { color: colors.textSecondary }]}>toward your goals</Text></View>
            </View>
          </AnimatedSection>

          <AnimatedSection delay={280} distance={14}>
            <FinancialHealthCard
              expenses={expenses}
              subscriptions={subscriptions}
              savingGoals={savingGoals}
              income={income}
              categoryBudgets={categoryBudgets}
              currency={prefs.currency}
            />
          </AnimatedSection>

          {prefs.travelMode && !isPremium && (
            <AnimatedSection delay={400} distance={12}>
              <TouchableOpacity
                onPress={() => router.push("/premium" as never)}
                style={[
                  styles.travelLockedCard,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
                activeOpacity={0.78}
              >
                <View
                  style={[
                    styles.travelLockIcon,
                    { backgroundColor: colors.primary + "18" },
                  ]}
                >
                  <Ionicons
                    name="lock-closed-outline"
                    size={18}
                    color={colors.primary}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      styles.travelLockedTitle,
                      { color: colors.textPrimary },
                    ]}
                  >
                    Travel Mode Active
                  </Text>
                  <Text
                    style={[
                      styles.travelLockedDesc,
                      { color: colors.textSecondary },
                    ]}
                  >
                    Premium unlocks converter, trip budgets, and travel
                    summaries.
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={colors.textTertiary}
                />
              </TouchableOpacity>
            </AnimatedSection>
          )}

          {/* Travel Mode Converter Card */}
          {prefs.travelMode &&
            isPremium &&
            Object.keys(exchangeRates).length > 0 && (
              <AnimatedSection delay={420} distance={12}>
                <View
                  style={[
                    styles.travelCard,
                    { backgroundColor: "#4ECDC415", borderColor: "#4ECDC440" },
                  ]}
                >
                  <View style={styles.travelCardHeader}>
                    <View style={styles.travelBadge}>
                      <Ionicons name="airplane" size={14} color="#4ECDC4" />
                      <Text
                        style={[styles.travelBadgeText, { color: "#4ECDC4" }]}
                      >
                        Travel Mode Active
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={refreshExchangeRates}
                      style={styles.refreshRateBtn}
                    >
                      <Ionicons name="refresh" size={15} color="#4ECDC4" />
                      <Text style={[styles.travelRate, { color: "#4ECDC4" }]}>
                        1 {prefs.currency} ={" "}
                        {(
                          exchangeRates[prefs.travelCurrency] /
                          exchangeRates[prefs.currency]
                        ).toFixed(4)}{" "}
                        {prefs.travelCurrency}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.travelConverterRow}>
                    <View
                      style={[
                        styles.travelInput,
                        {
                          backgroundColor: colors.inputBg,
                          borderColor: colors.border,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color: colors.textSecondary,
                          fontSize: 12,
                          fontWeight: "600",
                        }}
                      >
                        {prefs.currency}
                      </Text>
                      <TextInput
                        value={converterInput}
                        onChangeText={setConverterInput}
                        keyboardType="decimal-pad"
                        placeholder="0.00"
                        placeholderTextColor={colors.textTertiary}
                        style={[
                          styles.travelInputText,
                          { color: colors.textPrimary },
                        ]}
                      />
                    </View>
                    <Ionicons
                      name="swap-horizontal"
                      size={20}
                      color="#4ECDC4"
                    />
                    <View
                      style={[
                        styles.travelInput,
                        {
                          backgroundColor: "#4ECDC410",
                          borderColor: "#4ECDC440",
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color: "#4ECDC4",
                          fontSize: 12,
                          fontWeight: "600",
                        }}
                      >
                        {prefs.travelCurrency}
                      </Text>
                      <Text
                        style={[
                          styles.travelInputText,
                          { color: "#4ECDC4", fontWeight: "800" },
                        ]}
                      >
                        {converterInput
                          ? formatWithCurrency(
                              convertAmount(
                                parseFloat(converterInput) || 0,
                                prefs.currency,
                                prefs.travelCurrency,
                                exchangeRates,
                              ),
                              prefs.travelCurrency,
                            )
                          : "—"}
                      </Text>
                    </View>
                  </View>
                  {ratesUpdatedAt && (
                    <Text
                      style={[
                        styles.travelUpdated,
                        { color: colors.textTertiary },
                      ]}
                    >
                      Rates updated:{" "}
                      {new Date(ratesUpdatedAt).toLocaleDateString()}
                    </Text>
                  )}
                </View>
              </AnimatedSection>
            )}

          {prefs.travelMode && isPremium && prefs.tripBudget > 0 && (
            <AnimatedSection delay={440} distance={12}>
              <View
                style={[
                  styles.tripBudgetCard,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
              >
                <View style={styles.tripBudgetHeader}>
                  <View>
                    <Text
                      style={[
                        styles.tripBudgetTitle,
                        { color: colors.textPrimary },
                      ]}
                    >
                      Trip Budget
                    </Text>
                    <Text
                      style={[
                        styles.tripBudgetSub,
                        { color: colors.textSecondary },
                      ]}
                    >
                      {formatWithCurrency(
                        travelSpentOriginal,
                        prefs.travelCurrency,
                      )}{" "}
                      of{" "}
                      {formatWithCurrency(
                        prefs.tripBudget,
                        prefs.travelCurrency,
                      )}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.tripBudgetHome,
                      { color: colors.textSecondary },
                    ]}
                  >
                    {formatCurrency(travelSpentHome, prefs.currency)}
                  </Text>
                </View>
                <View
                  style={[
                    styles.tripProgressTrack,
                    { backgroundColor: colors.border },
                  ]}
                >
                  <View
                    style={[
                      styles.tripProgressFill,
                      {
                        width: `${tripBudgetProgress * 100}%`,
                        backgroundColor:
                          tripBudgetProgress > 0.9 ? colors.danger : "#4ECDC4",
                      },
                    ]}
                  />
                </View>
              </View>
            </AnimatedSection>
          )}

          <AnimatedSection delay={480} distance={12}>
            <SpendingForecast
              expenses={expenses}
              income={income}
              currency={prefs.currency}
            />
          </AnimatedSection>

          <AnimatedSection delay={520} distance={12}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text
                  style={[styles.sectionTitle, { color: colors.textPrimary }]}
                >
                  Recent
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/(tabs)/expenses")}
                >
                  <Text style={[styles.seeAll, { color: colors.primary }]}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              {recentExpenses.length === 0 ? (
                <Card style={styles.emptyCard}>
                  <Ionicons
                    name="receipt-outline"
                    size={40}
                    color={colors.primary}
                  />
                  <Text
                    style={[styles.emptyTitle, { color: colors.textPrimary }]}
                  >
                    No expenses yet
                  </Text>
                  <Text
                    style={[styles.emptyDesc, { color: colors.textSecondary }]}
                  >
                    Add a transaction or scan a receipt to start forecasting.
                  </Text>
                  <Button
                    title="Add Expense"
                    onPress={() => router.push("/add-expense")}
                    style={{ marginTop: 12 }}
                  />
                </Card>
              ) : (
                <Card padding={0} noBorder>
                  {recentExpenses.map((expense, index) => (
                    <View key={expense.id}>
                      <ExpenseItem
                        expense={expense}
                        onPress={() =>
                          router.push({
                            pathname: "/add-expense",
                            params: { id: expense.id },
                          })
                        }
                        onDelete={() => confirmDeleteExpense(expense.id)}
                      />
                      {index < recentExpenses.length - 1 && (
                        <View
                          style={[
                            styles.separator,
                            { backgroundColor: colors.separator },
                          ]}
                        />
                      )}
                    </View>
                  ))}
                </Card>
              )}
            </View>
          </AnimatedSection>
          <View style={{ height: 110 }} />
        </ScrollView>

        <Modal
          visible={incomeModal}
          transparent
          animationType="slide"
          onRequestClose={() => setIncomeModal(false)}
        >
          <View
            style={[styles.modalOverlay, { backgroundColor: colors.overlay }]}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
              <View
                style={[styles.modalCard, { backgroundColor: colors.modalBg }]}
              >
                <Text
                  style={[styles.modalTitle, { color: colors.textPrimary }]}
                >
                  Set Monthly Income
                </Text>
                <View
                  style={[
                    styles.incomeInputRow,
                    {
                      backgroundColor: colors.inputBg,
                      borderColor: colors.inputBorder,
                    },
                  ]}
                >
                  <Text
                    style={[styles.currencyPrefix, { color: colors.primary }]}
                  >
                    $
                  </Text>
                  <TextInput
                    style={[styles.incomeInput, { color: colors.textPrimary }]}
                    value={incomeInput}
                    onChangeText={setIncomeInput}
                    keyboardType="decimal-pad"
                    placeholder="0.00"
                    placeholderTextColor={colors.textTertiary}
                    autoFocus
                  />
                </View>
                <View style={styles.modalBtns}>
                  <Button
                    title="Cancel"
                    variant="secondary"
                    onPress={() => setIncomeModal(false)}
                    style={{ flex: 1 }}
                  />
                  <Button
                    title="Save"
                    onPress={handleSaveIncome}
                    style={{ flex: 1 }}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </SafeAreaView>
    </BiometricGate>
  );
}

function MiniAction({
  icon,
  label,
  color,
  backgroundColor,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  color: string;
  backgroundColor: string;
  onPress: () => void;
}) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <TouchableOpacity
      style={[
        styles.miniAction,
        { backgroundColor, borderColor: backgroundColor },
      ]}
      onPress={onPress}
      activeOpacity={0.78}
    >
      <View style={[styles.miniActionIcon, { backgroundColor: colors.card }]}>
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <Text style={[styles.miniActionLabel, { color }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  return "Evening";
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 32 },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 8 },
  streak: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 3,
  },
  streakText: { fontSize: 13, fontWeight: "700" },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  v2Header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: Theme.spacing.md, paddingTop: 8, paddingBottom: 14, gap: 12 },
  v2Kicker: { fontSize: 10, fontWeight: "800", letterSpacing: 1.25, marginBottom: 5 },
  v2Greeting: { fontSize: 24, fontWeight: "900", letterSpacing: -0.8 },
  v2Hero: { marginHorizontal: Theme.spacing.md, borderRadius: 28, padding: 22, overflow: "hidden", minHeight: 224, ...Theme.shadow.lg },
  heroOrbOne: { position: "absolute", width: 190, height: 190, borderRadius: 95, backgroundColor: "rgba(255,255,255,0.10)", right: -66, top: -80 },
  heroOrbTwo: { position: "absolute", width: 100, height: 100, borderRadius: 50, backgroundColor: "rgba(255,255,255,0.07)", left: -35, bottom: -40 },
  heroTop: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" },
  heroLabel: { color: "rgba(255,255,255,0.68)", fontSize: 10, letterSpacing: 1.2, fontWeight: "800" },
  heroBalance: { color: "#fff", fontSize: 34, lineHeight: 42, fontWeight: "900", letterSpacing: -1.2, marginTop: 4 },
  heroEdit: { width: 36, height: 36, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.16)", alignItems: "center", justifyContent: "center" },
  heroRule: { height: 1, backgroundColor: "rgba(255,255,255,0.20)", marginVertical: 17 },
  heroStats: { flexDirection: "row", justifyContent: "space-between", gap: 12 },
  heroStatLabel: { color: "rgba(255,255,255,0.64)", fontSize: 11, fontWeight: "500" },
  heroStatValue: { color: "#fff", fontSize: 14, fontWeight: "800", marginTop: 3 },
  heroProgressTrack: { height: 6, borderRadius: 6, backgroundColor: "rgba(255,255,255,0.20)", overflow: "hidden", marginTop: 17 },
  heroProgressFill: { height: "100%", borderRadius: 6, backgroundColor: "#fff" },
  heroProgressCaption: { color: "rgba(255,255,255,0.68)", fontSize: 10, fontWeight: "600", marginTop: 6 },
  v2ActionDock: { flexDirection: "row", gap: 9, marginTop: 14, paddingHorizontal: Theme.spacing.md },
  primaryAction: { flex: 1, borderRadius: 18, minHeight: 74, padding: 12, flexDirection: "row", alignItems: "center", gap: 9 },
  primaryActionIcon: { width: 36, height: 36, borderRadius: 12, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  primaryActionTitle: { color: "#fff", fontSize: 13, fontWeight: "800" },
  primaryActionSub: { color: "rgba(255,255,255,0.65)", fontSize: 10, marginTop: 2 },
  miniAction: { width: 66, borderRadius: 18, minHeight: 74, alignItems: "center", justifyContent: "center", gap: 5, borderWidth: 1 },
  miniActionIcon: { width: 30, height: 30, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  miniActionLabel: { fontSize: 10, fontWeight: "800" },
  v2Insights: { flexDirection: "row", gap: 10, marginTop: 14, paddingHorizontal: Theme.spacing.md },
  v2InsightCard: { flex: 1, minHeight: 122, borderRadius: 19, borderWidth: 1, padding: 14, justifyContent: "space-between" },
  v2InsightIcon: { width: 34, height: 34, borderRadius: 11, alignItems: "center", justifyContent: "center" },
  v2InsightValue: { fontSize: 17, fontWeight: "900", letterSpacing: -0.4, marginTop: 12 },
  v2InsightLabel: { fontSize: 11, fontWeight: "600", marginTop: 2 },
  duoRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: Theme.spacing.sm,
  },
  insightRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: 8,
    flexWrap: "wrap",
  },
  insightChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 5,
  },
  insightText: { fontSize: 12, fontWeight: "600" },
  quickActions: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    alignItems: "flex-start",
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    gap: 10,
    minHeight: 96,
    justifyContent: "center",
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: { fontSize: 12, fontWeight: "700", textAlign: "left" },
  section: { marginTop: 24, paddingHorizontal: Theme.spacing.md },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700" },
  seeAll: { fontSize: 13, fontWeight: "600" },
  emptyCard: { alignItems: "center", paddingVertical: 32 },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 4,
  },
  emptyDesc: { fontSize: 14, textAlign: "center", lineHeight: 20 },
  separator: { height: 1, marginHorizontal: Theme.spacing.md },
  modalOverlay: { flex: 1, justifyContent: "flex-end" },
  modalCard: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    gap: 16,
  },
  modalTitle: { fontSize: 20, fontWeight: "700", textAlign: "center" },
  incomeInputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 60,
  },
  currencyPrefix: { fontSize: 24, fontWeight: "700", marginRight: 4 },
  incomeInput: { flex: 1, fontSize: 28, fontWeight: "700" },
  modalBtns: { flexDirection: "row", gap: 12 },
  travelCard: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  travelCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  travelBadge: { flexDirection: "row", alignItems: "center", gap: 6 },
  travelBadgeText: { fontSize: 13, fontWeight: "700" },
  travelRate: { fontSize: 12, fontWeight: "600" },
  travelConverterRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  travelInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: 10,
    gap: 2,
  },
  travelInputText: { fontSize: 18, fontWeight: "700" },
  travelUpdated: { fontSize: 11, textAlign: "right" },
  travelLockedCard: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  travelLockIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  travelLockedTitle: { fontSize: 15, fontWeight: "800", marginBottom: 3 },
  travelLockedDesc: { fontSize: 12, lineHeight: 17 },
  refreshRateBtn: { flexDirection: "row", alignItems: "center", gap: 5 },
  tripBudgetCard: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 12,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  tripBudgetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  tripBudgetTitle: { fontSize: 15, fontWeight: "800" },
  tripBudgetSub: { fontSize: 12, marginTop: 3, fontWeight: "600" },
  tripBudgetHome: { fontSize: 12, fontWeight: "800" },
  tripProgressTrack: { height: 8, borderRadius: 999, overflow: "hidden" },
  tripProgressFill: { height: "100%", borderRadius: 999 },
});
````

## File: app/(tabs)/index.web.tsx
````typescript
import { BalanceCard } from "@/components/BalanceCard";
import { CategoryIcon } from "@/components/CategoryIcon";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { getBalance, getTotalExpenses } from "@/utils/calculations";
import { getCategoryByKey } from "@/utils/categories";
import { formatCurrency, formatShortDate } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WebDashboardScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { width } = useWindowDimensions();
  const wide = width >= 1000;
  const { expenses, savingGoals, income, prefs, categoryBudgets } = useApp();
  const totalExpenses = useMemo(() => getTotalExpenses(expenses), [expenses]);
  const balance = useMemo(() => getBalance(income, expenses), [income, expenses]);
  const totalSaved = useMemo(() => savingGoals.reduce((sum, goal) => sum + goal.currentAmount, 0), [savingGoals]);
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const daysLeft = Math.max(1, daysInMonth - now.getDate() + 1);
  const available = Math.max(0, income - totalExpenses - totalSaved);
  const dailyBudget = available / daysLeft;
  const spentPercent = income > 0 ? Math.min(100, (totalExpenses / income) * 100) : 0;
  const recentExpenses = expenses.slice(0, 5);
  const topCategory = useMemo(() => {
    const totals = expenses.reduce<Record<string, number>>((all, expense) => { all[expense.category] = (all[expense.category] ?? 0) + expense.amount; return all; }, {});
    const key = Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0];
    return key ? { ...getCategoryByKey(key), amount: totals[key] } : null;
  }, [expenses]);
  const greeting = now.getHours() < 12 ? "Good morning" : now.getHours() < 18 ? "Good afternoon" : "Good evening";

  return <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
      <View style={[styles.container, wide && styles.containerWide]}>
        <View style={styles.topbar}>
          <View><Text style={[styles.eyebrow, { color: colors.primary }]}>EXPENSE TRACKER 2.0</Text><Text style={[styles.title, { color: colors.textPrimary }]}>{greeting}.</Text><Text style={[styles.subtitle, { color: colors.textSecondary }]}>Here’s your money at a glance for {now.toLocaleString("en", { month: "long" })}.</Text></View>
          <TouchableOpacity accessibilityRole="button" accessibilityLabel="Open settings" onPress={() => router.push("/settings")} style={[styles.avatar, { backgroundColor: colors.card, borderColor: colors.border }]}><Ionicons name="settings-outline" size={20} color={colors.textSecondary} /></TouchableOpacity>
        </View>
        <View style={[styles.mainGrid, wide && styles.mainGridWide]}>
          <View style={styles.balanceColumn}>
            <BalanceCard balance={balance} income={income} totalExpenses={totalExpenses} />
            <View style={styles.quickRow}>
              <QuickAction icon="add" label="Add expense" tone={colors.danger} background={colors.dangerLight} onPress={() => router.push("/add-expense")} />
              <QuickAction icon="scan-outline" label="Scan receipt" tone={colors.primary} background={colors.primary + "16"} onPress={() => router.push("/receipt-scanner" as never)} />
              <QuickAction icon="flag-outline" label="New goal" tone={colors.success} background={colors.successLight} onPress={() => router.push("/add-saving")} />
            </View>
          </View>
          <View style={[styles.pulseCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.cardHeadingRow}><View><Text style={[styles.cardEyebrow, { color: colors.textSecondary }]}>MONTHLY PULSE</Text><Text style={[styles.cardTitle, { color: colors.textPrimary }]}>Spending overview</Text></View><View style={[styles.statusPill, { backgroundColor: spentPercent > 85 ? colors.dangerLight : colors.successLight }]}><View style={[styles.statusDot, { backgroundColor: spentPercent > 85 ? colors.danger : colors.success }]} /><Text style={[styles.statusText, { color: spentPercent > 85 ? colors.danger : colors.success }]}>{spentPercent > 85 ? "Watch spending" : "On track"}</Text></View></View>
            <Text style={[styles.progressNumber, { color: colors.textPrimary }]}>{Math.round(spentPercent)}<Text style={styles.progressSuffix}>%</Text></Text><Text style={[styles.progressLabel, { color: colors.textSecondary }]}>of your income has been spent</Text><View style={[styles.progressTrack, { backgroundColor: colors.inputBg }]}><View style={[styles.progressFill, { backgroundColor: spentPercent > 85 ? colors.danger : colors.primary, width: `${Math.max(4, spentPercent)}%` }]} /></View><View style={[styles.pulseDivider, { backgroundColor: colors.separator }]} />
            <View style={styles.pulseStats}><PulseStat label="Safe today" value={formatCurrency(dailyBudget, prefs.currency)} color={colors.primary} /><PulseStat label="Days remaining" value={String(daysLeft)} color={colors.textPrimary} /><PulseStat label="Saved" value={formatCurrency(totalSaved, prefs.currency)} color={colors.success} /></View>
          </View>
        </View>
        <View style={[styles.infoGrid, wide && styles.infoGridWide]}>
          <InsightCard icon="wallet-outline" label="Available to spend" value={formatCurrency(available, prefs.currency)} detail="After savings & expenses" color={colors.primary} colors={colors} />
          <InsightCard icon="pie-chart-outline" label="Top category" value={topCategory?.label ?? "No expenses yet"} detail={topCategory ? formatCurrency(topCategory.amount, prefs.currency) : "Start tracking to see trends"} color={colors.warning} colors={colors} />
          <InsightCard icon="stats-chart-outline" label="Budget allocation" value={formatCurrency(Object.values(categoryBudgets).reduce((sum, value) => sum + value, 0), prefs.currency)} detail="Across your categories" color={colors.success} colors={colors} />
        </View>
        <View style={[styles.contentGrid, wide && styles.contentGridWide]}>
          <View style={[styles.recentCard, { backgroundColor: colors.card, borderColor: colors.border }]}><View style={styles.sectionHead}><View><Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Recent activity</Text><Text style={[styles.sectionSub, { color: colors.textSecondary }]}>Your latest transactions</Text></View><TouchableOpacity onPress={() => router.push("/expenses")}><Text style={[styles.link, { color: colors.primary }]}>See all</Text></TouchableOpacity></View>
            {recentExpenses.length ? recentExpenses.map((expense, index) => <Pressable key={expense.id} onPress={() => router.push({ pathname: "/add-expense", params: { id: expense.id } })} style={({ pressed }) => [styles.expenseRow, index > 0 && { borderTopColor: colors.separator, borderTopWidth: 1 }, { opacity: pressed ? 0.72 : 1 }]}><CategoryIcon category={expense.category} size={42} /><View style={styles.expenseInfo}><Text numberOfLines={1} style={[styles.expenseTitle, { color: colors.textPrimary }]}>{expense.title}</Text><Text style={[styles.expenseMeta, { color: colors.textSecondary }]}>{getCategoryByKey(expense.category).label} · {formatShortDate(expense.date)}</Text></View><Text style={[styles.expenseAmount, { color: colors.danger }]}>-{formatCurrency(expense.amount, prefs.currency)}</Text></Pressable>) : <EmptyState colors={colors} />}
          </View>
          <View style={[styles.focusCard, { backgroundColor: colors.primary, borderColor: colors.primary }]}><Ionicons name="sparkles" size={24} color="#fff" /><Text style={styles.focusOverline}>TODAY’S FOCUS</Text><Text style={styles.focusTitle}>{income > 0 ? `Keep today below ${formatCurrency(dailyBudget, prefs.currency)}.` : "Set your monthly income to unlock your daily plan."}</Text><Text style={styles.focusText}>{income > 0 ? "Small choices add up. Your daily allowance updates as you track spending." : "A baseline makes your spending insights much more useful."}</Text><TouchableOpacity onPress={() => router.push(income > 0 ? "/statistics" : "/settings")} style={styles.focusButton}><Text style={[styles.focusButtonText, { color: colors.primary }]}>{income > 0 ? "Explore insights" : "Set up finances"}</Text><Ionicons name="arrow-forward" size={16} color={colors.primary} /></TouchableOpacity></View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>;
}

function QuickAction({ icon, label, tone, background, onPress }: { icon: keyof typeof Ionicons.glyphMap; label: string; tone: string; background: string; onPress: () => void }) { return <TouchableOpacity onPress={onPress} style={[styles.quickAction, { backgroundColor: background }]}><View style={[styles.quickIcon, { backgroundColor: tone }]}><Ionicons name={icon} size={17} color="#fff" /></View><Text style={[styles.quickLabel, { color: tone }]}>{label}</Text></TouchableOpacity>; }
function PulseStat({ label, value, color }: { label: string; value: string; color: string }) { return <View style={styles.pulseStat}><Text style={[styles.pulseStatValue, { color }]} numberOfLines={1}>{value}</Text><Text style={styles.pulseStatLabel}>{label}</Text></View>; }
function InsightCard({ icon, label, value, detail, color, colors }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string; detail: string; color: string; colors: (typeof Colors)["light"] }) { return <View style={[styles.insightCard, { backgroundColor: colors.card, borderColor: colors.border }]}><View style={[styles.insightIcon, { backgroundColor: color + "18" }]}><Ionicons name={icon} size={19} color={color} /></View><View style={styles.insightContent}><Text style={[styles.insightLabel, { color: colors.textSecondary }]}>{label}</Text><Text numberOfLines={1} style={[styles.insightValue, { color: colors.textPrimary }]}>{value}</Text><Text numberOfLines={1} style={[styles.insightDetail, { color: colors.textTertiary }]}>{detail}</Text></View></View>; }
function EmptyState({ colors }: { colors: (typeof Colors)["light"] }) { return <View style={styles.empty}><View style={[styles.emptyIcon, { backgroundColor: colors.primary + "14" }]}><Ionicons name="receipt-outline" size={24} color={colors.primary} /></View><Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>Your activity will appear here</Text><Text style={[styles.emptyText, { color: colors.textSecondary }]}>Add your first expense to start building a clear picture.</Text></View>; }

const styles = StyleSheet.create({
  safe: { flex: 1 }, scroll: { padding: 24, paddingBottom: 120 }, container: { width: "100%", gap: 22 }, containerWide: { maxWidth: 1320, alignSelf: "center" }, topbar: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }, eyebrow: { fontSize: 11, fontWeight: "800", letterSpacing: 1.2, marginBottom: 7 }, title: { fontSize: 32, lineHeight: 39, fontWeight: "900", letterSpacing: -1.1 }, subtitle: { fontSize: 14, lineHeight: 21, marginTop: 4 }, avatar: { width: 44, height: 44, borderRadius: 14, borderWidth: 1, alignItems: "center", justifyContent: "center" },
  mainGrid: { gap: 22 }, mainGridWide: { flexDirection: "row" }, balanceColumn: { flex: 1.08, gap: 14 }, quickRow: { flexDirection: "row", gap: 10, paddingHorizontal: Theme.spacing.md }, quickAction: { flex: 1, minHeight: 48, borderRadius: 14, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingHorizontal: 8 }, quickIcon: { width: 26, height: 26, borderRadius: 9, alignItems: "center", justifyContent: "center" }, quickLabel: { fontSize: 12, fontWeight: "800" },
  pulseCard: { flex: 0.92, borderRadius: Theme.radius.xl, borderWidth: 1, padding: 22, minHeight: 224 }, cardHeadingRow: { flexDirection: "row", justifyContent: "space-between", gap: 12 }, cardEyebrow: { fontSize: 10, letterSpacing: 1, fontWeight: "800" }, cardTitle: { marginTop: 4, fontSize: 17, fontWeight: "800" }, statusPill: { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", gap: 6, paddingHorizontal: 9, paddingVertical: 6, borderRadius: 999 }, statusDot: { width: 6, height: 6, borderRadius: 3 }, statusText: { fontSize: 11, fontWeight: "800" }, progressNumber: { fontSize: 42, fontWeight: "900", letterSpacing: -1.6, marginTop: 18 }, progressSuffix: { fontSize: 20 }, progressLabel: { fontSize: 12, marginTop: -2 }, progressTrack: { height: 8, borderRadius: 999, overflow: "hidden", marginTop: 14 }, progressFill: { height: "100%", borderRadius: 999 }, pulseDivider: { height: 1, marginVertical: 17 }, pulseStats: { flexDirection: "row", justifyContent: "space-between", gap: 12 }, pulseStat: { flex: 1 }, pulseStatValue: { fontSize: 13, fontWeight: "800" }, pulseStatLabel: { color: "#8E8AA6", fontSize: 10, marginTop: 3 },
  infoGrid: { gap: 12 }, infoGridWide: { flexDirection: "row" }, insightCard: { flex: 1, borderWidth: 1, borderRadius: Theme.radius.lg, padding: 16, minHeight: 102, flexDirection: "row", alignItems: "flex-start", gap: 12 }, insightIcon: { width: 38, height: 38, borderRadius: 12, alignItems: "center", justifyContent: "center" }, insightContent: { flex: 1 }, insightLabel: { fontSize: 11, fontWeight: "700" }, insightValue: { fontSize: 16, fontWeight: "800", marginTop: 4 }, insightDetail: { fontSize: 11, marginTop: 3 },
  contentGrid: { gap: 22 }, contentGridWide: { flexDirection: "row" }, recentCard: { flex: 1.4, borderRadius: Theme.radius.xl, borderWidth: 1, padding: 20 }, sectionHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }, sectionTitle: { fontSize: 18, fontWeight: "800" }, sectionSub: { fontSize: 12, marginTop: 3 }, link: { fontSize: 12, fontWeight: "800", paddingVertical: 3 }, expenseRow: { minHeight: 64, flexDirection: "row", alignItems: "center", gap: 11, paddingVertical: 10 }, expenseInfo: { flex: 1 }, expenseTitle: { fontSize: 14, fontWeight: "700" }, expenseMeta: { fontSize: 11, marginTop: 3 }, expenseAmount: { fontSize: 14, fontWeight: "800" },
  focusCard: { flex: 0.78, borderRadius: Theme.radius.xl, borderWidth: 1, padding: 22, minHeight: 260, justifyContent: "flex-start" }, focusOverline: { color: "rgba(255,255,255,0.65)", fontSize: 10, fontWeight: "800", letterSpacing: 1, marginTop: 16 }, focusTitle: { color: "#fff", fontSize: 22, fontWeight: "900", letterSpacing: -0.5, lineHeight: 28, marginTop: 7 }, focusText: { color: "rgba(255,255,255,0.76)", fontSize: 13, lineHeight: 19, marginTop: 10 }, focusButton: { marginTop: "auto", backgroundColor: "#fff", borderRadius: 12, minHeight: 43, paddingHorizontal: 14, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 }, focusButtonText: { fontSize: 13, fontWeight: "800" },
  empty: { minHeight: 245, alignItems: "center", justifyContent: "center", paddingHorizontal: 24 }, emptyIcon: { width: 52, height: 52, borderRadius: 17, justifyContent: "center", alignItems: "center" }, emptyTitle: { fontSize: 15, fontWeight: "800", marginTop: 12 }, emptyText: { textAlign: "center", fontSize: 12, lineHeight: 18, marginTop: 5 },
});
````

## File: app/(tabs)/savings.tsx
````typescript
import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { SavingGoalCard } from "@/components/SavingGoalCard";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SavingsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { savingGoals, prefs } = useApp();

  const totalTarget = savingGoals.reduce((s, g) => s + g.targetAmount, 0);
  const totalSaved = savingGoals.reduce((s, g) => s + g.currentAmount, 0);
  const overallProgress = totalTarget > 0 ? totalSaved / totalTarget : 0;

  // FAB pulse
  const fabPulse = React.useRef(new Animated.Value(1)).current;
  React.useEffect(() => {
    if (savingGoals.length === 0) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(fabPulse, {
          toValue: 1.08,
          duration: 950,
          useNativeDriver: true,
        }),
        Animated.timing(fabPulse, {
          toValue: 1,
          duration: 950,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [fabPulse, savingGoals.length]);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <AnimatedSection delay={0} distance={-20}>
        <PageHeader
          eyebrow="Goals"
          title="Savings"
          value={
            <AnimatedNumber
              value={totalSaved}
              format={(n) => formatCurrency(n, prefs.currency)}
              style={{
                fontSize: 22,
                fontWeight: "800",
                color: colors.success,
                letterSpacing: -0.5,
              }}
            />
          }
          subtitle={
            savingGoals.length > 0
              ? `${Math.round(overallProgress * 100)}% of targets`
              : "Build your first goal"
          }
          right={
            <TouchableOpacity
              onPress={() => router.push("/add-saving")}
              accessibilityLabel="Add saving goal"
              style={[styles.iconBtn, { backgroundColor: colors.primary }]}
            >
              <Ionicons name="add" size={22} color="#fff" />
            </TouchableOpacity>
          }
        />
      </AnimatedSection>

      {/* Overall Summary */}
      {savingGoals.length > 0 && (
        <AnimatedSection delay={80}>
          <View style={styles.summaryWrap}>
            <Card variant="elevated" style={styles.summaryCard}>
              <View style={styles.summaryRow}>
                <View style={styles.summaryItem}>
                  <Text
                    style={[
                      styles.summaryLabel,
                      { color: colors.textSecondary },
                    ]}
                  >
                    Total Saved
                  </Text>
                  <AnimatedNumber
                    value={totalSaved}
                    format={(n) => formatCurrency(n, prefs.currency)}
                    style={[styles.summaryValue, { color: colors.success }]}
                  />
                </View>
                <View
                  style={[
                    styles.summaryDivider,
                    { backgroundColor: colors.border },
                  ]}
                />
                <View style={styles.summaryItem}>
                  <Text
                    style={[
                      styles.summaryLabel,
                      { color: colors.textSecondary },
                    ]}
                  >
                    Total Goals
                  </Text>
                  <AnimatedNumber
                    value={totalTarget}
                    format={(n) => formatCurrency(n, prefs.currency)}
                    style={[styles.summaryValue, { color: colors.primary }]}
                  />
                </View>
                <View
                  style={[
                    styles.summaryDivider,
                    { backgroundColor: colors.border },
                  ]}
                />
                <View style={styles.summaryItem}>
                  <Text
                    style={[
                      styles.summaryLabel,
                      { color: colors.textSecondary },
                    ]}
                  >
                    Overall
                  </Text>
                  <AnimatedNumber
                    value={overallProgress * 100}
                    format={(n) => `${Math.round(n)}%`}
                    style={[styles.summaryValue, { color: colors.textPrimary }]}
                  />
                </View>
              </View>
            </Card>
          </View>
        </AnimatedSection>
      )}

      {/* Goals */}
      {savingGoals.length === 0 ? (
        <AnimatedSection delay={140}>
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🐷</Text>
            <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
              No savings goals yet
            </Text>
            <Text style={[styles.emptyDesc, { color: colors.textSecondary }]}>
              Create a goal to start saving with purpose
            </Text>
            <Button
              title="Create My First Goal"
              onPress={() => router.push("/add-saving")}
              style={{ marginTop: 16, paddingHorizontal: 24 }}
              fullWidth={false}
            />
          </View>
        </AnimatedSection>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={savingGoals}
            keyExtractor={(g) => g.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.grid}
            columnWrapperStyle={styles.row}
            renderItem={({ item, index }) => (
              <AnimatedSection
                delay={140 + index * 50}
                distance={15}
                style={{ width: "48%" }}
              >
                <SavingGoalCard
                  goal={item}
                  onPress={() =>
                    router.push({
                      pathname: "/saving-detail",
                      params: { id: item.id },
                    })
                  }
                />
              </AnimatedSection>
            )}
          />
        </View>
      )}

      {/* FAB */}
      {savingGoals.length > 0 && (
        <Animated.View
          style={[styles.fabWrap, { transform: [{ scale: fabPulse }] }]}
        >
          <TouchableOpacity
            onPress={() => router.push("/add-saving")}
            style={[styles.fab, { backgroundColor: colors.success }]}
            activeOpacity={0.85}
          >
            <Ionicons name="add" size={28} color="#fff" />
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Theme.spacing.md,
    paddingTop: 8,
    paddingBottom: 12,
  },
  title: { fontSize: 28, fontWeight: "800", letterSpacing: -0.8 },
  subtitle: { fontSize: 14, fontWeight: "600", marginTop: 2 },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryWrap: { paddingHorizontal: Theme.spacing.md, marginBottom: 12 },
  summaryCard: { padding: 16 },
  summaryRow: { flexDirection: "row", alignItems: "center" },
  summaryItem: { flex: 1, alignItems: "center" },
  summaryLabel: { fontSize: 11, fontWeight: "500", marginBottom: 4 },
  summaryValue: { fontSize: 16, fontWeight: "800" },
  summaryDivider: { width: 1, height: 36, marginHorizontal: 8 },
  grid: { paddingHorizontal: Theme.spacing.md, paddingBottom: 100 },
  row: { justifyContent: "space-between", marginBottom: 12 },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
    gap: 8,
  },
  emptyEmoji: { fontSize: 60, marginBottom: 8 },
  emptyTitle: { fontSize: 18, fontWeight: "700" },
  emptyDesc: { fontSize: 14, textAlign: "center", paddingHorizontal: 32 },
  fabWrap: { position: "absolute", bottom: 24, right: 24 },
  fab: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    ...Theme.shadow.lg,
  },
});
````

## File: app/(tabs)/settings.tsx
````typescript
import AnimatedSection from "@/components/AnimatedSection";
import { ExportModal } from "@/components/ExportModal";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import { ThemePreference, useThemeContext } from "@/context/ThemeContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  cancelDailyReminder,
  getNotificationsUnavailableReason,
  isNotificationsSupported,
  requestPermissions,
  scheduleDailyReminder,
} from "@/services/notifications";
import { getVisionApiKey, setVisionApiKey } from "@/services/secrets";
import { POPULAR_CURRENCIES } from "@/utils/currency";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CURRENCIES = ["USD", "EUR", "GBP", "ALL", "JPY", "CAD"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({
  title,
  icon,
  color,
}: {
  title: string;
  icon: string;
  color: string;
}) {
  return (
    <View style={styles.sectionLabel}>
      <Ionicons name={icon as any} size={14} color={color} />
      <Text style={[styles.sectionLabelText, { color }]}>
        {title.toUpperCase()}
      </Text>
    </View>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const C = Colors[colorScheme ?? "dark"];
  const { preference, setPreference } = useThemeContext();
  const { currentUser, logout } = useAuth();
  const {
    expenses,
    savingGoals,
    prefs,
    updatePref,
    clearFinancialData,
    addExpense,
    refreshExchangeRates,
    isPremium,
    setTripBudget,
  } = useApp();

  const [showExportModal, setShowExportModal] = useState(false);
  const [visionKey, setVisionKey] = useState("");

  useEffect(() => {
    void getVisionApiKey().then((key) => {
      setVisionKey(key || prefs.googleVisionApiKey || "");
    });
  }, [prefs.googleVisionApiKey]);

  const initials = currentUser?.username?.slice(0, 2).toUpperCase() ?? "??";
  const memberSince = currentUser?.createdAt
    ? new Date(currentUser.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "—";

  const themeOptions: { key: ThemePreference; label: string; icon: string }[] =
    [
      { key: "light", label: "Light", icon: "sunny" },
      { key: "dark", label: "Dark", icon: "moon" },
      { key: "system", label: "System", icon: "phone-portrait-outline" },
    ];

  async function handleDailyReminderToggle(enabled: boolean) {
    const unavailable = getNotificationsUnavailableReason();
    if (unavailable) {
      Alert.alert("Not Available", unavailable);
      return;
    }
    if (enabled) {
      const granted = await requestPermissions();
      if (!granted) {
        Alert.alert(
          "Permission Required",
          "Enable notifications in system settings to receive daily reminders.",
        );
        return;
      }
      const scheduled = await scheduleDailyReminder(
        prefs.dailyReminderHour,
        prefs.dailyReminderMinute,
      );
      if (!scheduled) {
        Alert.alert(
          "Could Not Schedule",
          "Unable to set up the daily reminder.",
        );
        return;
      }
    } else {
      await cancelDailyReminder();
    }
    updatePref("dailyReminderEnabled", enabled);
  }

  async function handleBudgetAlertsToggle(enabled: boolean) {
    if (enabled && isNotificationsSupported()) {
      await requestPermissions();
    }
    updatePref("budgetAlerts", enabled);
  }

  async function handleReminderTime(hour: number, minute: number) {
    updatePref("dailyReminderHour", hour);
    updatePref("dailyReminderMinute", minute);
    if (prefs.dailyReminderEnabled && isNotificationsSupported()) {
      await scheduleDailyReminder(hour, minute);
    }
  }

  function handleLogout() {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Sign Out", style: "destructive", onPress: () => logout() },
    ]);
  }

  function handleClearData() {
    Alert.alert(
      "Clear All Data",
      "This will permanently delete all expenses and saving goals. This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete Everything",
          style: "destructive",
          onPress: () => {
            clearFinancialData();
            Alert.alert("Cleared", "All data has been deleted.");
          },
        },
      ],
    );
  }

  async function handleImportData() {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "text/csv",
          "text/comma-separated-values",
          "application/csv",
          "*/*",
        ],
      });
      if (result.canceled || !result.assets || result.assets.length === 0)
        return;

      const fileUri = result.assets[0].uri;
      const fileContent = await FileSystem.readAsStringAsync(fileUri);

      const lines = fileContent.split("\n").filter((l) => l.trim().length > 0);
      if (lines.length <= 1) {
        Alert.alert("Empty File", "The selected CSV file appears to be empty.");
        return;
      }

      // Skip header line
      let importedCount = 0;
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        // Basic CSV parser to handle quotes
        // A simple CSV parser for quoted cells.
        const cleanParts = [];
        let inQuotes = false;
        let currentPart = "";
        for (let char of line) {
          if (char === '"') inQuotes = !inQuotes;
          else if (char === "," && !inQuotes) {
            cleanParts.push(currentPart);
            currentPart = "";
          } else {
            currentPart += char;
          }
        }
        cleanParts.push(currentPart);

        if (cleanParts.length >= 5) {
          const [, dateStr, title, category, amountStr, note] = cleanParts;
          const amount = parseFloat(amountStr);
          if (!isNaN(amount)) {
            addExpense({
              title: title || "Imported Expense",
              amount,
              category: category || "other",
              date: new Date(dateStr).toISOString(),
              note: note || undefined,
            });
            importedCount++;
          }
        }
      }

      Alert.alert(
        "Import Successful",
        `Successfully imported ${importedCount} expenses.`,
      );
    } catch (err) {
      console.error(err);
      Alert.alert("Import Failed", "An error occurred while importing data.");
    }
  }

  // Dynamic styles that depend on colors
  const cardStyle = { backgroundColor: C.card, borderColor: C.border };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: C.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Page Title */}
        <AnimatedSection delay={0} distance={-12}>
          <View style={styles.pageHeader}>
            <Text style={[styles.pageTitle, { color: C.textPrimary }]}>
              Settings
            </Text>
            <Text style={[styles.pageSub, { color: C.textSecondary }]}>
              Customise your experience
            </Text>
          </View>
        </AnimatedSection>

        {/* ── Profile Card ──────────────────────────────────────────────── */}
        <AnimatedSection delay={80} distance={14}>
          <LinearGradient
            colors={["#5A2ED4", "#3C82FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.profileCard}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{initials}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.profileName}>
                @{currentUser?.username ?? "guest"}
              </Text>
              <Text style={styles.profileSub}>Member since {memberSince}</Text>
            </View>
            <View style={styles.profileStats}>
              <View style={styles.statItem}>
                <Text style={styles.statNum}>{expenses.length}</Text>
                <Text style={styles.statLabel}>Expenses</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNum}>{savingGoals.length}</Text>
                <Text style={styles.statLabel}>Goals</Text>
              </View>
            </View>
          </LinearGradient>
        </AnimatedSection>

        {/* ── Premium ───────────────────────────────────────────────────── */}
        <AnimatedSection delay={140} distance={10}>
          <SectionLabel
            title="Premium"
            icon="sparkles-outline"
            color={C.textTertiary}
          />
          <TouchableOpacity
            style={[
              styles.premiumCard,
              {
                backgroundColor: C.card,
                borderColor: isPremium ? "#34C47C" : C.border,
              },
            ]}
            onPress={() => router.push("/premium" as never)}
            activeOpacity={0.78}
          >
            <View
              style={[
                styles.premiumIcon,
                {
                  backgroundColor: isPremium
                    ? C.successLight
                    : C.primary + "18",
                },
              ]}
            >
              <Ionicons
                name={
                  isPremium ? "shield-checkmark-outline" : "lock-closed-outline"
                }
                size={20}
                color={isPremium ? C.success : C.primary}
              />
            </View>
            <View style={styles.rowBody}>
              <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                {isPremium ? "Premium Active" : "Unlock Premium"}
              </Text>
              <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                {isPremium
                  ? "Advanced travel tools are unlocked"
                  : "Trip budgets, travel filters, and premium exports"}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={C.textTertiary} />
          </TouchableOpacity>
        </AnimatedSection>

        {/* ── Appearance ────────────────────────────────────────────────── */}
        <AnimatedSection delay={180} distance={10}>
          <SectionLabel
            title="Appearance"
            icon="color-palette-outline"
            color={C.textTertiary}
          />
          <View style={[styles.themeRow]}>
            {themeOptions.map((opt) => {
              const active = preference === opt.key;
              return (
                <TouchableOpacity
                  key={opt.key}
                  onPress={() => setPreference(opt.key)}
                  activeOpacity={0.8}
                  style={[
                    styles.themeCard,
                    cardStyle,
                    active && { borderColor: C.primary, borderWidth: 2 },
                  ]}
                >
                  <View
                    style={[
                      styles.themeIconWrap,
                      { backgroundColor: active ? C.primary + "25" : C.border },
                    ]}
                  >
                    <Ionicons
                      name={opt.icon as any}
                      size={20}
                      color={active ? C.primary : C.textSecondary}
                    />
                  </View>
                  <Text
                    style={[
                      styles.themeLabel,
                      { color: active ? C.primary : C.textPrimary },
                    ]}
                  >
                    {opt.label}
                  </Text>
                  {active && (
                    <View
                      style={[
                        styles.themeCheck,
                        { backgroundColor: C.primary },
                      ]}
                    >
                      <Ionicons name="checkmark" size={10} color="#fff" />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </AnimatedSection>

        {/* ── Preferences ───────────────────────────────────────────────── */}
        <AnimatedSection delay={220} distance={10}>
          <SectionLabel
            title="Preferences"
            icon="options-outline"
            color={C.textTertiary}
          />
          <View style={[styles.card, cardStyle]}>
            {/* Currency */}
            <View style={[styles.row, styles.rowBorder]}>
              <View
                style={[styles.rowIcon, { backgroundColor: C.primary + "20" }]}
              >
                <Ionicons name="cash-outline" size={18} color={C.primary} />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Currency
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Select display format
                </Text>
              </View>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.currencyList}
            >
              {CURRENCIES.map((c) => {
                const sel = prefs.currency === c;
                return (
                  <TouchableOpacity
                    key={c}
                    onPress={() => updatePref("currency", c)}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: sel ? C.primary : C.inputBg,
                        borderColor: sel ? C.primary : C.border,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        { color: sel ? "#fff" : C.textSecondary },
                      ]}
                    >
                      {c}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Haptics */}
            <View style={[styles.row, styles.rowBorder]}>
              <View style={[styles.rowIcon, { backgroundColor: "#FF9F0A20" }]}>
                <Ionicons
                  name="phone-portrait-outline"
                  size={18}
                  color="#FF9F0A"
                />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Haptic Feedback
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Vibrate on actions
                </Text>
              </View>
              <Switch
                value={prefs.haptics}
                onValueChange={(v) => updatePref("haptics", v)}
                trackColor={{ false: C.border, true: C.primary + "80" }}
                thumbColor={prefs.haptics ? C.primary : C.textTertiary}
              />
            </View>

            {/* Daily Reminder */}
            <View style={[styles.row, styles.rowBorder]}>
              <View style={[styles.rowIcon, { backgroundColor: "#6C3FEF20" }]}>
                <Ionicons name="alarm-outline" size={18} color="#6C3FEF" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Daily Reminder
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  {getNotificationsUnavailableReason() ??
                    "Remind me to log expenses"}
                </Text>
              </View>
              <Switch
                value={prefs.dailyReminderEnabled}
                onValueChange={handleDailyReminderToggle}
                disabled={!isNotificationsSupported()}
                trackColor={{ false: C.border, true: C.primary + "80" }}
                thumbColor={
                  prefs.dailyReminderEnabled ? C.primary : C.textTertiary
                }
              />
            </View>

            {prefs.dailyReminderEnabled && isNotificationsSupported() && (
              <View style={[styles.row, styles.rowBorder]}>
                <View
                  style={[styles.rowIcon, { backgroundColor: "#6C3FEF20" }]}
                >
                  <Ionicons name="time-outline" size={18} color="#6C3FEF" />
                </View>
                <View style={styles.rowBody}>
                  <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                    Reminder Time
                  </Text>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingVertical: 8,
                      gap: 6,
                      flexDirection: "row",
                    }}
                  >
                    {[
                      { label: "Morning", hour: 8, minute: 0 },
                      { label: "Noon", hour: 12, minute: 0 },
                      { label: "Evening", hour: 20, minute: 0 },
                    ].map((preset) => {
                      const sel =
                        prefs.dailyReminderHour === preset.hour &&
                        prefs.dailyReminderMinute === preset.minute;
                      return (
                        <TouchableOpacity
                          key={preset.label}
                          onPress={() =>
                            handleReminderTime(preset.hour, preset.minute)
                          }
                          style={[
                            styles.chip,
                            {
                              backgroundColor: sel ? C.primary : C.inputBg,
                              borderColor: sel ? C.primary : C.border,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.chipText,
                              { color: sel ? "#fff" : C.textSecondary },
                            ]}
                          >
                            {preset.label}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            )}

            {/* Budget Alerts */}
            <View style={[styles.row, styles.rowBorder]}>
              <View style={[styles.rowIcon, { backgroundColor: "#34C47C20" }]}>
                <Ionicons
                  name="notifications-outline"
                  size={18}
                  color="#34C47C"
                />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Budget Alerts
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  {getNotificationsUnavailableReason()
                    ? "In-app warning when adding expenses"
                    : "Push alert at 80% and 100% of category budget"}
                </Text>
              </View>
              <Switch
                value={prefs.budgetAlerts}
                onValueChange={handleBudgetAlertsToggle}
                trackColor={{ false: C.border, true: C.primary + "80" }}
                thumbColor={prefs.budgetAlerts ? C.primary : C.textTertiary}
              />
            </View>

            {/* Travel Mode */}
            <View style={[styles.row, styles.rowBorder]}>
              <View style={[styles.rowIcon, { backgroundColor: "#4ECDC420" }]}>
                <Ionicons name="airplane-outline" size={18} color="#4ECDC4" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Travel Mode
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Track in foreign currency
                </Text>
              </View>
              <Switch
                value={prefs.travelMode}
                onValueChange={(v) => {
                  updatePref("travelMode", v);
                  if (v) refreshExchangeRates();
                }}
                trackColor={{ false: C.border, true: "#4ECDC480" }}
                thumbColor={prefs.travelMode ? "#4ECDC4" : C.textTertiary}
              />
            </View>

            {/* Travel Currency Picker — shown only when travel mode is on */}
            {prefs.travelMode && (
              <View style={[styles.row, styles.rowBorder]}>
                <View
                  style={[styles.rowIcon, { backgroundColor: "#4ECDC420" }]}
                >
                  <Ionicons name="globe-outline" size={18} color="#4ECDC4" />
                </View>
                <View style={styles.rowBody}>
                  <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                    Travel Currency
                  </Text>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingVertical: 8,
                      gap: 6,
                      flexDirection: "row",
                    }}
                  >
                    {POPULAR_CURRENCIES.filter((c) => c !== prefs.currency).map(
                      (c) => {
                        const sel = prefs.travelCurrency === c;
                        return (
                          <TouchableOpacity
                            key={c}
                            onPress={() => {
                              updatePref("travelCurrency", c);
                              refreshExchangeRates();
                            }}
                            style={[
                              styles.chip,
                              {
                                backgroundColor: sel ? "#4ECDC4" : C.inputBg,
                                borderColor: sel ? "#4ECDC4" : C.border,
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.chipText,
                                { color: sel ? "#fff" : C.textSecondary },
                              ]}
                            >
                              {c}
                            </Text>
                          </TouchableOpacity>
                        );
                      },
                    )}
                  </ScrollView>
                </View>
              </View>
            )}

            {prefs.travelMode &&
              (isPremium ? (
                <View style={[styles.row, styles.rowBorder]}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#FFAD0D20" }]}
                  >
                    <Ionicons name="flag-outline" size={18} color="#FFAD0D" />
                  </View>
                  <View style={styles.rowBody}>
                    <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                      Trip Budget
                    </Text>
                    <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                      Premium travel spending limit
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.budgetInputWrap,
                      { backgroundColor: C.inputBg, borderColor: C.border },
                    ]}
                  >
                    <Text
                      style={[
                        styles.budgetCurrency,
                        { color: C.textSecondary },
                      ]}
                    >
                      {prefs.travelCurrency}
                    </Text>
                    <TextInput
                      value={prefs.tripBudget ? String(prefs.tripBudget) : ""}
                      onChangeText={(value) =>
                        setTripBudget(Number.parseFloat(value) || 0)
                      }
                      keyboardType="decimal-pad"
                      placeholder="0"
                      placeholderTextColor={C.textTertiary}
                      style={[styles.budgetInput, { color: C.textPrimary }]}
                    />
                  </View>
                </View>
              ) : (
                <TouchableOpacity
                  style={[
                    styles.lockedRow,
                    { backgroundColor: C.inputBg, borderColor: C.border },
                  ]}
                  onPress={() => router.push("/premium" as never)}
                  activeOpacity={0.75}
                >
                  <Ionicons
                    name="lock-closed-outline"
                    size={17}
                    color={C.primary}
                  />
                  <Text style={[styles.lockedText, { color: C.textPrimary }]}>
                    Trip budgets and travel filters require Premium
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={15}
                    color={C.textTertiary}
                  />
                </TouchableOpacity>
              ))}

            {/* Manage Budgets Link */}
            <TouchableOpacity
              style={[styles.row, styles.rowBorder]}
              onPress={() => router.push("/manage-budgets")}
              activeOpacity={0.7}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#F45B6920" }]}>
                <Ionicons name="pie-chart-outline" size={18} color="#F45B69" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Category Limits
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Set spending caps
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={C.textTertiary}
              />
            </TouchableOpacity>

            {/* Manage Subscriptions Link */}
            <TouchableOpacity
              style={[styles.row, styles.rowBorder]}
              onPress={() => router.push("/manage-subscriptions")}
              activeOpacity={0.7}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#AF52DE20" }]}>
                <Ionicons name="repeat-outline" size={18} color="#AF52DE" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Subscriptions
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Manage recurring bills
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={C.textTertiary}
              />
            </TouchableOpacity>

            {/* Show Balance */}
            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: "#3C82FF20" }]}>
                <Ionicons name="eye-outline" size={18} color="#3C82FF" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Show Balance
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Display on dashboard
                </Text>
              </View>
              <Switch
                value={prefs.showBalance}
                onValueChange={(v) => updatePref("showBalance", v)}
                trackColor={{ false: C.border, true: C.primary + "80" }}
                thumbColor={prefs.showBalance ? C.primary : C.textTertiary}
              />
            </View>
            {/* Google Vision API Key */}
            <View style={[styles.row, styles.rowBorder]}>
              <View style={[styles.rowIcon, { backgroundColor: "#4A90E220" }]}>
                <Ionicons name="key-outline" size={18} color="#4A90E2" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Google Vision API Key
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Stored in SecureStore (Keychain) — not plaintext prefs
                </Text>
              </View>
              <TextInput
                value={visionKey}
                onChangeText={(v) => {
                  setVisionKey(v);
                  void setVisionApiKey(v);
                  // Clear legacy plaintext copy if present
                  if (prefs.googleVisionApiKey)
                    updatePref("googleVisionApiKey", "");
                }}
                placeholder="API Key"
                placeholderTextColor={C.textTertiary}
                secureTextEntry={true}
                style={[styles.rowLabel, { color: C.textPrimary, flex: 1 }]}
              />
            </View>
          </View>
        </AnimatedSection>

        {/* ── About ─────────────────────────────────────────────────────── */}
        <AnimatedSection delay={260} distance={10}>
          <SectionLabel
            title="About"
            icon="information-circle-outline"
            color={C.textTertiary}
          />
          <View style={[styles.card, cardStyle]}>
            <View style={[styles.row, styles.rowBorder]}>
              <View style={[styles.rowIcon, { backgroundColor: "#AF52DE20" }]}>
                <Ionicons name="rocket-outline" size={18} color="#AF52DE" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Version
                </Text>
              </View>
              <Text style={[styles.infoVal, { color: C.textSecondary }]}>
                1.0.0
              </Text>
            </View>
            <View style={[styles.row, styles.rowBorder]}>
              <View style={[styles.rowIcon, { backgroundColor: "#34C47C20" }]}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={18}
                  color="#34C47C"
                />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Storage
                </Text>
              </View>
              <Text style={[styles.infoVal, { color: C.textSecondary }]}>
                On-Device
              </Text>
            </View>
            <View style={styles.row}>
              <View
                style={[styles.rowIcon, { backgroundColor: C.primary + "20" }]}
              >
                <Ionicons
                  name="code-slash-outline"
                  size={18}
                  color={C.primary}
                />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Built with
                </Text>
              </View>
              <Text style={[styles.infoVal, { color: C.textSecondary }]}>
                Expo + RN
              </Text>
            </View>
          </View>
        </AnimatedSection>

        {/* ── Account / Danger ──────────────────────────────────────────── */}
        <AnimatedSection delay={300} distance={10}>
          <SectionLabel
            title="Account & Data"
            icon="person-circle-outline"
            color={C.textTertiary}
          />
          <View style={[styles.card, cardStyle]}>
            {/* Export Financial Report — opens the full modal */}
            <TouchableOpacity
              style={[styles.row, styles.rowBorder]}
              onPress={() => setShowExportModal(true)}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={["#5A2ED4", "#3C82FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.rowIcon}
              >
                <Ionicons name="bar-chart-outline" size={18} color="white" />
              </LinearGradient>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Export Financial Report
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  CSV or PDF • Expenses, Budgets & Goals
                </Text>
              </View>
              <View
                style={[
                  styles.exportBadge,
                  { backgroundColor: C.primary + "18" },
                ]}
              >
                <Text style={[styles.exportBadgeText, { color: C.primary }]}>
                  NEW
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={C.textTertiary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.row, styles.rowBorder]}
              onPress={() => router.push("/explore")}
              activeOpacity={0.7}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#34C47C20" }]}>
                <Ionicons name="earth-outline" size={18} color="#34C47C" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Explore Cross-Platform Features
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Open web app, install as a PWA, and review budgeting + savings
                  tools.
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={C.textTertiary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.row, styles.rowBorder]}
              onPress={handleImportData}
              activeOpacity={0.7}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#34C47C20" }]}>
                <Ionicons name="push-outline" size={18} color="#34C47C" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.textPrimary }]}>
                  Import from CSV
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Upload spreadsheet
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={C.textTertiary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.row, styles.rowBorder]}
              onPress={handleClearData}
              activeOpacity={0.7}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#FF9F0A20" }]}>
                <Ionicons name="trash-outline" size={18} color="#FF9F0A" />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: "#FF9F0A" }]}>
                  Clear All Data
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  Delete expenses & goals
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={C.textTertiary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.row}
              onPress={handleLogout}
              activeOpacity={0.7}
            >
              <View
                style={[styles.rowIcon, { backgroundColor: C.dangerLight }]}
              >
                <Ionicons name="log-out-outline" size={18} color={C.danger} />
              </View>
              <View style={styles.rowBody}>
                <Text style={[styles.rowLabel, { color: C.danger }]}>
                  Sign Out
                </Text>
                <Text style={[styles.rowSub, { color: C.textSecondary }]}>
                  @{currentUser?.username}
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={C.textTertiary}
              />
            </TouchableOpacity>
          </View>
        </AnimatedSection>

        <View style={{ height: 24 }} />
      </ScrollView>

      {/* Export Financial Report Modal */}
      <ExportModal
        visible={showExportModal}
        onClose={() => setShowExportModal(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 32 },

  pageHeader: {
    paddingHorizontal: Theme.spacing.md,
    paddingTop: 12,
    paddingBottom: 20,
  },
  pageTitle: { fontSize: 28, fontWeight: "800", letterSpacing: -0.5 },
  pageSub: { fontSize: 13, fontWeight: "500", marginTop: 2 },

  // Profile
  profileCard: {
    marginHorizontal: Theme.spacing.md,
    borderRadius: Theme.radius.xl,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 8,
    boxShadow: "0 8px 20px rgba(74, 32, 184, 0.35)",
    elevation: 10,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 20, fontWeight: "800", color: "#fff" },
  profileName: { fontSize: 16, fontWeight: "700", color: "#fff" },
  profileSub: { fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 },
  profileStats: { flexDirection: "row", alignItems: "center", gap: 12 },
  statItem: { alignItems: "center" },
  statNum: { fontSize: 18, fontWeight: "800", color: "#fff" },
  statLabel: {
    fontSize: 10,
    color: "rgba(255,255,255,0.7)",
    fontWeight: "600",
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  premiumCard: {
    marginHorizontal: Theme.spacing.md,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  premiumIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  // Section label
  sectionLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: Theme.spacing.md,
    paddingTop: 20,
    paddingBottom: 8,
  },
  sectionLabelText: { fontSize: 11, fontWeight: "700", letterSpacing: 0.8 },

  // Theme cards
  themeRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    gap: 10,
  },
  themeCard: {
    flex: 1,
    alignItems: "center",
    padding: 14,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    gap: 6,
    position: "relative",
  },
  themeIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  themeLabel: { fontSize: 13, fontWeight: "700" },
  themeCheck: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  // Card
  card: {
    marginHorizontal: Theme.spacing.md,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    overflow: "hidden",
  },

  // Rows
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 13,
    gap: 12,
  },
  rowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "transparent",
  },
  rowIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  rowBody: { flex: 1 },
  rowLabel: { fontSize: 15, fontWeight: "600" },
  rowSub: { fontSize: 12, marginTop: 1 },
  infoVal: { fontSize: 13, fontWeight: "500" },
  exportBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginRight: 4,
  },
  exportBadgeText: { fontSize: 10, fontWeight: "800", letterSpacing: 0.5 },

  // Currency
  currencyList: { paddingHorizontal: 14, paddingVertical: 10, gap: 8 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
  },
  chipText: { fontSize: 13, fontWeight: "600" },
  budgetInputWrap: {
    minWidth: 112,
    height: 44,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  budgetCurrency: { fontSize: 11, fontWeight: "800" },
  budgetInput: {
    flex: 1,
    minWidth: 42,
    fontSize: 15,
    fontWeight: "700",
    paddingVertical: Platform.OS === "android" ? 0 : undefined,
  },
  lockedRow: {
    marginHorizontal: 14,
    marginVertical: 10,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 11,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  lockedText: { flex: 1, fontSize: 12, fontWeight: "600" },
});
````

## File: app/(tabs)/simulator.tsx
````typescript
// Financial Goal Simulator screen
import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedSection from "@/components/AnimatedSection";
import { PageHeader } from "@/components/PageHeader";
import PressableScale from "@/components/PressableScale";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { calcProjection, ProjectionPoint } from "@/utils/forecast";
import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

// ── Main screen ────────────────────────────────────────────────────────
export default function SimulatorScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { width } = useWindowDimensions();

  // 5 slider controls
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(200);
  const [rate, setRate] = useState(5); // annual %
  const [years, setYears] = useState(10);
  const [targetGoal, setTargetGoal] = useState(15000);

  const projection: ProjectionPoint[] = useMemo(
    () => calcProjection(initial, monthly, rate, years),
    [initial, monthly, rate, years],
  );

  // Build chart data – sample ~12 labels max for readability
  const chartData = useMemo(() => {
    if (projection.length === 0) return null;
    const totalPoints = projection.length;
    const sampleStep = Math.max(1, Math.floor(totalPoints / 12));
    const sampled: ProjectionPoint[] = projection.filter(
      (_, i) => i % sampleStep === 0 || i === totalPoints - 1,
    );
    return {
      labels: sampled.map((p) => {
        const yr = Math.floor(p.month / 12);
        const mo = p.month % 12;
        return yr > 0 ? `${yr}y` : `${mo}m`;
      }),
      datasets: [
        {
          data: sampled.map((p) => p.balance),
          color: (opacity = 1) => `rgba(108, 63, 239, ${opacity})`,
          strokeWidth: 3,
        },
        {
          data: sampled.map(() => targetGoal),
          color: (opacity = 1) => `rgba(52, 196, 124, ${opacity})`,
          strokeWidth: 2,
        },
      ],
      legend: ["Projected", "Goal"],
    };
  }, [projection, targetGoal]);

  const finalBalance =
    projection.length > 0 ? projection[projection.length - 1].balance : 0;
  const reachesGoal = finalBalance >= targetGoal;

  const chartConfig = {
    backgroundColor: colors.card,
    backgroundGradientFrom: colors.card,
    backgroundGradientTo: colors.card,
    color: (opacity = 1) => `rgba(108, 63, 239, ${opacity})`,
    labelColor: () => colors.textSecondary,
    decimalPlaces: 0,
    propsForBackgroundLines: { stroke: colors.border, strokeDasharray: "" },
    propsForDots: { r: "3", strokeWidth: "1" },
  };

  const handleSave = useCallback(() => {
    alert("Simulation saved (preview only).");
  }, []);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <AnimatedSection delay={0} distance={-20}>
          <PageHeader
            eyebrow="Forecast"
            title="Goal Simulator"
            value={
              <AnimatedNumber
                value={finalBalance}
                format={(n) => "$" + Math.round(n).toLocaleString()}
                style={{
                  fontSize: 22,
                  fontWeight: "800",
                  color: reachesGoal ? colors.success : colors.danger,
                  letterSpacing: -0.5,
                }}
              />
            }
            subtitle="Project savings with compound interest"
          />
        </AnimatedSection>

        {/* Result banner */}
        <AnimatedSection delay={80}>
          <View
            style={[
              styles.resultCard,
              {
                backgroundColor: reachesGoal
                  ? colors.successLight
                  : colors.dangerLight,
              },
            ]}
          >
            <Ionicons
              name={reachesGoal ? "checkmark-circle" : "alert-circle"}
              size={22}
              color={reachesGoal ? colors.success : colors.danger}
            />
            <View style={styles.resultBody}>
              <Text
                style={[
                  styles.resultTitle,
                  { color: reachesGoal ? colors.success : colors.danger },
                ]}
              >
                {reachesGoal ? "Goal Reached!" : "Not Enough"}
              </Text>
              <Text style={[styles.resultSub, { color: colors.textSecondary }]}>
                {"Projected: $" +
                  Math.round(finalBalance).toLocaleString() +
                  " in " +
                  years +
                  (years > 1 ? " yrs" : " yr")}
              </Text>
            </View>
          </View>
        </AnimatedSection>

        {/* Chart */}
        {chartData && (
          <AnimatedSection delay={160}>
            <View
              style={[
                styles.chartWrap,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <LineChart
                data={chartData}
                width={width - 56}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
                fromZero
                yAxisLabel="$"
                yAxisSuffix=""
              />
            </View>
          </AnimatedSection>
        )}

        {/* Sliders */}
        <AnimatedSection delay={240}>
          <View
            style={[
              styles.sliderCard,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <SliderRow
              label="Initial Amount"
              icon="cash-outline"
              value={initial}
              min={0}
              max={50000}
              step={100}
              prefix="$"
              trackColor={colors.primary}
              colors={colors}
              onChange={setInitial}
            />
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <SliderRow
              label="Monthly Contribution"
              icon="repeat-outline"
              value={monthly}
              min={0}
              max={5000}
              step={50}
              prefix="$"
              trackColor={colors.primary}
              colors={colors}
              onChange={setMonthly}
            />
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <SliderRow
              label="Annual Interest Rate"
              icon="trending-up-outline"
              value={rate}
              min={0}
              max={15}
              step={0.5}
              suffix="%"
              trackColor="#FFAD0D"
              colors={colors}
              onChange={setRate}
            />
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <SliderRow
              label="Time Horizon"
              icon="time-outline"
              value={years}
              min={1}
              max={30}
              step={1}
              suffix=" yrs"
              trackColor="#4ECDC4"
              colors={colors}
              onChange={setYears}
            />
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <SliderRow
              label="Target Goal"
              icon="flag-outline"
              value={targetGoal}
              min={1000}
              max={500000}
              step={1000}
              prefix="$"
              trackColor={colors.success}
              colors={colors}
              onChange={setTargetGoal}
            />
          </View>
        </AnimatedSection>

        {/* Save button */}
        <AnimatedSection delay={300}>
          <PressableScale
            style={[styles.saveBtn, { backgroundColor: colors.primary }]}
            onPress={handleSave}
          >
            <Ionicons name="bookmark-outline" size={20} color="#fff" />
            <Text style={styles.saveBtnText}>Save Simulation</Text>
          </PressableScale>
        </AnimatedSection>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Slider row component ───────────────────────────────────────────────
interface SliderRowProps {
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  trackColor: string;
  colors: typeof Colors.light;
  onChange: (v: number) => void;
}

function SliderRow({
  label,
  icon,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  trackColor,
  colors,
  onChange,
}: SliderRowProps) {
  const display =
    (prefix ?? "") +
    (step < 1 ? value.toFixed(1) : Math.round(value).toLocaleString()) +
    (suffix ?? "");

  const pct = ((value - min) / (max - min)) * 100;

  return (
    <View style={styles.sliderRow}>
      <View style={styles.sliderHeader}>
        <Ionicons name={icon} size={18} color={trackColor} />
        <Text style={[styles.sliderLabel, { color: colors.textPrimary }]}>
          {label}
        </Text>
        <Text style={[styles.sliderValue, { color: trackColor }]}>
          {display}
        </Text>
      </View>
      {/* Progress bar */}
      <View style={[styles.track, { backgroundColor: colors.border }]}>
        <View
          style={[
            styles.trackFill,
            {
              width: `${pct}%` as unknown as number,
              backgroundColor: trackColor,
            },
          ]}
        />
      </View>
      {/* +/- buttons */}
      <View style={styles.stepRow}>
        <PressableScale
          onPress={() => onChange(Math.max(min, value - step))}
          style={[styles.stepBtn, { borderColor: colors.border }]}
        >
          <Ionicons name="remove" size={16} color={colors.textSecondary} />
        </PressableScale>
        <PressableScale
          onPress={() => onChange(Math.max(min, value - step * 10))}
          style={[styles.stepBtn, { borderColor: colors.border }]}
        >
          <Text style={[styles.stepLabel, { color: colors.textSecondary }]}>
            -10
          </Text>
        </PressableScale>
        <View style={styles.flex1} />
        <PressableScale
          onPress={() => onChange(Math.min(max, value + step * 10))}
          style={[styles.stepBtn, { borderColor: colors.border }]}
        >
          <Text style={[styles.stepLabel, { color: colors.textSecondary }]}>
            +10
          </Text>
        </PressableScale>
        <PressableScale
          onPress={() => onChange(Math.min(max, value + step))}
          style={[styles.stepBtn, { borderColor: colors.border }]}
        >
          <Ionicons name="add" size={16} color={colors.textSecondary} />
        </PressableScale>
      </View>
    </View>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: {
    paddingHorizontal: Theme.spacing.md,
    paddingTop: 8,
    paddingBottom: 32,
  },
  title: { fontSize: 28, fontWeight: "800", letterSpacing: -0.8 },
  subtitle: { fontSize: 14, fontWeight: "500", marginTop: 4, marginBottom: 16 },
  flex1: { flex: 1 },
  bottomSpacer: { height: 32 },

  resultCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: Theme.radius.md,
    marginBottom: 16,
  },
  resultBody: { flex: 1, marginLeft: 10 },
  resultTitle: { fontSize: 15, fontWeight: "700" },
  resultSub: { fontSize: 12, marginTop: 2 },

  chartWrap: {
    borderRadius: Theme.radius.lg,
    padding: 8,
    borderWidth: 1,
    marginBottom: 16,
    overflow: "hidden",
  },
  chart: { borderRadius: 12 },

  sliderCard: {
    borderRadius: Theme.radius.lg,
    padding: 16,
    borderWidth: 1,
    marginBottom: 20,
  },
  divider: { height: 1, marginVertical: 14 },

  sliderRow: { gap: 8 },
  sliderHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  sliderLabel: { flex: 1, fontSize: 14, fontWeight: "600" },
  sliderValue: { fontSize: 15, fontWeight: "800" },

  track: { height: 6, borderRadius: 3, overflow: "hidden" },
  trackFill: { height: 6, borderRadius: 3 },

  stepRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  stepBtn: {
    width: 36,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  stepLabel: { fontSize: 11, fontWeight: "700" },

  saveBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: Theme.radius.full,
    gap: 8,
  },
  saveBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
````

## File: app/(tabs)/splits.tsx
````typescript
/**
 * splits.tsx  —  Split Bills & Group Ledger (IOU Tracker)
 *
 * Two sub-tabs:
 *   Bills    — add / view / settle split expenses
 *   Balances — net balances + minimal transactions to settle up
 */

import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import {
  useSplit,
  Member,
  SplitMode,
  SplitShare,
} from '@/context/SplitContext';
import { useApp } from '@/context/AppContext';
import AnimatedSection from '@/components/AnimatedSection';
import PressableScale from '@/components/PressableScale';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtAmount(n: number, cur: string) {
  return `${cur} ${Math.abs(n).toFixed(2)}`;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// ─── Avatar ──────────────────────────────────────────────────────────────────

function Avatar({ member, size = 36 }: { member: Member; size?: number }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: member.color + '28',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: member.color + '50',
      }}
    >
      <Text style={{ fontSize: size * 0.38, fontWeight: '800', color: member.color }}>
        {initials(member.name)}
      </Text>
    </View>
  );
}

// ─── Add Member Modal ────────────────────────────────────────────────────────

function AddMemberModal({
  visible,
  onClose,
  colors,
}: {
  visible: boolean;
  onClose: () => void;
  colors: any;
}) {
  const { addMember } = useSplit();
  const [name, setName] = useState('');

  function handleAdd() {
    if (!name.trim()) return;
    addMember(name.trim());
    setName('');
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.centeredOverlay}
      >
        <TouchableOpacity style={StyleSheet.absoluteFillObject} onPress={onClose} />
        <View style={[styles.miniModal, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.miniModalTitle, { color: colors.textPrimary }]}>Add Person</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Name (e.g. Alice)"
            placeholderTextColor={colors.textTertiary}
            style={[styles.miniInput, { backgroundColor: colors.inputBg, borderColor: colors.border, color: colors.textPrimary }]}
            autoFocus
            onSubmitEditing={handleAdd}
            returnKeyType="done"
          />
          <View style={styles.miniModalRow}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.miniBtn, { backgroundColor: colors.inputBg }]}
            >
              <Text style={{ color: colors.textSecondary, fontWeight: '600' }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleAdd}
              style={[styles.miniBtn, { backgroundColor: colors.primary }]}
            >
              <Text style={{ color: 'white', fontWeight: '700' }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

// ─── Add Bill Modal ──────────────────────────────────────────────────────────

function AddBillModal({
  visible,
  onClose,
  colors,
  currency,
}: {
  visible: boolean;
  onClose: () => void;
  colors: any;
  currency: string;
}) {
  const { members, addBill } = useSplit();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState<string>('');
  const [splitMode, setSplitMode] = useState<SplitMode>('equal');
  const [exactAmounts, setExactAmounts] = useState<Record<string, string>>({});
  const [percentages, setPercentages] = useState<Record<string, string>>({});
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [note, setNote] = useState('');

  function reset() {
    setTitle('');
    setAmount('');
    setPaidBy('');
    setSplitMode('equal');
    setExactAmounts({});
    setPercentages({});
    setSelectedMembers([]);
    setNote('');
  }

  function handleClose() {
    reset();
    onClose();
  }

  function toggleMember(id: string) {
    if (id === paidBy) return;
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  }

  function handleAdd() {
    const total = parseFloat(amount);
    const selectedParticipants = selectedMembers.filter((id) => id !== paidBy);
    if (!title.trim()) { Alert.alert('Missing Title', 'Please enter a bill title.'); return; }
    if (isNaN(total) || total <= 0) { Alert.alert('Invalid Amount', 'Please enter a valid amount.'); return; }
    if (!paidBy) { Alert.alert('Who Paid?', 'Please select who paid the bill.'); return; }
    if (selectedParticipants.length === 0) { Alert.alert('Select Members', 'Please select who to split with.'); return; }

    const allParticipants = Array.from(new Set([paidBy, ...selectedParticipants]));

    let shares: SplitShare[] = [];
    if (splitMode === 'equal') {
      const perPerson = total / allParticipants.length;
      shares = allParticipants.map((id) => ({ memberId: id, value: perPerson }));
    } else if (splitMode === 'exact') {
      const enteredTotal = selectedParticipants.reduce((s, id) => s + (parseFloat(exactAmounts[id] || '0') || 0), 0);
      if (enteredTotal > total) {
        Alert.alert('Check Exact Amounts', 'The amounts assigned to others cannot be greater than the bill total.');
        return;
      }
      const payerShare = total - enteredTotal;
      shares = [
        { memberId: paidBy, value: payerShare },
        ...selectedParticipants.map((id) => ({ memberId: id, value: parseFloat(exactAmounts[id] || '0') || 0 })),
      ];
    } else {
      const enteredPct = selectedParticipants.reduce((s, id) => s + (parseFloat(percentages[id] || '0') || 0), 0);
      if (enteredPct > 100) {
        Alert.alert('Check Percentages', 'The percentages assigned to others cannot be greater than 100%.');
        return;
      }
      const payerPct = 100 - enteredPct;
      shares = [
        { memberId: paidBy, value: payerPct },
        ...selectedParticipants.map((id) => ({ memberId: id, value: parseFloat(percentages[id] || '0') || 0 })),
      ];
    }

    addBill({ title: title.trim(), totalAmount: total, currency, paidByMemberId: paidBy, splitMode, shares, note: note.trim() || undefined });
    handleClose();
  }

  const modeOptions: { key: SplitMode; label: string; icon: string }[] = [
    { key: 'equal', label: 'Equal', icon: 'git-branch-outline' },
    { key: 'exact', label: 'Exact', icon: 'cash-outline' },
    { key: 'percentage', label: '%', icon: 'pie-chart-outline' },
  ];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <View style={styles.overlayBottom}>
        <TouchableOpacity style={StyleSheet.absoluteFillObject} onPress={handleClose} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={[styles.bigSheet, { backgroundColor: colors.background }]}>
            {/* Header */}
            <LinearGradient colors={['#6C3FEF', '#3C82FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.bigSheetHeader}>
              <Text style={styles.bigSheetTitle}>Add Split Bill</Text>
              <TouchableOpacity onPress={handleClose} style={styles.bigSheetClose}>
                <Ionicons name="close" size={20} color="white" />
              </TouchableOpacity>
            </LinearGradient>

            <ScrollView style={styles.bigSheetContent} showsVerticalScrollIndicator={false}>
              {/* Title */}
              <Text style={[styles.fieldLabel, { color: colors.textSecondary }]}>BILL TITLE</Text>
              <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="e.g. Dinner at Trattoria"
                placeholderTextColor={colors.textTertiary}
                style={[styles.fieldInput, { backgroundColor: colors.inputBg, borderColor: colors.border, color: colors.textPrimary }]}
              />

              {/* Amount */}
              <Text style={[styles.fieldLabel, { color: colors.textSecondary }]}>TOTAL AMOUNT</Text>
              <View style={[styles.amountRow, { backgroundColor: colors.inputBg, borderColor: colors.border }]}>
                <Text style={[styles.currencySign, { color: colors.primary }]}>{currency}</Text>
                <TextInput
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="decimal-pad"
                  placeholder="0.00"
                  placeholderTextColor={colors.textTertiary}
                  style={[styles.amountInput, { color: colors.textPrimary }]}
                />
              </View>

              {/* Split Mode */}
              <Text style={[styles.fieldLabel, { color: colors.textSecondary }]}>SPLIT METHOD</Text>
              <View style={styles.modeRow}>
                {modeOptions.map((opt) => {
                  const active = splitMode === opt.key;
                  return (
                    <TouchableOpacity
                      key={opt.key}
                      onPress={() => setSplitMode(opt.key)}
                      style={[styles.modeChip, { backgroundColor: active ? colors.primary : colors.inputBg, borderColor: active ? colors.primary : colors.border }]}
                    >
                      <Ionicons name={opt.icon as any} size={14} color={active ? 'white' : colors.textSecondary} />
                      <Text style={[styles.modeChipText, { color: active ? 'white' : colors.textSecondary }]}>{opt.label}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Who Paid */}
              <Text style={[styles.fieldLabel, { color: colors.textSecondary }]}>WHO PAID?</Text>
              {members.length === 0 ? (
                <Text style={[styles.emptyHint, { color: colors.textTertiary }]}>Add people in the Members section first.</Text>
              ) : (
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.memberScroll}>
                  {members.map((m) => {
                    const sel = paidBy === m.id;
                    return (
                      <TouchableOpacity
                        key={m.id}
                        onPress={() => {
                          setPaidBy(m.id);
                          setSelectedMembers((prev) => prev.filter((id) => id !== m.id));
                        }}
                        style={[styles.memberChip, { backgroundColor: sel ? m.color + '22' : colors.inputBg, borderColor: sel ? m.color : colors.border }]}
                      >
                        <Avatar member={m} size={28} />
                        <Text style={[styles.memberChipText, { color: sel ? m.color : colors.textPrimary }]}>{m.name}</Text>
                        {sel && <Ionicons name="checkmark-circle" size={14} color={m.color} />}
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              )}

              {/* Split With */}
              <Text style={[styles.fieldLabel, { color: colors.textSecondary }]}>SPLIT WITH</Text>
              <View style={styles.splitWithGrid}>
                {members.filter((m) => m.id !== paidBy).map((m) => {
                  const sel = selectedMembers.includes(m.id);
                  return (
                    <View key={m.id}>
                      <TouchableOpacity
                        onPress={() => toggleMember(m.id)}
                        style={[styles.splitMemberRow, { backgroundColor: sel ? m.color + '12' : colors.inputBg, borderColor: sel ? m.color : colors.border }]}
                      >
                        <Avatar member={m} size={30} />
                        <Text style={[styles.splitMemberName, { color: colors.textPrimary, flex: 1 }]}>{m.name}</Text>
                        <View style={[styles.checkbox, { borderColor: sel ? m.color : colors.border, backgroundColor: sel ? m.color : 'transparent' }]}>
                          {sel && <Ionicons name="checkmark" size={12} color="white" />}
                        </View>
                      </TouchableOpacity>

                      {/* Exact amount input */}
                      {sel && splitMode === 'exact' && (
                        <TextInput
                          value={exactAmounts[m.id] ?? ''}
                          onChangeText={(v) => setExactAmounts((p) => ({ ...p, [m.id]: v }))}
                          keyboardType="decimal-pad"
                          placeholder={`Amount for ${m.name}`}
                          placeholderTextColor={colors.textTertiary}
                          style={[styles.subInput, { backgroundColor: colors.inputBg, borderColor: colors.border, color: colors.textPrimary }]}
                        />
                      )}

                      {/* Percentage input */}
                      {sel && splitMode === 'percentage' && (
                        <TextInput
                          value={percentages[m.id] ?? ''}
                          onChangeText={(v) => setPercentages((p) => ({ ...p, [m.id]: v }))}
                          keyboardType="decimal-pad"
                          placeholder={`% for ${m.name}`}
                          placeholderTextColor={colors.textTertiary}
                          style={[styles.subInput, { backgroundColor: colors.inputBg, borderColor: colors.border, color: colors.textPrimary }]}
                        />
                      )}
                    </View>
                  );
                })}
              </View>

              {/* Note */}
              <Text style={[styles.fieldLabel, { color: colors.textSecondary }]}>NOTE (OPTIONAL)</Text>
              <TextInput
                value={note}
                onChangeText={setNote}
                placeholder="Any details..."
                placeholderTextColor={colors.textTertiary}
                style={[styles.fieldInput, { backgroundColor: colors.inputBg, borderColor: colors.border, color: colors.textPrimary }]}
              />

              <View style={{ height: 24 }} />
            </ScrollView>

            {/* Add Button */}
            <View style={[styles.bigSheetFooter, { borderColor: colors.border }]}>
              <TouchableOpacity onPress={handleAdd} style={styles.addBillBtn} activeOpacity={0.85}>
                <LinearGradient colors={['#6C3FEF', '#3C82FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.addBillBtnInner}>
                  <Ionicons name="add-circle-outline" size={18} color="white" />
                  <Text style={styles.addBillBtnText}>Add Bill</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

// ─── Bills Tab ────────────────────────────────────────────────────────────────

function BillsTab({ colors, currency }: { colors: any; currency: string }) {
  const { bills, members, deleteBill, settleBill } = useSplit();

  const getMember = (id: string) => members.find((m) => m.id === id);

  const activeBills = bills.filter((b) => !b.settled);
  const settledBills = bills.filter((b) => b.settled);

  function handleDelete(id: string) {
    Alert.alert('Delete Bill', 'Remove this bill?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteBill(id) },
    ]);
  }

  function handleSettle(id: string) {
    Alert.alert('Mark as Settled', 'Mark this bill as fully settled?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Settle', style: 'default', onPress: () => settleBill(id) },
    ]);
  }

  const renderBill = (bill: (typeof bills)[0], idx: number, settled: boolean) => {
    const payer = getMember(bill.paidByMemberId);
    const participantIds = Array.from(new Set([bill.paidByMemberId, ...bill.shares.map((s) => s.memberId)]));
    const participants = participantIds.map((id) => getMember(id)).filter(Boolean) as Member[];

    // Compute per-person amount for display
    let perPersonLabel = '';
    if (bill.splitMode === 'equal') {
      perPersonLabel = `${currency} ${(bill.totalAmount / (bill.shares.length)).toFixed(2)} each`;
    } else if (bill.splitMode === 'percentage') {
      perPersonLabel = 'Custom %';
    } else {
      perPersonLabel = 'Custom amounts';
    }

    return (
      <AnimatedSection key={bill.id} delay={idx * 50} distance={15}>
        <View
          style={[
            styles.billCard,
            {
              backgroundColor: colors.card,
              borderColor: settled ? colors.border : colors.border,
              opacity: settled ? 0.65 : 1,
            },
          ]}
        >
        {/* Top row */}
        <View style={styles.billCardTop}>
          <View style={[styles.billIcon, { backgroundColor: colors.primary + '18' }]}>
            <Ionicons name="receipt-outline" size={18} color={colors.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.billTitle, { color: colors.textPrimary }]}>{bill.title}</Text>
            <Text style={[styles.billMeta, { color: colors.textSecondary }]}>
              {fmtDate(bill.date)} • {bill.splitMode} split
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={[styles.billAmount, { color: colors.primary }]}>
              {fmtAmount(bill.totalAmount, currency)}
            </Text>
            <Text style={[styles.billMeta, { color: colors.textTertiary }]}>{perPersonLabel}</Text>
          </View>
        </View>

        {/* Payer & participants */}
        <View style={[styles.billCardMid, { borderColor: colors.separator ?? colors.border }]}>
          <View style={styles.billInfoRow}>
            <Text style={[styles.billInfoLabel, { color: colors.textSecondary }]}>Paid by</Text>
            {payer && (
              <View style={styles.payerRow}>
                <Avatar member={payer} size={22} />
                <Text style={[styles.payerName, { color: colors.textPrimary }]}>{payer.name}</Text>
              </View>
            )}
          </View>
          <View style={styles.billInfoRow}>
            <Text style={[styles.billInfoLabel, { color: colors.textSecondary }]}>Split with</Text>
            <View style={styles.avatarStack}>
              {participants.slice(0, 5).map((m, i) => (
                <View key={m.id} style={{ marginLeft: i > 0 ? -8 : 0, zIndex: 10 - i }}>
                  <Avatar member={m} size={24} />
                </View>
              ))}
              {participants.length > 5 && (
                <View style={[styles.moreAvatar, { backgroundColor: colors.inputBg }]}>
                  <Text style={{ fontSize: 9, color: colors.textSecondary, fontWeight: '700' }}>+{participants.length - 5}</Text>
                </View>
              )}
            </View>
          </View>
        </View>

        {/* Note */}
        {bill.note ? (
          <Text style={[styles.billNote, { color: colors.textTertiary }]}>{bill.note}</Text>
        ) : null}

        {/* Actions */}
        {!settled && (
          <View style={styles.billActions}>
            <TouchableOpacity onPress={() => handleSettle(bill.id)} style={[styles.billActionBtn, { backgroundColor: colors.successLight ?? '#34C47C15' }]}>
              <Ionicons name="checkmark-circle-outline" size={15} color={colors.success} />
              <Text style={[styles.billActionText, { color: colors.success }]}>Settle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(bill.id)} style={[styles.billActionBtn, { backgroundColor: colors.dangerLight }]}>
              <Ionicons name="trash-outline" size={15} color={colors.danger} />
              <Text style={[styles.billActionText, { color: colors.danger }]}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}

        {settled && (
          <View style={[styles.settledBadge, { backgroundColor: colors.successLight ?? '#34C47C15' }]}>
            <Ionicons name="checkmark-circle" size={12} color={colors.success} />
            <Text style={[styles.settledBadgeText, { color: colors.success }]}>Settled</Text>
          </View>
        )}
        </View>
      </AnimatedSection>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
      {/* Active Bills */}
      {activeBills.length === 0 && settledBills.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={[styles.emptyIcon, { backgroundColor: colors.primary + '15' }]}>
            <Ionicons name="receipt-outline" size={40} color={colors.primary} />
          </View>
          <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>No Bills Yet</Text>
          <Text style={[styles.emptySub, { color: colors.textSecondary }]}>
            Tap the add button to split a shared expense with your group.
          </Text>
        </View>
      ) : (
        <>
          {activeBills.length > 0 && (
            <>
              <Text style={[styles.groupHeader, { color: colors.textSecondary }]}>ACTIVE</Text>
              {activeBills.map((b, idx) => renderBill(b, idx, false))}
            </>
          )}
          {settledBills.length > 0 && (
            <>
              <Text style={[styles.groupHeader, { color: colors.textSecondary }]}>SETTLED</Text>
              {settledBills.map((b, idx) => renderBill(b, idx, true))}
            </>
          )}
        </>
      )}

    </ScrollView>
  );
}

// ─── Balances Tab ─────────────────────────────────────────────────────────────

function BalancesTab({ colors, currency }: { colors: any; currency: string }) {
  const { members, getNetBalances, getMinimalTransactions, addSettlement } = useSplit();
  const balances = useMemo(() => getNetBalances(), [getNetBalances]);
  const transactions = useMemo(() => getMinimalTransactions(), [getMinimalTransactions]);

  function handleSettle(fromId: string, toId: string, amount: number) {
    Alert.alert(
      'Record Payment',
      `Mark that ${members.find((m) => m.id === fromId)?.name} paid ${fmtAmount(amount, currency)} to ${members.find((m) => m.id === toId)?.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => addSettlement({ fromMemberId: fromId, toMemberId: toId, amount }),
        },
      ]
    );
  }

  if (members.length === 0) {
    return (
      <View style={styles.emptyState}>
        <View style={[styles.emptyIcon, { backgroundColor: colors.primary + '15' }]}>
          <Ionicons name="people-outline" size={40} color={colors.primary} />
        </View>
        <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>No People Yet</Text>
        <Text style={[styles.emptySub, { color: colors.textSecondary }]}>
          Add people in the Members section to start tracking balances.
        </Text>
      </View>
    );
  }

  const allSettled = transactions.length === 0;

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
      {/* Net Balance Cards */}
      <Text style={[styles.groupHeader, { color: colors.textSecondary }]}>NET BALANCES</Text>
      {members.map((m, idx) => {
        const bal = balances[m.id] ?? 0;
        const isPositive = bal > 0.005;
        const isNegative = bal < -0.005;
        return (
          <AnimatedSection key={m.id} delay={idx * 40} distance={12}>
            <View style={[styles.balanceCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Avatar member={m} size={42} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.balanceName, { color: colors.textPrimary }]}>{m.name}</Text>
                <Text style={[styles.balanceStatus, { color: isPositive ? colors.success : isNegative ? colors.danger : colors.textTertiary }]}>
                  {isPositive ? 'is owed' : isNegative ? 'owes' : 'settled up'}
                </Text>
              </View>
              <Text
                style={[
                  styles.balanceAmount,
                  { color: isPositive ? colors.success : isNegative ? colors.danger : colors.textTertiary },
                ]}
              >
                {Math.abs(bal) < 0.005 ? '—' : fmtAmount(bal, currency)}
              </Text>
            </View>
          </AnimatedSection>
        );
      })}

      {/* Minimal Transactions */}
      <Text style={[styles.groupHeader, { color: colors.textSecondary }]}>SETTLE UP</Text>
      {allSettled ? (
        <View style={[styles.allSettledBox, { backgroundColor: colors.successLight ?? '#34C47C10', borderColor: colors.success + '40' }]}>
          <Ionicons name="checkmark-circle" size={28} color={colors.success} />
          <Text style={[styles.allSettledText, { color: colors.success }]}>All settled up! 🎉</Text>
        </View>
      ) : (
        transactions.map((tx, i) => (
          <AnimatedSection key={i} delay={i * 45} distance={12}>
            <View style={[styles.txCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.txRow}>
                <Avatar member={tx.from} size={36} />
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                  <Text style={[styles.txText, { color: colors.textPrimary }]}>
                    <Text style={{ fontWeight: '800', color: tx.from.color }}>{tx.from.name}</Text>
                    {' pays '}
                    <Text style={{ fontWeight: '800', color: tx.to.color }}>{tx.to.name}</Text>
                  </Text>
                  <Text style={[styles.txAmount, { color: colors.primary }]}>
                    {fmtAmount(tx.amount, currency)}
                  </Text>
                </View>
                <Avatar member={tx.to} size={36} />
              </View>
              <TouchableOpacity
                onPress={() => handleSettle(tx.from.id, tx.to.id, tx.amount)}
                style={[styles.markPaidBtn, { borderColor: colors.success }]}
              >
                <Ionicons name="checkmark" size={13} color={colors.success} />
                <Text style={[styles.markPaidText, { color: colors.success }]}>Mark Paid</Text>
              </TouchableOpacity>
            </View>
          </AnimatedSection>
        ))
      )}
    </ScrollView>
  );
}

// ─── Members Panel ────────────────────────────────────────────────────────────

function MembersPanel({ colors }: { colors: any }) {
  const { members, removeMember } = useSplit();
  const [showAddMember, setShowAddMember] = useState(false);

  function handleRemove(m: Member) {
    Alert.alert('Remove Person', `Remove ${m.name} from the group?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', style: 'destructive', onPress: () => removeMember(m.id) },
    ]);
  }

  return (
    <View style={[styles.membersPanel, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.membersPanelHeader}>
        <Text style={[styles.membersPanelTitle, { color: colors.textPrimary }]}>
          Group Members
        </Text>
        <TouchableOpacity onPress={() => setShowAddMember(true)} style={[styles.addMemberBtn, { backgroundColor: colors.primary }]}>
          <Ionicons name="person-add-outline" size={14} color="white" />
          <Text style={styles.addMemberBtnText}>Add</Text>
        </TouchableOpacity>
      </View>

      {members.length === 0 ? (
        <Text style={[styles.emptyHint, { color: colors.textTertiary }]}>No people yet. Add someone to get started.</Text>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingVertical: 4 }}>
          {members.map((m) => (
            <PressableScale
              key={m.id}
              onLongPress={() => handleRemove(m)}
              style={[styles.memberPill, { backgroundColor: m.color + '18', borderColor: m.color + '40' }]}
            >
              <Avatar member={m} size={26} />
              <Text style={[styles.memberPillText, { color: m.color }]}>{m.name}</Text>
            </PressableScale>
          ))}
        </ScrollView>
      )}

      <AddMemberModal
        visible={showAddMember}
        onClose={() => setShowAddMember(false)}
        colors={colors}
      />
    </View>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

type SubTab = 'bills' | 'balances';

export default function SplitsScreen() {
  const colorScheme = useColorScheme();
  const C = Colors[colorScheme ?? 'dark'];
  const { prefs } = useApp();
  const currency = prefs.currency;

  const [activeTab, setActiveTab] = useState<SubTab>('bills');
  const [showAddBill, setShowAddBill] = useState(false);
  const { bills } = useSplit();
  const activeBillCount = bills.filter((b) => !b.settled).length;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: C.background }]}>
      {/* Header */}
      <LinearGradient colors={['#6C3FEF', '#3C82FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Split Bills</Text>
          <Text style={styles.headerSub}>
            {activeBillCount > 0 ? `${activeBillCount} active bill${activeBillCount > 1 ? 's' : ''}` : 'IOU Tracker'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowAddBill(true)}
          style={styles.headerAddBtn}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Members Panel */}
      <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
        <MembersPanel colors={C} />
      </View>

      {/* Sub-Tabs */}
      <View style={[styles.subTabBar, { backgroundColor: C.card, borderColor: C.border }]}>
        {(['bills', 'balances'] as SubTab[]).map((tab) => {
          const active = activeTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.subTab, active && { backgroundColor: C.primary }]}
              activeOpacity={0.8}
            >
              <Ionicons
                name={tab === 'bills' ? (active ? 'receipt' : 'receipt-outline') : (active ? 'people' : 'people-outline')}
                size={15}
                color={active ? 'white' : C.textSecondary}
              />
              <Text style={[styles.subTabText, { color: active ? 'white' : C.textSecondary }]}>
                {tab === 'bills' ? 'Bills' : 'Balances'}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Content */}
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
        {activeTab === 'bills' ? (
          <BillsTab colors={C} currency={currency} />
        ) : (
          <BalancesTab colors={C} currency={currency} />
        )}
      </View>

      {/* Add Bill Modal (global, opened from header +) */}
      <AddBillModal
        visible={showAddBill}
        onClose={() => setShowAddBill(false)}
        colors={C}
        currency={currency}
      />
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  headerTitle: { fontSize: 22, fontWeight: '800', color: 'white' },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  headerAddBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Members
  membersPanel: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 12,
    marginBottom: 4,
  },
  membersPanelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  membersPanelTitle: { fontSize: 14, fontWeight: '700' },
  addMemberBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: Theme.radius.full,
  },
  addMemberBtnText: { color: 'white', fontSize: 12, fontWeight: '700' },
  memberPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: Theme.radius.full,
    borderWidth: 1,
  },
  memberPillText: { fontSize: 13, fontWeight: '700' },

  // Sub-tabs
  subTabBar: {
    flexDirection: 'row',
    margin: 16,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    padding: 3,
    gap: 3,
  },
  subTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 8,
    borderRadius: Theme.radius.sm,
  },
  subTabText: { fontSize: 13, fontWeight: '700' },

  // Group headers
  groupHeader: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 8,
    marginTop: 4,
  },

  // Bills
  billCard: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
  },
  billCardTop: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  billIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  billTitle: { fontSize: 15, fontWeight: '700', marginBottom: 2 },
  billMeta: { fontSize: 12 },
  billAmount: { fontSize: 16, fontWeight: '800' },
  billCardMid: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: 6,
  },
  billInfoRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  billInfoLabel: { fontSize: 12, fontWeight: '500' },
  payerRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  payerName: { fontSize: 13, fontWeight: '700' },
  avatarStack: { flexDirection: 'row', alignItems: 'center' },
  moreAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  billNote: { fontSize: 12, marginTop: 8, fontStyle: 'italic' },
  billActions: { flexDirection: 'row', gap: 8, marginTop: 10 },
  billActionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 8,
    borderRadius: Theme.radius.md,
  },
  billActionText: { fontSize: 13, fontWeight: '700' },
  settledBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Theme.radius.full,
  },
  settledBadgeText: { fontSize: 11, fontWeight: '700' },

  // Balances
  balanceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    marginBottom: 8,
  },
  balanceName: { fontSize: 15, fontWeight: '700' },
  balanceStatus: { fontSize: 12, marginTop: 2 },
  balanceAmount: { fontSize: 18, fontWeight: '800' },
  txCard: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
    gap: 10,
  },
  txRow: { flexDirection: 'row', alignItems: 'center' },
  txText: { fontSize: 14, fontWeight: '500' },
  txAmount: { fontSize: 17, fontWeight: '800', marginTop: 2 },
  markPaidBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 8,
    borderRadius: Theme.radius.md,
    borderWidth: 1.5,
  },
  markPaidText: { fontSize: 13, fontWeight: '700' },
  allSettledBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    marginBottom: 10,
  },
  allSettledText: { fontSize: 16, fontWeight: '800' },

  // Empty state
  emptyState: {
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 32,
    gap: 12,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: { fontSize: 20, fontWeight: '800' },
  emptySub: { fontSize: 14, textAlign: 'center', lineHeight: 22 },
  emptyHint: { fontSize: 13 },

  // Add Member Mini Modal
  centeredOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 32,
  },
  miniModal: {
    width: '100%',
    borderRadius: Theme.radius.xl,
    borderWidth: 1,
    padding: 20,
    gap: 14,
  },
  miniModalTitle: { fontSize: 17, fontWeight: '800', textAlign: 'center' },
  miniInput: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  miniModalRow: { flexDirection: 'row', gap: 10 },
  miniBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: Theme.radius.md,
    alignItems: 'center',
  },

  // Add Bill Big Modal
  overlayBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  bigSheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: '92%',
    overflow: 'hidden',
  },
  bigSheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  bigSheetTitle: { fontSize: 18, fontWeight: '800', color: 'white' },
  bigSheetClose: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigSheetContent: { padding: 20 },
  bigSheetFooter: {
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  addBillBtn: { borderRadius: Theme.radius.md, overflow: 'hidden' },
  addBillBtnInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
  },
  addBillBtnText: { color: 'white', fontSize: 16, fontWeight: '800' },

  // Form fields
  fieldLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 6,
    marginTop: 14,
  },
  fieldInput: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    height: 52,
  },
  currencySign: { fontSize: 18, fontWeight: '800', marginRight: 6 },
  amountInput: { flex: 1, fontSize: 22, fontWeight: '800' },
  modeRow: { flexDirection: 'row', gap: 8 },
  modeChip: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 9,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
  },
  modeChipText: { fontSize: 13, fontWeight: '700' },
  memberScroll: { gap: 8, paddingVertical: 4 },
  memberChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: Theme.radius.full,
    borderWidth: 1.5,
  },
  memberChipText: { fontSize: 13, fontWeight: '700' },
  splitWithGrid: { gap: 8 },
  splitMemberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
  },
  splitMemberName: { fontSize: 14, fontWeight: '600' },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subInput: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    marginTop: 4,
  },
});
````

## File: app/(tabs)/statistics.tsx
````typescript
import { Card } from '@/components/Card';
import { ProgressBar } from '@/components/ProgressBar';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedNumber from '@/components/AnimatedNumber';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useApp } from '@/context/AppContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getExpensesByCategory, getMonthlyTotals, getTotalExpenses, filterByPeriod, TimePeriod } from '@/utils/calculations';
import { getCategoryByKey } from '@/utils/categories';
import { formatCurrency } from '@/utils/formatters';
import { formatWithCurrency } from '@/utils/currency';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PageHeader } from '@/components/PageHeader';

export default function StatisticsScreen() {
  const { width } = useWindowDimensions();
  const W = width;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { expenses, savingGoals, income, prefs, isPremium } = useApp();

  const [filter, setFilter] = useState<TimePeriod>('all');

  const filteredExpenses = useMemo(() => filterByPeriod(expenses, filter), [expenses, filter]);
  const byCat = useMemo(() => getExpensesByCategory(filteredExpenses), [filteredExpenses]);
  const totalExp = useMemo(() => getTotalExpenses(filteredExpenses), [filteredExpenses]);
  const totalSaved = savingGoals.reduce((s, g) => s + g.currentAmount, 0);

  const chartMonths = filter === 'month' ? 1 : filter === '3months' ? 3 : filter === 'year' ? 12 : 6;
  const monthly = useMemo(() => getMonthlyTotals(expenses, chartMonths), [expenses, chartMonths]);

  const chartConfig = {
    backgroundColor: colors.card,
    backgroundGradientFrom: colors.card,
    backgroundGradientTo: colors.card,
    color: (opacity = 1) => `${colors.primary}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
    labelColor: () => colors.textSecondary,
    barPercentage: 0.6,
    decimalPlaces: 0,
    propsForBackgroundLines: { stroke: colors.border, strokeDasharray: '' },
  };

  const chartData = {
    labels: monthly.map(m => m.label),
    datasets: [
      {
        data: monthly.map(() => income),
        color: (opacity = 1) => `rgba(52, 196, 124, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: monthly.map(m => m.total || 0),
        color: (opacity = 1) => `rgba(244, 91, 105, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Income', 'Expenses'],
  };

  const catEntries = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  const travelExpenses = useMemo(() => expenses.filter(e => e.isTravelExpense), [expenses]);
  const travelSpentHome = travelExpenses.reduce((sum, e) => sum + e.amount, 0);
  const travelSpentOriginal = travelExpenses
    .filter(e => e.originalCurrency === prefs.travelCurrency)
    .reduce((sum, e) => sum + (e.originalAmount ?? 0), 0);
  const travelDays = new Set(travelExpenses.map(e => new Date(e.date).toDateString())).size || 1;
  const travelDailyAverage = travelSpentOriginal / travelDays;
  const pieColors = [colors.primary, colors.success, colors.danger, colors.warning, '#4ECDC4', '#4D7EA8', '#7C62A3', '#E77A5D', '#27AE60', '#1ABC9C'];
  const pieData = catEntries.slice(0, 6).map(([key, value], i) => ({
    name: getCategoryByKey(key).label,
    amount: value,
    color: pieColors[i % pieColors.length],
    legendFontColor: colors.textSecondary,
    legendFontSize: 11,
  }));

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* Header — slides in from top */}
        <AnimatedSection delay={0} distance={-20}>
          <PageHeader
            eyebrow="Analytics"
            title="Statistics"
            value={formatCurrency(totalExp, prefs.currency)}
            valueColor={colors.danger}
            subtitle={`Spent · ${formatCurrency(income - totalExp, prefs.currency)} net vs income`}
          />
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={80}>
          <View style={styles.filterRow}>
            {[
              { label: 'Month', value: 'month' },
              { label: '3M', value: '3months' },
              { label: 'Year', value: 'year' },
              { label: 'All', value: 'all' },
            ].map(f => (
              <FilterPill
                key={f.value}
                label={f.label}
                active={filter === f.value}
                activeColor={colors.primary}
                cardColor={colors.card}
                borderColor={colors.border}
                textColor={colors.textPrimary}
                onPress={() => setFilter(f.value as TimePeriod)}
              />
            ))}
          </View>
        </AnimatedSection>

        {/* Summary Row — count-up numbers */}
        <AnimatedSection delay={160}>
          <View style={styles.summaryRow}>
            {[
              { label: 'Income', value: income, color: colors.primary },
              { label: 'Spent', value: totalExp, color: colors.danger },
              { label: 'Saved', value: totalSaved, color: colors.success },
            ].map((item, idx) => (
              <Card key={item.label} style={styles.summaryCard} variant="elevated">
                <AnimatedNumber
                  value={item.value}
                  format={n => formatCurrency(n, prefs.currency)}
                  style={[styles.statValue, { color: item.color }]}
                  duration={900}
                  delay={idx * 100}
                />
                <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{item.label}</Text>
              </Card>
            ))}
          </View>
        </AnimatedSection>

        {/* Travel Insights */}
        {prefs.travelMode && (
          <AnimatedSection delay={240}>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Travel Insights</Text>
              {isPremium ? (
                <Card variant="elevated" padding={16}>
                  <View style={styles.travelStatsGrid}>
                    <TravelStat label="Trip spent" value={formatWithCurrency(travelSpentOriginal, prefs.travelCurrency)} color="#4ECDC4" />
                    <TravelStat label="Home value" value={formatCurrency(travelSpentHome, prefs.currency)} color={colors.primary} />
                    <TravelStat label="Daily avg" value={formatWithCurrency(travelDailyAverage, prefs.travelCurrency)} color={colors.warning} />
                  </View>
                </Card>
              ) : (
                <TouchableOpacity
                  onPress={() => router.push('/premium' as never)}
                  style={[styles.lockedTravelStats, { backgroundColor: colors.card, borderColor: colors.border }]}
                >
                  <Ionicons name="lock-closed-outline" size={17} color={colors.primary} />
                  <Text style={[styles.lockedTravelStatsText, { color: colors.textPrimary }]}>Premium unlocks travel analytics</Text>
                  <Ionicons name="chevron-forward" size={15} color={colors.textTertiary} />
                </TouchableOpacity>
              )}
            </View>
          </AnimatedSection>
        )}

        {/* Line Chart */}
        <AnimatedSection delay={320}>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Cash Flow Trend</Text>
            {monthly.length > 1 ? (
              <Card padding={8} variant="elevated">
                <LineChart
                  data={chartData}
                  width={W - 56}
                  height={220}
                  chartConfig={{ ...chartConfig, propsForDots: { r: '4', strokeWidth: '2' } }}
                  bezier
                  style={{ borderRadius: 12 }}
                  fromZero
                  yAxisLabel="$"
                  yAxisSuffix=""
                />
              </Card>
            ) : (
              <Card style={styles.noData}>
                <Text style={styles.noDataEmoji}>📈</Text>
                <Text style={[styles.noDataText, { color: colors.textSecondary }]}>Not enough data for a trend line</Text>
              </Card>
            )}
          </View>
        </AnimatedSection>

        {/* Pie Chart */}
        {pieData.length > 0 && (
          <AnimatedSection delay={400}>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Spending by Category</Text>
              <Card padding={12} variant="elevated">
                <PieChart
                  data={pieData}
                  width={W - 56}
                  height={180}
                  chartConfig={chartConfig}
                  accessor="amount"
                  backgroundColor="transparent"
                  paddingLeft="12"
                  hasLegend={false}
                  style={{ borderRadius: 12 }}
                />
                <View style={styles.legend}>
                  {pieData.map((d, i) => (
                    <View key={i} style={styles.legendItem}>
                      <View style={[styles.legendDot, { backgroundColor: d.color }]} />
                      <Text style={[styles.legendLabel, { color: colors.textSecondary }]} numberOfLines={1}>{d.name}</Text>
                      <Text style={[styles.legendValue, { color: colors.textPrimary }]}>{formatCurrency(d.amount, prefs.currency)}</Text>
                    </View>
                  ))}
                </View>
              </Card>
            </View>
          </AnimatedSection>
        )}

        {/* Category Breakdown — staggered rows */}
        {catEntries.length > 0 && (
          <AnimatedSection delay={480}>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Category Breakdown</Text>
              <Card variant="elevated" padding={16}>
                {catEntries.map(([key, value], i) => {
                  const cat = getCategoryByKey(key);
                  const pct = totalExp > 0 ? value / totalExp : 0;
                  return (
                    <AnimatedSection key={key} delay={500 + i * 60} distance={12}>
                      <View style={[styles.catRow, i < catEntries.length - 1 && { marginBottom: 14 }]}>
                        <View style={[styles.catDot, { backgroundColor: cat.color + '22' }]}>
                          <Text style={{ fontSize: 13 }}>{cat.emoji}</Text>
                        </View>
                        <View style={styles.catInfo}>
                          <View style={styles.catHeader}>
                            <Text style={[styles.catName, { color: colors.textPrimary }]}>{cat.label}</Text>
                            <Text style={[styles.catAmount, { color: colors.textPrimary }]}>{formatCurrency(value, prefs.currency)}</Text>
                          </View>
                          <ProgressBar progress={pct} color={cat.color} height={5} backgroundColor={colors.border} />
                        </View>
                      </View>
                    </AnimatedSection>
                  );
                })}
              </Card>
            </View>
          </AnimatedSection>
        )}

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/** Animated filter pill with scale press feedback */
function FilterPill({
  label, active, activeColor, cardColor, borderColor, textColor, onPress,
}: {
  label: string; active: boolean; activeColor: string; cardColor: string;
  borderColor: string; textColor: string; onPress: () => void;
}) {
  const scale = React.useRef(new Animated.Value(1)).current;
  const press = () => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 0.9, useNativeDriver: true, speed: 50, bounciness: 0 }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 20, bounciness: 8 }),
    ]).start();
    onPress();
  };
  return (
    <TouchableOpacity onPress={press} activeOpacity={1}>
      <Animated.View
        style={[
          styles.filterBtn,
          { backgroundColor: active ? activeColor : cardColor, borderColor: active ? activeColor : borderColor, transform: [{ scale }] },
        ]}
      >
        <Text style={[styles.filterText, { color: active ? '#fff' : textColor }]}>{label}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

function TravelStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <View style={styles.travelStat}>
      <Text style={[styles.travelStatValue, { color }]} numberOfLines={1}>{value}</Text>
      <Text style={styles.travelStatLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 32 },
  filterRow: { flexDirection: 'row', paddingHorizontal: Theme.spacing.md, gap: 8, marginBottom: 16 },
  filterBtn: { flex: 1, paddingVertical: 8, borderRadius: Theme.radius.full, borderWidth: 1, alignItems: 'center' },
  filterText: { fontSize: 13, fontWeight: '600' },
  summaryRow: { flexDirection: 'row', paddingHorizontal: Theme.spacing.md, gap: 8, marginBottom: 8 },
  summaryCard: { flex: 1, alignItems: 'center', padding: 12 },
  statValue: { fontSize: 15, fontWeight: '800', marginBottom: 2 },
  statLabel: { fontSize: 11, fontWeight: '500' },
  section: { paddingHorizontal: Theme.spacing.md, marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  travelStatsGrid: { flexDirection: 'row', gap: 8 },
  travelStat: { flex: 1, alignItems: 'center' },
  travelStatValue: { fontSize: 13, fontWeight: '800', marginBottom: 3 },
  travelStatLabel: { fontSize: 10, fontWeight: '700', color: '#8A86A8' },
  lockedTravelStats: { borderWidth: 1, borderRadius: Theme.radius.md, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 8 },
  lockedTravelStatsText: { flex: 1, fontSize: 13, fontWeight: '700' },
  noData: { alignItems: 'center', paddingVertical: 24, gap: 8 },
  noDataEmoji: { fontSize: 36 },
  noDataText: { fontSize: 14 },
  legend: { marginTop: 12, gap: 8 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendLabel: { flex: 1, fontSize: 13 },
  legendValue: { fontSize: 13, fontWeight: '700' },
  catRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  catDot: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  catInfo: { flex: 1, gap: 6 },
  catHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  catName: { fontSize: 14, fontWeight: '600' },
  catAmount: { fontSize: 14, fontWeight: '700' },
});
````

## File: app/(tabs)/statistics.web.tsx
````typescript
import { Card } from '@/components/Card';
import { ProgressBar } from '@/components/ProgressBar';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useApp } from '@/context/AppContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getExpensesByCategory, getMonthlyTotals, getTotalExpenses, filterByPeriod, TimePeriod } from '@/utils/calculations';
import { getCategoryByKey } from '@/utils/categories';
import { formatCurrency } from '@/utils/formatters';
import { formatWithCurrency } from '@/utils/currency';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StatisticsScreen() {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { expenses, savingGoals, income, prefs, isPremium } = useApp();

  const [filter, setFilter] = useState<TimePeriod>('all');

  const filteredExpenses = useMemo(() => filterByPeriod(expenses, filter), [expenses, filter]);
  const byCat = useMemo(() => getExpensesByCategory(filteredExpenses), [filteredExpenses]);
  const totalExp = useMemo(() => getTotalExpenses(filteredExpenses), [filteredExpenses]);
  const totalSaved = savingGoals.reduce((s, g) => s + g.currentAmount, 0);

  const chartMonths = filter === 'month' ? 1 : filter === '3months' ? 3 : filter === 'year' ? 12 : 6;
  const monthly = useMemo(() => getMonthlyTotals(expenses, chartMonths), [expenses, chartMonths]);
  const catEntries = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  const travelExpenses = useMemo(() => expenses.filter(e => e.isTravelExpense), [expenses]);
  const travelSpentHome = travelExpenses.reduce((sum, e) => sum + e.amount, 0);
  const travelSpentOriginal = travelExpenses
    .filter(e => e.originalCurrency === prefs.travelCurrency)
    .reduce((sum, e) => sum + (e.originalAmount ?? 0), 0);
  const travelDays = new Set(travelExpenses.map(e => new Date(e.date).toDateString())).size || 1;
  const travelDailyAverage = travelSpentOriginal / travelDays;
  const pieColors = ['#6C3FEF', '#34C47C', '#F45B69', '#FFAD0D', '#4ECDC4', '#9B59B6'];
  const pieData = catEntries.slice(0, 6).map(([key, value], i) => ({
    name: getCategoryByKey(key).label,
    amount: value,
    color: pieColors[i % pieColors.length],
  }));
  const maxMonthly = Math.max(...monthly.map((m) => Math.max(m.total || 0, income)), 1);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Statistics</Text>
        </View>

        <View style={styles.filterRow}>
          {[
            { label: 'Month', value: 'month' },
            { label: '3M', value: '3months' },
            { label: 'Year', value: 'year' },
            { label: 'All', value: 'all' },
          ].map(f => (
            <TouchableOpacity
              key={f.value}
              onPress={() => setFilter(f.value as TimePeriod)}
              style={[
                styles.filterBtn,
                filter === f.value ? { backgroundColor: colors.primary } : { backgroundColor: colors.card, borderColor: colors.border }
              ]}
            >
              <Text style={[styles.filterText, { color: filter === f.value ? '#fff' : colors.textPrimary }]}>{f.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.summaryRow}>
          {[
            { label: 'Income', value: income, color: colors.primary },
            { label: 'Spent', value: totalExp, color: colors.danger },
            { label: 'Saved', value: totalSaved, color: colors.success },
          ].map(item => (
            <Card key={item.label} style={styles.summaryCard} variant="elevated">
              <Text style={[styles.statValue, { color: item.color }]}>{formatCurrency(item.value, prefs.currency)}</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{item.label}</Text>
            </Card>
          ))}
        </View>

        {prefs.travelMode && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Travel Insights</Text>
            {isPremium ? (
              <Card variant="elevated" padding={16}>
                <View style={styles.travelStatsGrid}>
                  <TravelStat label="Trip spent" value={formatWithCurrency(travelSpentOriginal, prefs.travelCurrency)} color="#4ECDC4" />
                  <TravelStat label="Home value" value={formatCurrency(travelSpentHome, prefs.currency)} color={colors.primary} />
                  <TravelStat label="Daily avg" value={formatWithCurrency(travelDailyAverage, prefs.travelCurrency)} color={colors.warning} />
                </View>
              </Card>
            ) : (
              <TouchableOpacity
                onPress={() => router.push('/premium' as never)}
                style={[styles.lockedTravelStats, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <Ionicons name="lock-closed-outline" size={17} color={colors.primary} />
                <Text style={[styles.lockedTravelStatsText, { color: colors.textPrimary }]}>Premium unlocks travel analytics</Text>
                <Ionicons name="chevron-forward" size={15} color={colors.textTertiary} />
              </TouchableOpacity>
            )}
          </View>
        )}

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Cash Flow Trend</Text>
          {monthly.length > 1 ? (
            <Card padding={16} variant="elevated">
              <View style={[styles.barChart, { width: width - 56 }]}>
                {monthly.map((m) => (
                  <View key={m.label} style={styles.barGroup}>
                    <View style={styles.barPair}>
                      <View style={[styles.bar, { height: `${Math.max(8, (income / maxMonthly) * 100)}%`, backgroundColor: colors.success }]} />
                      <View style={[styles.bar, { height: `${Math.max(8, ((m.total || 0) / maxMonthly) * 100)}%`, backgroundColor: colors.danger }]} />
                    </View>
                    <Text style={[styles.barLabel, { color: colors.textSecondary }]} numberOfLines={1}>{m.label}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.legendRow}>
                <LegendSwatch color={colors.success} label="Income" textColor={colors.textSecondary} />
                <LegendSwatch color={colors.danger} label="Expenses" textColor={colors.textSecondary} />
              </View>
            </Card>
          ) : (
            <Card style={styles.noData}>
              <Text style={styles.noDataEmoji}>📈</Text>
              <Text style={[styles.noDataText, { color: colors.textSecondary }]}>Not enough data for a trend line</Text>
            </Card>
          )}
        </View>

        {pieData.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Spending by Category</Text>
            <Card padding={12} variant="elevated">
              <View style={styles.legend}>
                {pieData.map((d, i) => (
                  <View key={i} style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: d.color }]} />
                    <Text style={[styles.legendLabel, { color: colors.textSecondary }]} numberOfLines={1}>{d.name}</Text>
                    <Text style={[styles.legendValue, { color: colors.textPrimary }]}>{formatCurrency(d.amount, prefs.currency)}</Text>
                  </View>
                ))}
              </View>
            </Card>
          </View>
        )}

        {catEntries.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Category Breakdown</Text>
            <Card variant="elevated" padding={16}>
              {catEntries.map(([key, value], i) => {
                const cat = getCategoryByKey(key);
                const pct = totalExp > 0 ? value / totalExp : 0;
                return (
                  <View key={key} style={[styles.catRow, i < catEntries.length - 1 && { marginBottom: 14 }]}>
                    <View style={[styles.catDot, { backgroundColor: cat.color + '22' }]}>
                      <Text style={{ fontSize: 13 }}>{cat.emoji}</Text>
                    </View>
                    <View style={styles.catInfo}>
                      <View style={styles.catHeader}>
                        <Text style={[styles.catName, { color: colors.textPrimary }]}>{cat.label}</Text>
                        <Text style={[styles.catAmount, { color: colors.textPrimary }]}>{formatCurrency(value, prefs.currency)}</Text>
                      </View>
                      <ProgressBar progress={pct} color={cat.color} height={5} backgroundColor={colors.border} />
                    </View>
                  </View>
                );
              })}
            </Card>
          </View>
        )}

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function TravelStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <View style={styles.travelStat}>
      <Text style={[styles.travelStatValue, { color }]} numberOfLines={1}>{value}</Text>
      <Text style={styles.travelStatLabel}>{label}</Text>
    </View>
  );
}

function LegendSwatch({ color, label, textColor }: { color: string; label: string; textColor: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={[styles.legendLabel, { color: textColor }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 32 },
  header: { paddingHorizontal: Theme.spacing.md, paddingTop: 8, paddingBottom: 16 },
  title: { fontSize: 28, fontWeight: '800', letterSpacing: -0.8 },
  filterRow: { flexDirection: 'row', paddingHorizontal: Theme.spacing.md, gap: 8, marginBottom: 16 },
  filterBtn: { flex: 1, paddingVertical: 8, borderRadius: Theme.radius.full, borderWidth: 1, alignItems: 'center' },
  filterText: { fontSize: 13, fontWeight: '600' },
  summaryRow: { flexDirection: 'row', paddingHorizontal: Theme.spacing.md, gap: 8, marginBottom: 8 },
  summaryCard: { flex: 1, alignItems: 'center', padding: 12 },
  statValue: { fontSize: 15, fontWeight: '800', marginBottom: 2 },
  statLabel: { fontSize: 11, fontWeight: '500' },
  section: { paddingHorizontal: Theme.spacing.md, marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  travelStatsGrid: { flexDirection: 'row', gap: 8 },
  travelStat: { flex: 1, alignItems: 'center' },
  travelStatValue: { fontSize: 13, fontWeight: '800', marginBottom: 3 },
  travelStatLabel: { fontSize: 10, fontWeight: '700', color: '#8A86A8' },
  lockedTravelStats: { borderWidth: 1, borderRadius: Theme.radius.md, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 8 },
  lockedTravelStatsText: { flex: 1, fontSize: 13, fontWeight: '700' },
  barChart: { height: 180, flexDirection: 'row', alignItems: 'flex-end', gap: 8 },
  barGroup: { flex: 1, alignItems: 'center', height: '100%' },
  barPair: { flex: 1, width: '100%', flexDirection: 'row', alignItems: 'flex-end', gap: 3, justifyContent: 'center' },
  bar: { width: '42%', borderRadius: 6, minHeight: 8 },
  barLabel: { fontSize: 10, marginTop: 6, fontWeight: '600' },
  legendRow: { flexDirection: 'row', gap: 16, marginTop: 12 },
  noData: { alignItems: 'center', paddingVertical: 24, gap: 8 },
  noDataEmoji: { fontSize: 36 },
  noDataText: { fontSize: 14 },
  legend: { gap: 8 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendLabel: { flex: 1, fontSize: 13 },
  legendValue: { fontSize: 13, fontWeight: '700' },
  catRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  catDot: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  catInfo: { flex: 1, gap: 6 },
  catHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  catName: { fontSize: 14, fontWeight: '600' },
  catAmount: { fontSize: 14, fontWeight: '700' },
});
````

## File: app/(tabs)/wallet.tsx
````typescript
import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import PressableScale from "@/components/PressableScale";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useSharedWallet } from "@/context/SharedWalletContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { getCategoryByKey } from "@/utils/categories";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FamilyWalletScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    wallet,
    cloudEnabled,
    createWallet,
    addMember,
    addSharedTransaction,
    clearEditedElsewhere,
  } = useSharedWallet();

  const [walletName, setWalletName] = useState("Family Wallet");
  const [ownerName, setOwnerName] = useState("Me");
  const [memberName, setMemberName] = useState("");
  const [txTitle, setTxTitle] = useState("");
  const [txAmount, setTxAmount] = useState("");

  const sharedTotal = useMemo(
    () => wallet?.transactions.reduce((s, t) => s + t.amount, 0) ?? 0,
    [wallet?.transactions],
  );

  function handleCreate() {
    createWallet(walletName, ownerName);
  }

  function handleAddMember() {
    if (!memberName.trim()) {
      Alert.alert("Name required", "Enter a member display name.");
      return;
    }
    addMember(memberName, "editor");
    setMemberName("");
  }

  function handleAddTx() {
    const amount = Number.parseFloat(txAmount);
    if (!txTitle.trim() || !Number.isFinite(amount) || amount <= 0) {
      Alert.alert(
        "Invalid transaction",
        "Enter a title and amount greater than zero.",
      );
      return;
    }
    const owner = wallet?.members.find((m) => m.role === "owner");
    addSharedTransaction({
      title: txTitle.trim(),
      amount,
      category: "other",
      date: new Date().toISOString(),
      createdBy: owner?.id ?? "local",
    });
    setTxTitle("");
    setTxAmount("");
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <AnimatedSection delay={0} distance={-20}>
          <PageHeader
            eyebrow="Shared"
            title="Family Wallet"
            value={
              wallet ? (
                <AnimatedNumber
                  value={sharedTotal}
                  format={(n) => formatCurrency(n)}
                  style={{
                    fontSize: 22,
                    fontWeight: "800",
                    color: colors.danger,
                    letterSpacing: -0.5,
                  }}
                />
              ) : undefined
            }
            subtitle={
              cloudEnabled
                ? "Cloud sync on · personal expenses stay private"
                : "Local-only · personal expenses stay private"
            }
          />
        </AnimatedSection>

        {!wallet ? (
          <AnimatedSection delay={100}>
            <View
              style={[
                styles.card,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.cardBorder,
                },
              ]}
            >
              <Text style={[styles.section, { color: colors.textPrimary }]}>
                Create shared wallet
              </Text>
              <Input
                label="Wallet name"
                value={walletName}
                onChangeText={setWalletName}
              />
              <Input
                label="Your name"
                value={ownerName}
                onChangeText={setOwnerName}
              />
              <Button title="Create wallet" onPress={handleCreate} />
            </View>
          </AnimatedSection>
        ) : (
          <>
            <AnimatedSection delay={100}>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: colors.card,
                    borderColor: colors.cardBorder,
                  },
                ]}
              >
                <Text style={[styles.section, { color: colors.textPrimary }]}>
                  {wallet.name}
                </Text>
                <Text style={[styles.meta, { color: colors.textSecondary }]}>
                  {wallet.members.length} members · {wallet.transactions.length}{" "}
                  shared txs
                </Text>

                <Text style={[styles.label, { color: colors.textSecondary }]}>
                  Members
                </Text>
                {wallet.members.map((m) => (
                  <View key={m.id} style={styles.row}>
                    <Ionicons
                      name="person-outline"
                      size={16}
                      color={colors.textSecondary}
                    />
                    <Text
                      style={[styles.rowText, { color: colors.textPrimary }]}
                    >
                      {m.displayName} · {m.role}
                    </Text>
                  </View>
                ))}
                <Input
                  label="Add member"
                  value={memberName}
                  onChangeText={setMemberName}
                  placeholder="Name"
                />
                <Button
                  title="Invite as editor"
                  onPress={handleAddMember}
                  variant="secondary"
                />
              </View>
            </AnimatedSection>

            <AnimatedSection delay={180}>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: colors.card,
                    borderColor: colors.cardBorder,
                  },
                ]}
              >
                <Text style={[styles.section, { color: colors.textPrimary }]}>
                  Add shared expense
                </Text>
                <Input
                  label="Title"
                  value={txTitle}
                  onChangeText={setTxTitle}
                />
                <Input
                  label="Amount"
                  value={txAmount}
                  onChangeText={setTxAmount}
                  keyboardType="decimal-pad"
                />
                <Button title="Add to shared wallet" onPress={handleAddTx} />
              </View>
            </AnimatedSection>

            <AnimatedSection delay={260}>
              <Text
                style={[styles.activityTitle, { color: colors.textPrimary }]}
              >
                Shared activity
              </Text>
            </AnimatedSection>

            {wallet.transactions.length === 0 ? (
              <AnimatedSection delay={300}>
                <Text
                  style={[styles.emptyHint, { color: colors.textSecondary }]}
                >
                  No shared transactions yet.
                </Text>
              </AnimatedSection>
            ) : (
              wallet.transactions.map((tx, idx) => {
                const cat = getCategoryByKey(tx.category);
                return (
                  <AnimatedSection
                    key={tx.id}
                    delay={300 + idx * 50}
                    distance={15}
                  >
                    <PressableScale
                      accessibilityLabel={`${tx.title}, ${formatCurrency(tx.amount)}`}
                      onPress={() =>
                        tx.editedElsewhere && clearEditedElsewhere(tx.id)
                      }
                      style={[
                        styles.tx,
                        {
                          backgroundColor: colors.card,
                          borderColor: tx.editedElsewhere
                            ? colors.warning
                            : colors.cardBorder,
                        },
                      ]}
                    >
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.txTitle,
                            { color: colors.textPrimary },
                          ]}
                        >
                          {tx.title}
                        </Text>
                        <Text
                          style={{
                            color: colors.textSecondary,
                            fontSize: Theme.fontSize.sm,
                          }}
                        >
                          {cat.label}
                          {tx.editedElsewhere
                            ? " · Edited elsewhere — tap to dismiss"
                            : ""}
                        </Text>
                      </View>
                      <Text style={{ color: colors.danger, fontWeight: "700" }}>
                        -{formatCurrency(tx.amount)}
                      </Text>
                    </PressableScale>
                  </AnimatedSection>
                );
              })
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 48, gap: Theme.spacing.md },
  card: {
    marginHorizontal: Theme.spacing.md,
    borderWidth: 1,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.md,
    gap: Theme.spacing.sm,
  },
  section: {
    fontSize: Theme.fontSize.lg,
    fontWeight: Theme.fontWeight.bold,
  },
  activityTitle: {
    marginHorizontal: Theme.spacing.md,
    fontSize: Theme.fontSize.lg,
    fontWeight: Theme.fontWeight.bold,
  },
  emptyHint: {
    marginHorizontal: Theme.spacing.md,
    fontSize: Theme.fontSize.sm,
  },
  meta: { fontSize: Theme.fontSize.sm },
  label: {
    fontSize: Theme.fontSize.xs,
    fontWeight: Theme.fontWeight.semiBold,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
  rowText: { fontSize: Theme.fontSize.md },
  tx: {
    marginHorizontal: Theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.sm,
    gap: Theme.spacing.sm,
  },
  txTitle: {
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.semiBold,
  },
});
````

## File: app/_layout.tsx
````typescript
"use client";

import { AppProvider } from "@/context/AppContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { SharedWalletProvider } from "@/context/SharedWalletContext";
import { SplitProvider } from "@/context/SplitContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { NotificationSync } from "@/hooks/useNotificationSync";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = { anchor: "(tabs)" };

// ── Auth guard ────────────────────────────────────────────────────────────────
function AuthGuard({ children }: { children: React.ReactNode }) {
  const { currentUser, isLoading, hasCompletedOnboarding } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    const inAuthGroup = segments[0] === "login";
    const inOnboarding = segments[0] === "onboarding";

    if (!currentUser && !inAuthGroup) router.replace("/login");
    else if (currentUser && inAuthGroup) router.replace("/onboarding");
    else if (currentUser && !hasCompletedOnboarding && !inOnboarding)
      router.replace("/onboarding");
    else if (
      currentUser &&
      hasCompletedOnboarding &&
      (inAuthGroup || inOnboarding)
    )
      router.replace("/(tabs)");
  }, [currentUser, isLoading, hasCompletedOnboarding, segments, router]);

  return <>{children}</>;
}

// ── Inner layout (inside all providers) ──────────────────────────────────────
function InnerLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <AuthGuard>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="add-expense"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="add-saving"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="manage-budgets"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="manage-subscriptions"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="add-subscription"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="receipt-scanner"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="premium"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen name="saving-detail" options={{ headerShown: false }} />
        </Stack>
      </AuthGuard>
      <StatusBar
        style="auto"
        backgroundColor={colorScheme === "dark" ? "#0F0E1A" : "#F5F4FA"}
        translucent={Platform.OS === "android" ? false : undefined}
      />
    </>
  );
}

// ── Root layout ───────────────────────────────────────────────────────────────
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <AppProvider>
              <SharedWalletProvider>
                <SplitProvider>
                  <NotificationSync />
                  <InnerLayout />
                </SplitProvider>
              </SharedWalletProvider>
            </AppProvider>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
````

## File: app/add-expense.tsx
````typescript
import { Button } from "@/components/Button";
import { CategoryIcon } from "@/components/CategoryIcon";
import { Input } from "@/components/Input";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { CATEGORIES } from "@/utils/categories";
import { convertAmount, formatWithCurrency } from "@/utils/currency";
import { formatCurrency } from "@/utils/formatters";
import {
  getCategorySpentThisMonth,
  getProjectedBudgetWarning,
} from "@/utils/budgetThresholds";
import {
  CategorySuggestion,
  recordCategoryCorrection,
  shouldAutoApply,
  suggestCategory,
} from "@/services/categorization";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function getParamValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function isValidDateInput(value: string): boolean {
  return value.trim().length > 0 && !Number.isNaN(new Date(value).getTime());
}

export default function AddExpenseScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    addExpense,
    editExpense,
    deleteExpense,
    expenses,
    prefs,
    categoryBudgets,
    exchangeRates,
    isPremium,
  } = useApp();
  const params = useLocalSearchParams<{ id?: string, scannedTitle?: string, scannedAmount?: string, scannedDate?: string, scannedNote?: string }>();
  const editId = getParamValue(params.id);
  const existing = editId ? expenses.find((e) => e.id === editId) : undefined;

  const [amount, setAmount] = useState(
    getParamValue(params.scannedAmount) ?? existing?.originalAmount?.toString() ?? existing?.amount.toString() ?? "",
  );
  const [expenseCurrency, setExpenseCurrency] = useState(
    existing?.originalCurrency ?? prefs.currency,
  );
  const [title, setTitle] = useState(getParamValue(params.scannedTitle) ?? existing?.title ?? "");
  const lastCat = expenses.length > 0 ? expenses[0].category : "food";
  const [category, setCategory] = useState(existing?.category ?? lastCat);
  const [date, setDate] = useState(
    getParamValue(params.scannedDate)
      ? new Date(getParamValue(params.scannedDate)!).toISOString().split("T")[0]
      : existing?.date
      ? new Date(existing.date).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
  );
  const [note, setNote] = useState(getParamValue(params.scannedNote) ?? existing?.note ?? "");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [suggestion, setSuggestion] = useState<CategorySuggestion | null>(null);
  const categoryTouched = useRef(Boolean(editId));

  useEffect(() => {
    if (editId || categoryTouched.current) return;
    let cancelled = false;
    const handle = setTimeout(() => {
      void suggestCategory(title, note).then((result) => {
        if (cancelled) return;
        setSuggestion(result);
        if (shouldAutoApply(result)) {
          setCategory(result.categoryKey);
        }
      });
    }, 350);
    return () => {
      cancelled = true;
      clearTimeout(handle);
    };
  }, [title, note, editId]);

  const val = parseFloat(amount);
  const isTravelCurrency = prefs.travelMode && isPremium && expenseCurrency !== prefs.currency;
  const convertedHomeAmount = isTravelCurrency
    ? convertAmount(Number.isFinite(val) ? val : 0, expenseCurrency, prefs.currency, exchangeRates)
    : val;

  // Budget Logic
  const budget = categoryBudgets[category];
  const spentThisMonth = getCategorySpentThisMonth(expenses, category, editId);
  const budgetWarningResult =
    budget && budget > 0
      ? getProjectedBudgetWarning(
          spentThisMonth,
          budget,
          isNaN(convertedHomeAmount) ? 0 : convertedHomeAmount,
          prefs.currency,
          formatCurrency,
        )
      : null;
  const budgetWarning = budgetWarningResult?.message ?? null;
  const isOverBudget = budgetWarningResult?.isOverBudget ?? false;

  function validate() {
    const e: Record<string, string> = {};
    if (isNaN(val) || val <= 0) e.amount = "Enter a valid amount";
    if (!title.trim()) e.title = "Title is required";
    if (!isValidDateInput(date)) e.date = "Enter a valid date";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) {
    if (prefs.haptics) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      return;
    }
    const data = {
      title: title.trim(),
      amount: isTravelCurrency ? convertedHomeAmount : parseFloat(amount),
      category,
      date: new Date(date).toISOString(),
      note,
      isTravelExpense: prefs.travelMode && isPremium,
      originalAmount: prefs.travelMode && isPremium ? parseFloat(amount) : undefined,
      originalCurrency: prefs.travelMode && isPremium ? expenseCurrency : undefined,
      convertedAmount: prefs.travelMode && isPremium ? (isTravelCurrency ? convertedHomeAmount : parseFloat(amount)) : undefined,
      convertedCurrency: prefs.travelMode && isPremium ? prefs.currency : undefined,
      exchangeRateAtPurchase: isTravelCurrency && val > 0 ? convertedHomeAmount / val : undefined,
    };
    if (editId) {
      editExpense(editId, data);
    } else {
      addExpense(data);
    }
    // On-device learning from final category choice (never leaves device)
    void recordCategoryCorrection(data.title, data.note, data.category);
    if (prefs.haptics) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    router.back();
  }

  function handleDelete() {
    Alert.alert(
      "Delete Expense",
      "Are you sure you want to delete this expense?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteExpense(editId!);
            router.back();
          },
        },
      ],
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 8 : 0}
      >
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.closeBtn}
          >
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
            {editId ? "Edit Expense" : "Add Expense"}
          </Text>
          {editId ? (
            <TouchableOpacity
              onPress={handleDelete}
              style={[styles.closeBtn, { backgroundColor: colors.dangerLight }]}
            >
              <Ionicons name="trash-outline" size={20} color={colors.danger} />
            </TouchableOpacity>
          ) : (
            <View style={styles.closeBtn} />
          )}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.form}
        >
          {!editId && Platform.OS !== "web" && (
            <TouchableOpacity 
              onPress={() => router.push("/receipt-scanner" as never)}
              style={[styles.scanBtn, { backgroundColor: colors.primary + "18", borderColor: colors.primary }]}
            >
              <Ionicons name="camera" size={20} color={colors.primary} />
              <Text style={[styles.scanBtnText, { color: colors.primary }]}>Scan Receipt</Text>
            </TouchableOpacity>
          )}

          {/* Amount */}
          <View
            style={[
              styles.amountCard,
              {
                backgroundColor: colors.primary + "12",
                borderColor: colors.primary + "30",
              },
            ]}
          >
            <Text style={[styles.amountPre, { color: colors.primary }]}>
              {formatCurrency(0, expenseCurrency).replace(/[0-9.,\s]/g, "")}
            </Text>
            <Input
              label=""
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              placeholder="0.00"
              style={styles.amountInput}
              error={errors.amount}
              autoFocus={true}
            />
          </View>

          {prefs.travelMode && (
            isPremium ? (
              <View style={[styles.travelBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.travelHeader}>
                  <View style={styles.travelTitleRow}>
                    <Ionicons name="airplane-outline" size={16} color="#4ECDC4" />
                    <Text style={[styles.travelTitle, { color: colors.textPrimary }]}>Traveling?</Text>
                  </View>
                  {isTravelCurrency && (
                    <Text style={[styles.convertedText, { color: colors.textSecondary }]}>
                      {formatWithCurrency(convertedHomeAmount || 0, prefs.currency)}
                    </Text>
                  )}
                </View>
                <View style={styles.currencyToggle}>
                  {[prefs.currency, prefs.travelCurrency].map(currency => {
                    const active = expenseCurrency === currency;
                    return (
                      <TouchableOpacity
                        key={currency}
                        onPress={() => setExpenseCurrency(currency)}
                        style={[
                          styles.currencyBtn,
                          { backgroundColor: active ? colors.primary : colors.inputBg, borderColor: active ? colors.primary : colors.border },
                        ]}
                      >
                        <Text style={[styles.currencyText, { color: active ? '#fff' : colors.textPrimary }]}>{currency}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => router.push('/premium' as never)}
                style={[styles.lockedTravelBox, { backgroundColor: colors.inputBg, borderColor: colors.border }]}
              >
                <Ionicons name="lock-closed-outline" size={16} color={colors.primary} />
                <Text style={[styles.lockedTravelText, { color: colors.textPrimary }]}>
                  Premium unlocks travel currency entry
                </Text>
                <Ionicons name="chevron-forward" size={16} color={colors.textTertiary} />
              </TouchableOpacity>
            )
          )}

          {prefs.budgetAlerts && budgetWarning && (
            <View
              style={[
                styles.warningBox,
                {
                  backgroundColor: isOverBudget
                    ? colors.dangerLight
                    : colors.warningLight,
                },
              ]}
            >
              <Ionicons
                name="warning"
                size={16}
                color={isOverBudget ? colors.danger : colors.warning}
              />
              <Text
                style={[
                  styles.warningText,
                  { color: isOverBudget ? colors.danger : colors.warning },
                ]}
              >
                {budgetWarning}
              </Text>
            </View>
          )}

          <Input
            label="Title"
            value={title}
            onChangeText={setTitle}
            placeholder="e.g. Lunch at café"
            error={errors.title}
          />
          <Input
            label="Date"
            value={date}
            onChangeText={setDate}
            placeholder="YYYY-MM-DD"
            error={errors.date}
          />
          <Input
            label="Note (optional)"
            value={note}
            onChangeText={setNote}
            placeholder="Add a note..."
            multiline
            style={{ height: 72, textAlignVertical: "top" }}
          />

          {/* Category Picker */}
          <Text style={[styles.catLabel, { color: colors.textSecondary }]}>
            Category
          </Text>
          {suggestion && suggestion.confidence >= 0.4 && !editId && (
            <TouchableOpacity
              accessibilityLabel={`Suggested category ${suggestion.label}`}
              onPress={() => {
                categoryTouched.current = true;
                setCategory(suggestion.categoryKey);
              }}
              style={[
                styles.suggestChip,
                { backgroundColor: colors.primary + "18", borderColor: colors.primary },
              ]}
            >
              <Ionicons name="sparkles-outline" size={14} color={colors.primary} />
              <Text style={[styles.suggestText, { color: colors.primary }]}>
                Suggest {suggestion.label} · {Math.round(suggestion.confidence * 100)}% · on-device
              </Text>
            </TouchableOpacity>
          )}
          <View style={styles.catGrid}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.key}
                onPress={() => {
                  categoryTouched.current = true;
                  setCategory(cat.key);
                }}
                accessibilityLabel={`Category ${cat.label}`}
                style={[
                  styles.catBtn,
                  {
                    backgroundColor:
                      category === cat.key ? cat.color + "22" : colors.card,
                    borderColor:
                      category === cat.key ? cat.color : colors.border,
                    borderWidth: category === cat.key ? 2 : 1,
                  },
                ]}
              >
                <CategoryIcon category={cat.key} size={36} />
                <Text
                  style={[
                    styles.catName,
                    {
                      color:
                        category === cat.key ? cat.color : colors.textSecondary,
                    },
                  ]}
                  numberOfLines={1}
                >
                  {cat.label.split(" ")[0]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button
            title={editId ? "Save Changes" : "Add Expense"}
            onPress={handleSave}
            style={{ marginTop: 8 }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Theme.spacing.md,
    paddingTop: Platform.OS === "android" ? 10 : Theme.spacing.md,
    paddingBottom: Theme.spacing.md,
    borderBottomWidth: 1,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 17, fontWeight: "700" },
  form: { padding: Theme.spacing.md, paddingBottom: 40, gap: 4 },
  amountCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
  },
  amountPre: { fontSize: 32, fontWeight: "800", marginRight: 4 },
  amountInput: { fontSize: 32, fontWeight: "800", flex: 1 },
  scanBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 16,
    gap: 8,
  },
  scanBtnText: {
    fontSize: 16,
    fontWeight: "700",
  },
  warningBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: Theme.radius.md,
    marginBottom: 16,
    gap: 8,
  },
  warningText: { fontSize: 13, fontWeight: "600", flex: 1 },
  travelBox: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: 12,
    marginBottom: 16,
    gap: 10,
  },
  travelHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10 },
  travelTitleRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  travelTitle: { fontSize: 14, fontWeight: "700" },
  convertedText: { fontSize: 12, fontWeight: "700" },
  currencyToggle: { flexDirection: "row", gap: 8 },
  currencyBtn: {
    flex: 1,
    minHeight: 42,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.md,
  },
  currencyText: { fontSize: 14, fontWeight: "800" },
  lockedTravelBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  lockedTravelText: { flex: 1, fontSize: 13, fontWeight: "700" },
  catLabel: { fontSize: 13, fontWeight: "500", marginBottom: 8 },
  suggestChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: Theme.radius.full,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  suggestText: { fontSize: 12, fontWeight: "700" },
  catGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 },
  catBtn: {
    width: "18%",
    alignItems: "center",
    padding: 8,
    borderRadius: Theme.radius.md,
    gap: 4,
  },
  catName: { fontSize: 9, textAlign: "center", fontWeight: "600" },
});
````

## File: app/add-saving.tsx
````typescript
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
````

## File: app/add-subscription.tsx
````typescript
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
````

## File: app/index.tsx
````typescript
// Dashboard screen with reordered layout and animations
import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedSection from "@/components/AnimatedSection";
import { BalanceCard } from "@/components/BalanceCard";
import { BiometricGate } from "@/components/BiometricGate";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { DisciplineStreakCard } from "@/components/DisciplineStreakCard";
import { ExpenseItem } from "@/components/ExpenseItem";
import { FinancialHealthCard } from "@/components/FinancialHealthCard";
import { PageHeader } from "@/components/PageHeader";
import { SafeTodayTile } from "@/components/SafeTodayTile";
import { SafeToSpendCard } from "@/components/SafeToSpendCard";
import { SpendingForecast } from "@/components/SpendingForecast";
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { BiometricService } from "@/services/biometric";
import { getBalance, getTotalExpenses } from "@/utils/calculations";
import { convertAmount, formatWithCurrency } from "@/utils/currency";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    expenses,
    subscriptions,
    savingGoals,
    income,
    streak,
    discipline,
    setIncome,
    deleteExpense,
    prefs,
    categoryBudgets,
    exchangeRates,
    ratesUpdatedAt,
    refreshExchangeRates,
    isPremium,
  } = useApp();
  const { currentUser } = useAuth();
  const [incomeModal, setIncomeModal] = useState(false);
  const [incomeInput, setIncomeInput] = useState(String(income));
  const [converterInput, setConverterInput] = useState("");

  const totalExpenses = useMemo(() => getTotalExpenses(expenses), [expenses]);
  const balance = useMemo(
    () => getBalance(income, expenses),
    [income, expenses],
  );
  const recentExpenses = expenses.slice(0, 5);
  const totalSaved = savingGoals.reduce(
    (sum, goal) => sum + goal.currentAmount,
    0,
  );
  const budgetAllocated = Object.values(categoryBudgets).reduce(
    (sum, amount) => sum + amount,
    0,
  );

  const now = new Date();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
  const daysRemaining = Math.max(1, daysInMonth - now.getDate() + 1);
  const safeToSpend = Math.max(
    0,
    (income - totalExpenses - totalSaved) / daysRemaining,
  );
  const budgetLeft = Math.max(0, income - totalExpenses - budgetAllocated);
  const spendPercentage =
    income > 0 ? Math.min((totalExpenses / income) * 100, 100) : 0;
  const travelExpenses = expenses.filter((expense) => expense.isTravelExpense);
  const travelSpentHome = travelExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );
  const travelSpentOriginal = travelExpenses
    .filter((expense) => expense.originalCurrency === prefs.travelCurrency)
    .reduce((sum, expense) => sum + (expense.originalAmount ?? 0), 0);

  function handleSaveIncome() {
    const value = Number.parseFloat(incomeInput);
    if (!Number.isFinite(value) || value <= 0) {
      Alert.alert(
        "Invalid income",
        "Please enter a monthly income greater than zero.",
      );
      return;
    }
    setIncome(value);
    setIncomeModal(false);
  }

  async function handleEnableBiometrics() {
    const available = await BiometricService.isBiometricAvailable();
    if (!available) {
      Alert.alert(
        "Biometrics unavailable",
        "This device does not report Face ID or fingerprint support.",
      );
      return;
    }
    const enabled = await BiometricService.enableBiometric();
    Alert.alert(
      enabled ? "Biometrics enabled" : "Authentication cancelled",
      enabled
        ? "The dashboard will request biometric unlock on future launches."
        : "Biometric protection was not turned on.",
    );
  }

  function confirmDeleteExpense(id: string) {
    Alert.alert(
      "Delete expense?",
      "This transaction will be removed from your records.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteExpense(id),
        },
      ],
    );
  }

  return (
    <BiometricGate title="Unlock Expense Tracker">
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.background }]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {/* Header slides in from top */}
          <AnimatedSection delay={0} distance={-20}>
            <PageHeader
              eyebrow={`Good ${getGreeting()}`}
              title={currentUser ? `@${currentUser.username}` : "My Finance"}
              right={
                <View style={styles.headerRight}>
                  {streak > 0 && (
                    <View
                      style={[
                        styles.streak,
                        { backgroundColor: colors.warningLight },
                      ]}
                    >
                      <Ionicons name="flame" size={14} color={colors.warning} />
                      <Text
                        style={[styles.streakText, { color: colors.warning }]}
                      >
                        {streak}
                      </Text>
                    </View>
                  )}
                  <TouchableOpacity
                    accessibilityLabel="Enable biometric lock"
                    onPress={handleEnableBiometrics}
                    style={[
                      styles.iconBtn,
                      {
                        backgroundColor: colors.card,
                        borderColor: colors.border,
                      },
                    ]}
                  >
                    <Ionicons
                      name="finger-print-outline"
                      size={20}
                      color={colors.textSecondary}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    accessibilityLabel="Set monthly income"
                    onPress={() => setIncomeModal(true)}
                    style={[
                      styles.iconBtn,
                      {
                        backgroundColor: colors.card,
                        borderColor: colors.border,
                      },
                    ]}
                  >
                    <Ionicons
                      name="cash-outline"
                      size={20}
                      color={colors.textSecondary}
                    />
                  </TouchableOpacity>
                </View>
              }
            />
          </AnimatedSection>

          {/* Balance card */}
          <AnimatedSection delay={80}>
            <BalanceCard
              balance={balance}
              income={income}
              totalExpenses={totalExpenses}
            />
          </AnimatedSection>
          {/* Discipline + Safe Today */}
          <AnimatedSection delay={160}>
            <View style={styles.duoRow}>
              <DisciplineStreakCard
                discipline={discipline}
                legacyStreak={streak}
                compact
              />
              <SafeTodayTile
                safeToSpend={safeToSpend}
                daysRemaining={daysRemaining}
                currency={prefs.currency}
                spendPercentage={spendPercentage}
              />
            </View>
          </AnimatedSection>

          {/* Summary row with count-up numbers */}
          <AnimatedSection delay={240}>
            <View style={styles.summaryRow}>
              {[
                { label: "Income", value: income, color: colors.primary },
                { label: "Spent", value: totalExpenses, color: colors.danger },
                { label: "Saved", value: totalSaved, color: colors.success },
              ].map((item, idx) => (
                <Card
                  key={item.label}
                  style={styles.summaryCard}
                  variant="elevated"
                >
                  <AnimatedNumber
                    value={item.value}
                    format={(n) => formatCurrency(n, prefs.currency)}
                    style={[styles.statValue, { color: item.color }]}
                    duration={900}
                    delay={idx * 80}
                  />
                  <Text
                    style={[styles.statLabel, { color: colors.textSecondary }]}
                  >
                    {item.label}
                  </Text>
                </Card>
              ))}
            </View>
          </AnimatedSection>

          {/* Quick actions */}
          <AnimatedSection delay={320}>
            <View style={styles.quickActions}>
              <DashboardAction
                icon="add"
                label="Expense"
                color={colors.danger}
                backgroundColor={colors.dangerLight}
                onPress={() => router.push("/add-expense")}
              />
              {Platform.OS !== "web" && (
                <DashboardAction
                  icon="camera-outline"
                  label="Scan"
                  color={colors.primary}
                  backgroundColor={colors.primary + "18"}
                  onPress={() => router.push("/receipt-scanner" as never)}
                />
              )}
              <DashboardAction
                icon="trending-up"
                label="Goal"
                color={colors.success}
                backgroundColor={colors.successLight}
                onPress={() => router.push("/add-saving")}
              />
            </View>
          </AnimatedSection>

          {/* Insight chips (budget left, saved) */}
          <View style={styles.insightRow}>
            <View
              style={[
                styles.insightChip,
                { backgroundColor: colors.successLight },
              ]}
            >
              <Ionicons
                name="shield-checkmark"
                size={14}
                color={colors.success}
              />
              <Text style={[styles.insightText, { color: colors.success }]}>
                {formatCurrency(budgetLeft, prefs.currency)} left
              </Text>
            </View>
            <View
              style={[
                styles.insightChip,
                { backgroundColor: colors.primary + "18" },
              ]}
            >
              <Ionicons name="wallet" size={14} color={colors.primary} />
              <Text style={[styles.insightText, { color: colors.primary }]}>
                {formatCurrency(totalSaved, prefs.currency)} saved
              </Text>
            </View>
          </View>

          <FinancialHealthCard
            expenses={expenses}
            subscriptions={subscriptions}
            savingGoals={savingGoals}
            income={income}
            categoryBudgets={categoryBudgets}
            currency={prefs.currency}
          />

          <SafeToSpendCard
            income={income}
            totalExpenses={totalExpenses}
            totalSaved={totalSaved}
            safeToSpend={safeToSpend}
            daysRemaining={daysRemaining}
            currency={prefs.currency}
          />

          {prefs.travelMode && !isPremium && (
            <TouchableOpacity
              onPress={() => router.push("/premium" as never)}
              style={[
                styles.travelLockedCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
              activeOpacity={0.78}
            >
              <View
                style={[
                  styles.travelLockIcon,
                  { backgroundColor: colors.primary + "18" },
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color={colors.primary}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.travelLockedTitle,
                    { color: colors.textPrimary },
                  ]}
                >
                  Travel Mode Active
                </Text>
                <Text
                  style={[
                    styles.travelLockedDesc,
                    { color: colors.textSecondary },
                  ]}
                >
                  Premium unlocks converter, trip budgets, and travel summaries.
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={colors.textTertiary}
              />
            </TouchableOpacity>
          )}

          {/* Travel Mode Converter Card */}
          {prefs.travelMode &&
            isPremium &&
            Object.keys(exchangeRates).length > 0 && (
              <View
                style={[
                  styles.travelCard,
                  { backgroundColor: "#4ECDC415", borderColor: "#4ECDC440" },
                ]}
              >
                <View style={styles.travelCardHeader}>
                  <View style={styles.travelBadge}>
                    <Ionicons name="airplane" size={14} color="#4ECDC4" />
                    <Text
                      style={[styles.travelBadgeText, { color: "#4ECDC4" }]}
                    >
                      Travel Mode Active
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={refreshExchangeRates}
                    style={styles.refreshRateBtn}
                  >
                    <Ionicons name="refresh" size={15} color="#4ECDC4" />
                    <Text style={[styles.travelRate, { color: "#4ECDC4" }]}>
                      1 {prefs.currency} ={" "}
                      {(
                        exchangeRates[prefs.travelCurrency] /
                        exchangeRates[prefs.currency]
                      ).toFixed(4)}{" "}
                      {prefs.travelCurrency}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.travelConverterRow}>
                  <View
                    style={[
                      styles.travelInput,
                      {
                        backgroundColor: colors.inputBg,
                        borderColor: colors.border,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color: colors.textSecondary,
                        fontSize: 12,
                        fontWeight: "600",
                      }}
                    >
                      {prefs.currency}
                    </Text>
                    <TextInput
                      value={converterInput}
                      onChangeText={setConverterInput}
                      keyboardType="decimal-pad"
                      placeholder="0.00"
                      placeholderTextColor={colors.textTertiary}
                      style={[
                        styles.travelInputText,
                        { color: colors.textPrimary },
                      ]}
                    />
                  </View>
                  <Ionicons name="swap-horizontal" size={20} color="#4ECDC4" />
                  <View
                    style={[
                      styles.travelInput,
                      {
                        backgroundColor: "#4ECDC410",
                        borderColor: "#4ECDC440",
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color: "#4ECDC4",
                        fontSize: 12,
                        fontWeight: "600",
                      }}
                    >
                      {prefs.travelCurrency}
                    </Text>
                    <Text
                      style={[
                        styles.travelInputText,
                        { color: "#4ECDC4", fontWeight: "800" },
                      ]}
                    >
                      {converterInput
                        ? formatWithCurrency(
                            convertAmount(
                              parseFloat(converterInput) || 0,
                              prefs.currency,
                              prefs.travelCurrency,
                              exchangeRates,
                            ),
                            prefs.travelCurrency,
                          )
                        : "—"}
                    </Text>
                  </View>
                </View>
                {ratesUpdatedAt && (
                  <Text
                    style={[
                      styles.travelUpdated,
                      { color: colors.textTertiary },
                    ]}
                  >
                    Rates updated:{" "}
                    {new Date(ratesUpdatedAt).toLocaleDateString()}
                  </Text>
                )}
              </View>
            )}

          {prefs.travelMode && isPremium && prefs.tripBudget > 0 && (
            <View
              style={[
                styles.tripBudgetCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <View style={styles.tripBudgetHeader}>
                <View>
                  <Text
                    style={[
                      styles.tripBudgetTitle,
                      { color: colors.textPrimary },
                    ]}
                  >
                    Trip Budget
                  </Text>
                  <Text
                    style={[
                      styles.tripBudgetSub,
                      { color: colors.textSecondary },
                    ]}
                  >
                    {" "}
                    {formatWithCurrency(
                      travelSpentOriginal,
                      prefs.travelCurrency,
                    )}{" "}
                    of{" "}
                    {formatWithCurrency(prefs.tripBudget, prefs.travelCurrency)}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.tripBudgetHome,
                    { color: colors.textSecondary },
                  ]}
                >
                  {formatCurrency(travelSpentHome, prefs.currency)}
                </Text>
              </View>
              <View
                style={[
                  styles.tripProgressTrack,
                  { backgroundColor: colors.border },
                ]}
              >
                <View
                  style={[
                    styles.tripProgressFill,
                    {
                      width: `${(travelSpentOriginal / prefs.tripBudget) * 100}%`,
                      backgroundColor:
                        travelSpentOriginal / prefs.tripBudget > 0.9
                          ? colors.danger
                          : "#4ECDC4",
                    },
                  ]}
                />
              </View>
            </View>
          )}

          <AnimatedSection delay={400}>
            <SpendingForecast
              expenses={expenses}
              income={income}
              currency={prefs.currency}
            />
          </AnimatedSection>

          <AnimatedSection delay={480}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text
                  style={[styles.sectionTitle, { color: colors.textPrimary }]}
                >
                  Recent
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/(tabs)/expenses")}
                >
                  <Text style={[styles.seeAll, { color: colors.primary }]}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
              {recentExpenses.length === 0 ? (
                <Card style={styles.emptyCard}>
                  <Ionicons
                    name="receipt-outline"
                    size={40}
                    color={colors.primary}
                  />
                  <Text
                    style={[styles.emptyTitle, { color: colors.textPrimary }]}
                  >
                    No expenses yet
                  </Text>
                  <Text
                    style={[styles.emptyDesc, { color: colors.textSecondary }]}
                  >
                    Add a transaction or scan a receipt to start forecasting.
                  </Text>
                  <Button
                    title="Add Expense"
                    onPress={() => router.push("/add-expense")}
                    style={{ marginTop: 12 }}
                  />
                </Card>
              ) : (
                <Card padding={0} noBorder>
                  {recentExpenses.map((expense, index) => (
                    <View key={expense.id}>
                      <ExpenseItem
                        expense={expense}
                        onPress={() =>
                          router.push({
                            pathname: "/add-expense",
                            params: { id: expense.id },
                          })
                        }
                        onDelete={() => confirmDeleteExpense(expense.id)}
                      />
                      {index < recentExpenses.length - 1 && (
                        <View
                          style={[
                            styles.separator,
                            { backgroundColor: colors.separator },
                          ]}
                        />
                      )}
                    </View>
                  ))}
                </Card>
              )}
            </View>
          </AnimatedSection>

          <View style={{ height: 110 }} />
        </ScrollView>
        <Modal
          visible={incomeModal}
          transparent
          animationType="slide"
          onRequestClose={() => setIncomeModal(false)}
        >
          <View
            style={[styles.modalOverlay, { backgroundColor: colors.overlay }]}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
              <View
                style={[styles.modalCard, { backgroundColor: colors.modalBg }]}
              >
                <Text
                  style={[styles.modalTitle, { color: colors.textPrimary }]}
                >
                  Set Monthly Income
                </Text>
                <View
                  style={[
                    styles.incomeInputRow,
                    {
                      backgroundColor: colors.inputBg,
                      borderColor: colors.inputBorder,
                    },
                  ]}
                >
                  <Text
                    style={[styles.currencyPrefix, { color: colors.primary }]}
                  >
                    $
                  </Text>
                  <TextInput
                    style={[styles.incomeInput, { color: colors.textPrimary }]}
                    value={incomeInput}
                    onChangeText={setIncomeInput}
                    keyboardType="decimal-pad"
                    placeholder="0.00"
                    placeholderTextColor={colors.textTertiary}
                    autoFocus
                  />
                </View>
                <View style={styles.modalBtns}>
                  <Button
                    title="Cancel"
                    variant="secondary"
                    onPress={() => setIncomeModal(false)}
                    style={{ flex: 1 }}
                  />
                  <Button
                    title="Save"
                    onPress={handleSaveIncome}
                    style={{ flex: 1 }}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </SafeAreaView>
    </BiometricGate>
  );
}

function DashboardAction({
  icon,
  label,
  color,
  backgroundColor,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  color: string;
  backgroundColor: string;
  onPress: () => void;
}) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  return (
    <TouchableOpacity
      style={[
        styles.actionBtn,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
      onPress={onPress}
      activeOpacity={0.78}
    >
      <View style={[styles.actionIcon, { backgroundColor }]}>
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <Text style={[styles.actionLabel, { color: colors.textPrimary }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  return "Evening";
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 32 },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 8 },
  streak: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 3,
  },
  streakText: { fontSize: 13, fontWeight: "700" },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  duoRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: Theme.spacing.sm,
  },
  insightRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: 8,
    flexWrap: "wrap",
  },
  insightChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 5,
  },
  insightText: { fontSize: 12, fontWeight: "600" },
  quickActions: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    gap: 8,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: { fontSize: 12, fontWeight: "700", textAlign: "center" },
  summaryRow: {
    flexDirection: "row",
    paddingHorizontal: Theme.spacing.md,
    gap: 8,
    marginBottom: 8,
  },
  summaryCard: { flex: 1, alignItems: "center", padding: 12 },
  statValue: { fontSize: 15, fontWeight: "800", marginBottom: 2 },
  statLabel: { fontSize: 11, fontWeight: "500" },
  section: { marginTop: 24, paddingHorizontal: Theme.spacing.md },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700" },
  seeAll: { fontSize: 13, fontWeight: "600" },
  emptyCard: { alignItems: "center", paddingVertical: 32 },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 4,
  },
  emptyDesc: { fontSize: 14, textAlign: "center", lineHeight: 20 },
  separator: { height: 1, marginHorizontal: Theme.spacing.md },
  modalOverlay: { flex: 1, justifyContent: "flex-end" },
  modalCard: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    gap: 16,
  },
  modalTitle: { fontSize: 20, fontWeight: "700", textAlign: "center" },
  incomeInputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 60,
  },
  currencyPrefix: { fontSize: 24, fontWeight: "700", marginRight: 4 },
  incomeInput: { flex: 1, fontSize: 28, fontWeight: "700" },
  modalBtns: { flexDirection: "row", gap: 12 },
  travelCard: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  travelCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  travelBadge: { flexDirection: "row", alignItems: "center", gap: 6 },
  travelBadgeText: { fontSize: 13, fontWeight: "700" },
  travelRate: { fontSize: 12, fontWeight: "600" },
  travelConverterRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  travelInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    padding: 10,
    gap: 2,
  },
  travelInputText: { fontSize: 18, fontWeight: "700" },
  travelUpdated: { fontSize: 11, textAlign: "right" },
  travelLockedCard: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  travelLockIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  travelLockedTitle: { fontSize: 15, fontWeight: "800", marginBottom: 3 },
  travelLockedDesc: { fontSize: 12, lineHeight: 17 },
  refreshRateBtn: { flexDirection: "row", alignItems: "center", gap: 5 },
  tripBudgetCard: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 12,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  tripBudgetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  tripBudgetTitle: { fontSize: 15, fontWeight: "800" },
  tripBudgetSub: { fontSize: 12, marginTop: 3, fontWeight: "600" },
  tripBudgetHome: { fontSize: 12, fontWeight: "800" },
  tripProgressTrack: { height: 8, borderRadius: 999, overflow: "hidden" },
  tripProgressFill: { height: "100%", borderRadius: 999 },
});

export { };
````

## File: app/login.tsx
````typescript
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
    ActivityIndicator,
    Animated,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const { login, register } = useAuth();

  // ── Tab state ───────────────────────────────────────────────────────────
  const [tab, setTab] = useState<"login" | "register">("login");
  const tabAnim = useRef(new Animated.Value(0)).current;

  const switchTab = (next: "login" | "register") => {
    Animated.spring(tabAnim, {
      toValue: next === "login" ? 0 : 1,
      useNativeDriver: false,
      tension: 70,
      friction: 10,
    }).start();
    setTab(next);
    setError("");
  };

  // ── Form state ──────────────────────────────────────────────────────────
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Shake animation for error
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -10,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 8,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -8,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 60,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleSubmit = async () => {
    setError("");

    if (tab === "register" && password !== confirmPassword) {
      setError("Passwords do not match.");
      shake();
      return;
    }

    setLoading(true);
    const result =
      tab === "login"
        ? await login(username, password)
        : await register(username, password);
    setLoading(false);

    if (!result.success) {
      setError(result.error ?? "Something went wrong.");
      shake();
    }
    // On success, the AuthContext updates currentUser → root layout redirects automatically
  };

  const indicatorLeft = tabAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["4%", "50%"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#0A0818", "#1A0D3A", "#0F1E50"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Decorative blobs */}
      <View
        style={[
          styles.blob,
          { top: -80, left: -60, backgroundColor: "rgba(108,63,239,0.35)" },
        ]}
      />
      <View
        style={[
          styles.blob,
          {
            bottom: -60,
            right: -40,
            backgroundColor: "rgba(60,130,255,0.25)",
            width: 220,
            height: 220,
          },
        ]}
      />
      <View
        style={[
          styles.blob,
          {
            top: "40%",
            right: -80,
            backgroundColor: "rgba(155,63,239,0.2)",
            width: 180,
            height: 180,
          },
        ]}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 8 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo / Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={["#6C3FEF", "#3C82FF"]}
              style={styles.logoCircle}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Ionicons name="wallet" size={34} color="#fff" />
            </LinearGradient>
            <Text style={styles.appName}>ExpenseTrack</Text>
            <Text style={styles.tagline}>Take control of your finances</Text>
          </View>

          {/* Card */}
          <Animated.View
            style={[styles.card, { transform: [{ translateX: shakeAnim }] }]}
          >
            {/* Tab switcher */}
            <View style={styles.tabBar}>
              <Animated.View
                style={[styles.tabIndicator, { left: indicatorLeft }]}
              />
              <TouchableOpacity
                style={styles.tabBtn}
                onPress={() => switchTab("login")}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.tabText,
                    tab === "login" && styles.tabTextActive,
                  ]}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tabBtn}
                onPress={() => switchTab("register")}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.tabText,
                    tab === "register" && styles.tabTextActive,
                  ]}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.form}>
              {/* Username */}
              <View style={styles.fieldWrap}>
                <Text style={styles.label}>Username</Text>
                <View style={styles.inputRow}>
                  <Ionicons
                    name="person-outline"
                    size={18}
                    color="#7B6FB0"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    placeholderTextColor="#4A4570"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                  />
                </View>
              </View>

              {/* Password */}
              <View style={styles.fieldWrap}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputRow}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={18}
                    color="#7B6FB0"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#4A4570"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    returnKeyType={tab === "register" ? "next" : "done"}
                    onSubmitEditing={tab === "login" ? handleSubmit : undefined}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword((v) => !v)}
                    style={styles.eyeBtn}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      size={18}
                      color="#7B6FB0"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Confirm Password (register only) */}
              {tab === "register" && (
                <View style={styles.fieldWrap}>
                  <Text style={styles.label}>Confirm Password</Text>
                  <View style={styles.inputRow}>
                    <Ionicons
                      name="shield-checkmark-outline"
                      size={18}
                      color="#7B6FB0"
                      style={styles.inputIcon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Re-enter your password"
                      placeholderTextColor="#4A4570"
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry={!showConfirm}
                      returnKeyType="done"
                      onSubmitEditing={handleSubmit}
                    />
                    <TouchableOpacity
                      onPress={() => setShowConfirm((v) => !v)}
                      style={styles.eyeBtn}
                    >
                      <Ionicons
                        name={showConfirm ? "eye-off-outline" : "eye-outline"}
                        size={18}
                        color="#7B6FB0"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* Error message */}
              {!!error && (
                <View style={styles.errorBox}>
                  <Ionicons
                    name="alert-circle-outline"
                    size={15}
                    color="#FF6B7A"
                  />
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              )}

              {/* Submit button */}
              <TouchableOpacity
                style={styles.submitBtn}
                onPress={handleSubmit}
                activeOpacity={0.85}
                disabled={loading}
              >
                <LinearGradient
                  colors={["#6C3FEF", "#3C82FF"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.submitGrad}
                >
                  {loading ? (
                    <ActivityIndicator color="#fff" size="small" />
                  ) : (
                    <>
                      <Text style={styles.submitText}>
                        {tab === "login" ? "Sign In" : "Create Account"}
                      </Text>
                      <Ionicons
                        name="arrow-forward"
                        size={18}
                        color="#fff"
                        style={{ marginLeft: 8 }}
                      />
                    </>
                  )}
                </LinearGradient>
              </TouchableOpacity>

              {/* Switch hint */}
              <TouchableOpacity
                onPress={() =>
                  switchTab(tab === "login" ? "register" : "login")
                }
                style={styles.switchHint}
              >
                <Text style={styles.switchHintText}>
                  {tab === "login"
                    ? "Don't have an account? "
                    : "Already have an account? "}
                  <Text style={styles.switchHintLink}>
                    {tab === "login" ? "Register" : "Sign In"}
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Footer */}
          <Text style={styles.footer}>
            Your data is stored securely on this device.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 48,
  },

  // Blobs
  blob: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    opacity: 0.8,
    filter: undefined,
  } as any,

  // Header / Logo
  header: { alignItems: "center", marginBottom: 36 },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    boxShadow: "0 8px 16px rgba(108, 63, 239, 0.5)",
    elevation: 12,
  },
  appName: {
    fontSize: 28,
    fontWeight: "800",
    color: "#F0EDFB",
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 13,
    color: "#7B6FB0",
    marginTop: 4,
  },

  // Card
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "rgba(28,26,46,0.92)",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(108,63,239,0.25)",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
    elevation: 20,
  },

  // Tab switcher
  tabBar: {
    flexDirection: "row",
    backgroundColor: "rgba(15,14,26,0.8)",
    margin: 16,
    borderRadius: 14,
    padding: 4,
    position: "relative",
  },
  tabIndicator: {
    position: "absolute",
    top: 4,
    width: "46%",
    height: "100%",
    borderRadius: 11,
    backgroundColor: "rgba(108,63,239,0.85)",
  },
  tabBtn: { flex: 1, paddingVertical: 10, alignItems: "center", zIndex: 1 },
  tabText: { fontSize: 14, fontWeight: "600", color: "#5A5580" },
  tabTextActive: { color: "#F0EDFB" },

  // Form
  form: { paddingHorizontal: 20, paddingBottom: 24 },
  fieldWrap: { marginBottom: 16 },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#8A84B4",
    marginBottom: 6,
    letterSpacing: 0.4,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(15,14,26,0.7)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(108,63,239,0.2)",
    paddingHorizontal: 12,
    height: 50,
  },
  inputIcon: { marginRight: 10 },
  input: {
    flex: 1,
    color: "#F0EDFB",
    fontSize: 15,
    fontWeight: "500",
  },
  eyeBtn: { padding: 4 },

  // Error
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,107,122,0.12)",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginBottom: 14,
    gap: 7,
  },
  errorText: { color: "#FF6B7A", fontSize: 13, fontWeight: "500", flex: 1 },

  // Submit
  submitBtn: {
    borderRadius: 14,
    overflow: "hidden",
    marginTop: 4,
    boxShadow: "0 6px 14px rgba(108, 63, 239, 0.45)",
    elevation: 10,
  },
  submitGrad: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  // Switch hint
  switchHint: { alignItems: "center", marginTop: 18 },
  switchHintText: { fontSize: 13, color: "#5A5580" },
  switchHintLink: { color: "#9B7FE7", fontWeight: "700" },

  // Footer
  footer: {
    marginTop: 24,
    fontSize: 12,
    color: "#3A3560",
    textAlign: "center",
  },
});
````

## File: app/manage-budgets.tsx
````typescript
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
````

## File: app/manage-subscriptions.tsx
````typescript
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
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
````

## File: app/modal.tsx
````typescript
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is a modal</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
````

## File: app/onboarding.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface OnboardingSlide {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const slides: OnboardingSlide[] = [
  {
    icon: "wallet",
    title: "Track Your Expenses",
    description:
      "Add and categorize all your expenses. Get a clear view of where your money goes every day.",
    color: "#6C3FEF",
  },
  {
    icon: "pie-chart",
    title: "Visualize Your Spending",
    description:
      "View detailed statistics and charts to understand your spending patterns by category.",
    color: "#34C47C",
  },
  {
    icon: "target",
    title: "Set Savings Goals",
    description:
      "Create savings goals, track progress, and reach your financial targets.",
    color: "#FFAD0D",
  },
  {
    icon: "settings",
    title: "Customize Your Preferences",
    description:
      "Set budgets by category, choose your currency, and enable haptics for better experience.",
    color: "#FF6B7A",
  },
  {
    icon: "checkmark-circle",
    title: "Ready to Start!",
    description:
      "You're all set! Start tracking your expenses and reach your financial goals.",
    color: "#3DD98A",
  },
];

// Memoized slide component for better performance
const SlideItem = React.memo(
  ({
    slide,
    isActive,
    fadeAnim,
    scaleAnim,
  }: {
    slide: OnboardingSlide;
    isActive: boolean;
    fadeAnim: Animated.Value;
    scaleAnim: Animated.Value;
  }) => {
    const colors = Colors[useColorScheme() ?? "light"];
    return (
      <Animated.View
        style={[
          styles.slide,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View
          style={[
            styles.iconBox,
            {
              backgroundColor: slide.color + "20",
            },
          ]}
        >
          <Ionicons name={slide.icon as any} size={64} color={slide.color} />
        </View>
        <Text
          style={[
            styles.slideTitle,
            {
              color: colors.textPrimary,
            },
          ]}
        >
          {slide.title}
        </Text>
        <Text
          style={[
            styles.slideDesc,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {slide.description}
        </Text>
      </Animated.View>
    );
  },
);

SlideItem.displayName = "SlideItem";

// Memoized dot indicator component
const DotIndicator = React.memo(
  ({
    isActive,
    color,
    borderColor,
  }: {
    isActive: boolean;
    color: string;
    borderColor: string;
  }) => (
    <Animated.View
      style={[
        styles.dot,
        {
          backgroundColor: isActive ? color : borderColor,
          width: isActive ? 24 : 8,
        },
      ]}
    />
  ),
);

DotIndicator.displayName = "DotIndicator";

export default function OnboardingScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { completeOnboarding } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentSlide, fadeAnim, scaleAnim]);

  const handleNext = useCallback(async () => {
    if (currentSlide < slides.length - 1) {
      const nextSlide = currentSlide + 1;
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.8);
      setCurrentSlide(nextSlide);
      scrollViewRef.current?.scrollTo({
        x: nextSlide * 360,
        animated: true,
      });
    } else {
      await completeOnboarding();
      router.replace("/(tabs)");
    }
  }, [currentSlide, fadeAnim, scaleAnim, completeOnboarding]);

  const handleSkip = useCallback(async () => {
    await completeOnboarding();
    router.replace("/(tabs)");
  }, [completeOnboarding]);

  const handleScroll = useCallback(
    (event: any) => {
      const slide = Math.round(
        event.nativeEvent.contentOffset.x /
          event.nativeEvent.layoutMeasurement.width,
      );
      if (slide !== currentSlide) {
        fadeAnim.setValue(0);
        scaleAnim.setValue(0.8);
        setCurrentSlide(slide);
      }
    },
    [currentSlide, fadeAnim, scaleAnim],
  );

  const slidesElements = useMemo(
    () =>
      slides.map((s, idx) => (
        <SlideItem
          key={idx}
          slide={s}
          isActive={currentSlide === idx}
          fadeAnim={fadeAnim}
          scaleAnim={scaleAnim}
        />
      )),
    [currentSlide, fadeAnim, scaleAnim],
  );

  const dotsElements = useMemo(
    () =>
      slides.map((_, idx) => (
        <DotIndicator
          key={idx}
          isActive={idx === currentSlide}
          color={colors.primary}
          borderColor={colors.border}
        />
      )),
    [currentSlide, colors],
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text
            style={[
              styles.appTitle,
              {
                color: colors.primary,
              },
            ]}
          >
            Expense Tracker
          </Text>
          <TouchableOpacity onPress={handleSkip}>
            <Text
              style={[
                styles.skipBtn,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        {/* Slides Carousel */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          scrollEventThrottle={32}
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          style={styles.carousel}
        >
          {slidesElements}
        </ScrollView>

        {/* Progress Dots */}
        <View style={styles.dotsContainer}>{dotsElements}</View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={handleNext}
            style={[
              styles.nextBtn,
              {
                backgroundColor: colors.primary,
              },
            ]}
          >
            <Text style={styles.nextBtnText}>
              {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            </Text>
            <Ionicons name="arrow-forward" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: Theme.spacing.lg,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "800",
  },
  skipBtn: {
    fontSize: 14,
    fontWeight: "600",
  },
  carousel: {
    flex: 1,
    marginBottom: 24,
  },
  slide: {
    width: 360,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Theme.spacing.lg,
  },
  iconBox: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  slideTitle: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  slideDesc: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.3,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  buttonsContainer: {
    gap: 12,
  },
  nextBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: Theme.radius.md,
    gap: 8,
  },
  nextBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
````

## File: app/premium.tsx
````typescript
import { Button } from '@/components/Button';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useApp } from '@/context/AppContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
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
````

## File: app/receipt-scanner.tsx
````typescript
import { ReceiptScanner } from "@/components/ReceiptScanner";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ReceiptScannerScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const insets = useSafeAreaInsets();

  if (Platform.OS === "web") {
    return (
      <View style={[styles.container, styles.webFallback, { backgroundColor: colors.background }]}>
        <TouchableOpacity
          accessibilityLabel="Close receipt scanner"
          onPress={() => router.back()}
          style={[styles.closeButton, { backgroundColor: colors.card, top: insets.top + 12 }]}
        >
          <Ionicons name="close" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Ionicons name="camera-outline" size={48} color={colors.textTertiary} />
        <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: "700", marginTop: 12 }}>
          Receipt scanning is available in the mobile app
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity
        accessibilityLabel="Close receipt scanner"
        onPress={() => router.back()}
        style={[styles.closeButton, { backgroundColor: colors.card, top: insets.top + 12 }]}
      >
        <Ionicons name="close" size={24} color={colors.textPrimary} />
      </TouchableOpacity>
      <ReceiptScanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webFallback: { alignItems: "center", justifyContent: "center", padding: 24 },
  closeButton: {
    position: "absolute",
    right: 18,
    zIndex: 10,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
});
````

## File: app/saving-detail.tsx
````typescript
import React, { useState, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  TextInput, KeyboardAvoidingView, Platform, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
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
````

## File: components/ui/collapsible.tsx
````typescript
import React from 'react';
import { View } from 'react-native';
// Stub — not used by this app
export function Collapsible({ children }: { title?: string; children?: React.ReactNode }) {
  return <View>{children}</View>;
}
````

## File: components/AnimatedNumber.tsx
````typescript
/**
 * AnimatedNumber — smoothly counts up from 0 to the target value.
 * Great for balance, totals, and stat cards.
 */
import React, { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";

type Props = {
  value: number;
  /** Called with the current interpolated number to format it */
  format: (n: number) => string;
  style?: any;
  duration?: number;
  delay?: number;
};

const AnimatedNumber: React.FC<Props> = ({
  value,
  format,
  style,
  duration = 800,
  delay = 0,
}) => {
  const animVal = useRef(new Animated.Value(0)).current;
  const displayRef = useRef("");
  const [display, setDisplay] = React.useState(format(0));

  useEffect(() => {
    animVal.setValue(0);
    const timeout = setTimeout(() => {
      Animated.timing(animVal, {
        toValue: value,
        duration,
        useNativeDriver: false, // must be false for non-transform/opacity
      }).start();
    }, delay);

    const listener = animVal.addListener(({ value: v }) => {
      const formatted = format(v);
      if (formatted !== displayRef.current) {
        displayRef.current = formatted;
        setDisplay(formatted);
      }
    });

    return () => {
      clearTimeout(timeout);
      animVal.removeListener(listener);
    };
  }, [animVal, delay, duration, format, value]);

  return <Text style={style}>{display}</Text>;
};

export default AnimatedNumber;
````

## File: components/AnimatedSection.tsx
````typescript
/**
 * AnimatedSection — fades in + slides up from below with an optional delay.
 * Uses only React Native's built-in Animated API (no extra deps).
 */
import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  delay?: number;
  /** How far down to start (default 24px) */
  distance?: number;
  /** Duration in ms (default 400) */
  duration?: number;
};

const AnimatedSection: React.FC<Props> = ({
  children,
  style,
  delay = 0,
  distance = 24,
  duration = 400,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(distance)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(distance);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        delay,
        useNativeDriver: true,
        bounciness: 4,
        speed: 12,
      }),
    ]).start();
  }, [delay, duration, distance, opacity, translateY]);

  return (
    <Animated.View style={[{ opacity, transform: [{ translateY }] }, style]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedSection;
````

## File: components/BalanceCard.tsx
````typescript
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
````

## File: components/BiometricGate.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { BiometricService } from "@/services/biometric";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface BiometricGateProps {
  children: React.ReactNode;
  onAuthenticated?: () => void;
  title?: string;
}

export function BiometricGate({
  children,
  onAuthenticated,
  title = "Unlock with Biometric",
}: BiometricGateProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-authenticate if biometric is enabled
  useEffect(() => {
    const checkAndAuth = async () => {
      if (await BiometricService.isBiometricEnabled()) {
        setIsAuthenticating(true);
        const success = await BiometricService.authenticate();
        if (success) {
          setIsUnlocked(true);
          onAuthenticated?.();
        } else {
          setError("Biometric authentication failed");
        }
        setIsAuthenticating(false);
      } else {
        // No biometric required
        setIsUnlocked(true);
      }
    };

    checkAndAuth();
  }, [onAuthenticated]);

  const handleRetry = async () => {
    setIsAuthenticating(true);
    setError(null);

    const success = await BiometricService.authenticate();
    if (success) {
      setIsUnlocked(true);
      onAuthenticated?.();
    } else {
      setError("Authentication failed. Please try again.");
    }

    setIsAuthenticating(false);
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* Icon */}
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: colors.primary + "20" },
          ]}
        >
          <Ionicons
            name={isAuthenticating ? "hourglass" : "lock-closed"}
            size={64}
            color={colors.primary}
          />
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          {title}
        </Text>

        {/* Message */}
        <Text style={[styles.message, { color: colors.textSecondary }]}>
          Use your biometric authentication to access your financial data
          securely.
        </Text>

        {/* Error Message */}
        {error && (
          <View
            style={[styles.errorBox, { backgroundColor: colors.danger + "20" }]}
          >
            <Ionicons name="alert-circle" size={16} color={colors.danger} />
            <Text style={[styles.errorText, { color: colors.danger }]}>
              {error}
            </Text>
          </View>
        )}
      </View>

      {/* Button */}
      <TouchableOpacity
        onPress={handleRetry}
        disabled={isAuthenticating}
        style={[
          styles.button,
          {
            backgroundColor: colors.primary,
            opacity: isAuthenticating ? 0.6 : 1,
          },
        ]}
        activeOpacity={0.8}
      >
        {isAuthenticating ? (
          <ActivityIndicator color="white" />
        ) : (
          <>
            <Ionicons name="finger-print" size={24} color="white" />
            <Text style={styles.buttonText}>Authenticate</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.lg,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 12,
    textAlign: "center",
  },
  message: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.md,
    borderRadius: Theme.radius.md,
    gap: 8,
    marginTop: 16,
    width: "100%",
  },
  errorText: {
    fontSize: 13,
    fontWeight: "600",
    flex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: Theme.radius.md,
    gap: 8,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default BiometricGate;
````

## File: components/Button.tsx
````typescript
import React, { useRef } from 'react';
import { TouchableOpacity, Text, Animated, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useApp } from '@/context/AppContext';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({ title, onPress, variant = 'primary', size = 'md', style, textStyle, disabled, fullWidth = true }: ButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { prefs } = useApp();
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => Animated.spring(scale, { toValue: 0.96, useNativeDriver: true, damping: 15 }).start();
  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, damping: 15 }).start();
  };
  const handlePress = () => {
    if (prefs.haptics) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onPress();
  };

  const heights: Record<string, number> = { sm: 42, md: 54, lg: 62 };
  const fontSizes: Record<string, number> = { sm: 14, md: 16, lg: 18 };

  const baseStyle = [styles.btn, { height: heights[size], opacity: disabled ? 0.6 : 1 }, fullWidth && { alignSelf: 'stretch' as const }];

  if (variant === 'primary') {
    return (
      <Animated.View style={[{ transform: [{ scale }] }, fullWidth && styles.stretch, style]}>
        <TouchableOpacity activeOpacity={1} onPress={handlePress} onPressIn={handlePressIn} onPressOut={handlePressOut} disabled={disabled}>
          <LinearGradient
            colors={colors.primaryGradient as [string, string, ...string[]]}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            style={baseStyle}
          >
            <Text style={[styles.primaryText, { fontSize: fontSizes[size] }, textStyle]}>{title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  if (variant === 'danger') {
    return (
      <Animated.View style={[{ transform: [{ scale }] }, fullWidth && styles.stretch, style]}>
        <TouchableOpacity
          activeOpacity={0.8} onPress={handlePress} onPressIn={handlePressIn} onPressOut={handlePressOut} disabled={disabled}
          style={[baseStyle, { borderWidth: 1.5, borderColor: colors.danger, borderRadius: Theme.radius.md, backgroundColor: colors.dangerLight }]}
        >
          <Text style={[styles.dangerText, { fontSize: fontSizes[size], color: colors.danger }, textStyle]}>{title}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
    <Animated.View style={[{ transform: [{ scale }] }, fullWidth && styles.stretch, style]}>
      <TouchableOpacity
        activeOpacity={0.8} onPress={handlePress} onPressIn={handlePressIn} onPressOut={handlePressOut} disabled={disabled}
        style={[baseStyle, { borderWidth: 1, borderColor: colors.border, backgroundColor: colors.inputBg, borderRadius: Theme.radius.md }]}
      >
        <Text style={[styles.secText, { fontSize: fontSizes[size], color: colors.textPrimary }, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  btn: { borderRadius: Theme.radius.full, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  stretch: { alignSelf: 'stretch' },
  primaryText: { color: '#fff', fontWeight: '700', letterSpacing: 0.2 },
  dangerText: { fontWeight: '600', letterSpacing: 0.2 },
  secText: { fontWeight: '600', letterSpacing: 0.2 },
});
````

## File: components/Card.tsx
````typescript
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
````

## File: components/CategoryIcon.tsx
````typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getCategoryByKey } from '@/utils/categories';

interface CategoryIconProps {
  category: string;
  size?: number;
}

export function CategoryIcon({ category, size = 44 }: CategoryIconProps) {
  const cat = getCategoryByKey(category);
  const iconSize = Math.round(size * 0.46);
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2, backgroundColor: cat.color + '20' }]}>
      <Ionicons name={cat.icon as any} size={iconSize} color={cat.color} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { alignItems: 'center', justifyContent: 'center' } });
````

## File: components/DisciplineStreakCard.tsx
````typescript
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { buildHeatmap, DisciplineState } from '@/utils/disciplineStreak';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  discipline: DisciplineState;
  legacyStreak?: number;
  /** Side-by-side tile on dashboard */
  compact?: boolean;
};

export function DisciplineStreakCard({ discipline, legacyStreak = 0, compact = false }: Props) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const cells = useMemo(
    () => buildHeatmap(discipline.dayHistory, compact ? 7 : 14),
    [discipline.dayHistory, compact],
  );

  const logging = Math.max(discipline.loggingStreak, legacyStreak);
  const budget = discipline.budgetStreak;

  if (compact) {
    return (
      <View
        style={[styles.compactCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
        accessibilityRole="summary"
        accessibilityLabel={`Logging streak ${logging} days, budget streak ${budget} days`}
      >
        <View style={styles.compactTop}>
          <View style={[styles.iconWrap, { backgroundColor: colors.warningLight }]}>
            <Ionicons name="flame" size={16} color={colors.warning} />
          </View>
          <Text style={[styles.compactTitle, { color: colors.textPrimary }]}>Discipline</Text>
        </View>
        <View style={styles.compactMetrics}>
          <View>
            <Text style={[styles.compactValue, { color: colors.textPrimary }]}>{logging}</Text>
            <Text style={[styles.compactLabel, { color: colors.textSecondary }]}>Logging</Text>
          </View>
          <View>
            <Text style={[styles.compactValue, { color: colors.success }]}>{budget}</Text>
            <Text style={[styles.compactLabel, { color: colors.textSecondary }]}>Budget</Text>
          </View>
        </View>
        <View style={styles.heatRow}>
          {cells.map((cell) => (
            <View
              key={cell.key}
              style={[
                styles.heatCell,
                {
                  backgroundColor:
                    cell.status === 'logged_ok'
                      ? colors.success
                      : cell.status === 'logged_over'
                        ? colors.warning
                        : colors.border,
                },
              ]}
            />
          ))}
        </View>
        <Text style={[styles.bestLine, { color: colors.textTertiary }]}>
          Best {Math.max(discipline.longestLoggingStreak, discipline.longestBudgetStreak)}d
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
      accessibilityRole="summary"
      accessibilityLabel={`Logging streak ${logging} days, budget streak ${budget} days. Missed days pause progress but keep your best run.`}
    >
      <View style={styles.header}>
        <View style={[styles.iconWrap, { backgroundColor: colors.warningLight }]}>
          <Ionicons name="flame" size={18} color={colors.warning} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Discipline</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Gaps pause — they never erase your best run
          </Text>
        </View>
      </View>

      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={[styles.metricValue, { color: colors.textPrimary }]}>{logging}</Text>
          <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>Logging</Text>
          <Text style={[styles.best, { color: colors.textTertiary }]}>
            Best {discipline.longestLoggingStreak}
          </Text>
        </View>
        <View style={[styles.divider, { backgroundColor: colors.separator }]} />
        <View style={styles.metric}>
          <Text style={[styles.metricValue, { color: colors.success }]}>{budget}</Text>
          <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>Under budget</Text>
          <Text style={[styles.best, { color: colors.textTertiary }]}>
            Best {discipline.longestBudgetStreak}
          </Text>
        </View>
      </View>

      <View style={styles.heatRow}>
        {cells.map((cell) => (
          <View
            key={cell.key}
            accessibilityLabel={`${cell.key} ${cell.status}`}
            style={[
              styles.heatCell,
              {
                backgroundColor:
                  cell.status === 'logged_ok'
                    ? colors.success
                    : cell.status === 'logged_over'
                      ? colors.warning
                      : colors.border,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.md,
    marginHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: Theme.spacing.md,
  },
  compactCard: {
    flex: 1,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.md,
    gap: 8,
    minHeight: 148,
  },
  compactTop: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  compactTitle: { fontSize: Theme.fontSize.sm, fontWeight: Theme.fontWeight.bold },
  compactMetrics: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  compactValue: { fontSize: Theme.fontSize.xxl, fontWeight: Theme.fontWeight.extraBold },
  compactLabel: { fontSize: Theme.fontSize.xs, fontWeight: Theme.fontWeight.semiBold },
  bestLine: { fontSize: Theme.fontSize.xs },
  header: { flexDirection: 'row', alignItems: 'center', gap: Theme.spacing.sm },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: Theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: Theme.fontSize.lg, fontWeight: Theme.fontWeight.bold },
  subtitle: { fontSize: Theme.fontSize.xs, marginTop: 2 },
  metrics: { flexDirection: 'row', alignItems: 'center' },
  metric: { flex: 1, alignItems: 'center', gap: 2 },
  metricValue: { fontSize: Theme.fontSize.xxl, fontWeight: Theme.fontWeight.extraBold },
  metricLabel: { fontSize: Theme.fontSize.sm, fontWeight: Theme.fontWeight.semiBold },
  best: { fontSize: Theme.fontSize.xs },
  divider: { width: 1, height: 40 },
  heatRow: { flexDirection: 'row', gap: 4 },
  heatCell: { flex: 1, height: 8, borderRadius: 3 },
});
````

## File: components/ExpenseItem.tsx
````typescript
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { Expense, useApp } from '@/context/AppContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getCategoryByKey } from '@/utils/categories';
import { formatWithCurrency } from '@/utils/currency';
import { formatCurrency, formatShortDate } from '@/utils/formatters';
import { Ionicons } from '@expo/vector-icons';
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
````

## File: components/ExportModal.tsx
````typescript
/**
 * ExportModal.tsx
 * A beautiful full-featured financial report export modal.
 * Supports CSV and PDF formats, date range filtering, and section toggles.
 */

import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Switch,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/Colors';
import { Theme } from '@/constants/Theme';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { exportReport, ExportOptions, BudgetEntry } from '@/utils/exportReport';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ExportModalProps {
  visible: boolean;
  onClose: () => void;
}

type FormatType = 'csv' | 'pdf';

type DatePreset = 'all' | 'this_month' | 'last_month' | 'last_3months' | 'this_year';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getDateRange(preset: DatePreset): { from: Date | null; to: Date | null } {
  const now = new Date();
  if (preset === 'all') return { from: null, to: null };

  if (preset === 'this_month') {
    return {
      from: new Date(now.getFullYear(), now.getMonth(), 1),
      to: now,
    };
  }
  if (preset === 'last_month') {
    const from = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const to = new Date(now.getFullYear(), now.getMonth(), 0);
    return { from, to };
  }
  if (preset === 'last_3months') {
    const from = new Date(now.getFullYear(), now.getMonth() - 3, 1);
    return { from, to: now };
  }
  if (preset === 'this_year') {
    return { from: new Date(now.getFullYear(), 0, 1), to: now };
  }
  return { from: null, to: null };
}

function presetLabel(p: DatePreset): string {
  switch (p) {
    case 'all': return 'All Time';
    case 'this_month': return 'This Month';
    case 'last_month': return 'Last Month';
    case 'last_3months': return 'Last 3 Months';
    case 'this_year': return 'This Year';
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FormatCard({
  format,
  selected,
  onPress,
  colors,
}: {
  format: FormatType;
  selected: boolean;
  onPress: () => void;
  colors: any;
}) {
  const isCSV = format === 'csv';
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[
        styles.formatCard,
        {
          backgroundColor: selected ? colors.primary + '15' : colors.inputBg,
          borderColor: selected ? colors.primary : colors.border,
        },
      ]}
    >
      <View style={[styles.formatIconWrap, { backgroundColor: selected ? colors.primary : colors.border }]}>
        <Ionicons
          name={isCSV ? 'document-text-outline' : 'document-outline'}
          size={22}
          color={selected ? 'white' : colors.textSecondary}
        />
      </View>
      <Text style={[styles.formatTitle, { color: selected ? colors.primary : colors.textPrimary }]}>
        {isCSV ? 'CSV' : 'PDF'}
      </Text>
      <Text style={[styles.formatSub, { color: colors.textSecondary }]}>
        {isCSV ? 'Spreadsheet\nEditable' : 'Document\nFormatted'}
      </Text>
      {selected && (
        <View style={[styles.formatCheck, { backgroundColor: colors.primary }]}>
          <Ionicons name="checkmark" size={10} color="white" />
        </View>
      )}
    </TouchableOpacity>
  );
}

function SectionToggle({
  label,
  icon,
  iconColor,
  iconBg,
  value,
  onToggle,
  subtitle,
  colors,
}: {
  label: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  value: boolean;
  onToggle: (v: boolean) => void;
  subtitle: string;
  colors: any;
}) {
  return (
    <View style={[styles.toggleRow, { borderColor: colors.border }]}>
      <View style={[styles.toggleIcon, { backgroundColor: iconBg }]}>
        <Ionicons name={icon as any} size={16} color={iconColor} />
      </View>
      <View style={styles.toggleBody}>
        <Text style={[styles.toggleLabel, { color: colors.textPrimary }]}>{label}</Text>
        <Text style={[styles.toggleSub, { color: colors.textSecondary }]}>{subtitle}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: colors.border, true: colors.primary + '80' }}
        thumbColor={value ? colors.primary : colors.textTertiary}
      />
    </View>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ExportModal({ visible, onClose }: ExportModalProps) {
  const scheme = useColorScheme();
  const C = Colors[scheme ?? 'dark'];
  const { expenses, savingGoals, categoryBudgets, income, prefs } = useApp();
  const { currentUser } = useAuth();

  const [format, setFormat] = useState<FormatType>('pdf');
  const [datePreset, setDatePreset] = useState<DatePreset>('this_month');
  const [includeExpenses, setIncludeExpenses] = useState(true);
  const [includeBudgets, setIncludeBudgets] = useState(true);
  const [includeGoals, setIncludeGoals] = useState(true);
  const [loading, setLoading] = useState(false);

  const datePresets: DatePreset[] = ['all', 'this_month', 'last_month', 'last_3months', 'this_year'];

  const handleExport = useCallback(async () => {
    if (!includeExpenses && !includeBudgets && !includeGoals) {
      Alert.alert('Nothing to Export', 'Please enable at least one section to include in the report.');
      return;
    }

    setLoading(true);
    try {
      const { from, to } = getDateRange(datePreset);

      const budgets: BudgetEntry[] = Object.entries(categoryBudgets).map(([category, limit]) => ({
        category,
        limit,
      }));

      const opts: ExportOptions = {
        format,
        includeExpenses,
        includeBudgets,
        includeGoals,
        dateFrom: from,
        dateTo: to,
        currency: prefs.currency,
      };

      await exportReport(
        {
          expenses,
          budgets,
          savingGoals,
          income,
          username: currentUser?.username ?? 'user',
        },
        opts
      );

      onClose();
    } catch (err: any) {
      Alert.alert('Export Failed', err.message ?? 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [
    format,
    datePreset,
    includeExpenses,
    includeBudgets,
    includeGoals,
    expenses,
    savingGoals,
    categoryBudgets,
    income,
    prefs.currency,
    currentUser,
    onClose,
  ]);

  // Count items that will be exported
  const { from, to } = getDateRange(datePreset);
  const filteredCount = expenses.filter((e) => {
    const d = new Date(e.date);
    if (from && d < from) return false;
    if (to) { const t = new Date(to); t.setHours(23, 59, 59); if (d > t) return false; }
    return true;
  }).length;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />

        <View style={[styles.sheet, { backgroundColor: C.background }]}>
          {/* Handle */}
          <View style={[styles.handle, { backgroundColor: C.border }]} />

          {/* Header */}
          <LinearGradient
            colors={['#5A2ED4', '#3C82FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.sheetHeader}
          >
            <View>
              <Text style={styles.sheetTitle}>Export Report</Text>
              <Text style={styles.sheetSub}>Compile your financial data</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color="white" />
            </TouchableOpacity>
          </LinearGradient>

          <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>

            {/* ── Format ── */}
            <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>FORMAT</Text>
            <View style={styles.formatRow}>
              <FormatCard format="pdf" selected={format === 'pdf'} onPress={() => setFormat('pdf')} colors={C} />
              <FormatCard format="csv" selected={format === 'csv'} onPress={() => setFormat('csv')} colors={C} />
            </View>

            {/* ── Date Range ── */}
            <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>DATE RANGE</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.presetList}
            >
              {datePresets.map((p) => {
                const sel = datePreset === p;
                return (
                  <TouchableOpacity
                    key={p}
                    onPress={() => setDatePreset(p)}
                    style={[
                      styles.presetChip,
                      {
                        backgroundColor: sel ? C.primary : C.inputBg,
                        borderColor: sel ? C.primary : C.border,
                      },
                    ]}
                  >
                    <Text style={[styles.presetChipText, { color: sel ? 'white' : C.textSecondary }]}>
                      {presetLabel(p)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* ── Sections ── */}
            <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>INCLUDE SECTIONS</Text>
            <View style={[styles.toggleCard, { backgroundColor: C.card, borderColor: C.border }]}>
              <SectionToggle
                label="Expenses"
                icon="receipt-outline"
                iconColor="#5A2ED4"
                iconBg="#5A2ED415"
                value={includeExpenses}
                onToggle={setIncludeExpenses}
                subtitle={`${filteredCount} transactions`}
                colors={C}
              />
              <SectionToggle
                label="Budget Limits"
                icon="pie-chart-outline"
                iconColor="#FF9F0A"
                iconBg="#FF9F0A15"
                value={includeBudgets}
                onToggle={setIncludeBudgets}
                subtitle={`${Object.keys(categoryBudgets).length} categories`}
                colors={C}
              />
              <SectionToggle
                label="Saving Goals"
                icon="trophy-outline"
                iconColor="#34C47C"
                iconBg="#34C47C15"
                value={includeGoals}
                onToggle={setIncludeGoals}
                subtitle={`${savingGoals.length} goals`}
                colors={C}
              />
            </View>

            {/* ── Summary Preview ── */}
            <View style={[styles.previewCard, { backgroundColor: C.card, borderColor: C.border }]}>
              <Ionicons name="information-circle-outline" size={16} color={C.textSecondary} />
              <Text style={[styles.previewText, { color: C.textSecondary }]}>
                Your report will contain{' '}
                <Text style={{ color: C.textPrimary, fontWeight: '700' }}>
                  {[
                    includeExpenses && `${filteredCount} expenses`,
                    includeBudgets && `${Object.keys(categoryBudgets).length} budgets`,
                    includeGoals && `${savingGoals.length} goals`,
                  ]
                    .filter(Boolean)
                    .join(', ') || 'nothing'}
                </Text>{' '}
                for <Text style={{ color: C.textPrimary, fontWeight: '700' }}>{presetLabel(datePreset)}</Text>.
              </Text>
            </View>

            <View style={{ height: 16 }} />
          </ScrollView>

          {/* Export Button */}
          <View style={[styles.footer, { borderColor: C.border }]}>
            <TouchableOpacity
              onPress={handleExport}
              disabled={loading}
              activeOpacity={0.85}
              style={styles.exportBtn}
            >
              <LinearGradient
                colors={loading ? ['#aaa', '#aaa'] : ['#5A2ED4', '#3C82FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.exportBtnInner}
              >
                {loading ? (
                  <>
                    <ActivityIndicator size="small" color="white" />
                    <Text style={styles.exportBtnText}>Generating Report…</Text>
                  </>
                ) : (
                  <>
                    <Ionicons
                      name={format === 'pdf' ? 'document-outline' : 'document-text-outline'}
                      size={18}
                      color="white"
                    />
                    <Text style={styles.exportBtnText}>
                      Export as {format.toUpperCase()}
                    </Text>
                    <Ionicons name="share-outline" size={18} color="white" />
                  </>
                )}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  sheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: '90%',
    overflow: 'hidden',
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 20,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 2,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  sheetTitle: { fontSize: 20, fontWeight: '800', color: 'white' },
  sheetSub: { fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 10,
    marginTop: 4,
  },

  // Format Cards
  formatRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  formatCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1.5,
    gap: 6,
    position: 'relative',
  },
  formatIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  formatTitle: { fontSize: 16, fontWeight: '800' },
  formatSub: { fontSize: 11, textAlign: 'center', lineHeight: 16 },
  formatCheck: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Date presets
  presetList: {
    gap: 8,
    flexDirection: 'row',
    paddingBottom: 20,
  },
  presetChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  presetChipText: { fontSize: 13, fontWeight: '600' },

  // Toggle rows
  toggleCard: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 16,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  toggleIcon: {
    width: 34,
    height: 34,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleBody: { flex: 1 },
  toggleLabel: { fontSize: 15, fontWeight: '600' },
  toggleSub: { fontSize: 12, marginTop: 1 },

  // Preview card
  previewCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    padding: 12,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
  },
  previewText: { flex: 1, fontSize: 13, lineHeight: 20 },

  // Footer
  footer: {
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  exportBtn: {
    borderRadius: Theme.radius.md,
    overflow: 'hidden',
  },
  exportBtnInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 16,
  },
  exportBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
});
````

## File: components/external-link.tsx
````typescript
import { Href, Link } from 'expo-router';
import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import { type ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: Href & string };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (process.env.EXPO_OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href, {
            presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
          });
        }
      }}
    />
  );
}
````

## File: components/FinancialHealthCard.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { Expense, SavingGoal, Subscription } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { analyzeFinancialHealth, HealthAlertSeverity } from "@/utils/financialHealth";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FinancialHealthCardProps {
  expenses: Expense[];
  subscriptions: Subscription[];
  savingGoals: SavingGoal[];
  income: number;
  categoryBudgets: Record<string, number>;
  currency: string;
}

export function FinancialHealthCard({
  expenses,
  subscriptions,
  savingGoals,
  income,
  categoryBudgets,
  currency,
}: FinancialHealthCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const analysis = useMemo(
    () => analyzeFinancialHealth({ expenses, subscriptions, savingGoals, income, categoryBudgets }),
    [expenses, subscriptions, savingGoals, income, categoryBudgets]
  );
  const scoreColor = getScoreColor(analysis.score, colors);
  const topAlerts = analysis.alerts.slice(0, 3);

  return (
    <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.header}>
        <View style={styles.scoreWrap}>
          <View style={[styles.scoreRing, { borderColor: scoreColor, backgroundColor: scoreColor + "12" }]}>
            <Text style={[styles.score, { color: scoreColor }]}>{analysis.score}</Text>
            <Text style={[styles.scoreMax, { color: colors.textSecondary }]}>/100</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.title, { color: colors.textPrimary }]}>Financial Health</Text>
            <Text style={[styles.status, { color: scoreColor }]}>{analysis.status}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/manage-budgets" as never)}
          style={[styles.budgetBtn, { backgroundColor: colors.inputBg, borderColor: colors.border }]}
        >
          <Ionicons name="options-outline" size={15} color={colors.primary} />
          <Text style={[styles.budgetBtnText, { color: colors.primary }]}>Budgets</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.metrics}>
        <Metric label="Projected" value={formatCurrency(analysis.metrics.projectedMonthSpend, currency)} colors={colors} />
        <Metric label="Cash left" value={formatCurrency(analysis.metrics.cashLeft, currency)} colors={colors} />
        <Metric label="Saved" value={`${Math.round(analysis.metrics.savingsRate * 100)}%`} colors={colors} />
      </View>

      <View style={styles.alerts}>
        {topAlerts.map((alert) => {
          const alertColor = getSeverityColor(alert.severity, colors);
          return (
            <View key={alert.id} style={[styles.alertRow, { backgroundColor: alertColor + "10" }]}>
              <View style={[styles.alertIcon, { backgroundColor: alertColor + "18" }]}>
                <Ionicons name={alert.icon as keyof typeof Ionicons.glyphMap} size={16} color={alertColor} />
              </View>
              <View style={styles.alertText}>
                <Text style={[styles.alertTitle, { color: colors.textPrimary }]}>{alert.title}</Text>
                <Text style={[styles.alertMessage, { color: colors.textSecondary }]}>{alert.message}</Text>
                <Text style={[styles.alertAction, { color: alertColor }]}>{alert.action}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

function Metric({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: typeof Colors.light;
}) {
  return (
    <View style={[styles.metric, { backgroundColor: colors.inputBg }]}>
      <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>{label}</Text>
      <Text style={[styles.metricValue, { color: colors.textPrimary }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

function getScoreColor(score: number, colors: typeof Colors.light) {
  if (score >= 80) return colors.success;
  if (score >= 60) return colors.warning;
  return colors.danger;
}

function getSeverityColor(severity: HealthAlertSeverity, colors: typeof Colors.light) {
  if (severity === "critical") return colors.danger;
  if (severity === "warning") return colors.warning;
  if (severity === "positive") return colors.success;
  return colors.primary;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.lg,
    marginHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    gap: 14,
  },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 },
  scoreWrap: { flex: 1, flexDirection: "row", alignItems: "center", gap: 12 },
  scoreRing: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  score: { fontSize: 24, fontWeight: "900", lineHeight: 28 },
  scoreMax: { fontSize: 11, fontWeight: "800" },
  title: { fontSize: 17, fontWeight: "800" },
  status: { fontSize: 13, fontWeight: "800", marginTop: 3 },
  budgetBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderRadius: Theme.radius.full,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },
  budgetBtnText: { fontSize: 12, fontWeight: "800" },
  metrics: { flexDirection: "row", gap: 8 },
  metric: { flex: 1, borderRadius: Theme.radius.md, padding: 10, minWidth: 0 },
  metricLabel: { fontSize: 11, fontWeight: "700", marginBottom: 4 },
  metricValue: { fontSize: 13, fontWeight: "900" },
  alerts: { gap: 9 },
  alertRow: {
    flexDirection: "row",
    gap: 10,
    borderRadius: Theme.radius.md,
    padding: 10,
  },
  alertIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  alertText: { flex: 1, gap: 3 },
  alertTitle: { fontSize: 13, fontWeight: "900" },
  alertMessage: { fontSize: 12, lineHeight: 17, fontWeight: "600" },
  alertAction: { fontSize: 12, lineHeight: 17, fontWeight: "800" },
});

export default FinancialHealthCard;
````

## File: components/FloatingTabBar.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import React, { useEffect } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type IonName = keyof typeof Ionicons.glyphMap;

const CORE_TABS = [
  {
    name: "index",
    label: "Dashboard",
    icon: "home-outline" as IonName,
    iconActive: "home" as IonName,
  },
  {
    name: "expenses",
    label: "Expenses",
    icon: "receipt-outline" as IonName,
    iconActive: "receipt" as IonName,
  },
  {
    name: "wallet",
    label: "Wallet",
    icon: "people-circle-outline" as IonName,
    iconActive: "people-circle" as IonName,
  },
  {
    name: "statistics",
    label: "Stats",
    icon: "bar-chart-outline" as IonName,
    iconActive: "bar-chart" as IonName,
  },
] as const;

/** Folder grid — reading order L→R, top→bottom */
const SECONDARY_TABS = [
  {
    name: "splits",
    label: "Splits",
    icon: "people-outline" as IonName,
    iconActive: "people" as IonName,
  },
  {
    name: "savings",
    label: "Savings",
    icon: "wallet-outline" as IonName,
    iconActive: "wallet" as IonName,
  },
  {
    name: "settings",
    label: "Settings",
    icon: "settings-outline" as IonName,
    iconActive: "settings" as IonName,
  },
  {
    name: "simulator",
    label: "Simulator",
    icon: "speedometer-outline" as IonName,
    iconActive: "speedometer" as IonName,
  },
] as const;

const SPRING = { damping: 16, stiffness: 200, mass: 0.75 };
const GRID_COLS = 2;
const CELL = 72;
const CELL_GAP = 16;
const FOLDER_PAD = 16;

export function FloatingTabBar({ state, navigation }: BottomTabBarProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const insets = useSafeAreaInsets();
  const open = useSharedValue(0);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const activeRoute = state.routes[state.index]?.name;
  const isSecondaryActive = SECONDARY_TABS.some((t) => t.name === activeRoute);

  useEffect(() => {
    setMenuOpen(false);
    open.value = withSpring(0, SPRING);
  }, [activeRoute, open]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: interpolate(open.value, [0, 1], [0, 0.55], Extrapolation.CLAMP),
  }));

  const folderStyle = useAnimatedStyle(() => {
    const progress = open.value;
    return {
      opacity: interpolate(progress, [0, 0.15, 1], [0, 0, 1], Extrapolation.CLAMP),
      transform: [
        { translateY: interpolate(progress, [0, 1], [28, 0], Extrapolation.CLAMP) },
        { scale: interpolate(progress, [0, 1], [0.72, 1], Extrapolation.CLAMP) },
      ],
    };
  });

  const fabStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(open.value, [0, 1], [1, 0.94], Extrapolation.CLAMP) },
      { rotate: `${interpolate(open.value, [0, 1], [0, 45])}deg` },
    ],
  }));

  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    open.value = withSpring(next ? 1 : 0, SPRING);
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    }
  }

  function goTo(routeName: string) {
    const route = state.routes.find((r) => r.name === routeName);
    if (!route) return;
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!event.defaultPrevented) {
      navigation.navigate(routeName);
    }
    setMenuOpen(false);
    open.value = withSpring(0, SPRING);
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
  }

  const bottomPad = Math.max(insets.bottom, Platform.OS === "ios" ? 8 : 6);
  const folderWidth = GRID_COLS * CELL + (GRID_COLS - 1) * CELL_GAP + FOLDER_PAD * 2;
  const fabSize = 58;

  return (
    <View pointerEvents="box-none" style={styles.root}>
      <Animated.View
        pointerEvents={menuOpen ? "auto" : "none"}
        style={[styles.backdrop, { backgroundColor: colors.overlay }, backdropStyle]}
      >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={toggleMenu}
          accessibilityLabel="Close menu"
        />
      </Animated.View>

      <Animated.View
        pointerEvents={menuOpen ? "auto" : "none"}
        style={[
          styles.folder,
          {
            width: folderWidth,
            left: "50%",
            marginLeft: -folderWidth / 2,
            backgroundColor: colorScheme === "dark" ? colors.card : colors.surface,
            borderColor: colors.cardBorder,
            ...Theme.shadow.lg,
          },
          folderStyle,
        ]}
      >
        <View style={styles.grid}>
          {SECONDARY_TABS.map((tab) => {
            const focused = activeRoute === tab.name;
            return (
              <Pressable
                key={tab.name}
                onPress={() => goTo(tab.name)}
                accessibilityRole="button"
                accessibilityLabel={tab.label}
                accessibilityState={{ selected: focused }}
                style={({ pressed }) => [
                  styles.cell,
                  {
                    width: CELL,
                    opacity: pressed ? 0.85 : 1,
                  },
                ]}
              >
                <View
                  style={[
                    styles.cellIcon,
                    {
                      backgroundColor: focused ? colors.primary : colors.primary + "18",
                      borderColor: focused ? colors.primary : "transparent",
                    },
                  ]}
                >
                  <Ionicons
                    name={focused ? tab.iconActive : tab.icon}
                    size={24}
                    color={focused ? "#FFFFFF" : colors.primary}
                  />
                </View>
                <Text
                  style={[styles.cellLabel, { color: colors.textPrimary }]}
                  numberOfLines={1}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </Animated.View>

      {/* Narrow hit box only — must NOT span full width or it steals tab taps */}
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.fabWrap,
          {
            width: fabSize,
            height: fabSize,
            left: "50%",
            marginLeft: -fabSize / 2,
          },
          fabStyle,
        ]}
      >
        <Pressable
          onPress={toggleMenu}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={menuOpen ? "Close more tabs" : "Open more tabs"}
          accessibilityState={{ expanded: menuOpen }}
          style={({ pressed }) => [
            styles.fab,
            {
              width: fabSize,
              height: fabSize,
              borderRadius: fabSize / 2,
              backgroundColor: colors.primary,
              opacity: pressed ? 0.9 : 1,
              borderColor: isSecondaryActive ? colors.primaryLight : "transparent",
              borderWidth: isSecondaryActive ? 2 : 0,
              ...Theme.shadow.lg,
            },
          ]}
        >
          <Ionicons name={menuOpen ? "close" : "apps"} size={26} color="#FFFFFF" />
        </Pressable>
      </Animated.View>

      <View
        style={[
          styles.bar,
          {
            backgroundColor: colors.tabBar,
            borderColor: colors.tabBarBorder,
            paddingBottom: bottomPad,
          },
        ]}
      >
        <View style={styles.side}>
          {CORE_TABS.slice(0, 2).map((tab) => (
            <CoreTab
              key={tab.name}
              label={tab.label}
              icon={activeRoute === tab.name ? tab.iconActive : tab.icon}
              focused={activeRoute === tab.name}
              activeColor={colors.tabActive}
              inactiveColor={colors.tabInactive}
              onPress={() => goTo(tab.name)}
            />
          ))}
        </View>

        <View pointerEvents="none" style={styles.fabSlot} />

        <View style={styles.side}>
          {CORE_TABS.slice(2).map((tab) => (
            <CoreTab
              key={tab.name}
              label={tab.label}
              icon={activeRoute === tab.name ? tab.iconActive : tab.icon}
              focused={activeRoute === tab.name}
              activeColor={colors.tabActive}
              inactiveColor={colors.tabInactive}
              onPress={() => goTo(tab.name)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

function CoreTab({
  label,
  icon,
  focused,
  activeColor,
  inactiveColor,
  onPress,
}: {
  label: string;
  icon: IonName;
  focused: boolean;
  activeColor: string;
  inactiveColor: string;
  onPress: () => void;
}) {
  const color = focused ? activeColor : inactiveColor;
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 4, right: 4 }}
      accessibilityRole="tab"
      accessibilityState={{ selected: focused }}
      accessibilityLabel={label}
      style={styles.coreTab}
    >
      <View style={styles.coreHit}>
        <Ionicons name={icon} size={22} color={color} />
        <Text style={[styles.coreLabel, { color }]} numberOfLines={1}>
          {label}
        </Text>
        {focused && <View style={[styles.dot, { backgroundColor: activeColor }]} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent",
    overflow: "visible",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    bottom: 0,
    top: -640,
  },
  bar: {
    flexDirection: "row",
    alignItems: "stretch",
    borderWidth: 1,
    borderRadius: 22,
    marginHorizontal: 12,
    marginBottom: 8,
    paddingTop: Theme.spacing.sm,
    minHeight: 56,
    zIndex: 1,
  },
  side: {
    flex: 1,
    flexDirection: "row",
    zIndex: 2,
  },
  fabSlot: {
    width: 72,
  },
  coreTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
  },
  coreHit: {
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    minWidth: 56,
    minHeight: 44,
    paddingVertical: 4,
  },
  coreLabel: {
    fontSize: 10,
    fontWeight: Theme.fontWeight.semiBold,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 1,
  },
  fabWrap: {
    position: "absolute",
    top: -22,
    zIndex: 20,
  },
  fab: {
    alignItems: "center",
    justifyContent: "center",
  },
  folder: {
    position: "absolute",
    bottom: 78,
    zIndex: 19,
    borderRadius: Theme.radius.xl,
    borderWidth: 1,
    padding: FOLDER_PAD,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: CELL_GAP,
    rowGap: CELL_GAP,
  },
  cell: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  cellIcon: {
    width: 52,
    height: 52,
    borderRadius: Theme.radius.lg,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
  },
  cellLabel: {
    fontSize: Theme.fontSize.xs,
    fontWeight: Theme.fontWeight.semiBold,
    textAlign: "center",
  },
});
````

## File: components/Folder.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

// Enable LayoutAnimation for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  badge?: string;
  children: React.ReactNode;
  previewIcons?: (keyof typeof Ionicons.glyphMap)[];
};

const Folder: React.FC<Props> = ({
  title,
  icon,
  iconColor,
  badge,
  children,
  previewIcons = [],
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [isOpen, setIsOpen] = useState(false);

  const rotationAnim = useRef(new Animated.Value(0)).current;

  const toggleFolder = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    Animated.spring(rotationAnim, {
      toValue: isOpen ? 0 : 1,
      useNativeDriver: true,
      bounciness: 6,
    }).start();

    setIsOpen(!isOpen);
  };

  const arrowRotation = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      {/* Folder Header / Button */}
      <TouchableOpacity
        onPress={toggleFolder}
        activeOpacity={0.8}
        style={styles.header}
      >
        <View style={styles.headerLeft}>
          {/* Closed Folder Mini Grid Preview */}
          {!isOpen && previewIcons.length > 0 ? (
            <View
              style={[
                styles.previewGrid,
                { backgroundColor: iconColor + "15" },
              ]}
            >
              {previewIcons.slice(0, 4).map((pIcon, idx) => (
                <Ionicons key={idx} name={pIcon} size={10} color={iconColor} />
              ))}
            </View>
          ) : (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: iconColor + "15" },
              ]}
            >
              <Ionicons
                name={isOpen ? "folder-open" : icon}
                size={20}
                color={iconColor}
              />
            </View>
          )}

          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
              {title}
            </Text>
            <Text style={[styles.sub, { color: colors.textSecondary }]}>
              {isOpen ? "Tap to close folder" : "Tap to open widgets"}
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          {badge && !isOpen && (
            <View style={[styles.badge, { backgroundColor: colors.primary }]}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
          <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textTertiary}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>

      {/* Expanded Folder Content */}
      {isOpen && (
        <View style={[styles.content, { borderTopColor: colors.border }]}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 16,
    borderRadius: 24,
    borderWidth: 1,
    overflow: "hidden",
    ...Theme.shadow.sm,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  previewGrid: {
    width: 42,
    height: 42,
    borderRadius: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 6,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  sub: {
    fontSize: 11,
    fontWeight: "500",
    marginTop: 1,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
  },
  content: {
    borderTopWidth: 1,
    paddingBottom: 16,
    paddingTop: 8,
  },
});

export default Folder;
````

## File: components/ForecastChart.tsx
````typescript
import { Colors } from "@/constants/Colors";
import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export interface ForecastPoint {
  timestamp: number;
  value: number;
}

export function ForecastChart({
  data,
  width,
  colors,
}: {
  data: ForecastPoint[];
  width: number;
  colors: typeof Colors.light;
}) {
  const height = 180;
  const padding = 8;
  const values = data.map((point) => point.value);
  const maxValue = Math.max(...values, 1);
  const chartWidth = Math.max(width - padding * 2, 1);
  const chartHeight = height - padding * 2;
  const denominator = Math.max(data.length - 1, 1);
  const coordinates = data.map((point, index) => ({
    x: padding + (index / denominator) * chartWidth,
    y: padding + (1 - point.value / maxValue) * chartHeight,
  }));
  const linePath = coordinates
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)},${point.y.toFixed(1)}`)
    .join(" ");
  const first = coordinates[0];
  const last = coordinates[coordinates.length - 1];
  const areaPath = `${linePath} L${last.x.toFixed(1)},${(height - padding).toFixed(1)} L${first.x.toFixed(1)},${(height - padding).toFixed(1)} Z`;

  return (
    <Svg
      width={width}
      height={height}
      accessibilityLabel="Monthly spending forecast chart"
      accessible
    >
      <Defs>
        <LinearGradient id="forecastFill" x1="0" x2="0" y1="0" y2="1">
          <Stop offset="0" stopColor={colors.primary} stopOpacity="0.32" />
          <Stop offset="1" stopColor={colors.primary} stopOpacity="0" />
        </LinearGradient>
      </Defs>
      <Path d={areaPath} fill="url(#forecastFill)" />
      <Path
        d={linePath}
        fill="none"
        stroke={colors.primary}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
````

## File: components/ForecastChart.web.tsx
````typescript
import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";

export interface ForecastPoint {
  timestamp: number;
  value: number;
}

export function ForecastChart({
  data,
  width,
  colors,
}: {
  data: ForecastPoint[];
  width: number;
  colors: typeof Colors.light;
}) {
  const maxValue = Math.max(...data.map((point) => point.value), 1);
  const sample = data.filter((_, index) => index % Math.max(1, Math.floor(data.length / 18)) === 0);

  return (
    <View style={[styles.chart, { width }]}>
      {sample.map((point) => (
        <View key={point.timestamp} style={styles.barSlot}>
          <View
            style={[
              styles.bar,
              {
                height: `${Math.max(6, (point.value / maxValue) * 100)}%`,
                backgroundColor: colors.primary,
              },
            ]}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    height: 180,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 3,
    paddingTop: 12,
  },
  barSlot: { flex: 1, height: "100%", justifyContent: "flex-end" },
  bar: { width: "100%", borderRadius: 999, opacity: 0.7 },
});
````

## File: components/haptic-tab.tsx
````typescript
import * as Haptics from "expo-haptics";
import { Pressable, type PressableProps } from "react-native";

export function HapticTab(props: PressableProps) {
  return (
    <Pressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === "ios") {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
````

## File: components/hello-wave.tsx
````typescript
import Animated from 'react-native-reanimated';

export function HelloWave() {
  return (
    <Animated.Text
      style={{
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
        animationName: {
          '50%': { transform: [{ rotate: '25deg' }] },
        },
        animationIterationCount: 4,
        animationDuration: '300ms',
      }}>
      👋
    </Animated.Text>
  );
}
````

## File: components/Input.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  prefix?: string;
  suffix?: string;
}

export function Input({
  label,
  error,
  prefix,
  suffix,
  style,
  ...props
}: InputProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [focused, setFocused] = useState(false);
  const borderWidthAnim = useRef(new Animated.Value(0)).current;
  const labelColorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(labelColorAnim, {
      toValue: focused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(borderWidthAnim, {
      toValue: focused ? 1.5 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused, borderWidthAnim, labelColorAnim]);

  const labelColor = labelColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.textSecondary, colors.primary],
  });

  const borderWidth = borderWidthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  return (
    <View style={styles.container}>
      {label ? (
        <Animated.Text style={[styles.label, { color: labelColor }]}>
          {label}
        </Animated.Text>
      ) : null}
      <Animated.View
        style={[
          styles.row,
          {
            backgroundColor: colors.inputBg,
            borderColor: focused
              ? colors.primary
              : error
                ? colors.danger
                : colors.inputBorder,
            borderWidth,
          },
        ]}
      >
        {prefix ? (
          <Text style={[styles.affix, { color: colors.textSecondary }]}>
            {prefix}
          </Text>
        ) : null}
        <TextInput
          {...props}
          style={[styles.input, style, { color: colors.textPrimary }]}
          placeholderTextColor={colors.textTertiary}
          onFocus={(event) => {
            setFocused(true);
            props.onFocus?.(event);
          }}
          onBlur={(event) => {
            setFocused(false);
            props.onBlur?.(event);
          }}
        />
        {suffix ? (
          <Text style={[styles.affix, { color: colors.textSecondary }]}>
            {suffix}
          </Text>
        ) : null}
      </Animated.View>
      {error ? (
        <Text style={[styles.error, { color: colors.danger }]}>{error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: Theme.spacing.md },
  label: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 6,
    letterSpacing: 0.1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    paddingHorizontal: Theme.spacing.md,
    height: 52,
  },
  affix: { fontSize: 16, fontWeight: "600", marginRight: 4 },
  input: { flex: 1, fontSize: 16, fontWeight: "500" },
  error: { fontSize: 12, marginTop: 4 },
});
````

## File: components/PageHeader.tsx
````typescript
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
````

## File: components/parallax-scroll-view.tsx
````typescript
import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const backgroundColor = useThemeColor({}, 'background');
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ backgroundColor, flex: 1 }}
      scrollEventThrottle={16}>
      <Animated.View
        style={[
          styles.header,
          { backgroundColor: headerBackgroundColor[colorScheme] },
          headerAnimatedStyle,
        ]}>
        {headerImage}
      </Animated.View>
      <ThemedView style={styles.content}>{children}</ThemedView>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
````

## File: components/PressableScale.tsx
````typescript
/**
 * PressableScale — wraps children in a touchable that scales down on press.
 * Gives a satisfying tactile feel to any card, button, or list item.
 */
import React, { useRef } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  accessibilityLabel?: string;
  style?: any;
  /** Scale factor when pressed (default 0.97) */
  scaleTo?: number;
};

const PressableScale: React.FC<Props> = ({
  children,
  onPress,
  onLongPress,
  accessibilityLabel,
  style,
  scaleTo = 0.97,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: scaleTo,
      useNativeDriver: true,
      speed: 50,
      bounciness: 2,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 6,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityLabel={accessibilityLabel}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[{ transform: [{ scale }] }, style]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default PressableScale;
````

## File: components/ProgressBar.tsx
````typescript
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

interface ProgressBarProps {
  progress: number; // 0–1
  color: string;
  height?: number;
  backgroundColor?: string;
}

export function ProgressBar({
  progress,
  color,
  height = 8,
  backgroundColor = "#E8E6F0",
}: ProgressBarProps) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(anim, {
      toValue: Math.min(1, Math.max(0, progress)),
      useNativeDriver: false,
      damping: 14,
      stiffness: 80,
    }).start();
  }, [progress, anim]);

  return (
    <View
      style={[
        styles.track,
        { height, backgroundColor, borderRadius: height / 2 },
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          {
            height,
            borderRadius: height / 2,
            backgroundColor: color,
            width: anim.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
            }),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { width: "100%", overflow: "hidden" },
  fill: {},
});
````

## File: components/QuickAddFAB.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
    Alert,
    Animated,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const BUTTON_SIZE = 60;
const SECONDARY_BUTTONS = [
  { icon: "receipt", label: "Receipt", route: "/receipt-scanner", nativeOnly: true },
  { icon: "card", label: "Card", route: "/add-expense", nativeOnly: false },
  { icon: "cash", label: "Cash", route: "/add-expense", nativeOnly: false },
];

export function QuickAddFAB() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const router = useRouter();

  const [isExpanded, setIsExpanded] = React.useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const rotationAnim = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    const toValue = isExpanded ? 0 : 1;

    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(rotationAnim, {
        toValue: toValue * 45,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    setIsExpanded(!isExpanded);
  };

  const handlePress = (route: string, nativeOnly?: boolean) => {
    if (nativeOnly && Platform.OS === "web") {
      Alert.alert("Not Available", "Receipt scanning is available in the mobile app.");
      return;
    }
    setIsExpanded(false);
    scaleAnim.setValue(0);
    rotationAnim.setValue(0);
    router.push(route as never);
  };

  const rotation = rotationAnim.interpolate({
    inputRange: [0, 45],
    outputRange: ["0deg", "45deg"],
  });

  return (
    <View style={styles.container} pointerEvents="box-none">
      {/* Secondary buttons */}
      {SECONDARY_BUTTONS.map((button, index) => {
        const translateY = scaleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60 - index * 70],
        });

        const opacity = scaleAnim.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 0.5, 1],
        });

        return (
          <Animated.View
            key={button.icon}
            style={[
              styles.secondaryButton,
              {
                transform: [{ translateY }],
                opacity,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => handlePress(button.route, button.nativeOnly)}
              style={[
                styles.button,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.primary,
                },
              ]}
              activeOpacity={0.7}
            >
              <Ionicons
                name={button.icon as any}
                size={24}
                color={colors.primary}
              />
            </TouchableOpacity>
            <Text style={[styles.label, { color: colors.textPrimary }]}>
              {button.label}
            </Text>
          </Animated.View>
        );
      })}

      {/* Main button */}
      <TouchableOpacity
        onPress={toggleExpand}
        style={[
          styles.mainButton,
          {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
          },
        ]}
        activeOpacity={0.8}
      >
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [{ rotate: rotation }],
            },
          ]}
        >
          <Ionicons name="add" size={32} color="white" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 80,
    right: 20,
    alignItems: "center",
  },
  mainButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButton: {
    alignItems: "center",
    marginBottom: 16,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default QuickAddFAB;
````

## File: components/ReceiptScanner.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { getVisionApiKey } from "@/services/secrets";
import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Animated,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ─── CONFIG ─────────────────────────────────────────────────────────────────
// The API key will be provided by the user via Settings and accessed from app preferences.
// If no key is set, the scanner will operate in demo mode.
//  // removed

interface ScannedReceipt {
  items: string[];
  total: number;
  date: string;
  vendor?: string;
  rawText?: string;
}

// ─── Google Cloud Vision API ──────────────────────────────────────────────────
async function callVisionAPI(
  base64Image: string,
  apiKey: string,
): Promise<string> {
  const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
  const body = {
    requests: [
      {
        image: { content: base64Image },
        features: [{ type: "TEXT_DETECTION", maxResults: 1 }],
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Vision API error: ${response.status} ${err}`);
  }

  const json = await response.json();
  const text =
    json.responses?.[0]?.fullTextAnnotation?.text ||
    json.responses?.[0]?.textAnnotations?.[0]?.description ||
    "";
  return text;
}

// ─── Smart Receipt Text Parser ────────────────────────────────────────────────
function parseReceiptText(text: string): ScannedReceipt {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  // --- Extract Total ---
  // Look for lines containing "total", "amount", "sum", "due", "grand" near a dollar amount
  const totalPatterns = [
    /(?:grand\s+)?total[:\s]*\$?\s*(\d+[.,]\d{2})/i,
    /amount\s+due[:\s]*\$?\s*(\d+[.,]\d{2})/i,
    /amount[:\s]*\$?\s*(\d+[.,]\d{2})/i,
    /balance\s+due[:\s]*\$?\s*(\d+[.,]\d{2})/i,
    /subtotal[:\s]*\$?\s*(\d+[.,]\d{2})/i,
    /\btotal\b.*?\$?\s*(\d+[.,]\d{2})/i,
    /\$\s*(\d+[.,]\d{2})/,
  ];

  let total = 0;
  for (const pattern of totalPatterns) {
    const match = text.match(pattern);
    if (match) {
      total = parseFloat(match[1].replace(",", "."));
      break;
    }
  }

  // If no match found, look for the largest dollar amount on the receipt
  if (total === 0) {
    const allAmounts = [...text.matchAll(/\$?\s*(\d+[.,]\d{2})/g)]
      .map((m) => parseFloat(m[1].replace(",", ".")))
      .filter((n) => n > 0);
    if (allAmounts.length > 0) {
      total = Math.max(...allAmounts);
    }
  }

  // --- Extract Vendor (usually first non-empty line or two) ---
  const vendor = lines.slice(0, 2).join(" ").trim() || "Scanned Receipt";

  // --- Extract Date ---
  const datePatterns = [
    /(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/,
    /(\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2})/,
    /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{1,2},?\s+\d{4}/i,
  ];
  let date = new Date().toISOString();
  for (const pattern of datePatterns) {
    const match = text.match(pattern);
    if (match) {
      const parsed = new Date(match[0]);
      if (!isNaN(parsed.getTime())) {
        date = parsed.toISOString();
        break;
      }
    }
  }

  // --- Extract Line Items ---
  // Look for lines with a price at the end: "Coffee $2.50"
  const itemLines = lines.filter(
    (line) =>
      /\$?\s*\d+[.,]\d{2}/.test(line) &&
      !/total|subtotal|tax|tip|discount|amount|balance|due|change|cash|card/i.test(
        line,
      ),
  );
  const items = itemLines
    .slice(0, 8)
    .map((l) => l.replace(/\$?\s*\d+[.,]\d{2}/, "").trim())
    .filter(Boolean);

  return {
    vendor: vendor.slice(0, 40),
    total,
    date,
    items: items.length > 0 ? items : lines.slice(2, 5),
    rawText: text,
  };
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function ReceiptScanner() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { prefs } = useApp();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanning, setScanning] = useState(false);
  const [scannedReceipt, setScannedReceipt] = useState<ScannedReceipt | null>(
    null,
  );
  const [showPreview, setShowPreview] = useState(false);
  const [editTotal, setEditTotal] = useState("");
  const [editVendor, setEditVendor] = useState("");
  const [scanStatus, setScanStatus] = useState("");

  const cameraRef = useRef<CameraView>(null);
  const scanLineAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // Animate scanning line
  useEffect(() => {
    if (scanning) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scanLineAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(scanLineAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      scanLineAnim.stopAnimation();
      pulseAnim.stopAnimation();
    }
  }, [pulseAnim, scanLineAnim, scanning]);

  const handlePermission = async () => {
    if (!permission?.granted) {
      const result = await requestPermission();
      if (!result.granted) {
        Alert.alert(
          "Permission Denied",
          "Camera access is required to scan receipts.",
        );
      }
    }
  };

  const handleScan = async () => {
    if (!cameraRef.current) return;
    setScanning(true);
    setScanStatus("Capturing image...");
    try {
      // Step 1: Take picture
      const photo = await cameraRef.current.takePictureAsync({
        base64: true,
        quality: 0.7,
      });
      if (!photo?.base64) throw new Error("No image data captured.");

      // Step 2: Call AI
      setScanStatus("Analyzing with AI...");
      const apiKey =
        (await getVisionApiKey()) || prefs.googleVisionApiKey || "";
      const hasRealKey = apiKey.length > 0;

      let receipt: ScannedReceipt;
      if (hasRealKey) {
        const rawText = await callVisionAPI(photo.base64, apiKey);
        if (!rawText)
          throw new Error("No text found on the receipt. Try better lighting.");
        setScanStatus("Parsing receipt data...");
        receipt = parseReceiptText(rawText);
      } else {
        // Demo mode — simulates what the AI would return
        await new Promise((r) => setTimeout(r, 2000));
        setScanStatus("Parsing receipt data...");
        receipt = {
          vendor: "Demo Market",
          date: new Date().toISOString(),
          items: ["Coffee x2", "Sandwich", "Water"],
          total: 18.75,
          rawText:
            "[Add your Google Vision API key to enable real OCR scanning]",
        };
      }

      setScannedReceipt(receipt);
      setEditTotal(receipt.total > 0 ? receipt.total.toFixed(2) : "");
      setEditVendor(receipt.vendor || "");
      setShowPreview(true);
    } catch (error: any) {
      Alert.alert(
        "Scan Failed",
        error.message || "Could not scan receipt. Please try again.",
      );
    } finally {
      setScanning(false);
      setScanStatus("");
    }
  };

  const handleConfirm = () => {
    if (!scannedReceipt) return;
    const finalAmount = parseFloat(editTotal);
    if (isNaN(finalAmount) || finalAmount <= 0) {
      Alert.alert(
        "Invalid Amount",
        "Please enter a valid amount before saving.",
      );
      return;
    }
    setShowPreview(false);
    setScannedReceipt(null);
    router.replace({
      pathname: "/add-expense",
      params: {
        scannedTitle: editVendor || "Receipt",
        scannedAmount: finalAmount.toString(),
        scannedDate: scannedReceipt.date,
        scannedNote: scannedReceipt.items.join(", "),
      },
    });
  };

  const scanLineTranslate = scanLineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-180, 180],
  });

  if (!permission?.granted) {
    return <PermissionPlaceholder colors={colors} onPress={handlePermission} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <LinearGradient
        colors={[colors.primary, colors.background]}
        style={styles.container}
      >
        {/* Top bar */}
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.topBarBtn}
          >
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>Scan Receipt</Text>
          <View style={{ width: 44 }} />
        </View>

        <CameraView ref={cameraRef} facing="back" style={styles.camera}>
          {/* Dark overlay with cutout */}
          <View style={styles.overlayTop} />
          <View style={styles.overlayRow}>
            <View style={styles.overlaySide} />
            {/* Scanner frame */}
            <Animated.View
              style={[
                styles.frame,
                { transform: [{ scale: scanning ? pulseAnim : 1 }] },
              ]}
            >
              {/* Corner brackets */}
              {[
                { top: 0, left: 0, borderTopWidth: 3, borderLeftWidth: 3 },
                { top: 0, right: 0, borderTopWidth: 3, borderRightWidth: 3 },
                {
                  bottom: 0,
                  left: 0,
                  borderBottomWidth: 3,
                  borderLeftWidth: 3,
                },
                {
                  bottom: 0,
                  right: 0,
                  borderBottomWidth: 3,
                  borderRightWidth: 3,
                },
              ].map((s, i) => (
                <View
                  key={i}
                  style={[styles.corner, s, { borderColor: colors.primary }]}
                />
              ))}

              {/* Scan line */}
              {scanning && (
                <Animated.View
                  style={[
                    styles.scanLine,
                    {
                      backgroundColor: colors.primary + "AA",
                      transform: [{ translateY: scanLineTranslate }],
                    },
                  ]}
                />
              )}
            </Animated.View>
            <View style={styles.overlaySide} />
          </View>
          <View style={styles.overlayBottom} />

          {/* Hint text */}
          <View style={styles.hintContainer}>
            <Text style={styles.hintText}>
              {scanning ? scanStatus : "Align receipt within the frame"}
            </Text>
          </View>
        </CameraView>

        {/* Bottom Controls */}
        <View style={styles.controlsContainer}>
          <TouchableOpacity
            onPress={handleScan}
            disabled={scanning}
            style={[
              styles.scanButton,
              { backgroundColor: colors.primary, opacity: scanning ? 0.6 : 1 },
            ]}
          >
            {scanning ? (
              <ActivityIndicator color="white" />
            ) : (
              <>
                <Ionicons name="scan" size={22} color="white" />
                <Text style={styles.scanButtonText}>Scan Receipt</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* ─── Receipt Preview Modal ─── */}
      <Modal
        visible={showPreview}
        transparent
        animationType="slide"
        onRequestClose={() => setShowPreview(false)}
      >
        <View style={[styles.modal, { backgroundColor: colors.background }]}>
          <View
            style={[styles.modalHeader, { borderBottomColor: colors.border }]}
          >
            <TouchableOpacity onPress={() => setShowPreview(false)}>
              <Ionicons name="close" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>
              Review Scan
            </Text>
            <View style={{ width: 24 }} />
          </View>

          <ScrollView
            style={styles.modalContent}
            contentContainerStyle={{ gap: 16 }}
          >
            {/* AI Badge */}
            {scannedReceipt?.rawText?.includes("YOUR_GOOGLE") ? (
              <View
                style={[
                  styles.demoBadge,
                  { backgroundColor: colors.warningLight },
                ]}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={16}
                  color={colors.warning}
                />
                <Text style={[styles.demoBadgeText, { color: colors.warning }]}>
                  Demo mode — Add your API key for real OCR scanning
                </Text>
              </View>
            ) : (
              <View
                style={[
                  styles.aiBadge,
                  { backgroundColor: colors.primary + "18" },
                ]}
              >
                <Ionicons name="sparkles" size={14} color={colors.primary} />
                <Text style={[styles.aiBadgeText, { color: colors.primary }]}>
                  AI-extracted data — review before saving
                </Text>
              </View>
            )}

            {/* Editable Vendor */}
            <View>
              <Text
                style={[styles.fieldLabel, { color: colors.textSecondary }]}
              >
                Vendor / Store Name
              </Text>
              <TextInput
                value={editVendor}
                onChangeText={setEditVendor}
                style={[
                  styles.fieldInput,
                  {
                    color: colors.textPrimary,
                    backgroundColor: colors.inputBg,
                    borderColor: colors.border,
                  },
                ]}
                placeholder="Enter vendor name"
                placeholderTextColor={colors.textTertiary}
              />
            </View>

            {/* Editable Total */}
            <View>
              <Text
                style={[styles.fieldLabel, { color: colors.textSecondary }]}
              >
                Total Amount
              </Text>
              <View
                style={[
                  styles.amountRow,
                  {
                    backgroundColor: colors.inputBg,
                    borderColor: colors.border,
                  },
                ]}
              >
                <Text style={[styles.currencySign, { color: colors.primary }]}>
                  $
                </Text>
                <TextInput
                  value={editTotal}
                  onChangeText={setEditTotal}
                  keyboardType="decimal-pad"
                  style={[styles.amountInput, { color: colors.textPrimary }]}
                  placeholder="0.00"
                  placeholderTextColor={colors.textTertiary}
                />
              </View>
            </View>

            {/* Date */}
            <View>
              <Text
                style={[styles.fieldLabel, { color: colors.textSecondary }]}
              >
                Date
              </Text>
              <View
                style={[
                  styles.dateRow,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
              >
                <Ionicons
                  name="calendar-outline"
                  size={16}
                  color={colors.textSecondary}
                />
                <Text style={[styles.dateText, { color: colors.textPrimary }]}>
                  {scannedReceipt
                    ? new Date(scannedReceipt.date).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" },
                      )
                    : ""}
                </Text>
              </View>
            </View>

            {/* Items */}
            {scannedReceipt?.items && scannedReceipt.items.length > 0 && (
              <View>
                <Text
                  style={[styles.fieldLabel, { color: colors.textSecondary }]}
                >
                  Detected Items
                </Text>
                <View
                  style={[
                    styles.itemsList,
                    {
                      backgroundColor: colors.card,
                      borderColor: colors.border,
                    },
                  ]}
                >
                  {scannedReceipt.items.map((item, i) => (
                    <View
                      key={i}
                      style={[
                        styles.itemRow,
                        i > 0 && {
                          borderTopColor: colors.border,
                          borderTopWidth: 1,
                        },
                      ]}
                    >
                      <Ionicons
                        name="checkmark-circle"
                        size={14}
                        color={colors.success}
                      />
                      <Text
                        style={[styles.itemText, { color: colors.textPrimary }]}
                      >
                        {item}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </ScrollView>

          {/* Action Buttons */}
          <View
            style={[styles.modalActions, { borderTopColor: colors.border }]}
          >
            <TouchableOpacity
              onPress={() => setShowPreview(false)}
              style={[
                styles.actionButton,
                { backgroundColor: colors.inputBg, borderColor: colors.border },
              ]}
            >
              <Ionicons
                name="camera-reverse-outline"
                size={16}
                color={colors.textPrimary}
              />
              <Text
                style={[styles.actionButtonText, { color: colors.textPrimary }]}
              >
                Retake
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleConfirm}
              style={[styles.actionButton, { backgroundColor: colors.primary }]}
            >
              <Ionicons name="checkmark" size={16} color="white" />
              <Text style={[styles.actionButtonText, { color: "white" }]}>
                Save Expense
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function PermissionPlaceholder({
  colors,
  onPress,
}: {
  colors: any;
  onPress: () => void;
}) {
  return (
    <View
      style={[
        styles.placeholderContainer,
        { backgroundColor: colors.background },
      ]}
    >
      <View
        style={[
          styles.placeholderBox,
          { backgroundColor: colors.primary + "20" },
        ]}
      >
        <Ionicons name="camera" size={64} color={colors.primary} />
      </View>
      <Text style={[styles.placeholderTitle, { color: colors.textPrimary }]}>
        Camera Access Required
      </Text>
      <Text style={[styles.placeholderDesc, { color: colors.textSecondary }]}>
        We need your camera to scan receipts and automatically extract
        transaction details using AI.
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.permissionButton, { backgroundColor: colors.primary }]}
      >
        <Ionicons name="camera-outline" size={18} color="white" />
        <Text style={styles.permissionButtonText}>Enable Camera</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ReceiptScanner;

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    zIndex: 10,
  },
  topBarBtn: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  topBarTitle: { color: "white", fontSize: 17, fontWeight: "700" },
  camera: { flex: 1 },
  overlayTop: { backgroundColor: "rgba(0,0,0,0.55)", height: 80 },
  overlayRow: { flexDirection: "row" },
  overlaySide: { flex: 1, backgroundColor: "rgba(0,0,0,0.55)" },
  overlayBottom: { backgroundColor: "rgba(0,0,0,0.55)", flex: 1 },
  frame: {
    width: 270,
    height: 380,
    overflow: "hidden",
    position: "relative",
  },
  corner: {
    position: "absolute",
    width: 24,
    height: 24,
    borderColor: "white",
  },
  scanLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 2,
    borderRadius: 1,
  },
  hintContainer: {
    position: "absolute",
    bottom: 120,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  hintText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  controlsContainer: {
    backgroundColor: "rgba(0,0,0,0.85)",
    paddingVertical: 24,
    paddingHorizontal: Theme.spacing.lg,
  },
  scanButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: Theme.radius.md,
    gap: 10,
  },
  scanButtonText: { color: "white", fontSize: 17, fontWeight: "700" },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    gap: 12,
  },
  placeholderBox: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  placeholderTitle: { fontSize: 22, fontWeight: "800", textAlign: "center" },
  placeholderDesc: { fontSize: 15, textAlign: "center", lineHeight: 22 },
  permissionButton: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: Theme.radius.md,
    marginTop: 8,
  },
  permissionButtonText: { color: "white", fontSize: 16, fontWeight: "700" },
  modal: { flex: 1 },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  modalTitle: { fontSize: 18, fontWeight: "700" },
  modalContent: { flex: 1, paddingHorizontal: 20, paddingVertical: 16 },
  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: Theme.radius.md,
  },
  aiBadgeText: { fontSize: 13, fontWeight: "600", flex: 1 },
  demoBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: Theme.radius.md,
  },
  demoBadgeText: { fontSize: 12, fontWeight: "500", flex: 1, lineHeight: 18 },
  fieldLabel: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  fieldInput: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: "600",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    height: 56,
  },
  currencySign: { fontSize: 24, fontWeight: "800", marginRight: 4 },
  amountInput: { flex: 1, fontSize: 28, fontWeight: "800" },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  dateText: { fontSize: 15, fontWeight: "600" },
  itemsList: {
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    overflow: "hidden",
  },
  itemRow: { flexDirection: "row", alignItems: "center", gap: 8, padding: 12 },
  itemText: { fontSize: 14, fontWeight: "500", flex: 1 },
  modalActions: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 14,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    borderColor: "transparent",
  },
  actionButtonText: { fontSize: 15, fontWeight: "700" },
});
````

## File: components/SafeTodayTile.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  safeToSpend: number;
  daysRemaining: number;
  currency: string;
  spendPercentage: number;
};

/** Compact companion tile for the dashboard duo row. */
export function SafeTodayTile({
  safeToSpend,
  daysRemaining,
  currency,
  spendPercentage,
}: Props) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const tone =
    safeToSpend >= 75 ? colors.success : safeToSpend >= 25 ? colors.warning : colors.danger;

  return (
    <View
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
      accessibilityLabel={`Safe to spend today ${formatCurrency(safeToSpend, currency)}`}
    >
      <View style={[styles.icon, { backgroundColor: tone + "22" }]}>
        <Ionicons name="sunny-outline" size={18} color={tone} />
      </View>
      <Text style={[styles.label, { color: colors.textSecondary }]}>Safe today</Text>
      <Text style={[styles.amount, { color: tone }]} numberOfLines={1}>
        {formatCurrency(safeToSpend, currency)}
      </Text>
      <Text style={[styles.meta, { color: colors.textTertiary }]}>
        {daysRemaining}d left · {Math.round(spendPercentage)}% used
      </Text>
      <View style={[styles.track, { backgroundColor: colors.inputBg }]}>
        <View
          style={[
            styles.fill,
            { width: `${Math.min(100, spendPercentage)}%`, backgroundColor: tone },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.md,
    gap: 6,
    minHeight: 148,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: Theme.radius.sm,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  label: { fontSize: Theme.fontSize.xs, fontWeight: Theme.fontWeight.semiBold },
  amount: { fontSize: Theme.fontSize.xl, fontWeight: Theme.fontWeight.extraBold },
  meta: { fontSize: Theme.fontSize.xs, marginBottom: 4 },
  track: { height: 6, borderRadius: 3, overflow: "hidden", marginTop: 8 },
  fill: { height: "100%", borderRadius: 3 },
});
````

## File: components/SafeToSpendCard.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency } from "@/utils/formatters";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

interface SafeToSpendCardProps {
  income: number;
  totalExpenses: number;
  totalSaved: number;
  safeToSpend: number;
  daysRemaining: number;
  currency: string;
}

export function SafeToSpendCard({
  income,
  totalExpenses,
  totalSaved,
  safeToSpend,
  daysRemaining,
  currency,
}: SafeToSpendCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const scaleAnim = React.useRef(new Animated.Value(0.96)).current;
  const burnRate = totalExpenses / Math.max(1, new Date().getDate());
  const spendPercentage = income > 0 ? Math.min((totalExpenses / income) * 100, 100) : 0;
  const status = getSpendStatus(safeToSpend, colors);

  React.useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 8,
      tension: 42,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <View style={styles.header}>
        <View>
          <Text style={[styles.eyebrow, { color: colors.textSecondary }]}>Safe to Spend Today</Text>
          <Text style={[styles.amount, { color: status.color }]}>
            {formatCurrency(safeToSpend, currency)}
          </Text>
        </View>
        <View style={[styles.badge, { backgroundColor: status.color + "20" }]}>
          <Ionicons name={status.icon} size={14} color={status.color} />
          <Text style={[styles.badgeText, { color: status.color }]}>{status.label}</Text>
        </View>
      </View>

      <Text style={[styles.description, { color: colors.textSecondary }]}>
        Based on monthly income, spending so far, saved cash, and {daysRemaining} days left.
      </Text>

      <View style={styles.breakdown}>
        <BreakdownItem label="Income" value={formatCurrency(income, currency)} color={colors.success} colors={colors} />
        <BreakdownItem label="Spent" value={formatCurrency(totalExpenses, currency)} color={colors.danger} colors={colors} />
        <BreakdownItem label="Saved" value={formatCurrency(totalSaved, currency)} color={colors.primary} colors={colors} />
      </View>

      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { backgroundColor: colors.inputBg }]}>
          <Animated.View
            style={[styles.progressFill, { backgroundColor: status.color, width: `${spendPercentage}%` }]}
          />
        </View>
        <View style={styles.progressMeta}>
          <Text style={[styles.progressLabel, { color: colors.textSecondary }]}>
            {Math.round(spendPercentage)}% of income spent
          </Text>
          <Text style={[styles.progressLabel, { color: colors.textSecondary }]}>
            {formatCurrency(burnRate, currency)}/day
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

function getSpendStatus(safeToSpend: number, colors: typeof Colors.light) {
  if (safeToSpend >= 75) {
    return { label: "Healthy", color: colors.success, icon: "checkmark-circle" as const };
  }
  if (safeToSpend >= 25) {
    return { label: "Watch", color: colors.warning, icon: "alert-circle" as const };
  }
  return { label: "Tight", color: colors.danger, icon: "warning" as const };
}

function BreakdownItem({
  label,
  value,
  color,
  colors,
}: {
  label: string;
  value: string;
  color: string;
  colors: typeof Colors.light;
}) {
  return (
    <View style={styles.breakdownItem}>
      <View style={styles.breakdownLabel}>
        <View style={[styles.dot, { backgroundColor: color }]} />
        <Text style={[styles.breakdownLabelText, { color: colors.textSecondary }]}>{label}</Text>
      </View>
      <Text style={[styles.breakdownValue, { color: colors.textPrimary }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.lg,
    marginHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  eyebrow: { fontSize: 13, fontWeight: "700", marginBottom: 6 },
  amount: { fontSize: 38, fontWeight: "800" },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 18,
    gap: 4,
  },
  badgeText: { fontSize: 12, fontWeight: "800" },
  description: { fontSize: 13, lineHeight: 19, marginTop: 8, marginBottom: 18 },
  breakdown: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },
  breakdownItem: { flex: 1, minWidth: 0 },
  breakdownLabel: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  breakdownLabelText: { fontSize: 11, fontWeight: "600" },
  breakdownValue: { fontSize: 13, fontWeight: "800" },
  progressContainer: { gap: 8 },
  progressBar: { height: 8, borderRadius: 4, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 4 },
  progressMeta: { flexDirection: "row", justifyContent: "space-between", gap: 12 },
  progressLabel: { fontSize: 12, fontWeight: "600" },
});

export default SafeToSpendCard;
````

## File: components/SavingGoalCard.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { SavingGoal, useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency, getDaysRemaining } from "@/utils/formatters";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProgressBar } from "./ProgressBar";

interface SavingGoalCardProps {
  goal: SavingGoal;
  onPress?: () => void;
}

export function SavingGoalCard({ goal, onPress }: SavingGoalCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { prefs } = useApp();
  const progress =
    goal.targetAmount > 0
      ? Math.min(1, goal.currentAmount / goal.targetAmount)
      : 0;
  const daysLeft = getDaysRemaining(goal.deadline);
  const pct = Math.round(progress * 100);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.cardBorder },
        Theme.shadow.sm,
      ]}
    >
      <View style={[styles.dot, { backgroundColor: goal.color }]} />
      <Text
        style={[styles.title, { color: colors.textPrimary }]}
        numberOfLines={1}
      >
        {goal.title}
      </Text>
      <Text style={[styles.amount, { color: goal.color }]}>
        {formatCurrency(goal.currentAmount, prefs.currency)}
      </Text>
      <Text style={[styles.target, { color: colors.textSecondary }]}>
        of {formatCurrency(goal.targetAmount, prefs.currency)}
      </Text>
      <View style={styles.barWrap}>
        <ProgressBar
          progress={progress}
          color={goal.color}
          height={6}
          backgroundColor={colors.border}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={[styles.pct, { color: goal.color }]}>{pct}%</Text>
        <Text style={[styles.days, { color: colors.textTertiary }]}>
          {daysLeft > 0 ? `${daysLeft}d left` : "🎉 Done!"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Theme.radius.lg,
    padding: 16,
    borderWidth: 1,
    width: 175,
    gap: 3,
  },
  dot: { width: 10, height: 10, borderRadius: 5, marginBottom: 4 },
  title: { fontSize: 14, fontWeight: "600", marginBottom: 2 },
  amount: { fontSize: 22, fontWeight: "800", letterSpacing: -0.5 },
  target: { fontSize: 11, marginBottom: 10 },
  barWrap: { marginVertical: 4 },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  pct: { fontSize: 12, fontWeight: "700" },
  days: { fontSize: 11 },
});
````

## File: components/SpendingForecast.tsx
````typescript
import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { Expense } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency } from "@/utils/formatters";
import React, { useMemo } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { ForecastChart, ForecastPoint } from "./ForecastChart";

interface SpendingForecastProps {
  expenses: Expense[];
  income: number;
  currency: string;
}

export function SpendingForecast({ expenses, income, currency }: SpendingForecastProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { width } = useWindowDimensions();
  const chartWidth = width - Theme.spacing.md * 4;

  const forecast = useMemo(() => buildForecast(expenses, income), [expenses, income]);

  return (
    <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Spending Forecast</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Projected month-end burn</Text>
        </View>
        <Text style={[styles.projected, { color: forecast.projectedTotal > income ? colors.danger : colors.success }]}>
          {formatCurrency(forecast.projectedTotal, currency)}
        </Text>
      </View>

      <ForecastChart data={forecast.points} width={chartWidth} colors={colors} />

      <View style={styles.stats}>
        <Stat label="Average/day" value={formatCurrency(forecast.averageDaily, currency)} colors={colors} />
        <Stat label="Income buffer" value={formatCurrency(Math.max(0, income - forecast.projectedTotal), currency)} colors={colors} />
      </View>
    </View>
  );
}

function buildForecast(expenses: Expense[], income: number) {
  const now = new Date();
  const currentDay = Math.max(1, now.getDate());
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthExpenses = expenses.filter((expense) => new Date(expense.date) >= monthStart);
  const spentSoFar = monthExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const averageDaily = spentSoFar / currentDay;
  const projectedTotal = averageDaily * daysInMonth;

  const points: ForecastPoint[] = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const date = new Date(now.getFullYear(), now.getMonth(), day);
    const actualSpend = monthExpenses
      .filter((expense) => {
        const expenseDate = new Date(expense.date);
        return expenseDate <= date;
      })
      .reduce((sum, expense) => sum + expense.amount, 0);

    return {
      timestamp: date.getTime(),
      value: day <= currentDay ? actualSpend : Math.min(income * 1.2, averageDaily * day),
    };
  });

  return {
    points: points.length > 1 ? points : [{ timestamp: now.getTime(), value: 0 }],
    averageDaily,
    projectedTotal,
  };
}

function Stat({ label, value, colors }: { label: string; value: string; colors: typeof Colors.light }) {
  return (
    <View style={[styles.statCard, { backgroundColor: colors.inputBg }]}>
      <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{label}</Text>
      <Text style={[styles.statValue, { color: colors.textPrimary }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    padding: Theme.spacing.lg,
    marginHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.lg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: "800" },
  subtitle: { fontSize: 12, fontWeight: "600", marginTop: 3 },
  projected: { fontSize: 16, fontWeight: "800" },
  stats: { flexDirection: "row", gap: Theme.spacing.md, marginTop: 16 },
  statCard: { flex: 1, borderRadius: Theme.radius.md, padding: Theme.spacing.md },
  statLabel: { fontSize: 11, fontWeight: "600", marginBottom: 4 },
  statValue: { fontSize: 14, fontWeight: "800" },
});

export default SpendingForecast;
````

## File: components/themed-text.tsx
````typescript
import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
````

## File: components/themed-view.tsx
````typescript
import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
````

## File: constants/Colors.ts
````typescript
export const Colors = {
  light: {
    primary: '#087E8B',
    primaryLight: '#16A6A8',
    primaryGradient: ['#0F2942', '#087E8B'] as string[],
    background: '#F2F7F7',
    surface: '#FFFFFF',
    card: '#FFFFFF',
    cardBorder: '#DFEAEB',
    success: '#14916D',
    successLight: 'rgba(20,145,109,0.12)',
    danger: '#E85D75',
    dangerLight: 'rgba(232,93,117,0.12)',
    warning: '#E59C24',
    warningLight: 'rgba(229,156,36,0.14)',
    textPrimary: '#102A43',
    textSecondary: '#627D98',
    textTertiary: '#9FB3C8',
    border: '#DFEAEB',
    tabBar: 'rgba(255,255,255,0.97)',
    tabBarBorder: '#DFEAEB',
    tabActive: '#087E8B',
    tabInactive: '#9FB3C8',
    inputBg: '#F6FAFA',
    inputBorder: '#D4E4E5',
    overlay: 'rgba(15,41,66,0.58)',
    modalBg: '#FFFFFF',
    separator: '#EDF3F3',
  },
  dark: {
    primary: '#36C5C9',
    primaryLight: '#70E0DD',
    primaryGradient: ['#102A43', '#087E8B'] as string[],
    background: '#091822',
    surface: '#0D222E',
    card: '#102A36',
    cardBorder: '#193B49',
    success: '#42D9A6',
    successLight: 'rgba(66,217,166,0.15)',
    danger: '#FF8295',
    dangerLight: 'rgba(255,130,149,0.15)',
    warning: '#FFC75F',
    warningLight: 'rgba(255,199,95,0.15)',
    textPrimary: '#EEF9F8',
    textSecondary: '#A4C3C5',
    textTertiary: '#607F85',
    border: '#193B49',
    tabBar: 'rgba(9,24,34,0.97)',
    tabBarBorder: '#193B49',
    tabActive: '#36C5C9',
    tabInactive: '#607F85',
    inputBg: '#0D222E',
    inputBorder: '#193B49',
    overlay: 'rgba(0,0,0,0.72)',
    modalBg: '#102A36',
    separator: '#16333E',
  },
};
````

## File: constants/Colors2.ts
````typescript
/**
 * Color Palette
 * Centralized palette for all color values used in charts, visualizations, and themes
 */

export const COLOR_PALETTE = {
  // Primary palette
  PRIMARY_PURPLE: "#6C3FEF",
  PRIMARY_BLUE: "#3C82FF",
  PRIMARY_RED: "#FF6B7A",
  PRIMARY_GREEN: "#34C47C",
  PRIMARY_AMBER: "#FFAD0D",
  PRIMARY_TEAL: "#4ECDC4",

  // Secondary palette
  SECONDARY_PURPLE: "#9B59B6",
  SECONDARY_BLUE: "#2980B9",
  SECONDARY_RED: "#E74C3C",
  SECONDARY_GREEN: "#27AE60",
  SECONDARY_TEAL: "#1ABC9C",

  // Neutral
  LIGHT_GRAY: "#F5F5F7",
  MEDIUM_GRAY: "#E8E6F0",
  DARK_GRAY: "#6B7280",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
} as const;

/**
 * Chart color array - for pie charts and multi-series visualizations
 * Exports a consistent color palette for data visualization
 */
export const CHART_COLORS = [
  COLOR_PALETTE.PRIMARY_PURPLE,
  COLOR_PALETTE.PRIMARY_GREEN,
  COLOR_PALETTE.PRIMARY_RED,
  COLOR_PALETTE.PRIMARY_AMBER,
  COLOR_PALETTE.PRIMARY_TEAL,
  COLOR_PALETTE.SECONDARY_PURPLE,
  COLOR_PALETTE.SECONDARY_BLUE,
  COLOR_PALETTE.SECONDARY_RED,
  COLOR_PALETTE.SECONDARY_GREEN,
  COLOR_PALETTE.SECONDARY_TEAL,
] as const;

/**
 * Category color mapping
 * Associates each expense category with a specific color
 */
export const CATEGORY_COLORS: Record<string, string> = {
  food: COLOR_PALETTE.PRIMARY_RED,
  transport: COLOR_PALETTE.PRIMARY_BLUE,
  entertainment: COLOR_PALETTE.PRIMARY_PURPLE,
  utilities: COLOR_PALETTE.PRIMARY_AMBER,
  health: COLOR_PALETTE.PRIMARY_GREEN,
  shopping: COLOR_PALETTE.PRIMARY_TEAL,
  other: COLOR_PALETTE.MEDIUM_GRAY,
} as const;
````

## File: constants/Magic.ts
````typescript
/**
 * Magic Numbers and Constants
 * Centralized location for all hardcoded numeric values used throughout the app
 */

// ────────────────────────────────────────────────────────────────────────────
// Time Constants (in milliseconds)
// ────────────────────────────────────────────────────────────────────────────
export const TIME_CONSTANTS = {
  MS_PER_DAY: 24 * 60 * 60 * 1000,
  MS_PER_HOUR: 60 * 60 * 1000,
  MS_PER_MINUTE: 60 * 1000,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Date/Period Constants
// ────────────────────────────────────────────────────────────────────────────
export const DATE_CONSTANTS = {
  DEFAULT_SAVING_MONTHS: 3,
  WEEKS_PER_MONTH: 4.33,
  LOOKBACK_DAYS: 6,
  COMPARISON_DAYS: {
    WEEK: 7,
    TWO_WEEKS: 14,
  },
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Budget Thresholds
// ────────────────────────────────────────────────────────────────────────────
export const BUDGET_THRESHOLDS = {
  WARNING_THRESHOLD: 0.8, // 80% of budget
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Animation/Timing
// ────────────────────────────────────────────────────────────────────────────
export const ANIMATION_TIMING = {
  TAB_SWITCH_DURATION: 60, // ms
  SPRING_DAMPING: 14,
  SPRING_STIFFNESS: 80,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Font Sizes
// ────────────────────────────────────────────────────────────────────────────
export const FONT_SIZES = {
  HEADLINE: 34,
  SUBTITLE: 24,
  TITLE: 20,
  BODY_LARGE: 17,
  BODY: 15,
  CAPTION: 14,
  LABEL: 13,
  SMALL: 12,
  EXTRA_SMALL: 11,
  TINY: 9,
  MICRO: 8,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Border Radius
// ────────────────────────────────────────────────────────────────────────────
export const BORDER_RADIUS = {
  ROUND_LARGE: 18,
  ROUND_MEDIUM: 15,
  ROUND_DEFAULT: 12,
  ROUND_SMALL: 8,
  ROUND_TINY: 6,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Spacing/Padding
// ────────────────────────────────────────────────────────────────────────────
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 20,
  XXL: 24,
  XXXL: 32,
  PAGE_PADDING: 36,
  HUGE: 40,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Dimensions
// ────────────────────────────────────────────────────────────────────────────
export const DIMENSIONS = {
  ICON_SIZE: 24,
  LARGE_ICON: 40,
  MEDIUM_ICON: 32,
  SMALL_ICON: 20,
  CHART_HEIGHT: 220,
  CARD_WIDTH: 140,
  PROGRESS_HEIGHT: 8,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Opacity Values
// ────────────────────────────────────────────────────────────────────────────
export const OPACITY = {
  DISABLED: 0.5,
  LIGHT: 0.12,
  VERY_LIGHT: 0.15,
  LIGHTER: 0.18,
  MILD: 0.2,
  SUBTLE: 0.25,
  MEDIUM_LIGHT: 0.35,
  HALF: 0.5,
  MEDIUM: 0.55,
  STRONG_MEDIUM: 0.65,
  STRONG: 0.7,
  STRONGER: 0.72,
  VERY_STRONG: 0.8,
  INTENSE: 0.85,
  NEAR_OPAQUE: 0.92,
  ALMOST_OPAQUE: 0.97,
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Storage Keys
// ────────────────────────────────────────────────────────────────────────────
export const STORAGE_KEYS = {
  EXPENSE_TRACKER_V1: "@extrack_v1",
} as const;
````

## File: constants/Theme.ts
````typescript
export const Theme = {
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 },
  radius: { sm: 10, md: 15, lg: 21, xl: 30, full: 9999 },
  fontSize: { xs: 11, sm: 13, md: 15, lg: 17, xl: 20, xxl: 24, xxxl: 32 },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
    extraBold: '800' as const,
  },
  shadow: {
    sm: {
      boxShadow: '0 3px 10px rgba(15, 41, 66, 0.06)',
      elevation: 2,
    },
    md: {
      boxShadow: '0 8px 20px rgba(15, 41, 66, 0.10)',
      elevation: 5,
    },
    lg: {
      boxShadow: '0 14px 32px rgba(15, 41, 66, 0.18)',
      elevation: 10,
    },
  },
};
````

## File: context/AppContext.tsx
````typescript
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchExchangeRates } from '@/utils/currency';
import { getBalance, getTotalExpenses } from '@/utils/calculations';
import {
  DisciplineState,
  EMPTY_DISCIPLINE,
  recomputeDiscipline,
} from '@/utils/disciplineStreak';
import { computeWeekSpend, writeWidgetSnapshot } from '@/services/widgetSnapshot';

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
  isTravelExpense?: boolean;
  originalAmount?: number;
  originalCurrency?: string;
  convertedAmount?: number;
  convertedCurrency?: string;
  exchangeRateAtPurchase?: number;
}

export interface Subscription {
  id: string;
  title: string;
  amount: number;
  category: string;
  period: 'monthly' | 'yearly';
  startDate: string;
  lastProcessedDate: string;
}

export interface Deposit {
  amount: number;
  date: string;
}

export interface SavingGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
  deposits: Deposit[];
}

interface Prefs {
  currency: string;
  haptics: boolean;
  budgetAlerts: boolean;
  dailyReminderEnabled: boolean;
  dailyReminderHour: number;
  dailyReminderMinute: number;
  showBalance: boolean;
  travelMode: boolean;
  travelCurrency: string;
  tripBudget: number;
  googleVisionApiKey?: string;
}

type PremiumPlan = 'free' | 'premium';

interface AppState {
  expenses: Expense[];
  subscriptions: Subscription[];
  savingGoals: SavingGoal[];
  income: number;
  streak: number;
  lastTrackedDate: string | null;
  discipline: DisciplineState;
  prefs: Prefs;
  categoryBudgets: Record<string, number>;
  exchangeRates: Record<string, number>;
  ratesUpdatedAt: string | null;
  premiumPlan: PremiumPlan;
}

interface AppContextType extends AppState {
  addExpense: (e: Omit<Expense, 'id'>) => void;
  editExpense: (id: string, updates: Partial<Expense>) => void;
  deleteExpense: (id: string) => void;
  addSubscription: (s: Omit<Subscription, 'id' | 'lastProcessedDate'>) => void;
  deleteSubscription: (id: string) => void;
  addSavingGoal: (g: Omit<SavingGoal, 'id' | 'currentAmount' | 'deposits'>) => void;
  depositToGoal: (goalId: string, amount: number) => void;
  deleteSavingGoal: (id: string) => void;
  setIncome: (income: number) => void;
  updatePref: <K extends keyof Prefs>(key: K, value: Prefs[K]) => void;
  setCategoryBudget: (categoryKey: string, amount: number) => void;
  clearFinancialData: () => void;
  refreshExchangeRates: () => Promise<void>;
  setTripBudget: (amount: number) => void;
  setPremiumPlan: (plan: PremiumPlan) => void;
  isPremium: boolean;
}

const AppContext = createContext<AppContextType | null>(null);
const STORAGE_KEY = '@extrack_v1';

const INITIAL: AppState = {
  expenses: [],
  subscriptions: [],
  savingGoals: [],
  income: 3000,
  streak: 0,
  lastTrackedDate: null,
  discipline: EMPTY_DISCIPLINE,
  prefs: { currency: 'USD', haptics: true, budgetAlerts: true, dailyReminderEnabled: false, dailyReminderHour: 20, dailyReminderMinute: 0, showBalance: true, travelMode: false, travelCurrency: 'EUR', tripBudget: 0, googleVisionApiKey: '' },
  categoryBudgets: {},
  exchangeRates: {},
  ratesUpdatedAt: null,
  premiumPlan: 'free',
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function normalizeState(value: unknown): AppState {
  const saved = isRecord(value) ? value : {};
  const prefs = isRecord(saved.prefs) ? saved.prefs : {};
  const categoryBudgets = isRecord(saved.categoryBudgets)
    ? Object.fromEntries(
        Object.entries(saved.categoryBudgets)
          .filter((entry): entry is [string, number] => typeof entry[1] === 'number' && Number.isFinite(entry[1]))
      )
    : INITIAL.categoryBudgets;

  return {
    ...INITIAL,
    income: asNumber(saved.income, INITIAL.income),
    streak: asNumber(saved.streak, INITIAL.streak),
    lastTrackedDate: typeof saved.lastTrackedDate === 'string' ? saved.lastTrackedDate : INITIAL.lastTrackedDate,
    discipline: (() => {
      const d = isRecord(saved.discipline) ? saved.discipline : {};
      return {
        loggingStreak: asNumber(d.loggingStreak, 0),
        longestLoggingStreak: asNumber(d.longestLoggingStreak, asNumber(saved.streak, 0)),
        budgetStreak: asNumber(d.budgetStreak, 0),
        longestBudgetStreak: asNumber(d.longestBudgetStreak, 0),
        dayHistory: isRecord(d.dayHistory) ? (d.dayHistory as DisciplineState['dayHistory']) : {},
        lastEvaluatedDate: typeof d.lastEvaluatedDate === 'string' ? d.lastEvaluatedDate : null,
      };
    })(),
    expenses: Array.isArray(saved.expenses)
      ? saved.expenses.filter(isRecord).map((expense, index): Expense => ({
          id: typeof expense.id === 'string' ? expense.id : `${Date.now()}-${index}`,
          title: typeof expense.title === 'string' ? expense.title : 'Untitled expense',
          amount: asNumber(expense.amount),
          category: typeof expense.category === 'string' ? expense.category : 'other',
          date: typeof expense.date === 'string' && !Number.isNaN(new Date(expense.date).getTime())
            ? expense.date
            : new Date().toISOString(),
          note: typeof expense.note === 'string' ? expense.note : undefined,
          isTravelExpense: typeof expense.isTravelExpense === 'boolean' ? expense.isTravelExpense : false,
          originalAmount: typeof expense.originalAmount === 'number' ? expense.originalAmount : undefined,
          originalCurrency: typeof expense.originalCurrency === 'string' ? expense.originalCurrency : undefined,
          convertedAmount: typeof expense.convertedAmount === 'number' ? expense.convertedAmount : undefined,
          convertedCurrency: typeof expense.convertedCurrency === 'string' ? expense.convertedCurrency : undefined,
          exchangeRateAtPurchase: typeof expense.exchangeRateAtPurchase === 'number' ? expense.exchangeRateAtPurchase : undefined,
        }))
      : INITIAL.expenses,
    subscriptions: Array.isArray(saved.subscriptions)
      ? saved.subscriptions.filter(isRecord).map((sub, index): Subscription => ({
          id: typeof sub.id === 'string' ? sub.id : `sub-${Date.now()}-${index}`,
          title: typeof sub.title === 'string' ? sub.title : 'Subscription',
          amount: asNumber(sub.amount),
          category: typeof sub.category === 'string' ? sub.category : 'other',
          period: sub.period === 'yearly' ? 'yearly' : 'monthly',
          startDate: typeof sub.startDate === 'string' ? sub.startDate : new Date().toISOString(),
          lastProcessedDate: typeof sub.lastProcessedDate === 'string' ? sub.lastProcessedDate : new Date().toISOString(),
        }))
      : INITIAL.subscriptions,
    savingGoals: Array.isArray(saved.savingGoals)
      ? saved.savingGoals.filter(isRecord).map((goal, index): SavingGoal => ({
          id: typeof goal.id === 'string' ? goal.id : `${Date.now()}-${index}`,
          title: typeof goal.title === 'string' ? goal.title : 'Savings goal',
          targetAmount: asNumber(goal.targetAmount),
          currentAmount: asNumber(goal.currentAmount),
          deadline: typeof goal.deadline === 'string' && !Number.isNaN(new Date(goal.deadline).getTime())
            ? goal.deadline
            : new Date().toISOString(),
          color: typeof goal.color === 'string' ? goal.color : '#6C3FEF',
          deposits: Array.isArray(goal.deposits)
            ? goal.deposits.filter(isRecord).map((deposit): Deposit => ({
                amount: asNumber(deposit.amount),
                date: typeof deposit.date === 'string' && !Number.isNaN(new Date(deposit.date).getTime())
                  ? deposit.date
                  : new Date().toISOString(),
              }))
            : [],
        }))
      : INITIAL.savingGoals,
      prefs: {
        currency: typeof prefs.currency === 'string' ? prefs.currency : INITIAL.prefs.currency,
        haptics: typeof prefs.haptics === 'boolean' ? prefs.haptics : INITIAL.prefs.haptics,
        budgetAlerts: typeof prefs.budgetAlerts === 'boolean' ? prefs.budgetAlerts : INITIAL.prefs.budgetAlerts,
        dailyReminderEnabled: typeof prefs.dailyReminderEnabled === 'boolean' ? prefs.dailyReminderEnabled : INITIAL.prefs.dailyReminderEnabled,
        dailyReminderHour: asNumber(prefs.dailyReminderHour, INITIAL.prefs.dailyReminderHour),
        dailyReminderMinute: asNumber(prefs.dailyReminderMinute, INITIAL.prefs.dailyReminderMinute),
        showBalance: typeof prefs.showBalance === 'boolean' ? prefs.showBalance : INITIAL.prefs.showBalance,
        travelMode: typeof prefs.travelMode === 'boolean' ? prefs.travelMode : INITIAL.prefs.travelMode,
        travelCurrency: typeof prefs.travelCurrency === 'string' ? prefs.travelCurrency : INITIAL.prefs.travelCurrency,
        tripBudget: asNumber(prefs.tripBudget, INITIAL.prefs.tripBudget),
        googleVisionApiKey: typeof prefs.googleVisionApiKey === 'string' ? prefs.googleVisionApiKey : INITIAL.prefs.googleVisionApiKey,
      },
      categoryBudgets,
      exchangeRates: isRecord(saved.exchangeRates) ? saved.exchangeRates as Record<string, number> : {},
      ratesUpdatedAt: typeof saved.ratesUpdatedAt === 'string' ? saved.ratesUpdatedAt : null,
      premiumPlan: saved.premiumPlan === 'premium' ? 'premium' : 'free',
    };
  }

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(INITIAL);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(raw => { if (raw) setState(normalizeState(JSON.parse(raw))); })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)).catch(() => {});
  }, [state, loaded]);

  useEffect(() => {
    if (!loaded) return;
    setState(p => {
      let newExpenses = [...p.expenses];
      let newSubs = [...p.subscriptions];
      let changed = false;
      
      newSubs = newSubs.map(sub => {
        let lastDate = new Date(sub.lastProcessedDate);
        let now = new Date();
        let subChanged = false;
        
        while (true) {
          let nextDate = new Date(lastDate);
          if (sub.period === 'monthly') nextDate.setMonth(nextDate.getMonth() + 1);
          else if (sub.period === 'yearly') nextDate.setFullYear(nextDate.getFullYear() + 1);
          
          if (nextDate <= now) {
            newExpenses.unshift({
              id: `${Date.now()}-${Math.random()}`,
              title: sub.title,
              amount: sub.amount,
              category: sub.category,
              date: nextDate.toISOString(),
              note: `Auto-generated ${sub.period} subscription`,
            });
            lastDate = nextDate;
            subChanged = true;
            changed = true;
          } else {
            break;
          }
        }
        
        if (subChanged) {
          return { ...sub, lastProcessedDate: lastDate.toISOString() };
        }
        return sub;
      });
      
      if (changed) {
        return { ...p, expenses: newExpenses, subscriptions: newSubs };
      }
      return p;
    });
  }, [loaded]);

  const bumpStreak = (prev: AppState): Partial<AppState> => {
    const today = new Date().toDateString();
    if (prev.lastTrackedDate === today) return {};
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    // Non-punitive: gap pauses current run (resets to 1) but longest lives in discipline.
    const streak = prev.lastTrackedDate === yesterday ? prev.streak + 1 : 1;
    return { streak, lastTrackedDate: today };
  };

  const withDisciplineAndWidget = (next: AppState): AppState => {
    const discipline = recomputeDiscipline(
      next.expenses,
      next.categoryBudgets,
      next.income,
      next.discipline,
    );
    const merged = { ...next, discipline };
    const totalExpenses = getTotalExpenses(merged.expenses);
    const balance = getBalance(merged.income, merged.expenses);
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const daysRemaining = Math.max(1, daysInMonth - now.getDate() + 1);
    const totalSaved = merged.savingGoals.reduce((s, g) => s + g.currentAmount, 0);
    const safeToSpend = Math.max(0, (merged.income - totalExpenses - totalSaved) / daysRemaining);

    void writeWidgetSnapshot({
      updatedAt: new Date().toISOString(),
      currency: merged.prefs.currency,
      spentThisWeek: computeWeekSpend(merged.expenses),
      safeToSpendToday: safeToSpend,
      balance,
      loggingStreak: Math.max(discipline.loggingStreak, merged.streak),
      showBalance: merged.prefs.showBalance,
    });

    return merged;
  };

  const addExpense = useCallback((e: Omit<Expense, 'id'>) => {
    setState(p => withDisciplineAndWidget({
      ...p,
      expenses: [{ ...e, id: `${Date.now()}` }, ...p.expenses],
      ...bumpStreak(p),
    }));
  }, []);

  const editExpense = useCallback((id: string, updates: Partial<Expense>) => {
    setState(p => withDisciplineAndWidget({
      ...p,
      expenses: p.expenses.map(e => e.id === id ? { ...e, ...updates } : e),
    }));
  }, []);

  const deleteExpense = useCallback((id: string) => {
    setState(p => withDisciplineAndWidget({
      ...p,
      expenses: p.expenses.filter(e => e.id !== id),
    }));
  }, []);

  const addSubscription = useCallback((s: Omit<Subscription, 'id' | 'lastProcessedDate'>) => {
    setState(p => ({ 
      ...p, 
      subscriptions: [{ ...s, id: `sub-${Date.now()}`, lastProcessedDate: s.startDate }, ...p.subscriptions] 
    }));
  }, []);

  const deleteSubscription = useCallback((id: string) => {
    setState(p => ({ ...p, subscriptions: p.subscriptions.filter(s => s.id !== id) }));
  }, []);

  const addSavingGoal = useCallback((g: Omit<SavingGoal, 'id' | 'currentAmount' | 'deposits'>) => {
    setState(p => ({ ...p, savingGoals: [{ ...g, id: `${Date.now()}`, currentAmount: 0, deposits: [] }, ...p.savingGoals] }));
  }, []);

  const depositToGoal = useCallback((goalId: string, amount: number) => {
    setState(p => ({
      ...p,
      savingGoals: p.savingGoals.map(g => g.id === goalId
        ? { ...g, currentAmount: g.currentAmount + amount, deposits: [...g.deposits, { amount, date: new Date().toISOString() }] }
        : g),
    }));
  }, []);

  const deleteSavingGoal = useCallback((id: string) => {
    setState(p => ({ ...p, savingGoals: p.savingGoals.filter(g => g.id !== id) }));
  }, []);

  const setIncome = useCallback((income: number) => {
    setState(p => withDisciplineAndWidget({ ...p, income }));
  }, []);

  const updatePref = useCallback(<K extends keyof Prefs>(key: K, value: Prefs[K]) => {
    setState(p => ({ ...p, prefs: { ...p.prefs, [key]: value } }));
  }, []);

  const setTripBudget = useCallback((amount: number) => {
    setState(p => ({ ...p, prefs: { ...p.prefs, tripBudget: Math.max(0, amount) } }));
  }, []);

  const setPremiumPlan = useCallback((plan: PremiumPlan) => {
    setState(p => ({ ...p, premiumPlan: plan }));
  }, []);

  const refreshExchangeRates = useCallback(async () => {
    try {
      setState(p => {
        const base = p.prefs.currency || 'USD';
        fetchExchangeRates(base).then(result => {
          setState(pp => ({ ...pp, exchangeRates: result.rates, ratesUpdatedAt: result.updatedAt }));
        }).catch(() => {});
        return p;
      });
    } catch {}
  }, []);

  // Auto-fetch rates when travel mode is enabled or currencies change
  useEffect(() => {
    if (!loaded) return;
    setState(p => {
      if (p.prefs.travelMode) {
        fetchExchangeRates(p.prefs.currency || 'USD')
          .then(result => setState(pp => ({ ...pp, exchangeRates: result.rates, ratesUpdatedAt: result.updatedAt })))
          .catch(() => {});
      }
      return p;
    });
  }, [loaded]);

  const setCategoryBudget = useCallback((categoryKey: string, amount: number) => {
    setState(p => withDisciplineAndWidget({
      ...p,
      categoryBudgets: { ...p.categoryBudgets, [categoryKey]: amount },
    }));
  }, []);

  const clearFinancialData = useCallback(() => {
    setState(p => withDisciplineAndWidget({
      ...p,
      expenses: [],
      subscriptions: [],
      savingGoals: [],
      categoryBudgets: {},
      streak: 0,
      lastTrackedDate: null,
      discipline: EMPTY_DISCIPLINE,
      exchangeRates: {},
      ratesUpdatedAt: null,
    }));
  }, []);

  if (!loaded) return (
    <View style={{ flex: 1, backgroundColor: '#0F0E1A', alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="#6C3FEF" />
    </View>
  );

  return (
    <AppContext.Provider value={{ ...state, isPremium: state.premiumPlan === 'premium', addExpense, editExpense, deleteExpense, addSubscription, deleteSubscription, addSavingGoal, depositToGoal, deleteSavingGoal, setIncome, updatePref, setCategoryBudget, clearFinancialData, refreshExchangeRates, setTripBudget, setPremiumPlan }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
````

## File: context/AuthContext.tsx
````typescript
/**
 * AuthContext — backed by expo-sqlite (real SQLite database on device)
 *
 * Database: auth.db
 * Tables:
 *   users    (id TEXT PK, username TEXT UNIQUE, password_hash TEXT, created_at TEXT)
 *   sessions (id INTEGER PK, user_id TEXT, username TEXT, created_at TEXT)
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { ActivityIndicator, View } from "react-native";
import {
    clearSession,
    findUserByUsername,
    getSession,
    initDb,
    insertUser,
    saveSession,
} from "./authDb";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  username: string;
  createdAt: string;
}

interface AuthState {
  currentUser: User | null;
  isLoading: boolean;
  hasCompletedOnboarding: boolean;
}

interface AuthContextType extends AuthState {
  login: (
    username: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    username: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  completeOnboarding: () => Promise<void>;
}

// ─── Password hashing (djb2 — suitable for local device storage) ─────────────
function hashPassword(password: string): string {
  let hash = 5381;
  for (let i = 0; i < password.length; i++) {
    hash = (hash * 33) ^ password.charCodeAt(i);
  }
  return (hash >>> 0).toString(16);
}

// ─── Context ──────────────────────────────────────────────────────────────────
const AuthContext = createContext<AuthContextType | null>(null);

const ONBOARDING_KEY = "@onboarding_completed";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    currentUser: null,
    isLoading: true,
    hasCompletedOnboarding: false,
  });

  // ── Boot: init DB and restore session ──────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        await initDb();
        const row = await getSession();
        const onboardingCompleted = await AsyncStorage.getItem(ONBOARDING_KEY);

        if (row) {
          setState({
            currentUser: {
              id: row.user_id,
              username: row.username,
              createdAt: row.created_at,
            },
            isLoading: false,
            hasCompletedOnboarding: onboardingCompleted === "true",
          });
        } else {
          setState({
            currentUser: null,
            isLoading: false,
            hasCompletedOnboarding: false,
          });
        }
      } catch (err) {
        console.error("[AuthContext] init error:", err);
        setState({
          currentUser: null,
          isLoading: false,
          hasCompletedOnboarding: false,
        });
      }
    })();
  }, []);

  // ── Register ──────────────────────────────────────────────────────────────
  const register = useCallback(
    async (
      username: string,
      password: string,
    ): Promise<{ success: boolean; error?: string }> => {
      const trimmed = username.trim().toLowerCase();

      if (trimmed.length < 3)
        return {
          success: false,
          error: "Username must be at least 3 characters.",
        };
      if (password.length < 6)
        return {
          success: false,
          error: "Password must be at least 6 characters.",
        };

      try {
        const existing = await findUserByUsername(trimmed);
        if (existing) {
          return {
            success: false,
            error: "Username already taken. Please choose another.",
          };
        }

        const id = `${Date.now()}`;
        const createdAt = new Date().toISOString();
        const passwordHash = hashPassword(password);

        await insertUser(id, trimmed, passwordHash, createdAt);
        await saveSession(id, trimmed, createdAt);
        await AsyncStorage.setItem(ONBOARDING_KEY, "false");

        setState({
          currentUser: { id, username: trimmed, createdAt },
          isLoading: false,
          hasCompletedOnboarding: false,
        });

        return { success: true };
      } catch (err: any) {
        console.error("[AuthContext] register error:", err);
        return {
          success: false,
          error: "Registration failed. Please try again.",
        };
      }
    },
    [],
  );

  // ── Login ─────────────────────────────────────────────────────────────────
  const login = useCallback(
    async (
      username: string,
      password: string,
    ): Promise<{ success: boolean; error?: string }> => {
      const trimmed = username.trim().toLowerCase();

      try {
        const user = await findUserByUsername(trimmed);

        if (!user) {
          return {
            success: false,
            error: "No account found with that username.",
          };
        }

        if (user.password_hash !== hashPassword(password)) {
          return {
            success: false,
            error: "Incorrect password. Please try again.",
          };
        }

        await saveSession(user.id, user.username, user.created_at);
        const onboardingCompleted = await AsyncStorage.getItem(ONBOARDING_KEY);

        setState({
          currentUser: {
            id: user.id,
            username: user.username,
            createdAt: user.created_at,
          },
          isLoading: false,
          hasCompletedOnboarding: onboardingCompleted === "true",
        });

        return { success: true };
      } catch (err: any) {
        console.error("[AuthContext] login error:", err);
        return { success: false, error: "Login failed. Please try again." };
      }
    },
    [],
  );

  // ── Logout ────────────────────────────────────────────────────────────────
  const logout = useCallback(async () => {
    try {
      await clearSession();
    } catch (err) {
      console.error("[AuthContext] logout error:", err);
    }
    setState({
      currentUser: null,
      isLoading: false,
      hasCompletedOnboarding: false,
    });
  }, []);

  // ── Complete Onboarding ───────────────────────────────────────────────────
  const completeOnboarding = useCallback(async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, "true");
      setState((prev) => ({ ...prev, hasCompletedOnboarding: true }));
    } catch (err) {
      console.error("[AuthContext] completeOnboarding error:", err);
    }
  }, []);

  // ── Loading screen ────────────────────────────────────────────────────────
  if (state.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0F0E1A",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#6C3FEF" />
      </View>
    );
  }

  return (
    <AuthContext.Provider
      value={{ ...state, login, register, logout, completeOnboarding }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
````

## File: context/authDb.native.ts
````typescript
/**
 * authDb.native.ts — SQLite implementation (iOS & Android)
 * Metro picks this file automatically on native platforms.
 *
 * Database file: auth.db (stored on device)
 * Tables:
 *   users    — registered accounts
 *   sessions — active login session
 */

import * as SQLite from "expo-sqlite";

export interface StoredSession {
  user_id: string;
  username: string;
  created_at: string;
}

export interface StoredUser {
  id: string;
  username: string;
  password_hash: string;
  created_at: string;
}

// ── Singleton DB connection ───────────────────────────────────────────────────
let _db: SQLite.SQLiteDatabase | null = null;

async function getDb(): Promise<SQLite.SQLiteDatabase> {
  if (!_db) _db = await SQLite.openDatabaseAsync("auth.db");
  return _db;
}

// ── Schema bootstrap ─────────────────────────────────────────────────────────
export async function initDb(): Promise<void> {
  const db = await getDb();
  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS users (
      id            TEXT PRIMARY KEY,
      username      TEXT NOT NULL UNIQUE COLLATE NOCASE,
      password_hash TEXT NOT NULL,
      created_at    TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sessions (
      id         INTEGER PRIMARY KEY,
      user_id    TEXT NOT NULL,
      username   TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
}

// ── Session ───────────────────────────────────────────────────────────────────
export async function getSession(): Promise<StoredSession | null> {
  const db = await getDb();
  return db.getFirstAsync<StoredSession>(
    "SELECT user_id, username, created_at FROM sessions LIMIT 1;",
  );
}

export async function saveSession(
  userId: string,
  username: string,
  createdAt: string,
): Promise<void> {
  const db = await getDb();
  await db.runAsync("DELETE FROM sessions;");
  await db.runAsync(
    "INSERT INTO sessions (user_id, username, created_at) VALUES (?, ?, ?);",
    [userId, username, createdAt],
  );
}

export async function clearSession(): Promise<void> {
  const db = await getDb();
  await db.runAsync("DELETE FROM sessions;");
}

// ── Users ─────────────────────────────────────────────────────────────────────
export async function findUserByUsername(
  username: string,
): Promise<StoredUser | null> {
  const db = await getDb();
  return db.getFirstAsync<StoredUser>(
    "SELECT id, username, password_hash, created_at FROM users WHERE username = ? COLLATE NOCASE;",
    [username],
  );
}

export async function insertUser(
  id: string,
  username: string,
  passwordHash: string,
  createdAt: string,
): Promise<void> {
  const db = await getDb();
  await db.runAsync(
    "INSERT INTO users (id, username, password_hash, created_at) VALUES (?, ?, ?, ?);",
    [id, username, passwordHash, createdAt],
  );
}
````

## File: context/authDb.ts
````typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = '@expense_tracker_auth_users_v1';
const SESSION_KEY = '@expense_tracker_auth_session_v1';

export interface StoredSession {
  user_id: string;
  username: string;
  created_at: string;
}

export interface StoredUser {
  id: string;
  username: string;
  password_hash: string;
  created_at: string;
}

async function getUsers(): Promise<StoredUser[]> {
  const raw = await AsyncStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

async function saveUsers(users: StoredUser[]): Promise<void> {
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export async function initDb(): Promise<void> {
  const existing = await AsyncStorage.getItem(USERS_KEY);
  if (!existing) await saveUsers([]);
}

export async function getSession(): Promise<StoredSession | null> {
  const raw = await AsyncStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

export async function saveSession(userId: string, username: string, createdAt: string): Promise<void> {
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify({ user_id: userId, username, created_at: createdAt }));
}

export async function clearSession(): Promise<void> {
  await AsyncStorage.removeItem(SESSION_KEY);
}

export async function findUserByUsername(username: string): Promise<StoredUser | null> {
  const users = await getUsers();
  return users.find(user => user.username.toLowerCase() === username.toLowerCase()) ?? null;
}

export async function insertUser(
  id: string,
  username: string,
  passwordHash: string,
  createdAt: string
): Promise<void> {
  const users = await getUsers();
  if (users.some(user => user.username.toLowerCase() === username.toLowerCase())) {
    throw new Error('Username already exists');
  }
  await saveUsers([...users, { id, username, password_hash: passwordHash, created_at: createdAt }]);
}
````

## File: context/SharedWalletContext.tsx
````typescript
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export type WalletRole = 'owner' | 'editor' | 'viewer';

export type WalletMember = {
  id: string;
  displayName: string;
  role: WalletRole;
};

export type SharedTransaction = {
  id: string;
  walletId: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  createdBy: string;
  /** Per-field versions for LWW conflict resolution */
  fieldUpdatedAt: {
    title: string;
    amount: string;
    category: string;
    note: string;
  };
  note?: string;
  /** Set when a remote edit won a field after local edit */
  editedElsewhere?: boolean;
};

export type SharedWallet = {
  id: string;
  name: string;
  members: WalletMember[];
  /** Personal expenses stay in AppContext; shared txs live here only */
  transactions: SharedTransaction[];
};

type SharedWalletContextType = {
  wallet: SharedWallet | null;
  cloudEnabled: boolean;
  createWallet: (name: string, ownerName: string) => void;
  addMember: (displayName: string, role: WalletRole) => void;
  addSharedTransaction: (
    tx: Omit<SharedTransaction, 'id' | 'walletId' | 'fieldUpdatedAt' | 'editedElsewhere'>,
  ) => void;
  updateSharedTransaction: (
    id: string,
    updates: Partial<Pick<SharedTransaction, 'title' | 'amount' | 'category' | 'note'>>,
  ) => void;
  clearEditedElsewhere: (id: string) => void;
};

const STORAGE_KEY = '@extrack_shared_wallet_v1';
const SharedWalletContext = createContext<SharedWalletContextType | null>(null);

function nowIso() {
  return new Date().toISOString();
}

function mergeField<T>(
  local: T,
  remote: T,
  localAt: string,
  remoteAt: string,
): { value: T; at: string; remoteWon: boolean } {
  if (remoteAt > localAt) return { value: remote, at: remoteAt, remoteWon: true };
  return { value: local, at: localAt, remoteWon: false };
}

export function SharedWalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<SharedWallet | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) setWallet(JSON.parse(raw) as SharedWallet);
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(wallet)).catch(() => {});
  }, [wallet, loaded]);

  // Optional realtime when Supabase is configured
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase || !wallet?.id) return;
    const client = supabase;
    const walletId = wallet.id;

    const channel = client
      .channel(`wallet:${walletId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'shared_transactions',
          filter: `wallet_id=eq.${walletId}`,
        },
        (payload) => {
          const remote = payload.new as Record<string, unknown> | null;
          if (!remote || typeof remote.id !== 'string') return;
          const remoteId = remote.id;

          setWallet((prev) => {
            if (!prev) return prev;
            const existing = prev.transactions.find((t) => t.id === remoteId);
            if (!existing) {
              const incoming: SharedTransaction = {
                id: remoteId,
                walletId: String(remote.wallet_id ?? prev.id),
                title: String(remote.title ?? ''),
                amount: Number(remote.amount ?? 0),
                category: String(remote.category ?? 'other'),
                date: String(remote.date ?? nowIso()),
                createdBy: String(remote.created_by ?? 'remote'),
                note: typeof remote.note === 'string' ? remote.note : undefined,
                fieldUpdatedAt: {
                  title: String(remote.title_updated_at ?? nowIso()),
                  amount: String(remote.amount_updated_at ?? nowIso()),
                  category: String(remote.category_updated_at ?? nowIso()),
                  note: String(remote.note_updated_at ?? nowIso()),
                },
                editedElsewhere: true,
              };
              return { ...prev, transactions: [incoming, ...prev.transactions] };
            }

            const titleM = mergeField(
              existing.title,
              String(remote.title ?? existing.title),
              existing.fieldUpdatedAt.title,
              String(remote.title_updated_at ?? existing.fieldUpdatedAt.title),
            );
            const amountM = mergeField(
              existing.amount,
              Number(remote.amount ?? existing.amount),
              existing.fieldUpdatedAt.amount,
              String(remote.amount_updated_at ?? existing.fieldUpdatedAt.amount),
            );
            const categoryM = mergeField(
              existing.category,
              String(remote.category ?? existing.category),
              existing.fieldUpdatedAt.category,
              String(remote.category_updated_at ?? existing.fieldUpdatedAt.category),
            );
            const noteRemote =
              typeof remote.note === 'string' ? remote.note : existing.note;
            const noteM = mergeField(
              existing.note,
              noteRemote,
              existing.fieldUpdatedAt.note,
              String(remote.note_updated_at ?? existing.fieldUpdatedAt.note),
            );

            const remoteWon =
              titleM.remoteWon || amountM.remoteWon || categoryM.remoteWon || noteM.remoteWon;

            return {
              ...prev,
              transactions: prev.transactions.map((t) =>
                t.id === existing.id
                  ? {
                      ...t,
                      title: titleM.value,
                      amount: amountM.value,
                      category: categoryM.value,
                      note: noteM.value,
                      fieldUpdatedAt: {
                        title: titleM.at,
                        amount: amountM.at,
                        category: categoryM.at,
                        note: noteM.at,
                      },
                      editedElsewhere: t.editedElsewhere || remoteWon,
                    }
                  : t,
              ),
            };
          });
        },
      )
      .subscribe();

    return () => {
      void client.removeChannel(channel);
    };
  }, [wallet?.id]);

  const createWallet = useCallback((name: string, ownerName: string) => {
    const ownerId = `member-${Date.now()}`;
    setWallet({
      id: `wallet-${Date.now()}`,
      name: name.trim() || 'Family Wallet',
      members: [{ id: ownerId, displayName: ownerName.trim() || 'Me', role: 'owner' }],
      transactions: [],
    });
  }, []);

  const addMember = useCallback((displayName: string, role: WalletRole) => {
    setWallet((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        members: [
          ...prev.members,
          { id: `member-${Date.now()}`, displayName: displayName.trim(), role },
        ],
      };
    });
  }, []);

  const addSharedTransaction = useCallback(
    (tx: Omit<SharedTransaction, 'id' | 'walletId' | 'fieldUpdatedAt' | 'editedElsewhere'>) => {
      const stamp = nowIso();
      setWallet((prev) => {
        if (!prev) return prev;
        const next: SharedTransaction = {
          ...tx,
          id: `stx-${Date.now()}`,
          walletId: prev.id,
          fieldUpdatedAt: { title: stamp, amount: stamp, category: stamp, note: stamp },
        };
        return { ...prev, transactions: [next, ...prev.transactions] };
      });
    },
    [],
  );

  const updateSharedTransaction = useCallback(
    (
      id: string,
      updates: Partial<Pick<SharedTransaction, 'title' | 'amount' | 'category' | 'note'>>,
    ) => {
      const stamp = nowIso();
      setWallet((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          transactions: prev.transactions.map((t) => {
            if (t.id !== id) return t;
            return {
              ...t,
              ...updates,
              fieldUpdatedAt: {
                title: updates.title !== undefined ? stamp : t.fieldUpdatedAt.title,
                amount: updates.amount !== undefined ? stamp : t.fieldUpdatedAt.amount,
                category: updates.category !== undefined ? stamp : t.fieldUpdatedAt.category,
                note: updates.note !== undefined ? stamp : t.fieldUpdatedAt.note,
              },
            };
          }),
        };
      });
    },
    [],
  );

  const clearEditedElsewhere = useCallback((id: string) => {
    setWallet((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        transactions: prev.transactions.map((t) =>
          t.id === id ? { ...t, editedElsewhere: false } : t,
        ),
      };
    });
  }, []);

  const value = useMemo(
    () => ({
      wallet,
      cloudEnabled: isSupabaseConfigured,
      createWallet,
      addMember,
      addSharedTransaction,
      updateSharedTransaction,
      clearEditedElsewhere,
    }),
    [
      wallet,
      createWallet,
      addMember,
      addSharedTransaction,
      updateSharedTransaction,
      clearEditedElsewhere,
    ],
  );

  return (
    <SharedWalletContext.Provider value={value}>{children}</SharedWalletContext.Provider>
  );
}

export function useSharedWallet() {
  const ctx = useContext(SharedWalletContext);
  if (!ctx) throw new Error('useSharedWallet must be used within SharedWalletProvider');
  return ctx;
}
````

## File: context/SplitContext.tsx
````typescript
/**
 * SplitContext.tsx
 * Manages split bills, group members, and IOU balances.
 * Persisted via AsyncStorage.
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Member {
  id: string;
  name: string;
  color: string;
}

export type SplitMode = 'equal' | 'exact' | 'percentage';

export interface SplitShare {
  memberId: string;
  /** For exact mode: the dollar amount they owe.
   *  For percentage mode: their percentage.
   *  For equal mode: ignored (auto-computed). */
  value: number;
}

export interface SplitBill {
  id: string;
  title: string;
  totalAmount: number;
  currency: string;
  date: string;
  paidByMemberId: string;
  splitMode: SplitMode;
  shares: SplitShare[];   // one entry per participant, including the payer's own share
  note?: string;
  settled: boolean;
}

export interface Settlement {
  id: string;
  fromMemberId: string;
  toMemberId: string;
  amount: number;
  date: string;
  billId?: string;
}

/** Net balance map: positive = is owed money, negative = owes money */
export type BalanceMap = Record<string, number>;

// ─── Context ──────────────────────────────────────────────────────────────────

interface SplitState {
  members: Member[];
  bills: SplitBill[];
  settlements: Settlement[];
}

interface SplitContextType extends SplitState {
  addMember: (name: string) => Member;
  removeMember: (id: string) => void;
  addBill: (bill: Omit<SplitBill, 'id' | 'date' | 'settled'>) => void;
  deleteBill: (id: string) => void;
  settleBill: (id: string) => void;
  addSettlement: (s: Omit<Settlement, 'id' | 'date'>) => void;
  getNetBalances: () => BalanceMap;
  getMinimalTransactions: () => { from: Member; to: Member; amount: number }[];
}

const STORAGE_KEY = '@extrack_splits_v1';

const MEMBER_COLORS = [
  '#6C3FEF', '#FF6B7A', '#34C47C', '#FFAD0D',
  '#3C82FF', '#AF52DE', '#4ECDC4', '#FF9F0A',
  '#5AC8FA', '#FF2D55',
];

const SplitContext = createContext<SplitContextType | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function SplitProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SplitState>({
    members: [],
    bills: [],
    settlements: [],
  });
  const [loaded, setLoaded] = useState(false);

  // Load from storage
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((raw) => {
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as SplitState;
          setState(parsed);
        } catch {}
      }
      setLoaded(true);
    });
  }, []);

  // Persist on change
  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state, loaded]);

  // ── Members ──

  const addMember = useCallback((name: string): Member => {
    const id = `m_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    const color = MEMBER_COLORS[Math.floor(Math.random() * MEMBER_COLORS.length)];
    const member: Member = { id, name: name.trim(), color };
    setState((s) => ({ ...s, members: [...s.members, member] }));
    return member;
  }, []);

  const removeMember = useCallback((id: string) => {
    setState((s) => ({ ...s, members: s.members.filter((m) => m.id !== id) }));
  }, []);

  // ── Bills ──

  const addBill = useCallback(
    (bill: Omit<SplitBill, 'id' | 'date' | 'settled'>) => {
      const newBill: SplitBill = {
        ...bill,
        id: `b_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        date: new Date().toISOString(),
        settled: false,
      };
      setState((s) => ({ ...s, bills: [newBill, ...s.bills] }));
    },
    []
  );

  const deleteBill = useCallback((id: string) => {
    setState((s) => ({ ...s, bills: s.bills.filter((b) => b.id !== id) }));
  }, []);

  const settleBill = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      bills: s.bills.map((b) => (b.id === id ? { ...b, settled: true } : b)),
    }));
  }, []);

  // ── Settlements ──

  const addSettlement = useCallback(
    (s: Omit<Settlement, 'id' | 'date'>) => {
      const settlement: Settlement = {
        ...s,
        id: `st_${Date.now()}`,
        date: new Date().toISOString(),
      };
      setState((prev) => ({
        ...prev,
        settlements: [settlement, ...prev.settlements],
      }));
    },
    []
  );

  // ── Balance Computation ──

  const getNetBalances = useCallback((): BalanceMap => {
    const balances: BalanceMap = {};

    // Init all members to 0
    state.members.forEach((m) => (balances[m.id] = 0));

    // Process unsettled bills
    state.bills
      .filter((b) => !b.settled)
      .forEach((bill) => {
        const payer = bill.paidByMemberId;
        const payerHasShare = bill.shares.some((share) => share.memberId === payer);

        if (bill.splitMode === 'equal') {
          const participantCount = payerHasShare ? bill.shares.length : bill.shares.length + 1;
          const perPerson = participantCount > 0 ? bill.totalAmount / participantCount : 0;
          bill.shares.forEach((share) => {
            if (share.memberId !== payer) {
              balances[payer] = (balances[payer] ?? 0) + perPerson;
              balances[share.memberId] = (balances[share.memberId] ?? 0) - perPerson;
            }
          });
          return;
        }

        bill.shares.forEach((share) => {
          if (share.memberId === payer) return;

          const amount =
            bill.splitMode === 'percentage'
              ? (share.value / 100) * bill.totalAmount
              : share.value;

          balances[payer] = (balances[payer] ?? 0) + amount;
          balances[share.memberId] = (balances[share.memberId] ?? 0) - amount;
        });
      });

    // Subtract settled amounts
    state.settlements.forEach((s) => {
      balances[s.fromMemberId] = (balances[s.fromMemberId] ?? 0) + s.amount;
      balances[s.toMemberId] = (balances[s.toMemberId] ?? 0) - s.amount;
    });

    return balances;
  }, [state.bills, state.settlements, state.members]);

  /**
   * Greedy debt-simplification algorithm.
   * Reduces n*(n-1) potential transactions to at most n-1.
   */
  const getMinimalTransactions = useCallback((): {
    from: Member;
    to: Member;
    amount: number;
  }[] => {
    const balances = getNetBalances();
    const creditors: { id: string; amount: number }[] = [];
    const debtors: { id: string; amount: number }[] = [];

    Object.entries(balances).forEach(([id, amount]) => {
      if (amount > 0.005) creditors.push({ id, amount });
      else if (amount < -0.005) debtors.push({ id, amount: -amount });
    });

    const result: { from: Member; to: Member; amount: number }[] = [];
    let ci = 0;
    let di = 0;

    while (ci < creditors.length && di < debtors.length) {
      const credit = creditors[ci];
      const debt = debtors[di];
      const settle = Math.min(credit.amount, debt.amount);

      const fromMember = state.members.find((m) => m.id === debt.id);
      const toMember = state.members.find((m) => m.id === credit.id);
      if (fromMember && toMember) {
        result.push({ from: fromMember, to: toMember, amount: settle });
      }

      credit.amount -= settle;
      debt.amount -= settle;
      if (credit.amount < 0.005) ci++;
      if (debt.amount < 0.005) di++;
    }

    return result;
  }, [getNetBalances, state.members]);

  return (
    <SplitContext.Provider
      value={{
        ...state,
        addMember,
        removeMember,
        addBill,
        deleteBill,
        settleBill,
        addSettlement,
        getNetBalances,
        getMinimalTransactions,
      }}
    >
      {children}
    </SplitContext.Provider>
  );
}

export function useSplit() {
  const ctx = useContext(SplitContext);
  if (!ctx) throw new Error('useSplit must be used within SplitProvider');
  return ctx;
}
````

## File: context/ThemeContext.tsx
````typescript
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme as useSystemScheme } from 'react-native';

export type ThemePreference = 'light' | 'dark' | 'system';
export type ResolvedScheme = 'light' | 'dark';

interface ThemeContextValue {
  preference: ThemePreference;
  resolved: ResolvedScheme;
  setPreference: (p: ThemePreference) => void;
}

const ThemeCtx = createContext<ThemeContextValue>({
  preference: 'system',
  resolved: 'dark',
  setPreference: () => {},
});

const THEME_KEY = '@extrack_theme_pref';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useSystemScheme() ?? 'dark';
  const [pref, setPref] = useState<ThemePreference>('system');

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY)
      .then(v => { if (v === 'light' || v === 'dark' || v === 'system') setPref(v); })
      .catch(() => {});
  }, []);

  const setPreference = useCallback((p: ThemePreference) => {
    setPref(p);
    AsyncStorage.setItem(THEME_KEY, p).catch(() => {});
  }, []);

  const resolved: ResolvedScheme = pref === 'system' ? system : pref;

  return (
    <ThemeCtx.Provider value={{ preference: pref, resolved, setPreference }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeCtx);
}
````

## File: hooks/use-color-scheme.ts
````typescript
import { useThemeContext } from '@/context/ThemeContext';

export function useColorScheme() {
  return useThemeContext().resolved;
}
````

## File: hooks/use-color-scheme.web.ts
````typescript
import { useThemeContext } from '@/context/ThemeContext';

// Web version — same logic, ThemeContext works on web too
export function useColorScheme() {
  return useThemeContext().resolved;
}
````

## File: hooks/use-theme-color.ts
````typescript
/**
 * Stub: use-theme-color is not used by this app.
 * Kept to avoid module resolution issues with old template references.
 */
export function useThemeColor(
  _props: { light?: string; dark?: string },
  _colorName: string
): string {
  return '';
}
````

## File: hooks/useNotificationSync.ts
````typescript
import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { useApp } from '@/context/AppContext';
import { checkAllCategoryBudgets } from '@/utils/budgetThresholds';
import {
  cancelDailyReminder,
  clearBudgetNotifState,
  configureNotificationHandler,
  processBudgetAlerts,
  scheduleDailyReminder,
} from '@/services/notifications';

export function useNotificationSync() {
  const { expenses, categoryBudgets, prefs } = useApp();
  const prevBudgetAlerts = useRef(prefs.budgetAlerts);

  useEffect(() => {
    configureNotificationHandler().catch(() => {});
  }, []);

  useEffect(() => {
    if (!prefs.dailyReminderEnabled) {
      cancelDailyReminder();
      return;
    }
    scheduleDailyReminder(prefs.dailyReminderHour, prefs.dailyReminderMinute).catch(() => {});
  }, [
    prefs.dailyReminderEnabled,
    prefs.dailyReminderHour,
    prefs.dailyReminderMinute,
  ]);

  useEffect(() => {
    if (!prefs.budgetAlerts) {
      if (!prevBudgetAlerts.current) return;
      clearBudgetNotifState();
      prevBudgetAlerts.current = false;
      return;
    }
    prevBudgetAlerts.current = true;

    const alerts = checkAllCategoryBudgets(expenses, categoryBudgets);
    if (alerts.length === 0) return;
    processBudgetAlerts(alerts, prefs.currency).catch(() => {});
  }, [expenses, categoryBudgets, prefs.budgetAlerts, prefs.currency]);

  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state !== 'active' || !prefs.budgetAlerts) return;
      const alerts = checkAllCategoryBudgets(expenses, categoryBudgets);
      if (alerts.length === 0) return;
      processBudgetAlerts(alerts, prefs.currency).catch(() => {});
    });
    return () => sub.remove();
  }, [expenses, categoryBudgets, prefs.budgetAlerts, prefs.currency]);
}

export function NotificationSync() {
  useNotificationSync();
  return null;
}
````

## File: lib/supabase.ts
````typescript
/**
 * Supabase client for collaborative shared family wallet.
 * Set EXPO_PUBLIC_SUPABASE_URL + EXPO_PUBLIC_SUPABASE_ANON_KEY to enable cloud sync.
 * Without them, SharedWalletContext runs local-only (offline-first).
 */
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const url = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    })
  : null;
````

## File: scripts/reset-project.js
````javascript
#!/usr/bin/env node

/**
 * This script is used to reset the project to a blank state.
 * It deletes or moves the /app, /components, /hooks, /scripts, and /constants directories to /app-example based on user input and creates a new /app directory with an index.tsx and _layout.tsx file.
 * You can remove the `reset-project` script from package.json and safely delete this file after running it.
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const root = process.cwd();
const oldDirs = ["app", "components", "hooks", "constants", "scripts"];
const exampleDir = "app-example";
const newAppDir = "app";
const exampleDirPath = path.join(root, exampleDir);

const indexContent = `import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
`;

const layoutContent = `import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moveDirectories = async (userInput) => {
  try {
    if (userInput === "y") {
      // Create the app-example directory
      await fs.promises.mkdir(exampleDirPath, { recursive: true });
      console.log(`📁 /${exampleDir} directory created.`);
    }

    // Move old directories to new app-example directory or delete them
    for (const dir of oldDirs) {
      const oldDirPath = path.join(root, dir);
      if (fs.existsSync(oldDirPath)) {
        if (userInput === "y") {
          const newDirPath = path.join(root, exampleDir, dir);
          await fs.promises.rename(oldDirPath, newDirPath);
          console.log(`➡️ /${dir} moved to /${exampleDir}/${dir}.`);
        } else {
          await fs.promises.rm(oldDirPath, { recursive: true, force: true });
          console.log(`❌ /${dir} deleted.`);
        }
      } else {
        console.log(`➡️ /${dir} does not exist, skipping.`);
      }
    }

    // Create new /app directory
    const newAppDirPath = path.join(root, newAppDir);
    await fs.promises.mkdir(newAppDirPath, { recursive: true });
    console.log("\n📁 New /app directory created.");

    // Create index.tsx
    const indexPath = path.join(newAppDirPath, "index.tsx");
    await fs.promises.writeFile(indexPath, indexContent);
    console.log("📄 app/index.tsx created.");

    // Create _layout.tsx
    const layoutPath = path.join(newAppDirPath, "_layout.tsx");
    await fs.promises.writeFile(layoutPath, layoutContent);
    console.log("📄 app/_layout.tsx created.");

    console.log("\n✅ Project reset complete. Next steps:");
    console.log(
      `1. Run \`npx expo start\` to start a development server.\n2. Edit app/index.tsx to edit the main screen.${
        userInput === "y"
          ? `\n3. Delete the /${exampleDir} directory when you're done referencing it.`
          : ""
      }`
    );
  } catch (error) {
    console.error(`❌ Error during script execution: ${error.message}`);
  }
};

rl.question(
  "Do you want to move existing files to /app-example instead of deleting them? (Y/n): ",
  (answer) => {
    const userInput = answer.trim().toLowerCase() || "y";
    if (userInput === "y" || userInput === "n") {
      moveDirectories(userInput).finally(() => rl.close());
    } else {
      console.log("❌ Invalid input. Please enter 'Y' or 'N'.");
      rl.close();
    }
  }
);
````

## File: scripts/verify-android-size.js
````javascript
const fs = require('fs');
const path = require('path');

const MAX_RELEASE_ARTIFACT_BYTES = 80 * 1024 * 1024;
const candidates = [
  'android/app/build/outputs/bundle/release/app-release.aab',
  'android/app/build/outputs/apk/release/app-release.apk',
];

const artifacts = candidates
  .map((relativePath) => {
    const absolutePath = path.join(process.cwd(), relativePath);
    return fs.existsSync(absolutePath)
      ? { relativePath, bytes: fs.statSync(absolutePath).size }
      : null;
  })
  .filter(Boolean);

if (artifacts.length === 0) {
  console.error('No Android release artifact found. Run npm run android:bundle first.');
  process.exit(1);
}

for (const artifact of artifacts) {
  const sizeMb = artifact.bytes / 1024 / 1024;
  console.log(`${artifact.relativePath}: ${sizeMb.toFixed(1)} MB`);
  if (artifact.bytes > MAX_RELEASE_ARTIFACT_BYTES) {
    console.error('Release artifact exceeds the 80 MB size target.');
    process.exitCode = 1;
  }
}
````

## File: services/biometric.ts
````typescript
import * as LocalAuthentication from "expo-local-authentication";
import { StorageService } from "./storage";

export const BiometricService = {
  // Check if device has biometric capability
  isBiometricAvailable: async (): Promise<boolean> => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      return compatible;
    } catch (error) {
      console.error("[Biometric] Error checking availability:", error);
      return false;
    }
  },

  // Get available biometric types
  getBiometricTypes: async (): Promise<
    LocalAuthentication.AuthenticationType[]
  > => {
    try {
      const types =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      return types;
    } catch (error) {
      console.error("[Biometric] Error getting types:", error);
      return [];
    }
  },

  // Enable biometric authentication
  enableBiometric: async (): Promise<boolean> => {
    try {
      const available = await BiometricService.isBiometricAvailable();
      if (!available) {
        console.warn("[Biometric] Biometric not available");
        return false;
      }

      const authenticated = await LocalAuthentication.authenticateAsync({
        disableDeviceFallback: false,
        promptMessage: "Enable biometric authentication",
        promptDescription: "Use Face ID or fingerprint for quick access.",
      });

      if (authenticated.success) {
        await StorageService.setItem("biometric_enabled", true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("[Biometric] Error enabling:", error);
      return false;
    }
  },

  // Authenticate with biometric
  authenticate: async (): Promise<boolean> => {
    try {
      const enabled = await StorageService.getItem("biometric_enabled", false);
      if (!enabled) {
        console.warn("[Biometric] Biometric not enabled");
        return false;
      }

      const authenticated = await LocalAuthentication.authenticateAsync({
        disableDeviceFallback: false,
        promptMessage: "Unlock Expense Tracker",
        promptDescription: "Authenticate to access your financial data.",
      });

      return authenticated.success;
    } catch (error) {
      console.error("[Biometric] Error authenticating:", error);
      return false;
    }
  },

  // Disable biometric
  disableBiometric: async (): Promise<void> => {
    try {
      await StorageService.removeItem("biometric_enabled");
    } catch (error) {
      console.error("[Biometric] Error disabling:", error);
    }
  },

  // Check if biometric is enabled
  isBiometricEnabled: async (): Promise<boolean> => {
    return (await StorageService.getItem("biometric_enabled", false)) ?? false;
  },
};

export default BiometricService;
````

## File: services/categorization.ts
````typescript
/**
 * On-device expense categorization (rules + learned exemplars).
 * Transaction text never leaves the device. ONNX/TFLite embeddings can plug into
 * `scoreWithEmbeddings` later behind a custom dev client — not required for Expo Go.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CATEGORIES } from '@/utils/categories';

const EXEMPLARS_KEY = '@extrack_category_exemplars_v1';
const AUTO_APPLY_THRESHOLD = 0.72;

export type CategorySuggestion = {
  categoryKey: string;
  confidence: number;
  source: 'rule' | use | 'fallback';
  label: string;
};

type Exemplar = { text: string; categoryKey: string; count: number };

const RULES: { categoryKey: string; patterns: RegExp[] }[] = [
  { categoryKey: 'food', patterns: [/uber\s*eats|doordash|grubhub|mcdonald|starbucks|cafe|restaurant|grocery|supermarket|whole\s*foods|trader\s*joe|pizza|sushi|bakery|coffee/i] },
  { categoryKey: 'transport', patterns: [/uber(?!\s*eats)|lyft|shell|bp\b|exxon|gas\b|fuel|parking|metro|transit|train|airline|taxi|toll/i] },
  { categoryKey: 'bills', patterns: [/electric|water\b|internet|verizon|at&t|comcast|utility|rent|mortgage|insurance|phone\s*bill|wifi/i] },
  { categoryKey: 'shopping', patterns: [/amazon|walmart|target|ikea|ebay|etsy|mall|clothing|nike|zara|best\s*buy/i] },
  { categoryKey: 'health', patterns: [/pharmacy|cvs|walgreens|hospital|clinic|doctor|dental|medical|health/i] },
  { categoryKey: 'entertainment', patterns: [/netflix|spotify|hulu|disney|cinema|movie|steam|playstation|xbox|concert|ticket/i] },
  { categoryKey: 'education', patterns: [/tuition|udemy|coursera|school|university|bookstore|textbook|course/i] },
  { categoryKey: 'travel', patterns: [/hotel|airbnb|booking\.com|expedia|flight|airport|hostel|vacation/i] },
  { categoryKey: 'fitness', patterns: [/gym|fitness|peloton|yoga|crossfit|sport|athletic/i] },
];

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function tokenSet(text: string): Set<string> {
  return new Set(normalize(text).split(' ').filter((t) => t.length > 2));
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter += 1;
  return inter / (a.size + b.size - inter);
}

async function loadExemplars(): Promise<Exemplar[]> {
  try {
    const raw = await AsyncStorage.getItem(EXEMPLARS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is Exemplar =>
        typeof e === 'object' &&
        e !== null &&
        typeof (e as Exemplar).text === 'string' &&
        typeof (e as Exemplar).categoryKey === 'string',
    );
  } catch {
    return [];
  }
}

async function saveExemplars(exemplars: Exemplar[]): Promise<void> {
  await AsyncStorage.setItem(EXEMPLARS_KEY, JSON.stringify(exemplars.slice(0, 500)));
}

function scoreRules(haystack: string): CategorySuggestion | null {
  let best: CategorySuggestion | null = null;
  for (const rule of RULES) {
    for (const pattern of rule.patterns) {
      if (pattern.test(haystack)) {
        const confidence = 0.85;
        if (!best || confidence > best.confidence) {
          const cat = CATEGORIES.find((c) => c.key === rule.categoryKey);
          best = {
            categoryKey: rule.categoryKey,
            confidence,
            source: 'rule',
            label: cat?.label ?? rule.categoryKey,
          };
        }
      }
    }
  }
  return best;
}

function scoreExemplars(haystack: string, exemplars: Exemplar[]): CategorySuggestion | null {
  const tokens = tokenSet(haystack);
  const scores = new Map<string, number>();

  for (const ex of exemplars) {
    const sim = jaccard(tokens, tokenSet(ex.text));
    if (sim <= 0) continue;
    const weight = sim * (1 + Math.min(ex.count, 5) * 0.05);
    scores.set(ex.categoryKey, (scores.get(ex.categoryKey) ?? 0) + weight);
  }

  let bestKey = '';
  let bestScore = 0;
  for (const [key, score] of scores) {
    if (score > bestScore) {
      bestKey = key;
      bestScore = score;
    }
  }
  if (!bestKey || bestScore < 0.25) return null;

  const cat = CATEGORIES.find((c) => c.key === bestKey);
  return {
    categoryKey: bestKey,
    confidence: Math.min(0.95, 0.55 + bestScore * 0.4),
    source: 'exemplar',
    label: cat?.label ?? bestKey,
  };
}

/** Suggest a category from title + optional note. Fully on-device. */
export async function suggestCategory(
  title: string,
  note?: string,
): Promise<CategorySuggestion> {
  const haystack = `${title} ${note ?? ''}`.trim();
  if (!haystack) {
    return { categoryKey: 'other', confidence: 0, source: 'fallback', label: 'Other' };
  }

  const ruleHit = scoreRules(haystack);
  const exemplars = await loadExemplars();
  const exemplarHit = scoreExemplars(haystack, exemplars);

  const candidates = [ruleHit, exemplarHit].filter(Boolean) as CategorySuggestion[];
  if (candidates.length === 0) {
    return { categoryKey: 'other', confidence: 0.2, source: 'fallback', label: 'Other' };
  }

  candidates.sort((a, b) => b.confidence - a.confidence);
  return candidates[0];
}

export function shouldAutoApply(suggestion: CategorySuggestion): boolean {
  return suggestion.confidence >= AUTO_APPLY_THRESHOLD && suggestion.source !== 'fallback';
}

/** Learn from a user correction so future suggestions improve locally. */
export async function recordCategoryCorrection(
  title: string,
  note: string | undefined,
  categoryKey: string,
): Promise<void> {
  const text = normalize(`${title} ${note ?? ''}`);
  if (!text || text.length < 2) return;

  const exemplars = await loadExemplars();
  const existing = exemplars.find((e) => e.text === text && e.categoryKey === categoryKey);
  if (existing) {
    existing.count += 1;
  } else {
    exemplars.unshift({ text, categoryKey, count: 1 });
  }
  await saveExemplars(exemplars);
}
````

## File: services/notifications.ts
````typescript
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isRunningInExpoGo } from 'expo';
import { Platform } from 'react-native';
import type { BudgetThreshold } from '@/utils/budgetThresholds';
import { getMonthKey } from '@/utils/budgetThresholds';

const DAILY_REMINDER_ID = 'daily-expense-reminder';
const NOTIF_STATE_KEY = '@extrack_notif_state';

type NotifState = Record<string, string[]>;
type NotificationsModule = typeof import('expo-notifications');

let notificationsModule: NotificationsModule | null = null;
let handlerConfigured = false;

export function isNotificationsSupported(): boolean {
  if (isRunningInExpoGo() || Platform.OS === 'web') return false;
  return Platform.OS === 'ios' || Platform.OS === 'android';
}

async function getNotifications(): Promise<NotificationsModule | null> {
  if (!isNotificationsSupported()) return null;
  if (!notificationsModule) {
    notificationsModule = await import('expo-notifications');
  }
  return notificationsModule;
}

function hasNotificationPermission(
  Notifications: NotificationsModule,
  settings: Awaited<ReturnType<NotificationsModule['getPermissionsAsync']>>,
): boolean {
  const response = settings as typeof settings & { granted?: boolean };
  if (response.granted) return true;
  return (
    settings.ios?.status === Notifications.IosAuthorizationStatus.AUTHORIZED ||
    settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
}

export async function configureNotificationHandler(): Promise<void> {
  if (handlerConfigured || !isNotificationsSupported()) return;
  const Notifications = await getNotifications();
  if (!Notifications) return;

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
  handlerConfigured = true;
}

export async function setupAndroidChannels(): Promise<void> {
  if (Platform.OS !== 'android' || !isNotificationsSupported()) return;
  const Notifications = await getNotifications();
  if (!Notifications) return;

  await Notifications.setNotificationChannelAsync('reminders', {
    name: 'Daily Reminders',
    importance: Notifications.AndroidImportance.DEFAULT,
    vibrationPattern: [0, 250, 250, 250],
  });
  await Notifications.setNotificationChannelAsync('budget-alerts', {
    name: 'Budget Alerts',
    importance: Notifications.AndroidImportance.HIGH,
    vibrationPattern: [0, 250, 250, 250],
  });
}

export async function requestPermissions(): Promise<boolean> {
  if (!isNotificationsSupported()) return false;

  const Notifications = await getNotifications();
  if (!Notifications) return false;

  await configureNotificationHandler();
  await setupAndroidChannels();

  const existing = await Notifications.getPermissionsAsync();
  if (hasNotificationPermission(Notifications, existing)) return true;

  const requested = await Notifications.requestPermissionsAsync();
  return hasNotificationPermission(Notifications, requested);
}

export async function scheduleDailyReminder(hour: number, minute: number): Promise<boolean> {
  if (!isNotificationsSupported()) return false;

  const Notifications = await getNotifications();
  if (!Notifications) return false;

  const granted = await requestPermissions();
  if (!granted) return false;

  await Notifications.cancelScheduledNotificationAsync(DAILY_REMINDER_ID).catch(() => {});

  await Notifications.scheduleNotificationAsync({
    identifier: DAILY_REMINDER_ID,
    content: {
      title: 'Time to log expenses',
      body: "Keep your streak going — add today's spending.",
      sound: true,
      ...(Platform.OS === 'android' ? { channelId: 'reminders' } : {}),
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
    },
  });

  return true;
}

export async function cancelDailyReminder(): Promise<void> {
  if (!isNotificationsSupported()) return;
  const Notifications = await getNotifications();
  if (!Notifications) return;
  await Notifications.cancelScheduledNotificationAsync(DAILY_REMINDER_ID).catch(() => {});
}

async function loadNotifState(): Promise<NotifState> {
  try {
    const raw = await AsyncStorage.getItem(NOTIF_STATE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    return typeof parsed === 'object' && parsed !== null ? (parsed as NotifState) : {};
  } catch {
    return {};
  }
}

async function saveNotifState(state: NotifState): Promise<void> {
  await AsyncStorage.setItem(NOTIF_STATE_KEY, JSON.stringify(state)).catch(() => {});
}

export async function clearBudgetNotifState(): Promise<void> {
  await AsyncStorage.removeItem(NOTIF_STATE_KEY).catch(() => {});
}

function stateKey(categoryKey: string, monthKey = getMonthKey()): string {
  return `${categoryKey}-${monthKey}`;
}

export async function processBudgetAlerts(
  alerts: {
    categoryKey: string;
    categoryLabel: string;
    spent: number;
    budget: number;
    threshold: BudgetThreshold;
  }[],
  currency: string,
): Promise<void> {
  if (!isNotificationsSupported()) return;

  const Notifications = await getNotifications();
  if (!Notifications) return;

  const granted = await requestPermissions();
  if (!granted) return;

  const state = await loadNotifState();
  const monthKey = getMonthKey();
  let updated = { ...state };

  for (const alert of alerts) {
    const key = stateKey(alert.categoryKey, monthKey);
    const sent = updated[key] ?? [];
    if (sent.includes(alert.threshold)) continue;

    const pct = Math.round((alert.spent / alert.budget) * 100);
    const title =
      alert.threshold === '100'
        ? `Over budget: ${alert.categoryLabel}`
        : `Budget warning: ${alert.categoryLabel}`;
    const body =
      alert.threshold === '100'
        ? `You've spent ${pct}% of your ${currency} ${alert.budget.toFixed(0)} monthly limit.`
        : `You've used ${pct}% of your ${currency} ${alert.budget.toFixed(0)} monthly budget.`;

    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: true,
        ...(Platform.OS === 'android' ? { channelId: 'budget-alerts' } : {}),
      },
      trigger: null,
    });

    updated = { ...updated, [key]: [...sent, alert.threshold] };
  }

  await saveNotifState(updated);
}

export function getNotificationsUnavailableReason(): string | null {
  if (Platform.OS === 'web') return 'Available on mobile app';
  if (isRunningInExpoGo()) return 'Requires a development build (not Expo Go)';
  return null;
}
````

## File: services/secrets.ts
````typescript
/**
 * Secrets belong in SecureStore / Keychain — never AsyncStorage or prefs plaintext.
 */
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const VISION_KEY = 'extrack_google_vision_api_key';

async function canUseSecureStore(): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  try {
    return await SecureStore.isAvailableAsync();
  } catch {
    return false;
  }
}

export async function getVisionApiKey(): Promise<string> {
  if (!(await canUseSecureStore())) return '';
  try {
    return (await SecureStore.getItemAsync(VISION_KEY)) ?? '';
  } catch {
    return '';
  }
}

export async function setVisionApiKey(value: string): Promise<void> {
  if (!(await canUseSecureStore())) return;
  try {
    if (!value) {
      await SecureStore.deleteItemAsync(VISION_KEY);
      return;
    }
    await SecureStore.setItemAsync(VISION_KEY, value, {
      keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
  } catch {
    // Swallow — caller can fall back to empty key.
  }
}
````

## File: services/storage.ts
````typescript
import AsyncStorage from "@react-native-async-storage/async-storage";

// Expo Go cannot load NitroModules-based MMKV. This storage wrapper keeps the
// same app-level API while using AsyncStorage, which works in Expo Go and EAS.
export const StorageService = {
  setItem: async (key: string, value: unknown) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`[Storage] Failed to set ${key}:`, error);
    }
  },

  getItem: async <T>(key: string, defaultValue?: T): Promise<T | undefined> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : defaultValue;
    } catch (error) {
      console.error(`[Storage] Failed to get ${key}:`, error);
      return defaultValue;
    }
  },

  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`[Storage] Failed to delete ${key}:`, error);
    }
  },

  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("[Storage] Failed to clear:", error);
    }
  },

  TRANSACTIONS: "transactions",
  BUDGETS: "budgets",
  INCOME: "income",
  GOALS: "goals",
  USER: "user",
  SESSION: "session",
};

export default StorageService;
````

## File: services/widgetSnapshot.ts
````typescript
/**
 * Home-screen widget data snapshot.
 * Native WidgetKit / Glance widgets need a custom dev client + config plugins.
 * This writer keeps a small JSON snapshot ready for App Group / SharedPreferences bridging.
 *
 * Refresh strategy (battery-safe):
 * - Update on every successful expense write (foreground).
 * - Background: ≥30 min opportunistic only once native widgets ship — never poll every few minutes.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WIDGET_SNAPSHOT_KEY = '@extrack_widget_snapshot_v1';

export type WidgetSnapshot = {
  updatedAt: string;
  currency: string;
  spentThisWeek: number;
  safeToSpendToday: number;
  balance: number;
  loggingStreak: number;
  showBalance: boolean;
};

export async function writeWidgetSnapshot(snapshot: WidgetSnapshot): Promise<void> {
  try {
    await AsyncStorage.setItem(WIDGET_SNAPSHOT_KEY, JSON.stringify(snapshot));
  } catch {
    // Widget bridge is best-effort; never block expense saves.
  }
}

export async function readWidgetSnapshot(): Promise<WidgetSnapshot | null> {
  try {
    const raw = await AsyncStorage.getItem(WIDGET_SNAPSHOT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as WidgetSnapshot;
  } catch {
    return null;
  }
}

export function computeWeekSpend(
  expenses: { amount: number; date: string }[],
  now = new Date(),
): number {
  const start = new Date(now);
  const day = start.getDay(); // 0 Sun
  const diffToMonday = (day + 6) % 7;
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - diffToMonday);
  return expenses
    .filter((e) => new Date(e.date) >= start)
    .reduce((sum, e) => sum + e.amount, 0);
}
````

## File: store/types.ts
````typescript
// Type definitions for the app
export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
  receipt?: string;
  recurring?: boolean;
  recurringFrequency?: "daily" | "weekly" | "monthly" | "yearly";
}

export interface Budget {
  category: string;
  limit: number;
  spent: number;
  period: "weekly" | "monthly";
}

export interface Income {
  amount: number;
  frequency: "weekly" | "monthly" | "yearly";
  nextPayDate: string;
}

export interface SavingGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  priority: "low" | "medium" | "high";
}

export interface User {
  id: string;
  username: string;
  email: string;
  currency: string;
  biometricEnabled: boolean;
  theme: "light" | "dark";
}

export interface DashboardMetrics {
  totalIncome: number;
  totalExpenses: number;
  safeToSpend: number;
  burnRate: number;
  daysRemaining: number;
}
````

## File: store/useAppStore.ts
````typescript
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Budget, DashboardMetrics, Income, Transaction } from "./types";

interface AppState {
  // Data
  transactions: Transaction[];
  budgets: Record<string, Budget>;
  income: Income | null;

  // Actions
  addTransaction: (transaction: Omit<Transaction, "id">) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;

  setBudget: (
    category: string,
    limit: number,
    period: "weekly" | "monthly",
  ) => void;
  setIncome: (amount: number, frequency: string, nextPayDate: string) => void;

  // Computed
  getTotalExpenses: () => number;
  getTotalIncome: () => number;
  getBudgetPercentage: (category: string) => number;
  getDashboardMetrics: () => DashboardMetrics;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        transactions: [],
        budgets: {},
        income: null,

        // Transaction actions
        addTransaction: (transaction) =>
          set((state) => ({
            transactions: [
              {
                id: `${Date.now()}`,
                ...transaction,
              },
              ...state.transactions,
            ],
          })),

        updateTransaction: (id, updates) =>
          set((state) => ({
            transactions: state.transactions.map((t) =>
              t.id === id ? { ...t, ...updates } : t,
            ),
          })),

        deleteTransaction: (id) =>
          set((state) => ({
            transactions: state.transactions.filter((t) => t.id !== id),
          })),

        // Budget actions
        setBudget: (category, limit, period) =>
          set((state) => ({
            budgets: {
              ...state.budgets,
              [category]: {
                category,
                limit,
                spent: state.budgets[category]?.spent ?? 0,
                period,
              },
            },
          })),

        // Income actions
        setIncome: (amount, frequency, nextPayDate) =>
          set({
            income: {
              amount,
              frequency: frequency as "weekly" | "monthly" | "yearly",
              nextPayDate,
            },
          }),

        // Computed selectors
        getTotalExpenses: () => {
          const state = get();
          const now = new Date();
          const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

          return state.transactions
            .filter((t) => new Date(t.date) >= startOfMonth)
            .reduce((sum, t) => sum + t.amount, 0);
        },

        getTotalIncome: () => {
          const state = get();
          return state.income?.amount ?? 0;
        },

        getBudgetPercentage: (category: string) => {
          const state = get();
          const budget = state.budgets[category];
          if (!budget) return 0;

          const spent = state.transactions
            .filter((t) => t.category === category)
            .reduce((sum, t) => sum + t.amount, 0);

          return (spent / budget.limit) * 100;
        },

        getDashboardMetrics: (): DashboardMetrics => {
          const state = get();
          const totalIncome = state.getTotalIncome();
          const totalExpenses = state.getTotalExpenses();
          const now = new Date();
          const daysInMonth = new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0,
          ).getDate();
          const daysRemaining = daysInMonth - now.getDate();

          // Calculate fixed expenses (recurring)
          const fixedExpenses = state.transactions
            .filter((t) => t.recurring)
            .reduce((sum, t) => sum + t.amount, 0);

          // Safe-to-Spend = (Income - Fixed - Budget Allocations) / Days Remaining
          const totalBudgetAllocations = Object.values(state.budgets).reduce(
            (sum, b) => sum + b.limit,
            0,
          );

          const safeToSpend = Math.max(
            0,
            (totalIncome - fixedExpenses - totalBudgetAllocations) /
              daysRemaining,
          );

          const burnRate = totalExpenses / (daysInMonth - 1);

          return {
            totalIncome,
            totalExpenses,
            safeToSpend,
            burnRate,
            daysRemaining,
          };
        },
      }),
      {
        name: "expense-tracker-store",
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
    { name: "AppStore" },
  ),
);
````

## File: supabase/shared-wallet-rls.sql
````sql
-- Shared family wallet schema + RLS (run in Supabase SQL editor)
-- Personal expenses stay in the client AppContext store; only shared txs live here.

create table if not exists public.wallets (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.wallet_members (
  wallet_id uuid references public.wallets(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'editor', 'viewer')),
  primary key (wallet_id, user_id)
);

create table if not exists public.shared_transactions (
  id uuid primary key default gen_random_uuid(),
  wallet_id uuid not null references public.wallets(id) on delete cascade,
  title text not null,
  amount numeric not null,
  category text not null,
  note text,
  date timestamptz not null default now(),
  created_by uuid not null references auth.users(id),
  title_updated_at timestamptz not null default now(),
  amount_updated_at timestamptz not null default now(),
  category_updated_at timestamptz not null default now(),
  note_updated_at timestamptz not null default now()
);

alter table public.wallets enable row level security;
alter table public.wallet_members enable row level security;
alter table public.shared_transactions enable row level security;

create or replace function public.is_wallet_member(wid uuid)
returns boolean language sql stable as $$
  select exists (
    select 1 from public.wallet_members m
    where m.wallet_id = wid and m.user_id = auth.uid()
  );
$$;

create or replace function public.can_edit_wallet(wid uuid)
returns boolean language sql stable as $$
  select exists (
    select 1 from public.wallet_members m
    where m.wallet_id = wid and m.user_id = auth.uid()
      and m.role in ('owner', 'editor')
  );
$$;

create policy wallets_select on public.wallets
  for select using (public.is_wallet_member(id));

create policy members_select on public.wallet_members
  for select using (public.is_wallet_member(wallet_id));

create policy txs_select on public.shared_transactions
  for select using (public.is_wallet_member(wallet_id));

create policy txs_insert on public.shared_transactions
  for insert with check (public.can_edit_wallet(wallet_id) and created_by = auth.uid());

create policy txs_update on public.shared_transactions
  for update using (public.can_edit_wallet(wallet_id));

-- Realtime
alter publication supabase_realtime add table public.shared_transactions;
````

## File: utils/budgetThresholds.ts
````typescript
import type { Expense } from '@/context/AppContext';
import { getCategoryByKey } from '@/utils/categories';

export type BudgetThreshold = '80' | '100';

export interface BudgetAlertCandidate {
  categoryKey: string;
  categoryLabel: string;
  spent: number;
  budget: number;
  threshold: BudgetThreshold;
}

export function getMonthKey(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export function getCategorySpentThisMonth(
  expenses: Expense[],
  categoryKey: string,
  excludeId?: string,
  referenceDate = new Date(),
): number {
  const monthStart = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1);
  return expenses
    .filter(
      (e) =>
        e.category === categoryKey &&
        new Date(e.date) >= monthStart &&
        e.id !== excludeId,
    )
    .reduce((sum, e) => sum + e.amount, 0);
}

export function getThresholdLevel(spent: number, budget: number): BudgetThreshold | null {
  if (!budget || budget <= 0) return null;
  if (spent > budget) return '100';
  if (spent > budget * 0.8) return '80';
  return null;
}

export function getProjectedBudgetWarning(
  spent: number,
  budget: number,
  additionalAmount: number,
  currency: string,
  formatCurrency: (amount: number, currency: string) => string,
): { message: string; isOverBudget: boolean } | null {
  const projectedTotal = spent + additionalAmount;
  if (projectedTotal > budget) {
    return {
      message: `This puts you over your ${formatCurrency(budget, currency)} budget for this month!`,
      isOverBudget: true,
    };
  }
  if (projectedTotal > budget * 0.8) {
    return {
      message: `You're nearing your ${formatCurrency(budget, currency)} budget for this month.`,
      isOverBudget: false,
    };
  }
  return null;
}

export function checkAllCategoryBudgets(
  expenses: Expense[],
  categoryBudgets: Record<string, number>,
): BudgetAlertCandidate[] {
  const alerts: BudgetAlertCandidate[] = [];

  for (const [categoryKey, budget] of Object.entries(categoryBudgets)) {
    if (!budget || budget <= 0) continue;
    const spent = getCategorySpentThisMonth(expenses, categoryKey);
    const threshold = getThresholdLevel(spent, budget);
    if (!threshold) continue;

    alerts.push({
      categoryKey,
      categoryLabel: getCategoryByKey(categoryKey).label,
      spent,
      budget,
      threshold,
    });
  }

  return alerts;
}
````

## File: utils/calculations.ts
````typescript
import { Expense } from '@/context/AppContext';
import { getMonthKey, formatMonthLabel } from './formatters';

export function getTotalExpenses(expenses: Expense[]): number {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

export function getBalance(income: number, expenses: Expense[]): number {
  return income - getTotalExpenses(expenses);
}

export function getWeeklyBudget(income: number, expenses: Expense[]): number {
  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  const thisWeekSpent = expenses
    .filter(e => new Date(e.date) >= startOfWeek)
    .reduce((sum, e) => sum + e.amount, 0);
  return Math.max(0, income / 4.33 - thisWeekSpent);
}

export type TimePeriod = 'day' | 'week' | 'month' | '3months' | 'year' | 'all';

export function filterByPeriod(expenses: Expense[], period: TimePeriod): Expense[] {
  if (period === 'all') return expenses;
  const now = new Date();
  let cutoff = new Date();
  if (period === 'day') { cutoff.setHours(0, 0, 0, 0); }
  else if (period === 'week') { cutoff.setDate(now.getDate() - 7); }
  else if (period === 'month') { cutoff = new Date(now.getFullYear(), now.getMonth(), 1); }
  else if (period === '3months') { cutoff = new Date(now.getFullYear(), now.getMonth() - 2, 1); }
  else if (period === 'year') { cutoff = new Date(now.getFullYear(), 0, 1); }
  return expenses.filter(e => new Date(e.date) >= cutoff);
}

export function groupByDate(expenses: Expense[]): { date: string; items: Expense[] }[] {
  const map: Record<string, Expense[]> = {};
  for (const e of expenses) {
    const k = new Date(e.date).toDateString();
    if (!map[k]) map[k] = [];
    map[k].push(e);
  }
  return Object.entries(map)
    .map(([date, items]) => ({ date, items }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getExpensesByCategory(expenses: Expense[]): Record<string, number> {
  return expenses.reduce<Record<string, number>>((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});
}

export function getMonthlyTotals(expenses: Expense[], months = 6): { label: string; total: number }[] {
  const result: Record<string, number> = {};
  const labels: Record<string, string> = {};
  const now = new Date();
  for (let i = months - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = getMonthKey(d.toISOString());
    result[key] = 0;
    labels[key] = formatMonthLabel(key);
  }
  for (const e of expenses) {
    const key = getMonthKey(e.date);
    if (key in result) result[key] += e.amount;
  }
  return Object.entries(result).map(([key, total]) => ({ label: labels[key], total }));
}

// --- V2 Smart Calculations ---

export function getWeeklyComparison(expenses: Expense[]): { diffAmount: number; diffPercent: number; spentThisWeek: number; spentLastWeek: number } {
  const now = new Date();
  
  // This week (last 7 days from now)
  const thisWeekStart = new Date(now);
  thisWeekStart.setDate(now.getDate() - 7);
  
  // Last week (days -14 to -7 from now)
  const lastWeekStart = new Date(now);
  lastWeekStart.setDate(now.getDate() - 14);
  
  const spentThisWeek = expenses
    .filter(e => { const d = new Date(e.date); return d >= thisWeekStart && d <= now; })
    .reduce((s, e) => s + e.amount, 0);

  const spentLastWeek = expenses
    .filter(e => { const d = new Date(e.date); return d >= lastWeekStart && d < thisWeekStart; })
    .reduce((s, e) => s + e.amount, 0);

  const diffAmount = spentThisWeek - spentLastWeek;
  const diffPercent = spentLastWeek > 0 ? (diffAmount / spentLastWeek) * 100 : (spentThisWeek > 0 ? 100 : 0);

  return { diffAmount, diffPercent, spentThisWeek, spentLastWeek };
}

export function getMonthlyComparison(expenses: Expense[]): { spentThisMonth: number; spentLastMonth: number; diffPercent: number; diffAmount: number } {
  const now = new Date();
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59);

  const spentThisMonth = expenses
    .filter(e => new Date(e.date) >= thisMonthStart)
    .reduce((s, e) => s + e.amount, 0);

  const spentLastMonth = expenses
    .filter(e => { const d = new Date(e.date); return d >= lastMonthStart && d <= lastMonthEnd; })
    .reduce((s, e) => s + e.amount, 0);

  const diffAmount = spentThisMonth - spentLastMonth;
  const diffPercent = spentLastMonth > 0 ? (diffAmount / spentLastMonth) * 100 : (spentThisMonth > 0 ? 100 : 0);

  return { spentThisMonth, spentLastMonth, diffPercent, diffAmount };
}

export function getTopCategoryThisMonth(expenses: Expense[]): { category: string; amount: number } | null {
  const now = new Date();
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  const thisMonthExpenses = expenses.filter(e => new Date(e.date) >= thisMonthStart);
  if (thisMonthExpenses.length === 0) return null;

  const byCat = getExpensesByCategory(thisMonthExpenses);
  const entries = Object.entries(byCat);
  if (entries.length === 0) return null;

  entries.sort((a, b) => b[1] - a[1]);
  return { category: entries[0][0], amount: entries[0][1] };
}

export function getAverageDailySpend(expenses: Expense[]): number {
  const now = new Date();
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  const thisMonthExpenses = expenses.filter(e => new Date(e.date) >= thisMonthStart);
  if (thisMonthExpenses.length === 0) return 0;
  
  const totalSpent = thisMonthExpenses.reduce((s, e) => s + e.amount, 0);
  const currentDayOfMonth = Math.max(1, now.getDate());
  
  return totalSpent / currentDayOfMonth;
}
````

## File: utils/categories.ts
````typescript
export interface Category {
  key: string;
  label: string;
  icon: string;
  color: string;
  emoji: string;
}

export const CATEGORIES: Category[] = [
  { key: 'food',          label: 'Food & Dining',   icon: 'restaurant-outline',         color: '#FF6B6B', emoji: '🍔' },
  { key: 'transport',     label: 'Transport',        icon: 'car-outline',                color: '#4ECDC4', emoji: '🚗' },
  { key: 'bills',         label: 'Bills',            icon: 'receipt-outline',            color: '#45B7D1', emoji: '💡' },
  { key: 'shopping',      label: 'Shopping',         icon: 'bag-outline',                color: '#9B59B6', emoji: '🛍️' },
  { key: 'health',        label: 'Health',           icon: 'heart-outline',              color: '#E74C3C', emoji: '❤️' },
  { key: 'entertainment', label: 'Entertainment',    icon: 'game-controller-outline',    color: '#F39C12', emoji: '🎮' },
  { key: 'education',     label: 'Education',        icon: 'school-outline',             color: '#27AE60', emoji: '📚' },
  { key: 'travel',        label: 'Travel',           icon: 'airplane-outline',           color: '#2980B9', emoji: '✈️' },
  { key: 'fitness',       label: 'Fitness',          icon: 'barbell-outline',            color: '#1ABC9C', emoji: '💪' },
  { key: 'other',         label: 'Other',            icon: 'ellipsis-horizontal-outline', color: '#7F8C8D', emoji: '📦' },
];

export function getCategoryByKey(key: string): Category {
  return CATEGORIES.find(c => c.key === key) ?? CATEGORIES[CATEGORIES.length - 1];
}
````

## File: utils/currency.ts
````typescript
// ─── Currency Utility ─────────────────────────────────────────────────────────
// Uses open.er-api.com — FREE, no API key required, updates every 24h.

const BASE_URL = 'https://open.er-api.com/v6/latest';

export interface ExchangeRates {
  base: string;
  rates: Record<string, number>;
  updatedAt: string;
}

/**
 * Fetches live exchange rates based on the given base currency.
 * Returns a map of currency code -> rate relative to base.
 */
export async function fetchExchangeRates(baseCurrency: string): Promise<ExchangeRates> {
  const response = await fetch(`${BASE_URL}/${baseCurrency}`);
  if (!response.ok) {
    throw new Error(`Exchange rate fetch failed: ${response.status}`);
  }
  const data = await response.json();
  if (data.result !== 'success') {
    throw new Error(`Exchange rate API error: ${data['error-type'] ?? 'unknown'}`);
  }
  return {
    base: data.base_code,
    rates: data.rates,
    updatedAt: data.time_last_update_utc,
  };
}

/**
 * Converts an amount from one currency to another using the provided rate map.
 */
export function convertAmount(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: Record<string, number>
): number {
  if (fromCurrency === toCurrency) return amount;
  const toRate = rates[toCurrency];
  const fromRate = rates[fromCurrency];
  if (!toRate || !fromRate) return amount;
  // Convert: amount (in fromCurrency) → base → toCurrency
  return (amount / fromRate) * toRate;
}

/**
 * Formats a number with the given currency symbol.
 */
export function formatWithCurrency(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

export const POPULAR_CURRENCIES = [
  'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY',
  'INR', 'MXN', 'BRL', 'ALL', 'SEK', 'NOK', 'DKK', 'SGD',
  'HKD', 'NZD', 'ZAR', 'AED',
];
````

## File: utils/disciplineStreak.ts
````typescript
/**
 * Non-punitive discipline streaks.
 * Missed days pause the current run; they never wipe longest-run history.
 */
export type DayDiscipline = {
  logged: boolean;
  underBudget: boolean;
};

export type DisciplineState = {
  /** Consecutive days with ≥1 expense logged (current run; 0 if paused). */
  loggingStreak: number;
  longestLoggingStreak: number;
  /** Consecutive under-budget calendar days (current run). */
  budgetStreak: number;
  longestBudgetStreak: number;
  /** ISO date keys (YYYY-MM-DD) → day flags. History is retained. */
  dayHistory: Record<string, DayDiscipline>;
  lastEvaluatedDate: string | null;
};

export const EMPTY_DISCIPLINE: DisciplineState = {
  loggingStreak: 0,
  longestLoggingStreak: 0,
  budgetStreak: 0,
  longestBudgetStreak: 0,
  dayHistory: {},
  lastEvaluatedDate: null,
};

export function toDateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function shiftDateKey(key: string, deltaDays: number): string {
  const [y, m, d] = key.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + deltaDays);
  return toDateKey(dt);
}

function countBackwardRun(
  history: Record<string, DayDiscipline>,
  fromKey: string,
  predicate: (day: DayDiscipline) => boolean,
): number {
  let run = 0;
  let cursor = fromKey;
  while (true) {
    const day = history[cursor];
    if (!day || !predicate(day)) break;
    run += 1;
    cursor = shiftDateKey(cursor, -1);
  }
  return run;
}

export type ExpenseLike = { date: string; amount: number };
export type BudgetMap = Record<string, number>;

/**
 * Recompute discipline from expenses + category budgets.
 * Under-budget day = day's spend ≤ (sum of monthly category budgets / days-in-month),
 * or ≤ income/days-in-month when no category budgets are set.
 */
export function recomputeDiscipline(
  expenses: ExpenseLike[],
  categoryBudgets: BudgetMap,
  income: number,
  previous: DisciplineState,
): DisciplineState {
  const todayKey = toDateKey();
  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
  ).getDate();

  const monthlyBudgetCap =
    Object.values(categoryBudgets).reduce((s, n) => s + (Number.isFinite(n) ? n : 0), 0) ||
    Math.max(0, income);
  const dailyCap = monthlyBudgetCap > 0 ? monthlyBudgetCap / daysInMonth : Infinity;

  const spendByDay: Record<string, number> = {};
  for (const e of expenses) {
    const key = toDateKey(new Date(e.date));
    spendByDay[key] = (spendByDay[key] ?? 0) + e.amount;
  }

  // Merge today's observation into history (preserve older days).
  const dayHistory = { ...previous.dayHistory };
  const todaySpend = spendByDay[todayKey] ?? 0;
  const logged = todaySpend > 0 || Boolean(dayHistory[todayKey]?.logged);
  const underBudget = logged ? todaySpend <= dailyCap : Boolean(dayHistory[todayKey]?.underBudget);

  // Backfill any expense days present in data (last 90 days) without wiping gaps.
  const cutoff = shiftDateKey(todayKey, -90);
  for (const [key, spend] of Object.entries(spendByDay)) {
    if (key < cutoff) continue;
    dayHistory[key] = {
      logged: true,
      underBudget: spend <= dailyCap,
    };
  }
  if (logged || dayHistory[todayKey]) {
    dayHistory[todayKey] = {
      logged: Boolean(dayHistory[todayKey]?.logged || logged),
      underBudget: dayHistory[todayKey]?.logged || logged ? underBudget : false,
    };
  }

  const loggingStreak = countBackwardRun(dayHistory, todayKey, (d) => d.logged);
  const budgetStreak = countBackwardRun(
    dayHistory,
    todayKey,
    (d) => d.logged && d.underBudget,
  );

  return {
    loggingStreak,
    longestLoggingStreak: Math.max(previous.longestLoggingStreak, loggingStreak),
    budgetStreak,
    longestBudgetStreak: Math.max(previous.longestBudgetStreak, budgetStreak),
    dayHistory,
    lastEvaluatedDate: todayKey,
  };
}

/** Heatmap cells for the last N days (oldest → newest). Gaps are neutral, not punitive. */
export function buildHeatmap(
  history: Record<string, DayDiscipline>,
  days = 14,
): { key: string; status: 'logged_ok' | 'logged_over' | 'gap' }[] {
  const today = toDateKey();
  const cells: { key: string; status: 'logged_ok' | 'logged_over' | 'gap' }[] = [];
  for (let i = days - 1; i >= 0; i -= 1) {
    const key = shiftDateKey(today, -i);
    const day = history[key];
    if (!day?.logged) cells.push({ key, status: 'gap' });
    else if (day.underBudget) cells.push({ key, status: 'logged_ok' });
    else cells.push({ key, status: 'logged_over' });
  }
  return cells;
}
````

## File: utils/exportReport.ts
````typescript
/**
 * exportReport.ts
 * Generates CSV or PDF (HTML) financial reports and shares them via the
 * native share sheet using expo-file-system + expo-sharing.
 */

import { Platform } from 'react-native';
import { File, Paths } from 'expo-file-system/next';
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import type { Expense, SavingGoal } from '@/context/AppContext';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ExportOptions {
  format: 'csv' | 'pdf';
  includeExpenses: boolean;
  includeBudgets: boolean;
  includeGoals: boolean;
  dateFrom: Date | null;
  dateTo: Date | null;
  currency: string;
}

export interface BudgetEntry {
  category: string;
  limit: number;
}

export interface ExportData {
  expenses: Expense[];
  budgets: BudgetEntry[];
  savingGoals: SavingGoal[];
  income: number;
  username: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escapeCSV(value: string | number | undefined | null): string {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function filterByDate(expenses: Expense[], from: Date | null, to: Date | null): Expense[] {
  return expenses.filter((e) => {
    const d = new Date(e.date);
    if (from && d < from) return false;
    if (to) {
      const toEnd = new Date(to);
      toEnd.setHours(23, 59, 59, 999);
      if (d > toEnd) return false;
    }
    return true;
  });
}

// ─── CSV Generator ────────────────────────────────────────────────────────────

function buildCSV(data: ExportData, opts: ExportOptions): string {
  const sections: string[] = [];
  const filtered =
    opts.dateFrom || opts.dateTo
      ? filterByDate(data.expenses, opts.dateFrom, opts.dateTo)
      : data.expenses;

  const now = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  sections.push(`Financial Report,${escapeCSV(data.username)},${now}\n`);

  // ── Expenses ──
  if (opts.includeExpenses) {
    sections.push('EXPENSES\n');
    sections.push('Date,Title,Category,Amount,Note\n');
    if (filtered.length === 0) {
      sections.push('No expenses in this period\n');
    } else {
      filtered.forEach((e) => {
        sections.push(
          [
            escapeCSV(formatDate(e.date)),
            escapeCSV(e.title),
            escapeCSV(e.category),
            e.amount.toFixed(2),
            escapeCSV(e.note ?? ''),
          ].join(',') + '\n'
        );
      });
      const total = filtered.reduce((s, e) => s + e.amount, 0);
      sections.push(`,,Total,${total.toFixed(2)},\n`);
    }
    sections.push('\n');
  }

  // ── Budgets ──
  if (opts.includeBudgets) {
    sections.push('BUDGETS\n');
    sections.push('Category,Limit,Spent,Remaining,%Used\n');
    if (data.budgets.length === 0) {
      sections.push('No budgets configured\n');
    } else {
      data.budgets.forEach((b) => {
        const spent = data.expenses
          .filter((e) => e.category.toLowerCase() === b.category.toLowerCase())
          .reduce((s, e) => s + e.amount, 0);
        const remaining = Math.max(0, b.limit - spent);
        const pct = b.limit > 0 ? ((spent / b.limit) * 100).toFixed(1) : '0.0';
        sections.push(
          [
            escapeCSV(b.category),
            b.limit.toFixed(2),
            spent.toFixed(2),
            remaining.toFixed(2),
            `${pct}%`,
          ].join(',') + '\n'
        );
      });
    }
    sections.push('\n');
  }

  // ── Saving Goals ──
  if (opts.includeGoals) {
    sections.push('SAVING GOALS\n');
    sections.push('Title,Target,Saved,Remaining,Progress,Deadline\n');
    if (data.savingGoals.length === 0) {
      sections.push('No saving goals\n');
    } else {
      data.savingGoals.forEach((g) => {
        const remaining = Math.max(0, g.targetAmount - g.currentAmount);
        const pct =
          g.targetAmount > 0
            ? ((g.currentAmount / g.targetAmount) * 100).toFixed(1)
            : '0.0';
        sections.push(
          [
            escapeCSV(g.title),
            g.targetAmount.toFixed(2),
            g.currentAmount.toFixed(2),
            remaining.toFixed(2),
            `${pct}%`,
            escapeCSV(formatDate(g.deadline)),
          ].join(',') + '\n'
        );
      });
    }
    sections.push('\n');
  }

  return sections.join('');
}

// ─── PDF / HTML Generator ─────────────────────────────────────────────────────

function buildHTML(data: ExportData, opts: ExportOptions): string {
  const filtered =
    opts.dateFrom || opts.dateTo
      ? filterByDate(data.expenses, opts.dateFrom, opts.dateTo)
      : data.expenses;

  const now = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const totalExpenses = filtered.reduce((s, e) => s + e.amount, 0);
  const cur = opts.currency;

  const expenseRows =
    filtered.length === 0
      ? `<tr><td colspan="5" style="text-align:center;color:#888;font-style:italic">No expenses in this period</td></tr>`
      : filtered
          .map(
            (e) => `
        <tr>
          <td>${formatDate(e.date)}</td>
          <td>${e.title}</td>
          <td><span class="badge">${e.category}</span></td>
          <td style="font-weight:700;color:#5A2ED4">${cur} ${e.amount.toFixed(2)}</td>
          <td style="color:#888">${e.note ?? '—'}</td>
        </tr>`
          )
          .join('');

  const budgetRows =
    data.budgets.length === 0
      ? `<tr><td colspan="5" style="text-align:center;color:#888;font-style:italic">No budgets configured</td></tr>`
      : data.budgets
          .map((b) => {
            const spent = data.expenses
              .filter((e) => e.category.toLowerCase() === b.category.toLowerCase())
              .reduce((s, e) => s + e.amount, 0);
            const remaining = Math.max(0, b.limit - spent);
            const pct = b.limit > 0 ? (spent / b.limit) * 100 : 0;
            const barColor =
              pct >= 100 ? '#FF3B30' : pct >= 80 ? '#FF9F0A' : '#34C47C';
            return `
        <tr>
          <td>${b.category}</td>
          <td>${cur} ${b.limit.toFixed(2)}</td>
          <td>${cur} ${spent.toFixed(2)}</td>
          <td style="color:${remaining === 0 ? '#FF3B30' : '#34C47C'};font-weight:700">${cur} ${remaining.toFixed(2)}</td>
          <td>
            <div style="background:#eee;border-radius:4px;height:8px;width:100px">
              <div style="background:${barColor};border-radius:4px;height:8px;width:${Math.min(100, pct)}px"></div>
            </div>
            <span style="font-size:11px;color:#888">${pct.toFixed(1)}%</span>
          </td>
        </tr>`;
          })
          .join('');

  const goalRows =
    data.savingGoals.length === 0
      ? `<tr><td colspan="5" style="text-align:center;color:#888;font-style:italic">No saving goals</td></tr>`
      : data.savingGoals
          .map((g) => {
            const remaining = Math.max(0, g.targetAmount - g.currentAmount);
            const pct =
              g.targetAmount > 0
                ? (g.currentAmount / g.targetAmount) * 100
                : 0;
            return `
        <tr>
          <td style="font-weight:600">${g.title}</td>
          <td>${cur} ${g.targetAmount.toFixed(2)}</td>
          <td style="color:#34C47C;font-weight:700">${cur} ${g.currentAmount.toFixed(2)}</td>
          <td>${cur} ${remaining.toFixed(2)}</td>
          <td>
            <div style="background:#eee;border-radius:4px;height:8px;width:100px">
              <div style="background:${g.color || '#5A2ED4'};border-radius:4px;height:8px;width:${Math.min(100, pct)}px"></div>
            </div>
            <span style="font-size:11px;color:#888">${pct.toFixed(1)}% • Due ${formatDate(g.deadline)}</span>
          </td>
        </tr>`;
          })
          .join('');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, Arial, sans-serif; font-size: 13px; color: #1a1a2e; background: #fff; }
  .header { background: linear-gradient(135deg, #5A2ED4, #3C82FF); padding: 32px 40px; color: white; }
  .header h1 { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
  .header p { opacity: 0.75; margin-top: 4px; font-size: 13px; }
  .summary { display: flex; gap: 0; border-bottom: 1px solid #eee; }
  .summary-item { flex: 1; padding: 18px 24px; border-right: 1px solid #eee; }
  .summary-item:last-child { border-right: none; }
  .summary-item .label { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 0.5px; text-transform: uppercase; }
  .summary-item .value { font-size: 20px; font-weight: 800; color: #1a1a2e; margin-top: 4px; }
  .section { padding: 24px 24px 0; }
  .section-title { font-size: 13px; font-weight: 800; color: #5A2ED4; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 2px solid rgba(90,46,212,0.13); }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  th { background: #f5f5fa; font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px; padding: 8px 12px; text-align: left; }
  td { padding: 10px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px; vertical-align: middle; }
  .badge { background: rgba(90,46,212,0.08); color: #5A2ED4; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 20px; }
  .total-row td { font-weight: 800; background: #f5f5fa; border-top: 2px solid #eee; }
  .footer { padding: 16px 24px; color: #bbb; font-size: 11px; text-align: center; border-top: 1px solid #eee; margin-top: 8px; }
</style>
</head>
<body>
  <div class="header">
    <h1>Financial Report</h1>
    <p>@${data.username} &nbsp;&#8226;&nbsp; Generated on ${now}</p>
  </div>

  <div class="summary">
    <div class="summary-item">
      <div class="label">Total Expenses</div>
      <div class="value">${cur} ${totalExpenses.toFixed(2)}</div>
    </div>
    <div class="summary-item">
      <div class="label">Monthly Income</div>
      <div class="value">${cur} ${data.income.toFixed(2)}</div>
    </div>
    <div class="summary-item">
      <div class="label">Saving Goals</div>
      <div class="value">${data.savingGoals.length}</div>
    </div>
    <div class="summary-item">
      <div class="label">Budgets Active</div>
      <div class="value">${data.budgets.length}</div>
    </div>
  </div>

  ${
    opts.includeExpenses
      ? `<div class="section">
    <div class="section-title">Expenses</div>
    <table>
      <thead><tr><th>Date</th><th>Title</th><th>Category</th><th>Amount</th><th>Note</th></tr></thead>
      <tbody>
        ${expenseRows}
        ${filtered.length > 0 ? `<tr class="total-row"><td colspan="3">Total</td><td>${cur} ${totalExpenses.toFixed(2)}</td><td></td></tr>` : ''}
      </tbody>
    </table>
  </div>`
      : ''
  }

  ${
    opts.includeBudgets
      ? `<div class="section">
    <div class="section-title">Budgets</div>
    <table>
      <thead><tr><th>Category</th><th>Limit</th><th>Spent</th><th>Remaining</th><th>Usage</th></tr></thead>
      <tbody>${budgetRows}</tbody>
    </table>
  </div>`
      : ''
  }

  ${
    opts.includeGoals
      ? `<div class="section">
    <div class="section-title">Saving Goals</div>
    <table>
      <thead><tr><th>Goal</th><th>Target</th><th>Saved</th><th>Remaining</th><th>Progress</th></tr></thead>
      <tbody>${goalRows}</tbody>
    </table>
  </div>`
      : ''
  }

  <div class="footer">Generated by ExpenseTracker App &bull; ${now}</div>
</body>
</html>`;
}

function downloadOnWeb(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

// ─── Main Export Function ─────────────────────────────────────────────────────

export async function exportReport(data: ExportData, opts: ExportOptions): Promise<void> {
  if (opts.format === 'csv') {
    const csv = buildCSV(data, opts);
    const fileName = `financial_report_${Date.now()}.csv`;

    if (Platform.OS === 'web') {
      downloadOnWeb(csv, fileName, 'text/csv');
      return;
    }

    const isAvailable = await Sharing.isAvailableAsync();
    if (!isAvailable) {
      throw new Error('Sharing is not available on this device.');
    }

    const file = new File(Paths.document, fileName);
    file.write(csv);
    await Sharing.shareAsync(file.uri, {
      mimeType: 'text/csv',
      dialogTitle: 'Export Financial Report (CSV)',
    });
    return;
  }

  const html = buildHTML(data, opts);

  if (Platform.OS === 'web') {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      throw new Error('Pop-up blocked. Allow pop-ups to export PDF on web.');
    }
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    return;
  }

  const isAvailable = await Sharing.isAvailableAsync();
  if (!isAvailable) {
    throw new Error('Sharing is not available on this device.');
  }

  const { uri } = await Print.printToFileAsync({ html });
  await Sharing.shareAsync(uri, {
    mimeType: 'application/pdf',
    dialogTitle: 'Export Financial Report (PDF)',
  });
}
````

## File: utils/financialHealth.ts
````typescript
import { Expense, SavingGoal, Subscription } from "@/context/AppContext";
import { getCategoryByKey } from "@/utils/categories";

export type HealthAlertSeverity = "critical" | "warning" | "info" | "positive";

export interface HealthAlert {
  id: string;
  severity: HealthAlertSeverity;
  icon: string;
  title: string;
  message: string;
  action: string;
  impact: number;
}

export interface FinancialHealthAnalysis {
  score: number;
  status: "Excellent" | "Stable" | "Watch" | "At Risk";
  alerts: HealthAlert[];
  metrics: {
    monthSpent: number;
    projectedMonthSpend: number;
    cashLeft: number;
    savingsThisMonth: number;
    savingsRate: number;
    subscriptionLoad: number;
    budgetCount: number;
  };
}

interface AnalyzeFinancialHealthInput {
  expenses: Expense[];
  subscriptions: Subscription[];
  savingGoals: SavingGoal[];
  income: number;
  categoryBudgets: Record<string, number>;
}

const DAY_MS = 86400000;

export function analyzeFinancialHealth({
  expenses,
  subscriptions,
  savingGoals,
  income,
  categoryBudgets,
}: AnalyzeFinancialHealthInput): FinancialHealthAnalysis {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const dayOfMonth = Math.max(1, now.getDate());
  const daysRemaining = Math.max(0, daysInMonth - dayOfMonth);
  const thisMonthExpenses = expenses.filter((expense) => new Date(expense.date) >= monthStart);
  const monthSpent = sumExpenses(thisMonthExpenses);
  const dailyAverage = monthSpent / dayOfMonth;
  const projectedMonthSpend = dailyAverage * daysInMonth;
  const cashLeft = income - monthSpent;
  const savingsThisMonth = savingGoals.reduce(
    (sum, goal) =>
      sum +
      goal.deposits
        .filter((deposit) => new Date(deposit.date) >= monthStart)
        .reduce((depositSum, deposit) => depositSum + deposit.amount, 0),
    0
  );
  const savingsRate = income > 0 ? savingsThisMonth / income : 0;
  const monthlySubscriptions = subscriptions.reduce(
    (sum, sub) => sum + (sub.period === "yearly" ? sub.amount / 12 : sub.amount),
    0
  );
  const subscriptionLoad = income > 0 ? monthlySubscriptions / income : 0;
  const activeBudgets = Object.entries(categoryBudgets).filter(([, budget]) => budget > 0);
  const alerts: HealthAlert[] = [];
  let penalty = 0;
  let reward = 0;

  if (income <= 0) {
    alerts.push({
      id: "income-missing",
      severity: "critical",
      icon: "cash-outline",
      title: "Monthly income is missing",
      message: "The score cannot judge cash-flow pressure accurately until your income is set.",
      action: "Set a realistic monthly income from the dashboard.",
      impact: 18,
    });
    penalty += 18;
  }

  const projectedIncomeRatio = income > 0 ? projectedMonthSpend / income : 1;
  if (projectedIncomeRatio > 1) {
    const overBy = projectedMonthSpend - income;
    const impact = clamp(12 + projectedIncomeRatio * 10, 14, 28);
    penalty += impact;
    alerts.push({
      id: "overspend-projection",
      severity: "critical",
      icon: "trending-up-outline",
      title: "Month-end spending is trending over income",
      message: `At your current pace, expenses may exceed income by ${Math.round(overBy)} this month.`,
      action: `Cut about ${Math.round(overBy / Math.max(1, daysRemaining || 1))} per remaining day to break even.`,
      impact,
    });
  } else if (projectedIncomeRatio > 0.82) {
    const impact = clamp(projectedIncomeRatio * 14, 8, 16);
    penalty += impact;
    alerts.push({
      id: "thin-buffer",
      severity: "warning",
      icon: "speedometer-outline",
      title: "Your monthly buffer is getting thin",
      message: `Projected spending is around ${Math.round(projectedIncomeRatio * 100)}% of monthly income.`,
      action: "Delay non-essential purchases until the next income cycle.",
      impact,
    });
  } else if (income > 0 && projectedIncomeRatio < 0.65 && monthSpent > 0) {
    reward += 4;
    alerts.push({
      id: "healthy-buffer",
      severity: "positive",
      icon: "shield-checkmark-outline",
      title: "Cash-flow buffer looks healthy",
      message: `Projected spending is only ${Math.round(projectedIncomeRatio * 100)}% of income.`,
      action: "Consider moving part of the surplus into savings before it gets spent casually.",
      impact: -4,
    });
  }

  if (activeBudgets.length === 0) {
    penalty += 6;
    alerts.push({
      id: "no-category-budgets",
      severity: "info",
      icon: "options-outline",
      title: "No category budgets are active",
      message: "Smart alerts get sharper when categories have monthly limits.",
      action: "Set limits for your top three spending categories.",
      impact: 6,
    });
  }

  const monthByCategory = groupExpensesByCategory(thisMonthExpenses);
  activeBudgets.forEach(([categoryKey, budget]) => {
    const spent = monthByCategory[categoryKey] ?? 0;
    if (spent <= 0) return;

    const projected = (spent / dayOfMonth) * daysInMonth;
    const ratio = projected / budget;
    const category = getCategoryByKey(categoryKey);

    if (ratio >= 1.05) {
      const impact = clamp((ratio - 0.75) * 18, 8, 20);
      penalty += impact;
      alerts.push({
        id: `budget-risk-${categoryKey}`,
        severity: ratio >= 1.25 ? "critical" : "warning",
        icon: category.icon,
        title: `${category.label} budget is likely to break`,
        message: `You have spent ${Math.round((spent / budget) * 100)}% of the limit; the month-end pace points to ${Math.round(ratio * 100)}%.`,
        action: `Keep ${category.label.toLowerCase()} under ${Math.max(0, Math.round((budget - spent) / Math.max(1, daysRemaining || 1)))} per day for the rest of the month.`,
        impact,
      });
    } else if (spent / budget > 0.8) {
      const impact = 6;
      penalty += impact;
      alerts.push({
        id: `budget-near-${categoryKey}`,
        severity: "warning",
        icon: category.icon,
        title: `${category.label} is close to its limit`,
        message: `This category has used ${Math.round((spent / budget) * 100)}% of its monthly budget.`,
        action: "Switch to lower-cost choices for the next few days.",
        impact,
      });
    }
  });

  findCategorySpikes(expenses, now).forEach((spike) => {
    const category = getCategoryByKey(spike.category);
    const impact = clamp(spike.percent / 12, 5, 14);
    penalty += impact;
    alerts.push({
      id: `spike-${spike.category}`,
      severity: spike.percent > 60 ? "warning" : "info",
      icon: category.icon,
      title: `${category.label} jumped this week`,
      message: `You spent ${Math.round(spike.percent)}% more than the previous week in this category.`,
      action: spike.category === "food"
        ? "Plan two home meals before your next dining purchase."
        : `Pause new ${category.label.toLowerCase()} spending until the weekly average cools down.`,
      impact,
    });
  });

  const concentration = getLargestCategoryShare(monthByCategory);
  if (concentration && concentration.share > 0.45 && monthSpent > income * 0.15) {
    const category = getCategoryByKey(concentration.category);
    const impact = clamp(concentration.share * 16, 6, 12);
    penalty += impact;
    alerts.push({
      id: "category-concentration",
      severity: "info",
      icon: "pie-chart-outline",
      title: `${category.label} is dominating spending`,
      message: `${category.label} represents ${Math.round(concentration.share * 100)}% of this month's expenses.`,
      action: "Review the largest transactions there and tag anything that belongs elsewhere.",
      impact,
    });
  }

  if (subscriptionLoad > 0.14) {
    const impact = clamp(subscriptionLoad * 60, 8, 16);
    penalty += impact;
    alerts.push({
      id: "subscription-load",
      severity: "warning",
      icon: "repeat-outline",
      title: "Subscriptions are taking a large slice",
      message: `Recurring charges are about ${Math.round(subscriptionLoad * 100)}% of monthly income.`,
      action: "Cancel or downgrade one recurring charge before adding another.",
      impact,
    });
  } else if (subscriptionLoad > 0.08) {
    penalty += 5;
    alerts.push({
      id: "subscription-watch",
      severity: "info",
      icon: "repeat-outline",
      title: "Subscription load is worth watching",
      message: `Recurring charges are about ${Math.round(subscriptionLoad * 100)}% of income.`,
      action: "Audit subscriptions once this month.",
      impact: 5,
    });
  }

  if (income > 0 && savingsRate < 0.05 && cashLeft > income * 0.1) {
    penalty += 7;
    alerts.push({
      id: "low-savings-rate",
      severity: "info",
      icon: "wallet-outline",
      title: "Savings pace is below target",
      message: `Only ${Math.round(savingsRate * 100)}% of income has moved into goals this month.`,
      action: "Try an automatic transfer of 5-10% after payday.",
      impact: 7,
    });
  } else if (savingsRate >= 0.1) {
    reward += 5;
    alerts.push({
      id: "strong-savings-rate",
      severity: "positive",
      icon: "trending-up-outline",
      title: "Savings momentum is strong",
      message: `${Math.round(savingsRate * 100)}% of income has gone into goals this month.`,
      action: "Keep this transfer amount consistent next month.",
      impact: -5,
    });
  }

  const recentLargeExpenses = findRecentLargeExpenses(thisMonthExpenses, income, dailyAverage, now);
  recentLargeExpenses.forEach((expense) => {
    const category = getCategoryByKey(expense.category);
    const impact = 6;
    penalty += impact;
    alerts.push({
      id: `large-${expense.id}`,
      severity: "info",
      icon: "alert-circle-outline",
      title: "Large recent transaction detected",
      message: `${expense.title} is unusually high for your current spending pace.`,
      action: `Check whether this ${category.label.toLowerCase()} purchase was one-time or should change next month's budget.`,
      impact,
    });
  });

  if (alerts.length === 0) {
    alerts.push({
      id: "not-enough-data",
      severity: "info",
      icon: "analytics-outline",
      title: "Track a few more transactions",
      message: "The score will become more useful after it sees spending across several days.",
      action: "Log expenses for a full week to unlock better trend alerts.",
      impact: 0,
    });
  }

  const score = Math.round(clamp(100 - penalty + reward, 0, 100));
  return {
    score,
    status: getScoreStatus(score),
    alerts: alerts
      .sort((a, b) => severityRank(b.severity) - severityRank(a.severity) || b.impact - a.impact)
      .slice(0, 5),
    metrics: {
      monthSpent,
      projectedMonthSpend,
      cashLeft,
      savingsThisMonth,
      savingsRate,
      subscriptionLoad,
      budgetCount: activeBudgets.length,
    },
  };
}

function sumExpenses(expenses: Expense[]) {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function groupExpensesByCategory(expenses: Expense[]) {
  return expenses.reduce<Record<string, number>>((acc, expense) => {
    acc[expense.category] = (acc[expense.category] ?? 0) + expense.amount;
    return acc;
  }, {});
}

function findCategorySpikes(expenses: Expense[], now: Date) {
  const thisWeekStart = new Date(now.getTime() - 7 * DAY_MS);
  const lastWeekStart = new Date(now.getTime() - 14 * DAY_MS);
  const thisWeek = groupExpensesByCategory(expenses.filter((expense) => {
    const date = new Date(expense.date);
    return date >= thisWeekStart && date <= now;
  }));
  const lastWeek = groupExpensesByCategory(expenses.filter((expense) => {
    const date = new Date(expense.date);
    return date >= lastWeekStart && date < thisWeekStart;
  }));

  return Object.entries(thisWeek)
    .map(([category, amount]) => {
      const previous = lastWeek[category] ?? 0;
      const percent = previous > 0 ? ((amount - previous) / previous) * 100 : amount > 80 ? 100 : 0;
      return { category, amount, previous, percent };
    })
    .filter((spike) => spike.amount > 40 && spike.percent >= 20)
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 2);
}

function getLargestCategoryShare(byCategory: Record<string, number>) {
  const entries = Object.entries(byCategory);
  const total = entries.reduce((sum, [, amount]) => sum + amount, 0);
  if (total <= 0 || entries.length === 0) return null;
  const [category, amount] = entries.sort((a, b) => b[1] - a[1])[0];
  return { category, share: amount / total };
}

function findRecentLargeExpenses(expenses: Expense[], income: number, dailyAverage: number, now: Date) {
  const recentCutoff = new Date(now.getTime() - 4 * DAY_MS);
  const threshold = Math.max(income * 0.08, dailyAverage * 2.5, 120);
  return expenses
    .filter((expense) => new Date(expense.date) >= recentCutoff && expense.amount >= threshold)
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 1);
}

function getScoreStatus(score: number): FinancialHealthAnalysis["status"] {
  if (score >= 85) return "Excellent";
  if (score >= 70) return "Stable";
  if (score >= 50) return "Watch";
  return "At Risk";
}

function severityRank(severity: HealthAlertSeverity) {
  if (severity === "critical") return 4;
  if (severity === "warning") return 3;
  if (severity === "info") return 2;
  return 1;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
````

## File: utils/forecast.ts
````typescript
// Utility for financial projection calculations

export interface ProjectionPoint {
  month: number;
  balance: number;
}

export function calcProjection(
  initial: number,
  monthly: number,
  annualRatePercent: number,
  years: number,
): ProjectionPoint[] {
  const months = years * 12;
  const monthlyRate = annualRatePercent / 100 / 12;
  let balance = initial;
  const data: ProjectionPoint[] = [];
  for (let i = 1; i <= months; i++) {
    balance = balance * (1 + monthlyRate) + monthly;
    data.push({ month: i, balance });
  }
  return data;
}
````

## File: utils/formatters.ts
````typescript
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency,
    minimumFractionDigits: 2, maximumFractionDigits: 2,
  }).format(amount);
}

export function formatShortDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === now.toDateString()) return 'Today';
  if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function formatMonthLabel(isoKey: string): string {
  const [y, m] = isoKey.split('-');
  const d = new Date(parseInt(y), parseInt(m) - 1, 1);
  return d.toLocaleDateString('en-US', { month: 'short' });
}

export function getDaysRemaining(deadline: string): number {
  const diff = Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000);
  return Math.max(0, diff);
}

export function getMonthKey(isoString: string): string {
  const d = new Date(isoString);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}
````

## File: .gitignore
````
# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

# dependencies
node_modules/

# Expo
.expo/
dist/
web-build/
expo-env.d.ts

# Native
.kotlin/
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store
*.pem

# local env files
.env*.local

# typescript
*.tsbuildinfo

app-example

# generated native folders
/ios
/android
````

## File: .npmrc
````
# The workspace path contains an ampersand. Use PowerShell for npm scripts so
# Windows does not interpret that character as a command separator.
script-shell=powershell.exe
````

## File: app.json
````json
{
  "expo": {
    "name": "expense_tracker",
    "slug": "expense_tracker",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "expensetracker",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true,
      "infoPlist": {
        "NSUserNotificationsUsageDescription": "ExpenseTrack sends daily reminders to log expenses and alerts when you approach category budget limits."
      }
    },
    "android": {
      "softwareKeyboardLayoutMode": "resize",
      "adaptiveIcon": {
        "backgroundColor": "#E6F4FE",
        "foregroundImage": "./assets/images/android-icon-foreground.png",
        "backgroundImage": "./assets/images/android-icon-background.png",
        "monochromeImage": "./assets/images/android-icon-monochrome.png"
      },
      "edgeToEdgeEnabled": false,
      "predictiveBackGestureEnabled": false,
      "package": "com.anonymous.expense_tracker"
    },
    "web": {
      "output": "static",
      "favicon": "./assets/images/favicon.png",
      "meta": {
        "title": "Expense Tracker",
        "description": "Cross-platform budgeting, savings, and expense tracking in Expo web, mobile, and desktop browsers.",
        "themeColor": "#6C3FEF",
        "appleMobileWebAppCapable": "yes",
        "appleMobileWebAppStatusBarStyle": "default"
      },
      "manifest": {
        "name": "Expense Tracker",
        "short_name": "ExpenseTracker",
        "background_color": "#ffffff",
        "theme_color": "#6C3FEF",
        "display": "standalone"
      }
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff",
          "dark": {
            "backgroundColor": "#000000"
          }
        }
      ],
      "expo-sqlite",
      "expo-web-browser",
      "expo-secure-store",
      [
        "expo-notifications",
        {
          "icon": "./assets/images/android-icon-monochrome.png",
          "color": "#6C3FEF"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true,
      "reactCompiler": true
    }
  }
}
````

## File: ARCHITECTURE.md
````markdown
# High-Performance Expense Tracker - Architecture Guide

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install zustand react-native-mmkv react-native-wagmi-charts expo-camera expo-local-authentication
npm install --save-dev @types/react-native-wagmi-charts
```

### 2. Optional UI Framework (Choose One)

#### Option A: Tamagui (Recommended)

```bash
npm install tamagui @tamagui/core @tamagui/config
```

#### Option B: NativeWind (Tailwind CSS)

```bash
npm install nativewind tailwindcss
npx tailwindcss init
```

### 3. Full Dependencies List

```json
{
  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "@react-native-async-storage/async-storage": "2.2.0",
    "@react-navigation/bottom-tabs": "^7.4.0",
    "@react-navigation/native": "^7.1.8",
    "expo": "~54.0.34",
    "expo-camera": "~15.0.8",
    "expo-local-authentication": "~14.0.8",
    "expo-router": "~6.0.23",
    "expo-sqlite": "~16.0.10",
    "react": "19.1.0",
    "react-native": "0.81.5",
    "react-native-mmkv": "^2.10.0",
    "react-native-wagmi-charts": "^1.3.0",
    "zustand": "^4.4.0"
  }
}
```

## 🏗️ Recommended File Structure

```
app/
├── (auth)/
│   ├── login.tsx
│   ├── register.tsx
│   └── biometric-setup.tsx
├── (tabs)/
│   ├── _layout.tsx
│   ├── index.tsx (Dashboard - Safe-to-Spend)
│   ├── transactions.tsx
│   ├── analytics.tsx
│   └── settings.tsx
├── scanner/
│   └── receipt-scanner.tsx
├── onboarding.tsx
└── _layout.tsx

components/
├── QuickAddFAB.tsx
├── SpendingForecast.tsx
├── ReceiptScanner.tsx
├── SafeToSpendCard.tsx
├── TransactionItem.tsx
└── BiometricGate.tsx

store/
├── useAppStore.ts (Zustand store)
├── useTransactionStore.ts
├── useBudgetStore.ts
└── types.ts

services/
├── storage.ts (MMKV setup)
├── biometric.ts
├── camera.ts
└── analytics.ts

utils/
├── calculations.ts
├── formatters.ts
├── validators.ts
└── constants.ts
```

## 🔑 Key Concepts

### Safe-to-Spend Logic

```
Safe-to-Spend = (Income - Fixed Expenses - Budget Allocations) / Days Remaining
```

### State Management Flow

```
User Action → Zustand Store → MMKV Persistence → UI Update
```

### Data Encryption

- MMKV encrypts sensitive data by default
- Biometric auth gates transaction viewing

### Performance Optimizations

- React.memo for list items
- useMemo for calculations
- useCallback for handlers
- Native animations (react-native-reanimated)
- MMKV instead of AsyncStorage (10x faster)

## 🔐 Security Implementation

- Biometric authentication (Face ID / Fingerprint)
- MMKV encrypted storage
- Sensitive data never in plain text
- Session-based access control
````

## File: babel.config.js
````javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
````

## File: eslint-report.json
````json
[{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\.expo\\types\\router.d.ts","messages":[],"suppressedMessages":[{"ruleId":"@typescript-eslint/no-unused-vars","severity":1,"message":"'T' is defined but never used.","line":8,"column":31,"nodeType":"Identifier","messageId":"unusedVar","endLine":8,"endColumn":32,"suppressions":[{"kind":"directive","justification":""}]}],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\(tabs)\\_layout.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\(tabs)\\expenses.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\(tabs)\\explore.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\(tabs)\\index.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\(tabs)\\savings.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\(tabs)\\settings.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\(tabs)\\statistics.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\_layout.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\add-expense.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\add-saving.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\login.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\manage-budgets.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\modal.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\app\\saving-detail.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\BalanceCard.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\Button.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\Card.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\CategoryIcon.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\ExpenseItem.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\Input.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\ProgressBar.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\SavingGoalCard.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\external-link.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\haptic-tab.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\hello-wave.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\parallax-scroll-view.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\themed-text.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\themed-view.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\ui\\collapsible.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\ui\\icon-symbol.ios.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\components\\ui\\icon-symbol.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\constants\\Colors.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\constants\\Theme.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\context\\AppContext.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\context\\AuthContext.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\context\\ThemeContext.tsx","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\context\\authDb.native.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\context\\authDb.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\eslint.config.js","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\expo-env.d.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\hooks\\use-color-scheme.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\hooks\\use-color-scheme.web.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\hooks\\use-theme-color.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\scripts\\reset-project.js","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\utils\\calculations.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\utils\\categories.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]},{"filePath":"C:\\Users\\Admin\\Desktop\\Projekti te Valtoni\\expense_tracker\\utils\\formatters.ts","messages":[],"suppressedMessages":[],"errorCount":0,"fatalErrorCount":0,"warningCount":0,"fixableErrorCount":0,"fixableWarningCount":0,"usedDeprecatedRules":[]}]
````

## File: eslint.config.js
````javascript
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);
````

## File: expo_error.txt
````
Input is required, but 'npx expo' is in non-interactive mode.
Required input:
> Use port 8082 instead?
````

## File: expo_output.txt
````
Starting project at C:\temp_expense_tracker
› Port 8081 is being used by another process
› Skipping dev server
````

## File: package.json
````json
{
  "name": "expense_tracker",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "scripts": {
    "start": "node ./node_modules/expo/bin/cli start",
    "start:tunnel": "node ./node_modules/expo/bin/cli start --tunnel",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "node ./node_modules/expo/bin/cli run:android",
    "android:bundle": "Set-Location android; .\\gradlew.bat bundleRelease",
    "verify:android-size": "node ./scripts/verify-android-size.js",
    "ios": "node ./node_modules/expo/bin/cli run:ios",
    "web": "node ./node_modules/expo/bin/cli start --web",
    "lint": "node ./node_modules/eslint/bin/eslint.js . --no-cache"
  },
  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "@react-native-async-storage/async-storage": "2.2.0",
    "@shopify/flash-list": "^2.0.2",
    "@supabase/supabase-js": "^2.110.7",
    "expo": "~54.0.37",
    "expo-camera": "~17.0.10",
    "expo-constants": "~18.0.14",
    "expo-document-picker": "~14.0.8",
    "expo-file-system": "~19.0.24",
    "expo-font": "~14.0.12",
    "expo-haptics": "~15.0.8",
    "expo-linear-gradient": "~15.0.8",
    "expo-linking": "~8.0.12",
    "expo-local-authentication": "~17.0.9",
    "expo-notifications": "~0.32.17",
    "expo-print": "~15.0.8",
    "expo-router": "~6.0.24",
    "expo-secure-store": "~15.0.8",
    "expo-sharing": "~14.0.8",
    "expo-splash-screen": "~31.0.13",
    "expo-sqlite": "~16.0.10",
    "expo-status-bar": "~3.0.9",
    "expo-system-ui": "~6.0.9",
    "expo-web-browser": "~15.0.11",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "react-native-chart-kit": "^6.12.0",
    "react-native-confetti-cannon": "^1.5.2",
    "react-native-gesture-handler": "~2.28.0",
    "react-native-reanimated": "~4.1.1",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-svg": "15.12.1",
    "react-native-web": "~0.21.0",
    "react-native-worklets": "0.5.1",
    "zustand": "^5.0.13"
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "babel-preset-expo": "~54.0.10",
    "eslint": "^9.25.0",
    "eslint-config-expo": "~10.0.0",
    "typescript": "~5.9.2"
  },
  "overrides": {
    "@xmldom/xmldom": "0.8.13"
  },
  "private": true
}
````

## File: README.md
````markdown
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
````

## File: search_hash_private2.js
````javascript
const fs = require("fs");
const path = require("path");
const root = path.join(process.cwd(), "node_modules");
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".bin") continue;
      walk(p);
    } else if (p.endsWith(".js") || p.endsWith(".mjs") || p.endsWith(".ts")) {
      files.push(p);
    }
  }
}
function findPrivateSyntax(txt) {
  let inSingle = false,
    inDouble = false,
    inTemplate = false,
    inLine = false,
    inBlock = false,
    escape = false;
  for (let i = 0; i < txt.length; i++) {
    const ch = txt[i];
    if (inLine) {
      if (ch === "\n") inLine = false;
      continue;
    }
    if (inBlock) {
      if (ch === "/" && txt[i - 1] === "*") inBlock = false;
      continue;
    }
    if (escape) {
      escape = false;
      continue;
    }
    if (inSingle) {
      if (ch === "\\") escape = true;
      else if (ch === "'") inSingle = false;
      continue;
    }
    if (inDouble) {
      if (ch === "\\") escape = true;
      else if (ch === '"') inDouble = false;
      continue;
    }
    if (inTemplate) {
      if (ch === "\\") escape = true;
      else if (ch === "`") inTemplate = false;
      continue;
    }
    if (ch === "'") {
      inSingle = true;
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      continue;
    }
    if (ch === "`") {
      inTemplate = true;
      continue;
    }
    if (ch === "/" && txt[i + 1] === "/") {
      inLine = true;
      continue;
    }
    if (ch === "/" && txt[i + 1] === "*") {
      inBlock = true;
      continue;
    }
    if (ch === "#") {
      const next = txt[i + 1] || "";
      if (/[_$A-Za-z]/.test(next)) return i;
    }
  }
  return -1;
}
walk(root);
let count = 0;
for (const file of files) {
  try {
    const txt = fs.readFileSync(file, "utf8");
    if (findPrivateSyntax(txt) !== -1) {
      console.log(file);
      count++;
      if (count >= 80) break;
    }
  } catch {}
}
console.log("done", count);
````

## File: search_hash_private3.js
````javascript
const fs = require("fs");
const path = require("path");
const roots = [
  "node_modules/expo-router",
  "node_modules/expo",
  "node_modules/react-native",
  "node_modules/react-native-web",
  "node_modules/@react-native",
  "node_modules/react-native-gesture-handler",
  "node_modules/react-native-reanimated",
  "node_modules/react-native-safe-area-context",
  "node_modules/react-native-screens",
  "node_modules/react-native-svg",
];
const found = new Set();
function isSourceFile(file) {
  return file.endsWith(".js") || file.endsWith(".mjs") || file.endsWith(".ts");
}
function scanFile(file) {
  try {
    const txt = fs.readFileSync(file, "utf8");
    for (let i = 0; i < txt.length; i++) {
      if (txt[i] === "#") {
        const next = txt[i + 1] || "";
        if (/[_$A-Za-z]/.test(next)) {
          return true;
        }
      }
    }
  } catch {}
  return false;
}
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".bin") continue;
      walk(p);
    } else if (isSourceFile(p)) {
      if (scanFile(p)) {
        found.add(p);
      }
    }
  }
}
roots.forEach((root) => walk(path.join(process.cwd(), root)));
for (const file of found) {
  console.log(file);
}
console.log("done", found.size);
````

## File: search_private.js
````javascript
const fs = require("fs");
const path = require("path");
const root = path.join(process.cwd(), "node_modules");
const regex = /this\.#/;
let found = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".bin") continue;
      walk(p);
      if (found >= 50) return;
    } else if (p.endsWith(".js")) {
      try {
        const txt = fs.readFileSync(p, "utf8");
        if (regex.test(txt)) {
          console.log(p);
          found++;
          if (found >= 50) return;
        }
      } catch {}
    }
  }
}
walk(root);
console.log("done", found);
````

## File: SETUP_GUIDE.md
````markdown
# High-Performance Expense Tracker - Complete Setup

## 🚀 Quick Start

### Step 1: Install Required Dependencies

```bash
# Core state management and storage
npm install zustand react-native-mmkv

# Charts and analytics
npm install react-native-wagmi-charts

# Camera for receipt scanning
npm install expo-camera

# Biometric authentication
npm install expo-local-authentication
```

### Step 2: Integration Steps

#### 2a. Update `_layout.tsx` to use BiometricGate

```tsx
import BiometricGate from "@/components/BiometricGate";

// Wrap your main content
<BiometricGate>{/* Your existing layout */}</BiometricGate>;
```

#### 2b. Replace Dashboard (`index.tsx`)

Copy the code from `components/SafeToSpendCard.tsx`, `components/SpendingForecast.tsx`, and `components/QuickAddFAB.tsx` into your main dashboard.

#### 2c. Enable MMKV Storage

In your store initialization:

```tsx
import StorageService from "@/services/storage";

// All state will now persist automatically
useAppStore.subscribe(
  (state) => state.transactions,
  (transactions) => StorageService.setItem("transactions", transactions),
);
```

### Step 3: Create Scanner Route

Create `app/scanner/receipt-scanner.tsx`:

```tsx
import { ReceiptScanner } from "@/components/ReceiptScanner";
export default ReceiptScanner;
```

---

## 📊 Safe-to-Spend Algorithm

The core logic that powers the dashboard:

```typescript
interface DashboardMetrics {
  totalIncome: number; // Monthly income
  totalExpenses: number; // Spent this month
  safeToSpend: number; // Daily safe amount
  burnRate: number; // Average spending/day
  daysRemaining: number; // Days left in month
}

// Calculation Logic:
const now = new Date();
const daysInMonth = getDaysInMonth();
const daysRemaining = daysInMonth - now.getDate();

// Fixed recurring expenses
const fixedExpenses = transactions
  .filter((t) => t.recurring)
  .sum((t) => t.amount);

// Total budget allocations
const totalBudgets = Object.values(budgets).sum((b) => b.limit);

// Safe-to-Spend per day
safeToSpend = (totalIncome - fixedExpenses - totalBudgets) / daysRemaining;

// Current burn rate
burnRate = totalExpenses / (now.getDate() || 1);

// Projection
projectedTotal = burnRate * daysInMonth;
```

### Status Colors:

- 🟢 **Green (> $100/day)**: Healthy spending
- 🟡 **Yellow ($50-$100/day)**: Moderate warning
- 🔴 **Red (< $50/day)**: Critical warning

---

## 🏗️ File Structure

```
app/
├── (auth)/
│   ├── login.tsx
│   ├── register.tsx
│   └── biometric-setup.tsx
├── (tabs)/
│   ├── _layout.tsx
│   ├── index.tsx (Dashboard with Safe-to-Spend)
│   ├── transactions.tsx
│   ├── analytics.tsx
│   └── settings.tsx
├── scanner/
│   └── receipt-scanner.tsx
├── onboarding.tsx
└── _layout.tsx

components/
├── QuickAddFAB.tsx (Floating Action Button)
├── SpendingForecast.tsx (Chart & projections)
├── ReceiptScanner.tsx (Camera + OCR UI)
├── SafeToSpendCard.tsx (Main metric display)
├── BiometricGate.tsx (Face ID / Fingerprint)
├── TransactionItem.tsx
└── Input.tsx

store/
├── useAppStore.ts (Zustand + persistence)
├── useTransactionStore.ts
├── useBudgetStore.ts
└── types.ts (TypeScript interfaces)

services/
├── storage.ts (MMKV setup)
├── biometric.ts (Authentication logic)
├── camera.ts (Camera utilities)
└── analytics.ts (Event tracking)

utils/
├── calculations.ts
├── formatters.ts
├── validators.ts
└── constants.ts
```

---

## 🔒 Security Features

### 1. Biometric Authentication

```tsx
import BiometricService from "@/services/biometric";

// Check if biometric is available
const available = await BiometricService.isBiometricAvailable();

// Authenticate user
const success = await BiometricService.authenticate();
```

### 2. MMKV Encryption

- Automatically encrypts all data at rest
- 256-bit encryption
- Fast access (10x faster than AsyncStorage)

### 3. Session Management

- Automatic timeout after inactivity
- Re-authentication required
- Secure token storage

---

## 📈 Key Features

### Safe-to-Spend Dashboard

- **Real-time metrics** updated as you spend
- **Burn rate prediction** for remaining days
- **Budget compliance** tracking
- **Daily limits** based on income

### Quick-Add FAB

- 3-quick options: Receipt, Card, Cash
- Expandable animation
- One-tap transaction entry
- Smooth interactions

### Spending Forecast

- Line chart showing daily trend
- Projection based on burn rate
- Visual warnings
- Month-end projections

### Receipt Scanner

- Camera integration
- OCR placeholder (integrate with Tesseract.js or AWS)
- Auto-categorization
- Bulk import

### Biometric Security

- Face ID / Fingerprint unlock
- Encrypted storage
- Session-based access
- Configurable timeout

---

## 🎯 Performance Optimization

### 1. Zustand Store

- Minimal re-renders
- Selective subscriptions
- Memoized selectors
- Persist middleware

### 2. MMKV Storage

```tsx
// 10x faster than AsyncStorage
StorageService.setItem("key", value); // Non-blocking
```

### 3. Component Optimization

```tsx
// Memoized expensive components
const SlideItem = React.memo(({ slide }) => {
  // Heavy computation cached
});
```

### 4. Native Animations

- `useNativeDriver: true` where possible
- Gesture-based interactions
- Smooth 60fps animations

---

## 🚀 Deployment Checklist

- [ ] Zustand store configured
- [ ] MMKV persistence enabled
- [ ] Biometric auth integrated
- [ ] Safe-to-Spend dashboard functional
- [ ] QuickAdd FAB working
- [ ] Spending Forecast rendering
- [ ] Receipt Scanner UI ready
- [ ] Tested on iOS and Android
- [ ] Error handling implemented
- [ ] Analytics integrated

---

## 📚 Additional Resources

### Zustand Documentation

- https://github.com/pmndrs/zustand

### MMKV

- https://github.com/mrousavy/react-native-mmkv

### Expo Camera

- https://docs.expo.dev/camera/overview/

### Expo Local Authentication

- https://docs.expo.dev/local-authentication/overview/

---

## 💡 Tips

1. **Test biometric on device**: Simulator doesn't support face/fingerprint
2. **Use MMKV for sensitive data**: Financial information should be encrypted
3. **Add analytics**: Track user spending patterns
4. **Implement cloud sync**: For multi-device support
5. **Add notifications**: Alert user when approaching budget limits

---

## 🆘 Troubleshooting

### Biometric Not Working

```tsx
// Check if device supports it
const supported = await BiometricService.isBiometricAvailable();
if (!supported) {
  console.warn("Device does not support biometric");
}
```

### MMKV Storage Issues

```tsx
// Clear storage if corrupted
StorageService.clear();
// Re-initialize
StorageService.setItem("init", true);
```

### Chart Not Rendering

- Ensure `react-native-wagmi-charts` is properly installed
- Check data format matches expected interface
- Verify colors are valid hex codes

---

Generated: May 7, 2026
Version: 2.0 (High-Performance Architecture)
````

## File: tsc-output.txt
````

````

## File: tsconfig.json
````json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
  ]
}
````
