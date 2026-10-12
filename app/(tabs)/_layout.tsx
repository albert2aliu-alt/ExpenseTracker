"use client";

import { FloatingTabBar } from "@/components/FloatingTabBar";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import React from "react";

/**
 * Core tabs stay in the bar; secondary screens stay registered (href: null)
 * and are opened from the FloatingTabBar FAB menu — same routes, new trigger.
 */
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="expenses" options={{ title: "Expenses" }} />
      <Tabs.Screen name="wallet" options={{ title: "Wallet" }} />
      <Tabs.Screen name="statistics" options={{ title: "Stats" }} />

      {/* Secondary — hidden from default tab items; reached via FAB */}
      <Tabs.Screen name="splits" options={{ title: "Splits", href: null }} />
      <Tabs.Screen name="savings" options={{ title: "Savings", href: null }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", href: null }} />
      <Tabs.Screen name="simulator" options={{ title: "Simulator", href: null }} />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
