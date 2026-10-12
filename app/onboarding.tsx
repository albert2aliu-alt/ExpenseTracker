import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Theme";
import { useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import {
    Animated,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface OnboardingSlide {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const slides: OnboardingSlide[] = [
  {
    icon: "wallet",
    title: "Track Your Expenses",
    description:
      "Add and categorize all your expenses. Get a clear view of where your money goes every day.",
    color: "#6C3FEF",
  },
  {
    icon: "pie-chart",
    title: "Visualize Your Spending",
    description:
      "View detailed statistics and charts to understand your spending patterns by category.",
    color: "#34C47C",
  },
  {
    icon: "locate",
    title: "Set Savings Goals",
    description:
      "Create savings goals, track progress, and reach your financial targets.",
    color: "#FFAD0D",
  },
  {
    icon: "settings",
    title: "Customize Your Preferences",
    description:
      "Set budgets by category, choose your currency, and enable haptics for better experience.",
    color: "#FF6B7A",
  },
  {
    icon: "checkmark-circle",
    title: "Ready to Start!",
    description:
      "You're all set! Start tracking your expenses and reach your financial goals.",
    color: "#3DD98A",
  },
];

// Memoized slide component for better performance
const SlideItem = React.memo(
  ({
    slide,
    isActive,
    fadeAnim,
    scaleAnim,
  }: {
    slide: OnboardingSlide;
    isActive: boolean;
    fadeAnim: Animated.Value;
    scaleAnim: Animated.Value;
  }) => {
    const colors = Colors[useColorScheme() ?? "light"];
    return (
      <Animated.View
        style={[
          styles.slide,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View
          style={[
            styles.iconBox,
            {
              backgroundColor: slide.color + "20",
            },
          ]}
        >
          <Ionicons name={slide.icon as any} size={64} color={slide.color} />
        </View>
        <Text
          style={[
            styles.slideTitle,
            {
              color: colors.textPrimary,
            },
          ]}
        >
          {slide.title}
        </Text>
        <Text
          style={[
            styles.slideDesc,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          {slide.description}
        </Text>
      </Animated.View>
    );
  },
);

SlideItem.displayName = "SlideItem";

// Memoized dot indicator component
const DotIndicator = React.memo(
  ({
    isActive,
    color,
    borderColor,
  }: {
    isActive: boolean;
    color: string;
    borderColor: string;
  }) => (
    <Animated.View
      style={[
        styles.dot,
        {
          backgroundColor: isActive ? color : borderColor,
          width: isActive ? 24 : 8,
        },
      ]}
    />
  ),
);

DotIndicator.displayName = "DotIndicator";

export default function OnboardingScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { completeOnboarding } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentSlide, fadeAnim, scaleAnim]);

  const handleNext = useCallback(async () => {
    if (currentSlide < slides.length - 1) {
      const nextSlide = currentSlide + 1;
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.8);
      setCurrentSlide(nextSlide);
      scrollViewRef.current?.scrollTo({
        x: nextSlide * 360,
        animated: true,
      });
    } else {
      await completeOnboarding();
      router.replace("/(tabs)");
    }
  }, [currentSlide, fadeAnim, scaleAnim, completeOnboarding]);

  const handleSkip = useCallback(async () => {
    await completeOnboarding();
    router.replace("/(tabs)");
  }, [completeOnboarding]);

  const handleScroll = useCallback(
    (event: any) => {
      const slide = Math.round(
        event.nativeEvent.contentOffset.x /
          event.nativeEvent.layoutMeasurement.width,
      );
      if (slide !== currentSlide) {
        fadeAnim.setValue(0);
        scaleAnim.setValue(0.8);
        setCurrentSlide(slide);
      }
    },
    [currentSlide, fadeAnim, scaleAnim],
  );

  const slidesElements = useMemo(
    () =>
      slides.map((s, idx) => (
        <SlideItem
          key={idx}
          slide={s}
          isActive={currentSlide === idx}
          fadeAnim={fadeAnim}
          scaleAnim={scaleAnim}
        />
      )),
    [currentSlide, fadeAnim, scaleAnim],
  );

  const dotsElements = useMemo(
    () =>
      slides.map((_, idx) => (
        <DotIndicator
          key={idx}
          isActive={idx === currentSlide}
          color={colors.primary}
          borderColor={colors.border}
        />
      )),
    [currentSlide, colors],
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text
            style={[
              styles.appTitle,
              {
                color: colors.primary,
              },
            ]}
          >
            Expense Tracker
          </Text>
          <TouchableOpacity onPress={handleSkip}>
            <Text
              style={[
                styles.skipBtn,
                {
                  color: colors.textSecondary,
                },
              ]}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        {/* Slides Carousel */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          scrollEventThrottle={32}
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          style={styles.carousel}
        >
          {slidesElements}
        </ScrollView>

        {/* Progress Dots */}
        <View style={styles.dotsContainer}>{dotsElements}</View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={handleNext}
            style={[
              styles.nextBtn,
              {
                backgroundColor: colors.primary,
              },
            ]}
          >
            <Text style={styles.nextBtnText}>
              {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            </Text>
            <Ionicons name="arrow-forward" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: Theme.spacing.lg,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "800",
  },
  skipBtn: {
    fontSize: 14,
    fontWeight: "600",
  },
  carousel: {
    flex: 1,
    marginBottom: 24,
  },
  slide: {
    width: 360,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Theme.spacing.lg,
  },
  iconBox: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  slideTitle: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  slideDesc: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.3,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  buttonsContainer: {
    gap: 12,
  },
  nextBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: Theme.radius.md,
    gap: 8,
  },
  nextBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
