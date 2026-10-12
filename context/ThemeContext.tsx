import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { useColorScheme as useSystemScheme } from "react-native";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedScheme = "light" | "dark";

interface ThemeContextValue {
  preference: ThemePreference;
  resolved: ResolvedScheme;
  setPreference: (p: ThemePreference) => void;
}

const ThemeCtx = createContext<ThemeContextValue>({
  preference: "system",
  resolved: "dark",
  setPreference: () => {},
});

const THEME_KEY = "@extrack_theme_pref";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system: ResolvedScheme =
    useSystemScheme() === "light" ? "light" : "dark";
  const [pref, setPref] = useState<ThemePreference>("system");

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY)
      .then((v) => {
        if (v === "light" || v === "dark" || v === "system") setPref(v);
      })
      .catch(() => {});
  }, []);

  const setPreference = useCallback((p: ThemePreference) => {
    setPref(p);
    AsyncStorage.setItem(THEME_KEY, p).catch(() => {});
  }, []);

  const resolved: ResolvedScheme = pref === "system" ? system : pref;

  return (
    <ThemeCtx.Provider value={{ preference: pref, resolved, setPreference }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeCtx);
}
