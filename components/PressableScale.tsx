/**
 * PressableScale — wraps children in a touchable that scales down on press.
 * Gives a satisfying tactile feel to any card, button, or list item.
 */
import React, { useRef } from "react";
import { Animated, Easing, TouchableWithoutFeedback } from "react-native";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  accessibilityLabel?: string;
  style?: any;
  /** Scale factor when pressed (default 0.97) */
  scaleTo?: number;
};

const PressableScale: React.FC<Props> = ({
  children,
  onPress,
  onLongPress,
  accessibilityLabel,
  style,
  scaleTo = 0.97,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: scaleTo,
      duration: 120,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 140,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityLabel={accessibilityLabel}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[{ transform: [{ scale }] }, style]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default PressableScale;
