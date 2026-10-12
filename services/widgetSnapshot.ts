/**
 * Home-screen widget data snapshot.
 * Native WidgetKit / Glance widgets need a custom dev client + config plugins.
 * This writer keeps a small JSON snapshot ready for App Group / SharedPreferences bridging.
 *
 * Refresh strategy (battery-safe):
 * - Update on every successful expense write (foreground).
 * - Background: ≥30 min opportunistic only once native widgets ship — never poll every few minutes.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WIDGET_SNAPSHOT_KEY = '@extrack_widget_snapshot_v1';

export type WidgetSnapshot = {
  updatedAt: string;
  currency: string;
  spentThisWeek: number;
  safeToSpendToday: number;
  balance: number;
  loggingStreak: number;
  showBalance: boolean;
};

export async function writeWidgetSnapshot(snapshot: WidgetSnapshot): Promise<void> {
  try {
    await AsyncStorage.setItem(WIDGET_SNAPSHOT_KEY, JSON.stringify(snapshot));
  } catch {
    // Widget bridge is best-effort; never block expense saves.
  }
}

export async function readWidgetSnapshot(): Promise<WidgetSnapshot | null> {
  try {
    const raw = await AsyncStorage.getItem(WIDGET_SNAPSHOT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as WidgetSnapshot;
  } catch {
    return null;
  }
}

export function computeWeekSpend(
  expenses: { amount: number; date: string }[],
  now = new Date(),
): number {
  const start = new Date(now);
  const day = start.getDay(); // 0 Sun
  const diffToMonday = (day + 6) % 7;
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - diffToMonday);
  return expenses
    .filter((e) => new Date(e.date) >= start)
    .reduce((sum, e) => sum + e.amount, 0);
}
