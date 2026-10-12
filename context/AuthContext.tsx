/**
 * AuthContext — backed by expo-sqlite (real SQLite database on device)
 *
 * Database: auth.db
 * Tables:
 *   users    (id TEXT PK, username TEXT UNIQUE, password_hash TEXT, created_at TEXT)
 *   sessions (id INTEGER PK, user_id TEXT, username TEXT, created_at TEXT)
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { ActivityIndicator, View } from "react-native";
import {
    clearSession,
    findUserByUsername,
    getSession,
    initDb,
    insertUser,
    saveSession,
} from "./authDb";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  username: string;
  createdAt: string;
}

interface AuthState {
  currentUser: User | null;
  isLoading: boolean;
  hasCompletedOnboarding: boolean;
}

interface AuthContextType extends AuthState {
  login: (
    username: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    username: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  completeOnboarding: () => Promise<void>;
}

// ─── Password hashing (djb2 — suitable for local device storage) ─────────────
function hashPassword(password: string): string {
  let hash = 5381;
  for (let i = 0; i < password.length; i++) {
    hash = (hash * 33) ^ password.charCodeAt(i);
  }
  return (hash >>> 0).toString(16);
}

// ─── Context ──────────────────────────────────────────────────────────────────
const AuthContext = createContext<AuthContextType | null>(null);

const ONBOARDING_KEY = "@onboarding_completed";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    currentUser: null,
    isLoading: true,
    hasCompletedOnboarding: false,
  });

  // ── Boot: init DB and restore session ──────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        await initDb();
        const row = await getSession();
        const onboardingCompleted = await AsyncStorage.getItem(ONBOARDING_KEY);

        if (row) {
          setState({
            currentUser: {
              id: row.user_id,
              username: row.username,
              createdAt: row.created_at,
            },
            isLoading: false,
            hasCompletedOnboarding: onboardingCompleted === "true",
          });
        } else {
          setState({
            currentUser: null,
            isLoading: false,
            hasCompletedOnboarding: false,
          });
        }
      } catch (err) {
        console.error("[AuthContext] init error:", err);
        setState({
          currentUser: null,
          isLoading: false,
          hasCompletedOnboarding: false,
        });
      }
    })();
  }, []);

  // ── Register ──────────────────────────────────────────────────────────────
  const register = useCallback(
    async (
      username: string,
      password: string,
    ): Promise<{ success: boolean; error?: string }> => {
      const trimmed = username.trim().toLowerCase();

      if (trimmed.length < 3)
        return {
          success: false,
          error: "Username must be at least 3 characters.",
        };
      if (password.length < 6)
        return {
          success: false,
          error: "Password must be at least 6 characters.",
        };

      try {
        const existing = await findUserByUsername(trimmed);
        if (existing) {
          return {
            success: false,
            error: "Username already taken. Please choose another.",
          };
        }

        const id = `${Date.now()}`;
        const createdAt = new Date().toISOString();
        const passwordHash = hashPassword(password);

        await insertUser(id, trimmed, passwordHash, createdAt);
        await saveSession(id, trimmed, createdAt);
        await AsyncStorage.setItem(ONBOARDING_KEY, "false");

        setState({
          currentUser: { id, username: trimmed, createdAt },
          isLoading: false,
          hasCompletedOnboarding: false,
        });

        return { success: true };
      } catch (err: any) {
        console.error("[AuthContext] register error:", err);
        return {
          success: false,
          error: "Registration failed. Please try again.",
        };
      }
    },
    [],
  );

  // ── Login ─────────────────────────────────────────────────────────────────
  const login = useCallback(
    async (
      username: string,
      password: string,
    ): Promise<{ success: boolean; error?: string }> => {
      const trimmed = username.trim().toLowerCase();

      try {
        const user = await findUserByUsername(trimmed);

        if (!user) {
          return {
            success: false,
            error: "No account found with that username.",
          };
        }

        if (user.password_hash !== hashPassword(password)) {
          return {
            success: false,
            error: "Incorrect password. Please try again.",
          };
        }

        await saveSession(user.id, user.username, user.created_at);
        const onboardingCompleted = await AsyncStorage.getItem(ONBOARDING_KEY);

        setState({
          currentUser: {
            id: user.id,
            username: user.username,
            createdAt: user.created_at,
          },
          isLoading: false,
          hasCompletedOnboarding: onboardingCompleted === "true",
        });

        return { success: true };
      } catch (err: any) {
        console.error("[AuthContext] login error:", err);
        return { success: false, error: "Login failed. Please try again." };
      }
    },
    [],
  );

  // ── Logout ────────────────────────────────────────────────────────────────
  const logout = useCallback(async () => {
    try {
      await clearSession();
    } catch (err) {
      console.error("[AuthContext] logout error:", err);
    }
    setState({
      currentUser: null,
      isLoading: false,
      hasCompletedOnboarding: false,
    });
  }, []);

  // ── Complete Onboarding ───────────────────────────────────────────────────
  const completeOnboarding = useCallback(async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, "true");
      setState((prev) => ({ ...prev, hasCompletedOnboarding: true }));
    } catch (err) {
      console.error("[AuthContext] completeOnboarding error:", err);
    }
  }, []);

  // ── Loading screen ────────────────────────────────────────────────────────
  if (state.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0F0E1A",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#6C3FEF" />
      </View>
    );
  }

  return (
    <AuthContext.Provider
      value={{ ...state, login, register, logout, completeOnboarding }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
