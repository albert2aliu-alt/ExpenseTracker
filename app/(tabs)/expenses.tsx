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
