/**
 * AnimatedNumber — smoothly counts up from 0 to the target value.
 * Great for balance, totals, and stat cards.
 */
import React, { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";

type Props = {
  value: number;
  /** Called with the current interpolated number to format it */
  format: (n: number) => string;
  style?: any;
  duration?: number;
  delay?: number;
};

const AnimatedNumber: React.FC<Props> = ({
  value,
  format,
  style,
  duration = 800,
  delay = 0,
}) => {
  const animVal = useRef(new Animated.Value(0)).current;
  const displayRef = useRef("");
  const [display, setDisplay] = React.useState(format(0));

  useEffect(() => {
    animVal.setValue(0);
    const timeout = setTimeout(() => {
      Animated.timing(animVal, {
        toValue: value,
        duration,
        useNativeDriver: false, // must be false for non-transform/opacity
      }).start();
    }, delay);

    const listener = animVal.addListener(({ value: v }) => {
      const formatted = format(v);
      if (formatted !== displayRef.current) {
        displayRef.current = formatted;
        setDisplay(formatted);
      }
    });

    return () => {
      clearTimeout(timeout);
      animVal.removeListener(listener);
    };
  }, [animVal, delay, duration, format, value]);

  return <Text style={style}>{display}</Text>;
};

export default AnimatedNumber;
