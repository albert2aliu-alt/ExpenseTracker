import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useApp } from "@/context/AppContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { getVisionApiKey } from "@/services/secrets";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Animated,
    Image,
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
  const [capturedImageUri, setCapturedImageUri] = useState<string | null>(null);

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
      setCapturedImageUri(photo.uri ?? null);

      // Step 2: Call AI
      setScanStatus("Analyzing with AI...");
      const apiKey =
        (await getVisionApiKey()) || prefs.googleVisionApiKey || "";
      const hasRealKey = apiKey.length > 0;

      if (!hasRealKey) {
        throw new Error(
          "No receipt to scan. Add your Google Vision API key in Settings to read receipts.",
        );
      }

      const rawText = await callVisionAPI(photo.base64, apiKey);
      if (!rawText.trim()) {
        throw new Error(
          "No receipt to scan. Make sure the receipt is visible.",
        );
      }
      setScanStatus("Parsing receipt data...");
      const receipt = parseReceiptText(rawText);
      if (receipt.total <= 0) {
        throw new Error(
          "No receipt total found. Make sure the total amount is visible and try again.",
        );
      }

      setScannedReceipt(receipt);
      setEditTotal(receipt.total > 0 ? receipt.total.toFixed(2) : "");
      setEditVendor(receipt.vendor || "");
      setShowPreview(true);
    } catch (error: any) {
      Alert.alert(
        error.message?.startsWith("No receipt")
          ? "No Receipt to Scan"
          : "Scan Failed",
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
            {capturedImageUri ? (
              <Image
                source={{ uri: capturedImageUri }}
                style={[styles.receiptImage, { borderColor: colors.border }]}
                resizeMode="contain"
                accessibilityLabel="Captured receipt"
              />
            ) : null}

            <View
              style={[
                styles.aiBadge,
                { backgroundColor: colors.primary + "18" },
              ]}
            >
              <Ionicons name="sparkles" size={14} color={colors.primary} />
              <Text style={[styles.aiBadgeText, { color: colors.primary }]}>
                Receipt detected — review the image and total before saving
              </Text>
            </View>

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
  receiptImage: {
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderRadius: Theme.radius.md,
    backgroundColor: "#000000",
  },
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
