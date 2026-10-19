import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { BiometricService } from "@/services/biometric";
import Ionicons from "@expo/vector-icons/Ionicons";
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
