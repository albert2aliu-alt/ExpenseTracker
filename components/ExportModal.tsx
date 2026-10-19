/**
 * ExportModal.tsx
 * A beautiful full-featured financial report export modal.
 * Supports CSV and PDF formats, date range filtering, and section toggles.
 */

import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { BudgetEntry, ExportOptions, exportReport } from "@/utils/exportReport";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Modal,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ExportModalProps {
  visible: boolean;
  onClose: () => void;
}

type FormatType = "csv" | "pdf";

type DatePreset =
  | "all"
  | "this_month"
  | "last_month"
  | "last_3months"
  | "this_year";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getDateRange(preset: DatePreset): {
  from: Date | null;
  to: Date | null;
} {
  const now = new Date();
  if (preset === "all") return { from: null, to: null };

  if (preset === "this_month") {
    return {
      from: new Date(now.getFullYear(), now.getMonth(), 1),
      to: now,
    };
  }
  if (preset === "last_month") {
    const from = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const to = new Date(now.getFullYear(), now.getMonth(), 0);
    return { from, to };
  }
  if (preset === "last_3months") {
    const from = new Date(now.getFullYear(), now.getMonth() - 3, 1);
    return { from, to: now };
  }
  if (preset === "this_year") {
    return { from: new Date(now.getFullYear(), 0, 1), to: now };
  }
  return { from: null, to: null };
}

