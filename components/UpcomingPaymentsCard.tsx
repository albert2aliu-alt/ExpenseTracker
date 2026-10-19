import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { Subscription } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { formatCurrency } from "@/utils/formatters";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface UpcomingPaymentsCardProps {
  subscriptions: Subscription[];
  currency: string;
}

function getNextBillingDate(subscription: Subscription) {
  const nextDate = new Date(subscription.lastProcessedDate);
  if (subscription.period === "monthly") {
    nextDate.setMonth(nextDate.getMonth() + 1);
  } else {
    nextDate.setFullYear(nextDate.getFullYear() + 1);
  }
  return nextDate;
}

export function UpcomingPaymentsCard({
  subscriptions,
  currency,
}: UpcomingPaymentsCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const upcoming = useMemo(
    () =>
      subscriptions
        .map((subscription) => ({
          subscription,
          date: getNextBillingDate(subscription),
        }))
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .slice(0, 3),
    [subscriptions],
  );

  if (upcoming.length === 0) return null;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.titleWrap}>
          <View
            style={[styles.icon, { backgroundColor: colors.primary + "18" }]}
          >
            <Ionicons
              name="calendar-outline"
              size={18}
              color={colors.primary}
            />
          </View>
          <View>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
              Upcoming payments
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Your next recurring charges
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => router.push("/manage-subscriptions")}>
          <Text style={[styles.link, { color: colors.primary }]}>Manage</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        {upcoming.map(({ subscription, date }) => (
          <View key={subscription.id} style={styles.row}>
            <View style={styles.rowInfo}>
              <Text
                style={[styles.paymentTitle, { color: colors.textPrimary }]}
                numberOfLines={1}
              >
                {subscription.title}
              </Text>
              <Text
                style={[styles.paymentDate, { color: colors.textSecondary }]}
              >
                {date.toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })}
              </Text>
            </View>
            <Text style={[styles.amount, { color: colors.textPrimary }]}>
              {formatCurrency(subscription.amount, currency)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Theme.spacing.md,
    marginTop: Theme.spacing.md,
    padding: Theme.spacing.lg,
    borderWidth: 1,
    borderRadius: Theme.radius.lg,
    gap: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  titleWrap: { flex: 1, flexDirection: "row", alignItems: "center", gap: 10 },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 15, fontWeight: "800" },
  subtitle: { fontSize: 11, marginTop: 2 },
  link: { fontSize: 12, fontWeight: "800" },
  list: { gap: 10 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  rowInfo: { flex: 1 },
  paymentTitle: { fontSize: 13, fontWeight: "700" },
  paymentDate: { fontSize: 11, marginTop: 2 },
  amount: { fontSize: 13, fontWeight: "800" },
});

export default UpcomingPaymentsCard;
