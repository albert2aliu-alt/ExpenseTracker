/**
 * AnimatedSection — fades in + slides up from below with an optional delay.
 * Uses only React Native's built-in Animated API (no extra deps).
 */
import React, { useEffect, useRef } from "react";
import { Animated, Easing, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  delay?: number;
  /** How far down to start (default 24px) */
  distance?: number;
  /** Duration in ms (default 400) */
  duration?: number;
};

const AnimatedSection: React.FC<Props> = ({
  children,
  style,
  delay = 0,
  distance = 24,
  duration = 400,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(distance)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(distance);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: duration + 80,
        delay,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [delay, duration, distance, opacity, translateY]);

  return (
    <Animated.View style={[{ opacity, transform: [{ translateY }] }, style]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedSection;
