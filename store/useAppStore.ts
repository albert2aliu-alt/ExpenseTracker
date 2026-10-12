import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Budget, DashboardMetrics, Income, Transaction } from "./types";

interface AppState {
  // Data
  transactions: Transaction[];
  budgets: Record<string, Budget>;
  income: Income | null;

  // Actions
  addTransaction: (transaction: Omit<Transaction, "id">) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;

  setBudget: (
    category: string,
    limit: number,
    period: "weekly" | "monthly",
  ) => void;
  setIncome: (amount: number, frequency: string, nextPayDate: string) => void;

  // Computed
  getTotalExpenses: () => number;
  getTotalIncome: () => number;
  getBudgetPercentage: (category: string) => number;
  getDashboardMetrics: () => DashboardMetrics;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        transactions: [],
        budgets: {},
        income: null,

        // Transaction actions
        addTransaction: (transaction) =>
          set((state) => ({
            transactions: [
              {
                id: `${Date.now()}`,
                ...transaction,
              },
              ...state.transactions,
            ],
          })),

        updateTransaction: (id, updates) =>
          set((state) => ({
            transactions: state.transactions.map((t) =>
              t.id === id ? { ...t, ...updates } : t,
            ),
          })),

        deleteTransaction: (id) =>
          set((state) => ({
            transactions: state.transactions.filter((t) => t.id !== id),
          })),

        // Budget actions
        setBudget: (category, limit, period) =>
          set((state) => ({
            budgets: {
              ...state.budgets,
              [category]: {
                category,
                limit,
                spent: state.budgets[category]?.spent ?? 0,
                period,
              },
            },
          })),

        // Income actions
        setIncome: (amount, frequency, nextPayDate) =>
          set({
            income: {
              amount,
              frequency: frequency as "weekly" | "monthly" | "yearly",
              nextPayDate,
            },
          }),

        // Computed selectors
        getTotalExpenses: () => {
          const state = get();
          const now = new Date();
          const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

          return state.transactions
            .filter((t) => new Date(t.date) >= startOfMonth)
            .reduce((sum, t) => sum + t.amount, 0);
        },

        getTotalIncome: () => {
          const state = get();
          return state.income?.amount ?? 0;
        },

        getBudgetPercentage: (category: string) => {
          const state = get();
          const budget = state.budgets[category];
          if (!budget) return 0;

          const spent = state.transactions
            .filter((t) => t.category === category)
            .reduce((sum, t) => sum + t.amount, 0);

          return (spent / budget.limit) * 100;
        },

        getDashboardMetrics: (): DashboardMetrics => {
          const state = get();
          const totalIncome = state.getTotalIncome();
          const totalExpenses = state.getTotalExpenses();
          const now = new Date();
          const daysInMonth = new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0,
          ).getDate();
          const daysRemaining = daysInMonth - now.getDate();

          // Calculate fixed expenses (recurring)
          const fixedExpenses = state.transactions
            .filter((t) => t.recurring)
            .reduce((sum, t) => sum + t.amount, 0);

          // Safe-to-Spend = (Income - Fixed - Budget Allocations) / Days Remaining
          const totalBudgetAllocations = Object.values(state.budgets).reduce(
            (sum, b) => sum + b.limit,
            0,
          );

          const safeToSpend = Math.max(
            0,
            (totalIncome - fixedExpenses - totalBudgetAllocations) /
              daysRemaining,
          );

          const burnRate = totalExpenses / (daysInMonth - 1);

          return {
            totalIncome,
            totalExpenses,
            safeToSpend,
            burnRate,
            daysRemaining,
          };
        },
      }),
      {
        name: "expense-tracker-store",
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
    { name: "AppStore" },
  ),
);
