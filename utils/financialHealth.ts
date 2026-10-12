import { Expense, SavingGoal, Subscription } from "@/context/AppContext";
import { getCategoryByKey } from "@/utils/categories";

export type HealthAlertSeverity = "critical" | "warning" | "info" | "positive";

export interface HealthAlert {
  id: string;
  severity: HealthAlertSeverity;
  icon: string;
  title: string;
  message: string;
  action: string;
  impact: number;
}

export interface FinancialHealthAnalysis {
  score: number;
  status: "Excellent" | "Stable" | "Watch" | "At Risk";
  alerts: HealthAlert[];
  metrics: {
    monthSpent: number;
    projectedMonthSpend: number;
    cashLeft: number;
    savingsThisMonth: number;
    savingsRate: number;
    subscriptionLoad: number;
    budgetCount: number;
  };
}

interface AnalyzeFinancialHealthInput {
  expenses: Expense[];
  subscriptions: Subscription[];
  savingGoals: SavingGoal[];
  income: number;
  categoryBudgets: Record<string, number>;
}

const DAY_MS = 86400000;

export function analyzeFinancialHealth({
  expenses,
  subscriptions,
  savingGoals,
  income,
  categoryBudgets,
}: AnalyzeFinancialHealthInput): FinancialHealthAnalysis {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const dayOfMonth = Math.max(1, now.getDate());
  const daysRemaining = Math.max(0, daysInMonth - dayOfMonth);
  const thisMonthExpenses = expenses.filter((expense) => new Date(expense.date) >= monthStart);
  const monthSpent = sumExpenses(thisMonthExpenses);
  const dailyAverage = monthSpent / dayOfMonth;
  const projectedMonthSpend = dailyAverage * daysInMonth;
  const cashLeft = income - monthSpent;
  const savingsThisMonth = savingGoals.reduce(
    (sum, goal) =>
      sum +
      goal.deposits
        .filter((deposit) => new Date(deposit.date) >= monthStart)
        .reduce((depositSum, deposit) => depositSum + deposit.amount, 0),
    0
  );
  const savingsRate = income > 0 ? savingsThisMonth / income : 0;
  const monthlySubscriptions = subscriptions.reduce(
    (sum, sub) => sum + (sub.period === "yearly" ? sub.amount / 12 : sub.amount),
    0
  );
  const subscriptionLoad = income > 0 ? monthlySubscriptions / income : 0;
  const activeBudgets = Object.entries(categoryBudgets).filter(([, budget]) => budget > 0);
  const alerts: HealthAlert[] = [];
  let penalty = 0;
  let reward = 0;

  if (income <= 0) {
    alerts.push({
      id: "income-missing",
      severity: "critical",
      icon: "cash-outline",
      title: "Monthly income is missing",
      message: "The score cannot judge cash-flow pressure accurately until your income is set.",
      action: "Set a realistic monthly income from the dashboard.",
      impact: 18,
    });
    penalty += 18;
  }

  const projectedIncomeRatio = income > 0 ? projectedMonthSpend / income : 1;
  if (projectedIncomeRatio > 1) {
    const overBy = projectedMonthSpend - income;
    const impact = clamp(12 + projectedIncomeRatio * 10, 14, 28);
    penalty += impact;
    alerts.push({
      id: "overspend-projection",
      severity: "critical",
      icon: "trending-up-outline",
      title: "Month-end spending is trending over income",
      message: `At your current pace, expenses may exceed income by ${Math.round(overBy)} this month.`,
      action: `Cut about ${Math.round(overBy / Math.max(1, daysRemaining || 1))} per remaining day to break even.`,
      impact,
    });
  } else if (projectedIncomeRatio > 0.82) {
    const impact = clamp(projectedIncomeRatio * 14, 8, 16);
    penalty += impact;
    alerts.push({
      id: "thin-buffer",
      severity: "warning",
      icon: "speedometer-outline",
      title: "Your monthly buffer is getting thin",
      message: `Projected spending is around ${Math.round(projectedIncomeRatio * 100)}% of monthly income.`,
      action: "Delay non-essential purchases until the next income cycle.",
      impact,
    });
  } else if (income > 0 && projectedIncomeRatio < 0.65 && monthSpent > 0) {
    reward += 4;
    alerts.push({
      id: "healthy-buffer",
      severity: "positive",
      icon: "shield-checkmark-outline",
      title: "Cash-flow buffer looks healthy",
      message: `Projected spending is only ${Math.round(projectedIncomeRatio * 100)}% of income.`,
      action: "Consider moving part of the surplus into savings before it gets spent casually.",
      impact: -4,
    });
  }

  if (activeBudgets.length === 0) {
    penalty += 6;
    alerts.push({
      id: "no-category-budgets",
      severity: "info",
      icon: "options-outline",
      title: "No category budgets are active",
      message: "Smart alerts get sharper when categories have monthly limits.",
      action: "Set limits for your top three spending categories.",
      impact: 6,
    });
  }

  const monthByCategory = groupExpensesByCategory(thisMonthExpenses);
  activeBudgets.forEach(([categoryKey, budget]) => {
    const spent = monthByCategory[categoryKey] ?? 0;
    if (spent <= 0) return;

    const projected = (spent / dayOfMonth) * daysInMonth;
    const ratio = projected / budget;
    const category = getCategoryByKey(categoryKey);

    if (ratio >= 1.05) {
      const impact = clamp((ratio - 0.75) * 18, 8, 20);
      penalty += impact;
      alerts.push({
        id: `budget-risk-${categoryKey}`,
        severity: ratio >= 1.25 ? "critical" : "warning",
        icon: category.icon,
        title: `${category.label} budget is likely to break`,
        message: `You have spent ${Math.round((spent / budget) * 100)}% of the limit; the month-end pace points to ${Math.round(ratio * 100)}%.`,
        action: `Keep ${category.label.toLowerCase()} under ${Math.max(0, Math.round((budget - spent) / Math.max(1, daysRemaining || 1)))} per day for the rest of the month.`,
        impact,
      });
    } else if (spent / budget > 0.8) {
      const impact = 6;
      penalty += impact;
      alerts.push({
        id: `budget-near-${categoryKey}`,
        severity: "warning",
        icon: category.icon,
        title: `${category.label} is close to its limit`,
        message: `This category has used ${Math.round((spent / budget) * 100)}% of its monthly budget.`,
        action: "Switch to lower-cost choices for the next few days.",
        impact,
      });
    }
  });

  findCategorySpikes(expenses, now).forEach((spike) => {
    const category = getCategoryByKey(spike.category);
    const impact = clamp(spike.percent / 12, 5, 14);
    penalty += impact;
    alerts.push({
      id: `spike-${spike.category}`,
      severity: spike.percent > 60 ? "warning" : "info",
      icon: category.icon,
      title: `${category.label} jumped this week`,
      message: `You spent ${Math.round(spike.percent)}% more than the previous week in this category.`,
      action: spike.category === "food"
        ? "Plan two home meals before your next dining purchase."
        : `Pause new ${category.label.toLowerCase()} spending until the weekly average cools down.`,
      impact,
    });
  });

  const concentration = getLargestCategoryShare(monthByCategory);
  if (concentration && concentration.share > 0.45 && monthSpent > income * 0.15) {
    const category = getCategoryByKey(concentration.category);
    const impact = clamp(concentration.share * 16, 6, 12);
    penalty += impact;
    alerts.push({
      id: "category-concentration",
      severity: "info",
      icon: "pie-chart-outline",
      title: `${category.label} is dominating spending`,
      message: `${category.label} represents ${Math.round(concentration.share * 100)}% of this month's expenses.`,
      action: "Review the largest transactions there and tag anything that belongs elsewhere.",
      impact,
    });
  }

  if (subscriptionLoad > 0.14) {
    const impact = clamp(subscriptionLoad * 60, 8, 16);
    penalty += impact;
    alerts.push({
      id: "subscription-load",
      severity: "warning",
      icon: "repeat-outline",
      title: "Subscriptions are taking a large slice",
      message: `Recurring charges are about ${Math.round(subscriptionLoad * 100)}% of monthly income.`,
      action: "Cancel or downgrade one recurring charge before adding another.",
      impact,
    });
  } else if (subscriptionLoad > 0.08) {
    penalty += 5;
    alerts.push({
      id: "subscription-watch",
      severity: "info",
      icon: "repeat-outline",
      title: "Subscription load is worth watching",
      message: `Recurring charges are about ${Math.round(subscriptionLoad * 100)}% of income.`,
      action: "Audit subscriptions once this month.",
      impact: 5,
    });
  }

  if (income > 0 && savingsRate < 0.05 && cashLeft > income * 0.1) {
    penalty += 7;
    alerts.push({
      id: "low-savings-rate",
      severity: "info",
      icon: "wallet-outline",
      title: "Savings pace is below target",
      message: `Only ${Math.round(savingsRate * 100)}% of income has moved into goals this month.`,
      action: "Try an automatic transfer of 5-10% after payday.",
      impact: 7,
    });
  } else if (savingsRate >= 0.1) {
    reward += 5;
    alerts.push({
      id: "strong-savings-rate",
      severity: "positive",
      icon: "trending-up-outline",
      title: "Savings momentum is strong",
      message: `${Math.round(savingsRate * 100)}% of income has gone into goals this month.`,
      action: "Keep this transfer amount consistent next month.",
      impact: -5,
    });
  }

  const recentLargeExpenses = findRecentLargeExpenses(thisMonthExpenses, income, dailyAverage, now);
  recentLargeExpenses.forEach((expense) => {
    const category = getCategoryByKey(expense.category);
    const impact = 6;
    penalty += impact;
    alerts.push({
      id: `large-${expense.id}`,
      severity: "info",
      icon: "alert-circle-outline",
      title: "Large recent transaction detected",
      message: `${expense.title} is unusually high for your current spending pace.`,
      action: `Check whether this ${category.label.toLowerCase()} purchase was one-time or should change next month's budget.`,
      impact,
    });
  });

  if (alerts.length === 0) {
    alerts.push({
      id: "not-enough-data",
      severity: "info",
      icon: "analytics-outline",
      title: "Track a few more transactions",
      message: "The score will become more useful after it sees spending across several days.",
      action: "Log expenses for a full week to unlock better trend alerts.",
      impact: 0,
    });
  }

  const score = Math.round(clamp(100 - penalty + reward, 0, 100));
  return {
    score,
    status: getScoreStatus(score),
    alerts: alerts
      .sort((a, b) => severityRank(b.severity) - severityRank(a.severity) || b.impact - a.impact)
      .slice(0, 5),
    metrics: {
      monthSpent,
      projectedMonthSpend,
      cashLeft,
      savingsThisMonth,
      savingsRate,
      subscriptionLoad,
      budgetCount: activeBudgets.length,
    },
  };
}

