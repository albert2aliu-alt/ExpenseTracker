// Type definitions for the app
export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
  receipt?: string;
  recurring?: boolean;
  recurringFrequency?: "daily" | "weekly" | "monthly" | "yearly";
}

export interface Budget {
  category: string;
  limit: number;
  spent: number;
  period: "weekly" | "monthly";
}

export interface Income {
  amount: number;
  frequency: "weekly" | "monthly" | "yearly";
  nextPayDate: string;
}

export interface SavingGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  priority: "low" | "medium" | "high";
}

export interface User {
  id: string;
  username: string;
  email: string;
  currency: string;
  biometricEnabled: boolean;
  theme: "light" | "dark";
}

export interface DashboardMetrics {
  totalIncome: number;
  totalExpenses: number;
  safeToSpend: number;
  burnRate: number;
  daysRemaining: number;
}
