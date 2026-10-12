import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { useApp } from '@/context/AppContext';
import { checkAllCategoryBudgets } from '@/utils/budgetThresholds';
import {
  cancelDailyReminder,
  clearBudgetNotifState,
  configureNotificationHandler,
  processBudgetAlerts,
  scheduleDailyReminder,
} from '@/services/notifications';

export function useNotificationSync() {
  const { expenses, categoryBudgets, prefs } = useApp();
  const prevBudgetAlerts = useRef(prefs.budgetAlerts);

  useEffect(() => {
    configureNotificationHandler().catch(() => {});
  }, []);

  useEffect(() => {
    if (!prefs.dailyReminderEnabled) {
      cancelDailyReminder();
      return;
    }
    scheduleDailyReminder(prefs.dailyReminderHour, prefs.dailyReminderMinute).catch(() => {});
  }, [
    prefs.dailyReminderEnabled,
    prefs.dailyReminderHour,
    prefs.dailyReminderMinute,
  ]);

  useEffect(() => {
    if (!prefs.budgetAlerts) {
      if (!prevBudgetAlerts.current) return;
      clearBudgetNotifState();
      prevBudgetAlerts.current = false;
      return;
    }
    prevBudgetAlerts.current = true;

    const alerts = checkAllCategoryBudgets(expenses, categoryBudgets);
    if (alerts.length === 0) return;
    processBudgetAlerts(alerts, prefs.currency).catch(() => {});
  }, [expenses, categoryBudgets, prefs.budgetAlerts, prefs.currency]);

  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state !== 'active' || !prefs.budgetAlerts) return;
      const alerts = checkAllCategoryBudgets(expenses, categoryBudgets);
      if (alerts.length === 0) return;
      processBudgetAlerts(alerts, prefs.currency).catch(() => {});
    });
    return () => sub.remove();
  }, [expenses, categoryBudgets, prefs.budgetAlerts, prefs.currency]);
}

export function NotificationSync() {
  useNotificationSync();
  return null;
}
