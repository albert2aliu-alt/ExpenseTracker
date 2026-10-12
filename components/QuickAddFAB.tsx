import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
    Alert,
    Animated,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const BUTTON_SIZE = 60;
const SECONDARY_BUTTONS = [
  {
    icon: "receipt",
    label: "Receipt",
    route: "/receipt-scanner",
    nativeOnly: true,
  },
  { icon: "card", label: "Card", route: "/add-expense", nativeOnly: false },
  { icon: "cash", label: "Cash", route: "/add-expense", nativeOnly: false },
];

export function QuickAddFAB() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const router = useRouter();

  const [isExpanded, setIsExpanded] = React.useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const rotationAnim = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    const nextValue = !isExpanded;
    const toValue = nextValue ? 1 : 0;

    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(rotationAnim, {
        toValue: toValue * 45,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start();

    setIsExpanded(nextValue);
  };

  const handlePress = (route: string, nativeOnly?: boolean) => {
    if (nativeOnly && Platform.OS === "web") {
      Alert.alert(
        "Not Available",
        "Receipt scanning is available in the mobile app.",
      );
      return;
    }
    setIsExpanded(false);
    scaleAnim.setValue(0);
    rotationAnim.setValue(0);
    router.push(route as never);
  };

  const rotation = rotationAnim.interpolate({
    inputRange: [0, 45],
    outputRange: ["0deg", "45deg"],
  });

  return (
    <View style={styles.container} pointerEvents="box-none">
      {/* Secondary buttons */}
      {SECONDARY_BUTTONS.map((button, index) => {
        const translateY = scaleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60 - index * 70],
        });

        const opacity = scaleAnim.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 0.5, 1],
        });

        return (
          <Animated.View
            key={button.icon}
            style={[
              styles.secondaryButton,
              {
                transform: [{ translateY }],
                opacity,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => handlePress(button.route, button.nativeOnly)}
              style={[
                styles.button,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.primary,
                },
              ]}
              activeOpacity={0.7}
            >
              <Ionicons
                name={button.icon as any}
                size={24}
                color={colors.primary}
              />
            </TouchableOpacity>
            <Text style={[styles.label, { color: colors.textPrimary }]}>
              {button.label}
            </Text>
          </Animated.View>
        );
      })}

      {/* Main button */}
      <TouchableOpacity
        onPress={toggleExpand}
        style={[
          styles.mainButton,
          {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
          },
        ]}
        activeOpacity={0.8}
      >
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [{ rotate: rotation }],
            },
          ]}
        >
          <Ionicons name="add" size={32} color="white" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 80,
    right: 20,
    alignItems: "center",
  },
  mainButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButton: {
    alignItems: "center",
    marginBottom: 16,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default QuickAddFAB;
