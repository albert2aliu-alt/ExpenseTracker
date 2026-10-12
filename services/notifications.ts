import AsyncStorage from '@react-native-async-storage/async-storage';
import { isRunningInExpoGo } from 'expo';
import { Platform } from 'react-native';
import type { BudgetThreshold } from '@/utils/budgetThresholds';
import { getMonthKey } from '@/utils/budgetThresholds';

const DAILY_REMINDER_ID = 'daily-expense-reminder';
const NOTIF_STATE_KEY = '@extrack_notif_state';

type NotifState = Record<string, string[]>;
type NotificationsModule = typeof import('expo-notifications');

let notificationsModule: NotificationsModule | null = null;
let handlerConfigured = false;

export function isNotificationsSupported(): boolean {
  if (isRunningInExpoGo() || Platform.OS === 'web') return false;
  return Platform.OS === 'ios' || Platform.OS === 'android';
}

async function getNotifications(): Promise<NotificationsModule | null> {
  if (!isNotificationsSupported()) return null;
  if (!notificationsModule) {
    notificationsModule = await import('expo-notifications');
  }
  return notificationsModule;
}

function hasNotificationPermission(
  Notifications: NotificationsModule,
  settings: Awaited<ReturnType<NotificationsModule['getPermissionsAsync']>>,
): boolean {
  const response = settings as typeof settings & { granted?: boolean };
  if (response.granted) return true;
  return (
    settings.ios?.status === Notifications.IosAuthorizationStatus.AUTHORIZED ||
    settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
}

export async function configureNotificationHandler(): Promise<void> {
  if (handlerConfigured || !isNotificationsSupported()) return;
  const Notifications = await getNotifications();
  if (!Notifications) return;

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
  handlerConfigured = true;
}

export async function setupAndroidChannels(): Promise<void> {
  if (Platform.OS !== 'android' || !isNotificationsSupported()) return;
  const Notifications = await getNotifications();
  if (!Notifications) return;

  await Notifications.setNotificationChannelAsync('reminders', {
    name: 'Daily Reminders',
    importance: Notifications.AndroidImportance.DEFAULT,
    vibrationPattern: [0, 250, 250, 250],
  });
  await Notifications.setNotificationChannelAsync('budget-alerts', {
    name: 'Budget Alerts',
    importance: Notifications.AndroidImportance.HIGH,
    vibrationPattern: [0, 250, 250, 250],
  });
}

export async function requestPermissions(): Promise<boolean> {
  if (!isNotificationsSupported()) return false;

  const Notifications = await getNotifications();
  if (!Notifications) return false;

  await configureNotificationHandler();
  await setupAndroidChannels();

  const existing = await Notifications.getPermissionsAsync();
  if (hasNotificationPermission(Notifications, existing)) return true;

  const requested = await Notifications.requestPermissionsAsync();
  return hasNotificationPermission(Notifications, requested);
}

export async function scheduleDailyReminder(hour: number, minute: number): Promise<boolean> {
  if (!isNotificationsSupported()) return false;

  const Notifications = await getNotifications();
  if (!Notifications) return false;

  const granted = await requestPermissions();
  if (!granted) return false;

  await Notifications.cancelScheduledNotificationAsync(DAILY_REMINDER_ID).catch(() => {});

  await Notifications.scheduleNotificationAsync({
    identifier: DAILY_REMINDER_ID,
    content: {
      title: 'Time to log expenses',
      body: "Keep your streak going — add today's spending.",
      sound: true,
      ...(Platform.OS === 'android' ? { channelId: 'reminders' } : {}),
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
    },
  });

  return true;
}

export async function cancelDailyReminder(): Promise<void> {
  if (!isNotificationsSupported()) return;
  const Notifications = await getNotifications();
  if (!Notifications) return;
  await Notifications.cancelScheduledNotificationAsync(DAILY_REMINDER_ID).catch(() => {});
}

async function loadNotifState(): Promise<NotifState> {
  try {
    const raw = await AsyncStorage.getItem(NOTIF_STATE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    return typeof parsed === 'object' && parsed !== null ? (parsed as NotifState) : {};
  } catch {
    return {};
  }
}

async function saveNotifState(state: NotifState): Promise<void> {
  await AsyncStorage.setItem(NOTIF_STATE_KEY, JSON.stringify(state)).catch(() => {});
}

export async function clearBudgetNotifState(): Promise<void> {
  await AsyncStorage.removeItem(NOTIF_STATE_KEY).catch(() => {});
}

function stateKey(categoryKey: string, monthKey = getMonthKey()): string {
  return `${categoryKey}-${monthKey}`;
}

export async function processBudgetAlerts(
  alerts: {
    categoryKey: string;
    categoryLabel: string;
    spent: number;
    budget: number;
    threshold: BudgetThreshold;
  }[],
  currency: string,
): Promise<void> {
  if (!isNotificationsSupported()) return;

  const Notifications = await getNotifications();
  if (!Notifications) return;

  const granted = await requestPermissions();
  if (!granted) return;

  const state = await loadNotifState();
  const monthKey = getMonthKey();
  let updated = { ...state };

  for (const alert of alerts) {
    const key = stateKey(alert.categoryKey, monthKey);
    const sent = updated[key] ?? [];
    if (sent.includes(alert.threshold)) continue;

    const pct = Math.round((alert.spent / alert.budget) * 100);
    const title =
      alert.threshold === '100'
        ? `Over budget: ${alert.categoryLabel}`
        : `Budget warning: ${alert.categoryLabel}`;
    const body =
      alert.threshold === '100'
        ? `You've spent ${pct}% of your ${currency} ${alert.budget.toFixed(0)} monthly limit.`
        : `You've used ${pct}% of your ${currency} ${alert.budget.toFixed(0)} monthly budget.`;

    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: true,
        ...(Platform.OS === 'android' ? { channelId: 'budget-alerts' } : {}),
      },
      trigger: null,
    });

    updated = { ...updated, [key]: [...sent, alert.threshold] };
  }

  await saveNotifState(updated);
}

export function getNotificationsUnavailableReason(): string | null {
  if (Platform.OS === 'web') return 'Available on mobile app';
  if (isRunningInExpoGo()) return 'Requires a development build (not Expo Go)';
  return null;
}