function presetLabel(p: DatePreset): string {
  switch (p) {
    case "all":
      return "All Time";
    case "this_month":
      return "This Month";
    case "last_month":
      return "Last Month";
    case "last_3months":
      return "Last 3 Months";
    case "this_year":
      return "This Year";
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
  const isCSV = format === "csv";
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[
        styles.formatCard,
        {
          backgroundColor: selected ? colors.primary + "15" : colors.inputBg,
          borderColor: selected ? colors.primary : colors.border,
        },
      ]}
    >
      <View
        style={[
          styles.formatIconWrap,
          { backgroundColor: selected ? colors.primary : colors.border },
        ]}
      >
        <Ionicons
          name={isCSV ? "document-text-outline" : "document-outline"}
          size={22}
          color={selected ? "white" : colors.textSecondary}
        />
      </View>
      <Text
        style={[
          styles.formatTitle,
          { color: selected ? colors.primary : colors.textPrimary },
        ]}
      >
        {isCSV ? "CSV" : "PDF"}
      </Text>
      <Text style={[styles.formatSub, { color: colors.textSecondary }]}>
        {isCSV ? "Spreadsheet\nEditable" : "Document\nFormatted"}
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
        <Text style={[styles.toggleLabel, { color: colors.textPrimary }]}>
          {label}
        </Text>
        <Text style={[styles.toggleSub, { color: colors.textSecondary }]}>
          {subtitle}
        </Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: colors.border, true: colors.primary + "80" }}
        thumbColor={value ? colors.primary : colors.textTertiary}
      />
    </View>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ExportModal({ visible, onClose }: ExportModalProps) {
  const scheme = useColorScheme();
  const C = Colors[scheme ?? "dark"];
  const { expenses, savingGoals, categoryBudgets, income, prefs } = useApp();
  const { currentUser } = useAuth();

  const [format, setFormat] = useState<FormatType>("pdf");
  const [datePreset, setDatePreset] = useState<DatePreset>("this_month");
  const [includeExpenses, setIncludeExpenses] = useState(true);
  const [includeBudgets, setIncludeBudgets] = useState(true);
  const [includeGoals, setIncludeGoals] = useState(true);
  const [loading, setLoading] = useState(false);

  const datePresets: DatePreset[] = [
    "all",
    "this_month",
    "last_month",
    "last_3months",
    "this_year",
  ];

  const handleExport = useCallback(async () => {
    if (!includeExpenses && !includeBudgets && !includeGoals) {
      Alert.alert(
        "Nothing to Export",
        "Please enable at least one section to include in the report.",
      );
      return;
    }

    setLoading(true);
    try {
      const { from, to } = getDateRange(datePreset);

      const budgets: BudgetEntry[] = Object.entries(categoryBudgets).map(
        ([category, limit]) => ({
          category,
          limit,
        }),
      );

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
          username: currentUser?.username ?? "user",
        },
        opts,
      );

      onClose();
    } catch (err: any) {
      Alert.alert(
        "Export Failed",
        err.message ?? "Something went wrong. Please try again.",
      );
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
    if (to) {
      const t = new Date(to);
      t.setHours(23, 59, 59);
      if (d > t) return false;
    }
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
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />

        <View style={[styles.sheet, { backgroundColor: C.background }]}>
          {/* Handle */}
          <View style={[styles.handle, { backgroundColor: C.border }]} />

          {/* Header */}
          <LinearGradient
            colors={["#5A2ED4", "#3C82FF"]}
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

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.content}
          >
            {/* ── Format ── */}
            <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>
              FORMAT
            </Text>
            <View style={styles.formatRow}>
              <FormatCard
                format="pdf"
                selected={format === "pdf"}
                onPress={() => setFormat("pdf")}
                colors={C}
              />
              <FormatCard
                format="csv"
                selected={format === "csv"}
                onPress={() => setFormat("csv")}
                colors={C}
              />
            </View>

            {/* ── Date Range ── */}
            <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>
              DATE RANGE
            </Text>
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
                    <Text
                      style={[
                        styles.presetChipText,
                        { color: sel ? "white" : C.textSecondary },
                      ]}
                    >
                      {presetLabel(p)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* ── Sections ── */}
            <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>
              INCLUDE SECTIONS
            </Text>
            <View
              style={[
                styles.toggleCard,
                { backgroundColor: C.card, borderColor: C.border },
              ]}
            >
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
            <View
              style={[
                styles.previewCard,
                { backgroundColor: C.card, borderColor: C.border },
              ]}
            >
              <Ionicons
                name="information-circle-outline"
                size={16}
                color={C.textSecondary}
              />
              <Text style={[styles.previewText, { color: C.textSecondary }]}>
                Your report will contain{" "}
                <Text style={{ color: C.textPrimary, fontWeight: "700" }}>
                  {[
                    includeExpenses && `${filteredCount} expenses`,
                    includeBudgets &&
                      `${Object.keys(categoryBudgets).length} budgets`,
                    includeGoals && `${savingGoals.length} goals`,
                  ]
                    .filter(Boolean)
                    .join(", ") || "nothing"}
                </Text>{" "}
                for{" "}
                <Text style={{ color: C.textPrimary, fontWeight: "700" }}>
                  {presetLabel(datePreset)}
                </Text>
                .
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
                colors={loading ? ["#aaa", "#aaa"] : ["#5A2ED4", "#3C82FF"]}
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
                      name={
                        format === "pdf"
                          ? "document-outline"
                          : "document-text-outline"
                      }
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
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  sheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: "90%",
    overflow: "hidden",
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 20,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 2,
  },
  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  sheetTitle: { fontSize: 20, fontWeight: "800", color: "white" },
  sheetSub: { fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 2 },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
    marginBottom: 10,
    marginTop: 4,
  },

  // Format Cards
  formatRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  formatCard: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    borderRadius: Theme.radius.lg,
    borderWidth: 1.5,
    gap: 6,
    position: "relative",
  },
  formatIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  formatTitle: { fontSize: 16, fontWeight: "800" },
  formatSub: { fontSize: 11, textAlign: "center", lineHeight: 16 },
  formatCheck: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  // Date presets
  presetList: {
    gap: 8,
    flexDirection: "row",
    paddingBottom: 20,
  },
  presetChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  presetChipText: { fontSize: 13, fontWeight: "600" },

  // Toggle rows
  toggleCard: {
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 16,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  toggleIcon: {
    width: 34,
    height: 34,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleBody: { flex: 1 },
  toggleLabel: { fontSize: 15, fontWeight: "600" },
  toggleSub: { fontSize: 12, marginTop: 1 },

  // Preview card
  previewCard: {
    flexDirection: "row",
    alignItems: "flex-start",
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
    overflow: "hidden",
  },
  exportBtnInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
  },
  exportBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "800",
  },
});
