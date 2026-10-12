import type { Expense } from '@/context/AppContext';
import { getCategoryByKey } from '@/utils/categories';

export type BudgetThreshold = '80' | '100';

export interface BudgetAlertCandidate {
  categoryKey: string;
  categoryLabel: string;
  spent: number;
  budget: number;
  threshold: BudgetThreshold;
}

export function getMonthKey(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export function getCategorySpentThisMonth(
  expenses: Expense[],
  categoryKey: string,
  excludeId?: string,
  referenceDate = new Date(),
): number {
  const monthStart = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1);
  return expenses
    .filter(
      (e) =>
        e.category === categoryKey &&
        new Date(e.date) >= monthStart &&
        e.id !== excludeId,
    )
    .reduce((sum, e) => sum + e.amount, 0);
}

export function getThresholdLevel(spent: number, budget: number): BudgetThreshold | null {
  if (!budget || budget <= 0) return null;
  if (spent > budget) return '100';
  if (spent > budget * 0.8) return '80';
  return null;
}

export function getProjectedBudgetWarning(
  spent: number,
  budget: number,
  additionalAmount: number,
  currency: string,
  formatCurrency: (amount: number, currency: string) => string,
): { message: string; isOverBudget: boolean } | null {
  const projectedTotal = spent + additionalAmount;
  if (projectedTotal > budget) {
    return {
      message: `This puts you over your ${formatCurrency(budget, currency)} budget for this month!`,
      isOverBudget: true,
    };
  }
  if (projectedTotal > budget * 0.8) {
    return {
      message: `You're nearing your ${formatCurrency(budget, currency)} budget for this month.`,
      isOverBudget: false,
    };
  }
  return null;
}

export function checkAllCategoryBudgets(
  expenses: Expense[],
  categoryBudgets: Record<string, number>,
): BudgetAlertCandidate[] {
  const alerts: BudgetAlertCandidate[] = [];

  for (const [categoryKey, budget] of Object.entries(categoryBudgets)) {
    if (!budget || budget <= 0) continue;
    const spent = getCategorySpentThisMonth(expenses, categoryKey);
    const threshold = getThresholdLevel(spent, budget);
    if (!threshold) continue;

    alerts.push({
      categoryKey,
      categoryLabel: getCategoryByKey(categoryKey).label,
      spent,
      budget,
      threshold,
    });
  }

  return alerts;
}
