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
import Ionicons from "@expo/vector-icons/Ionicons";
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