function sumExpenses(expenses: Expense[]) {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function groupExpensesByCategory(expenses: Expense[]) {
  return expenses.reduce<Record<string, number>>((acc, expense) => {
    acc[expense.category] = (acc[expense.category] ?? 0) + expense.amount;
    return acc;
  }, {});
}

function findCategorySpikes(expenses: Expense[], now: Date) {
  const thisWeekStart = new Date(now.getTime() - 7 * DAY_MS);
  const lastWeekStart = new Date(now.getTime() - 14 * DAY_MS);
  const thisWeek = groupExpensesByCategory(expenses.filter((expense) => {
    const date = new Date(expense.date);
    return date >= thisWeekStart && date <= now;
  }));
  const lastWeek = groupExpensesByCategory(expenses.filter((expense) => {
    const date = new Date(expense.date);
    return date >= lastWeekStart && date < thisWeekStart;
  }));

  return Object.entries(thisWeek)
    .map(([category, amount]) => {
      const previous = lastWeek[category] ?? 0;
      const percent = previous > 0 ? ((amount - previous) / previous) * 100 : amount > 80 ? 100 : 0;
      return { category, amount, previous, percent };
    })
    .filter((spike) => spike.amount > 40 && spike.percent >= 20)
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 2);
}

function getLargestCategoryShare(byCategory: Record<string, number>) {
  const entries = Object.entries(byCategory);
  const total = entries.reduce((sum, [, amount]) => sum + amount, 0);
  if (total <= 0 || entries.length === 0) return null;
  const [category, amount] = entries.sort((a, b) => b[1] - a[1])[0];
  return { category, share: amount / total };
}

function findRecentLargeExpenses(expenses: Expense[], income: number, dailyAverage: number, now: Date) {
  const recentCutoff = new Date(now.getTime() - 4 * DAY_MS);
  const threshold = Math.max(income * 0.08, dailyAverage * 2.5, 120);
  return expenses
    .filter((expense) => new Date(expense.date) >= recentCutoff && expense.amount >= threshold)
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 1);
}

function getScoreStatus(score: number): FinancialHealthAnalysis["status"] {
  if (score >= 85) return "Excellent";
  if (score >= 70) return "Stable";
  if (score >= 50) return "Watch";
  return "At Risk";
}

function severityRank(severity: HealthAlertSeverity) {
  if (severity === "critical") return 4;
  if (severity === "warning") return 3;
  if (severity === "info") return 2;
  return 1;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
