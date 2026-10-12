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
