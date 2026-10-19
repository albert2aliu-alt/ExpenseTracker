import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import {
    Animated,
    Easing,
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from "react-native";

// Enable LayoutAnimation for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  badge?: string;
  children: React.ReactNode;
  previewIcons?: (keyof typeof Ionicons.glyphMap)[];
};

const Folder: React.FC<Props> = ({
  title,
  icon,
  iconColor,
  badge,
  children,
  previewIcons = [],
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [isOpen, setIsOpen] = useState(false);

  const rotationAnim = useRef(new Animated.Value(0)).current;

  const toggleFolder = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    Animated.timing(rotationAnim, {
      toValue: isOpen ? 0 : 1,
      duration: 180,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  };

  const arrowRotation = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      {/* Folder Header / Button */}
      <TouchableOpacity
        onPress={toggleFolder}
        activeOpacity={0.8}
        style={styles.header}
      >
        <View style={styles.headerLeft}>
          {/* Closed Folder Mini Grid Preview */}
          {!isOpen && previewIcons.length > 0 ? (
            <View
              style={[
                styles.previewGrid,
                { backgroundColor: iconColor + "15" },
              ]}
            >
              {previewIcons.slice(0, 4).map((pIcon, idx) => (
                <Ionicons key={idx} name={pIcon} size={10} color={iconColor} />
              ))}
            </View>
          ) : (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: iconColor + "15" },
              ]}
            >
              <Ionicons
                name={isOpen ? "folder-open" : icon}
                size={20}
                color={iconColor}
              />
            </View>
          )}

          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
              {title}
            </Text>
            <Text style={[styles.sub, { color: colors.textSecondary }]}>
              {isOpen ? "Tap to close folder" : "Tap to open widgets"}
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          {badge && !isOpen && (
            <View style={[styles.badge, { backgroundColor: colors.primary }]}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
          <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textTertiary}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>

      {/* Expanded Folder Content */}
      {isOpen && (
        <View style={[styles.content, { borderTopColor: colors.border }]}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Theme.spacing.md,
    marginTop: 16,
    borderRadius: 24,
    borderWidth: 1,
    overflow: "hidden",
    ...Theme.shadow.sm,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  previewGrid: {
    width: 42,
    height: 42,
    borderRadius: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 6,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  sub: {
    fontSize: 11,
    fontWeight: "500",
    marginTop: 1,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
  },
  content: {
    borderTopWidth: 1,
    paddingBottom: 16,
    paddingTop: 8,
  },
});

export default Folder;
