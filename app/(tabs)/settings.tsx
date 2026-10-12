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
