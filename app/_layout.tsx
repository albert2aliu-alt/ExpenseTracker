"use client";

import { AppProvider } from "@/context/AppContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { SharedWalletProvider } from "@/context/SharedWalletContext";
import { SplitProvider } from "@/context/SplitContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { NotificationSync } from "@/hooks/useNotificationSync";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = { anchor: "(tabs)" };

// ── Auth guard ────────────────────────────────────────────────────────────────
function AuthGuard({ children }: { children: React.ReactNode }) {
  const { currentUser, isLoading, hasCompletedOnboarding } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    const inAuthGroup = segments[0] === "login";
    const inOnboarding = segments[0] === "onboarding";

    if (!currentUser && !inAuthGroup) router.replace("/login");
    else if (currentUser && inAuthGroup) router.replace("/onboarding");
    else if (currentUser && !hasCompletedOnboarding && !inOnboarding)
      router.replace("/onboarding");
    else if (
      currentUser &&
      hasCompletedOnboarding &&
      (inAuthGroup || inOnboarding)
    )
      router.replace("/(tabs)");
  }, [currentUser, isLoading, hasCompletedOnboarding, segments, router]);

  return <>{children}</>;
}

// ── Inner layout (inside all providers) ──────────────────────────────────────
function InnerLayout() {
  return (
    <>
      <AuthGuard>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="add-expense"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="add-saving"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="manage-budgets"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="manage-subscriptions"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="add-subscription"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="receipt-scanner"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="premium"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen name="saving-detail" options={{ headerShown: false }} />
        </Stack>
      </AuthGuard>
      <StatusBar style="auto" />
    </>
  );
}

// ── Root layout ───────────────────────────────────────────────────────────────
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <AppProvider>
              <SharedWalletProvider>
                <SplitProvider>
                  <NotificationSync />
                  <InnerLayout />
                </SplitProvider>
              </SharedWalletProvider>
            </AppProvider>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
