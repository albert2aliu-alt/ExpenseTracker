import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";
import type { BottomTabBarProps } from "expo-router/build/react-navigation/bottom-tabs/types";
import React, { useEffect, useRef } from "react";
import {
    Animated,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type IonName = keyof typeof Ionicons.glyphMap;

const CORE_TABS = [
  {
    name: "index",
    label: "Dashboard",
    icon: "home-outline" as IonName,
    iconActive: "home" as IonName,
  },
  {
    name: "expenses",
    label: "Expenses",
    icon: "receipt-outline" as IonName,
    iconActive: "receipt" as IonName,
  },
  {
    name: "wallet",
    label: "Wallet",
    icon: "people-circle-outline" as IonName,
    iconActive: "people-circle" as IonName,
  },
  {
    name: "statistics",
    label: "Stats",
    icon: "bar-chart-outline" as IonName,
    iconActive: "bar-chart" as IonName,
  },
] as const;

/** Folder grid — reading order L→R, top→bottom */
const SECONDARY_TABS = [
  {
    name: "splits",
    label: "Splits",
    icon: "people-outline" as IonName,
    iconActive: "people" as IonName,
  },
  {
    name: "savings",
    label: "Savings",
    icon: "wallet-outline" as IonName,
    iconActive: "wallet" as IonName,
  },
  {
    name: "settings",
    label: "Settings",
    icon: "settings-outline" as IonName,
    iconActive: "settings" as IonName,
  },
  {
    name: "simulator",
    label: "Simulator",
    icon: "speedometer-outline" as IonName,
    iconActive: "speedometer" as IonName,
  },
] as const;

const GRID_COLS = 2;
const CELL = 72;
const CELL_GAP = 16;
const FOLDER_PAD = 16;

export function FloatingTabBar({ state, navigation }: BottomTabBarProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const insets = useSafeAreaInsets();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const folderOpacity = useRef(new Animated.Value(0)).current;
  const fabOpacity = useRef(new Animated.Value(1)).current;

  const activeRoute = state.routes[state.index]?.name;
  const isSecondaryActive = SECONDARY_TABS.some((t) => t.name === activeRoute);

  useEffect(() => {
    setMenuOpen(false);
    Animated.timing(folderOpacity, {
      toValue: 0,
      duration: 120,
      useNativeDriver: true,
    }).start();
    Animated.timing(fabOpacity, {
      toValue: 1,
      duration: 120,
      useNativeDriver: true,
    }).start();
  }, [activeRoute, fabOpacity, folderOpacity]);

  useEffect(() => {
    Animated.timing(folderOpacity, {
      toValue: menuOpen ? 1 : 0,
      duration: 140,
      useNativeDriver: true,
    }).start();
    Animated.timing(fabOpacity, {
      toValue: 1,
      duration: 140,
      useNativeDriver: true,
    }).start();
  }, [menuOpen, folderOpacity, fabOpacity]);

  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    }
  }

  function goTo(routeName: string) {
    const route = state.routes.find((r) => r.name === routeName);
    if (!route) return;
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!event.defaultPrevented) {
      navigation.navigate(routeName);
    }
    setMenuOpen(false);
    if (Platform.OS !== "web") {
      Haptics.selectionAsync().catch(() => {});
    }
  }

  const bottomPad = Math.max(insets.bottom, Platform.OS === "ios" ? 8 : 6);
  const folderWidth =
    GRID_COLS * CELL + (GRID_COLS - 1) * CELL_GAP + FOLDER_PAD * 2;
  const fabSize = 58;

  return (
    <View
      pointerEvents="box-none"
      style={[styles.root, { backgroundColor: colors.background }]}
    >
      <Animated.View
        pointerEvents={menuOpen ? "auto" : "none"}
        style={[
          styles.backdrop,
          {
            backgroundColor: colors.overlay,
            opacity: menuOpen ? 0.55 : 0,
          },
        ]}
      >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={toggleMenu}
          accessibilityLabel="Close menu"
        />
      </Animated.View>

      <Animated.View
        pointerEvents={menuOpen ? "auto" : "none"}
        style={[
          styles.folder,
          {
            width: folderWidth,
            left: "50%",
            marginLeft: -folderWidth / 2,
            backgroundColor:
              colorScheme === "dark" ? colors.card : colors.surface,
            borderColor: colors.cardBorder,
            opacity: folderOpacity,
            ...Theme.shadow.lg,
          },
        ]}
      >
        <View style={styles.grid}>
          {SECONDARY_TABS.map((tab) => {
            const focused = activeRoute === tab.name;
            return (
              <GridCell
                key={tab.name}
                tab={tab}
                focused={focused}
                onPress={() => goTo(tab.name)}
                colors={colors}
              />
            );
          })}
        </View>
      </Animated.View>

      {/* Narrow hit box only — must NOT span full width or it steals tab taps */}
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.fabWrap,
          {
            width: fabSize,
            height: fabSize,
            left: "50%",
            marginLeft: -fabSize / 2,
            opacity: fabOpacity,
          },
        ]}
      >
        <Pressable
          onPress={toggleMenu}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={menuOpen ? "Close more tabs" : "Open more tabs"}
          accessibilityState={{ expanded: menuOpen }}
          style={({ pressed }) => [
            styles.fab,
            {
              width: fabSize,
              height: fabSize,
              borderRadius: fabSize / 2,
              backgroundColor: colors.primary,
              opacity: pressed ? 0.9 : 1,
              borderColor: isSecondaryActive
                ? colors.primaryLight
                : "transparent",
              borderWidth: isSecondaryActive ? 2 : 0,
              ...Theme.shadow.lg,
            },
          ]}
        >
          <Ionicons
            name={menuOpen ? "close" : "apps"}
            size={26}
            color="#FFFFFF"
          />
        </Pressable>
      </Animated.View>

      <View
        style={[
          styles.bar,
          {
            backgroundColor: colors.tabBar,
            borderColor: colors.tabBarBorder,
            paddingBottom: bottomPad,
          },
        ]}
      >
        <View style={styles.side}>
          {CORE_TABS.slice(0, 2).map((tab) => (
            <CoreTab
              key={tab.name}
              label={tab.label}
              icon={activeRoute === tab.name ? tab.iconActive : tab.icon}
              focused={activeRoute === tab.name}
              activeColor={colors.tabActive}
              inactiveColor={colors.tabInactive}
              onPress={() => goTo(tab.name)}
            />
          ))}
        </View>

        <View pointerEvents="none" style={styles.fabSlot} />

        <View style={styles.side}>
          {CORE_TABS.slice(2).map((tab) => (
            <CoreTab
              key={tab.name}
              label={tab.label}
              icon={activeRoute === tab.name ? tab.iconActive : tab.icon}
              focused={activeRoute === tab.name}
              activeColor={colors.tabActive}
              inactiveColor={colors.tabInactive}
              onPress={() => goTo(tab.name)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

function GridCell({
  tab,
  focused,
  onPress,
  colors,
}: {
  tab: (typeof SECONDARY_TABS)[number];
  focused: boolean;
  onPress: () => void;
  colors: typeof Colors.light;
}) {
  return (
    <View style={[styles.cell, { width: CELL }]}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={tab.label}
        accessibilityState={{ selected: focused }}
        style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
      >
        <View
          style={[
            styles.cellIcon,
            {
              backgroundColor: focused ? colors.primary : colors.primary + "18",
              borderColor: focused ? colors.primary : "transparent",
            },
          ]}
        >
          <Ionicons
            name={focused ? tab.iconActive : tab.icon}
            size={24}
            color={focused ? "#FFFFFF" : colors.primary}
          />
        </View>
        <Text
          style={[styles.cellLabel, { color: colors.textPrimary }]}
          numberOfLines={1}
        >
          {tab.label}
        </Text>
      </Pressable>
    </View>
  );
}

function CoreTab({
  label,
  icon,
  focused,
  activeColor,
  inactiveColor,
  onPress,
}: {
  label: string;
  icon: IonName;
  focused: boolean;
  activeColor: string;
  inactiveColor: string;
  onPress: () => void;
}) {
  const color = focused ? activeColor : inactiveColor;
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 4, right: 4 }}
      accessibilityRole="tab"
      accessibilityState={{ selected: focused }}
      accessibilityLabel={label}
      style={styles.coreTab}
    >
      <View style={styles.coreHit}>
        <Ionicons name={icon} size={22} color={color} />
        <Text style={[styles.coreLabel, { color }]} numberOfLines={1}>
          {label}
        </Text>
        {focused && (
          <View style={[styles.dot, { backgroundColor: activeColor }]} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent",
    overflow: "visible",
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    bottom: 0,
    top: -640,
  },
  bar: {
    flexDirection: "row",
    alignItems: "stretch",
    borderWidth: 1,
    borderRadius: 22,
    marginHorizontal: 12,
    marginBottom: 8,
    paddingTop: Theme.spacing.sm,
    minHeight: 56,
    zIndex: 1,
  },
  side: {
    flex: 1,
    flexDirection: "row",
    zIndex: 2,
  },
  fabSlot: {
    width: 72,
  },
  coreTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
  },
  coreHit: {
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    minWidth: 56,
    minHeight: 44,
    paddingVertical: 4,
  },
  coreLabel: {
    fontSize: 10,
    fontWeight: Theme.fontWeight.semiBold,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 1,
  },
  fabWrap: {
    position: "absolute",
    top: -18,
    zIndex: 8,
  },
  fab: {
    alignItems: "center",
    justifyContent: "center",
  },
  folder: {
    position: "absolute",
    bottom: 108,
    zIndex: 40,
    borderRadius: Theme.radius.xl,
    borderWidth: 1,
    padding: FOLDER_PAD,
    elevation: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: CELL_GAP,
    rowGap: CELL_GAP,
  },
  cell: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  cellIcon: {
    width: 52,
    height: 52,
    borderRadius: Theme.radius.lg,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
  },
  cellLabel: {
    fontSize: Theme.fontSize.xs,
    fontWeight: Theme.fontWeight.semiBold,
    textAlign: "center",
  },
});
