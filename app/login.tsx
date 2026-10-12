import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
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
        colors={["#0F2942", "#087E8B", "#16A6A8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Decorative blobs */}
      <View
        style={[
          styles.blob,
          { top: -80, left: -60, backgroundColor: "rgba(22,166,168,0.28)" },
        ]}
      />
      <View
        style={[
          styles.blob,
          {
            bottom: -60,
            right: -40,
            backgroundColor: "rgba(64,161,255,0.20)",
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
            backgroundColor: "rgba(8,126,139,0.22)",
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
              colors={["#0F2942", "#087E8B"]}
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
                  colors={["#087E8B", "#16A6A8"]}
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
    boxShadow: "0 8px 16px rgba(8, 126, 139, 0.45)",
    elevation: 12,
  },
  appName: {
    fontSize: 28,
    fontWeight: "800",
    color: "#F0FDFF",
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 13,
    color: "#D5F7FA",
    marginTop: 4,
  },

  // Card
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "rgba(244, 250, 255, 0.96)",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(8,126,139,0.22)",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(15, 41, 66, 0.35)",
    elevation: 20,
  },

  // Tab switcher
  tabBar: {
    flexDirection: "row",
    backgroundColor: "rgba(15, 41, 66, 0.08)",
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
    backgroundColor: "#087E8B",
  },
  tabBtn: { flex: 1, paddingVertical: 10, alignItems: "center", zIndex: 1 },
  tabText: { fontSize: 14, fontWeight: "600", color: "#628E9A" },
  tabTextActive: { color: "#F0FDFF" },

  // Form
  form: { paddingHorizontal: 20, paddingBottom: 24 },
  fieldWrap: { marginBottom: 16 },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#45657E",
    marginBottom: 6,
    letterSpacing: 0.4,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6FAFA",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D4E4E5",
    paddingHorizontal: 12,
    height: 50,
  },
  inputIcon: { marginRight: 10 },
  input: {
    flex: 1,
    color: "#102A43",
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
    boxShadow: "0 6px 14px rgba(8, 126, 139, 0.35)",
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
  switchHintText: { fontSize: 13, color: "#496A7D" },
  switchHintLink: { color: "#087E8B", fontWeight: "700" },

  // Footer
  footer: {
    marginTop: 24,
    fontSize: 12,
    color: "#D9F6F7",
    textAlign: "center",
  },
});
