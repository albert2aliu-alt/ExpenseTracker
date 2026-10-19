import { ReceiptScanner } from "@/components/ReceiptScanner";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ReceiptScannerScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const insets = useSafeAreaInsets();

  if (Platform.OS === "web") {
    return (
      <View
        style={[
          styles.container,
          styles.webFallback,
          { backgroundColor: colors.background },
        ]}
      >
        <TouchableOpacity
          accessibilityLabel="Close receipt scanner"
          onPress={() => router.back()}
          style={[
            styles.closeButton,
            { backgroundColor: colors.card, top: insets.top + 12 },
          ]}
        >
          <Ionicons name="close" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Ionicons name="camera-outline" size={48} color={colors.textTertiary} />
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: 16,
            fontWeight: "700",
            marginTop: 12,
          }}
        >
          Receipt scanning is available in the mobile app
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
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
