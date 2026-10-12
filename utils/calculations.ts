import { Expense } from '@/context/AppContext';
import { getMonthKey, formatMonthLabel } from './formatters';

export function getTotalExpenses(expenses: Expense[]): number {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

export function getBalance(income: number, expenses: Expense[]): number {
  return income - getTotalExpenses(expenses);
}

export function getWeeklyBudget(income: number, expenses: Expense[]): number {
  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  const thisWeekSpent = expenses
    .filter(e => new Date(e.date) >= startOfWeek)
    .reduce((sum, e) => sum + e.amount, 0);
  return Math.max(0, income / 4.33 - thisWeekSpent);
}

export type TimePeriod = 'day' | 'week' | 'month' | '3months' | 'year' | 'all';

export function filterByPeriod(expenses: Expense[], period: TimePeriod): Expense[] {
  if (period === 'all') return expenses;
  const now = new Date();
  let cutoff = new Date();
  if (period === 'day') { cutoff.setHours(0, 0, 0, 0); }
  else if (period === 'week') { cutoff.setDate(now.getDate() - 7); }
  else if (period === 'month') { cutoff = new Date(now.getFullYear(), now.getMonth(), 1); }
  else if (period === '3months') { cutoff = new Date(now.getFullYear(), now.getMonth() - 2, 1); }
  else if (period === 'year') { cutoff = new Date(now.getFullYear(), 0, 1); }
  return expenses.filter(e => new Date(e.date) >= cutoff);
}

export function groupByDate(expenses: Expense[]): { date: string; items: Expense[] }[] {
  const map: Record<string, Expense[]> = {};
  for (const e of expenses) {
    const k = new Date(e.date).toDateString();
    if (!map[k]) map[k] = [];
    map[k].push(e);
  }
  return Object.entries(map)
    .map(([date, items]) => ({ date, items }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getExpensesByCategory(expenses: Expense[]): Record<string, number> {
  return expenses.reduce<Record<string, number>>((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});
}

export function getMonthlyTotals(expenses: Expense[], months = 6): { label: string; total: number }[] {
  const result: Record<string, number> = {};
  const labels: Record<string, string> = {};
  const now = new Date();
  for (let i = months - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = getMonthKey(d.toISOString());
    result[key] = 0;
    labels[key] = formatMonthLabel(key);
  }
  for (const e of expenses) {
    const key = getMonthKey(e.date);
    if (key in result) result[key] += e.amount;
  }
  return Object.entries(result).map(([key, total]) => ({ label: labels[key], total }));
}

// --- V2 Smart Calculations ---

export function getWeeklyComparison(expenses: Expense[]): { diffAmount: number; diffPercent: number; spentThisWeek: number; spentLastWeek: number } {
  const now = new Date();
  
  // This week (last 7 days from now)
  const thisWeekStart = new Date(now);
  thisWeekStart.setDate(now.getDate() - 7);
  
  // Last week (days -14 to -7 from now)
  const lastWeekStart = new Date(now);
  lastWeekStart.setDate(now.getDate() - 14);
  
  const spentThisWeek = expenses
    .filter(e => { const d = new Date(e.date); return d >= thisWeekStart && d <= now; })
    .reduce((s, e) => s + e.amount, 0);

  const spentLastWeek = expenses
    .filter(e => { const d = new Date(e.date); return d >= lastWeekStart && d < thisWeekStart; })
    .reduce((s, e) => s + e.amount, 0);

  const diffAmount = spentThisWeek - spentLastWeek;
  const diffPercent = spentLastWeek > 0 ? (diffAmount / spentLastWeek) * 100 : (spentThisWeek > 0 ? 100 : 0);

  return { diffAmount, diffPercent, spentThisWeek, spentLastWeek };
}

export function getMonthlyComparison(expenses: Expense[]): { spentThisMonth: number; spentLastMonth: number; diffPercent: number; diffAmount: number } {
  const now = new Date();
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59);

  const spentThisMonth = expenses
    .filter(e => new Date(e.date) >= thisMonthStart)
    .reduce((s, e) => s + e.amount, 0);

  const spentLastMonth = expenses
    .filter(e => { const d = new Date(e.date); return d >= lastMonthStart && d <= lastMonthEnd; })
    .reduce((s, e) => s + e.amount, 0);

  const diffAmount = spentThisMonth - spentLastMonth;
  const diffPercent = spentLastMonth > 0 ? (diffAmount / spentLastMonth) * 100 : (spentThisMonth > 0 ? 100 : 0);

  return { spentThisMonth, spentLastMonth, diffPercent, diffAmount };
}

export function getTopCategoryThisMonth(expenses: Expense[]): { category: string; amount: number } | null {
  const now = new Date();
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  const thisMonthExpenses = expenses.filter(e => new Date(e.date) >= thisMonthStart);
  if (thisMonthExpenses.length === 0) return null;

  const byCat = getExpensesByCategory(thisMonthExpenses);
  const entries = Object.entries(byCat);
  if (entries.length === 0) return null;

  entries.sort((a, b) => b[1] - a[1]);
  return { category: entries[0][0], amount: entries[0][1] };
}

export function getAverageDailySpend(expenses: Expense[]): number {
  const now = new Date();
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  const thisMonthExpenses = expenses.filter(e => new Date(e.date) >= thisMonthStart);
  if (thisMonthExpenses.length === 0) return 0;
  
  const totalSpent = thisMonthExpenses.reduce((s, e) => s + e.amount, 0);
  const currentDayOfMonth = Math.max(1, now.getDate());
  
  return totalSpent / currentDayOfMonth;
}
