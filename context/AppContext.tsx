import {
    computeWeekSpend,
    writeWidgetSnapshot,
} from "@/services/widgetSnapshot";
import { getBalance, getTotalExpenses } from "@/utils/calculations";
import { fetchExchangeRates } from "@/utils/currency";
import {
    DisciplineState,
    EMPTY_DISCIPLINE,
    recomputeDiscipline,
} from "@/utils/disciplineStreak";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { ActivityIndicator, View } from "react-native";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
  isTravelExpense?: boolean;
  originalAmount?: number;
  originalCurrency?: string;
  convertedAmount?: number;
  convertedCurrency?: string;
  exchangeRateAtPurchase?: number;
}

export interface Subscription {
  id: string;
  title: string;
  amount: number;
  category: string;
  period: "monthly" | "yearly";
  startDate: string;
  lastProcessedDate: string;
}

export interface Deposit {
  amount: number;
  date: string;
}

export interface SavingGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  color: string;
  deposits: Deposit[];
}

export interface MoneyCard {
  id: string;
  name: string;
  balance: number;
  type: "debit" | "credit" | "cash";
}

interface Prefs {
  currency: string;
  haptics: boolean;
  budgetAlerts: boolean;
  dailyReminderEnabled: boolean;
  dailyReminderHour: number;
  dailyReminderMinute: number;
  showBalance: boolean;
  travelMode: boolean;
  travelCurrency: string;
  tripBudget: number;
  googleVisionApiKey?: string;
}

type PremiumPlan = "free" | "premium";

interface AppState {
  expenses: Expense[];
  subscriptions: Subscription[];
  savingGoals: SavingGoal[];
  cards: MoneyCard[];
  income: number;
  streak: number;
  lastTrackedDate: string | null;
  discipline: DisciplineState;
  prefs: Prefs;
  categoryBudgets: Record<string, number>;
  exchangeRates: Record<string, number>;
  ratesUpdatedAt: string | null;
  premiumPlan: PremiumPlan;
}

interface AppContextType extends AppState {
  addExpense: (e: Omit<Expense, "id">) => void;
  editExpense: (id: string, updates: Partial<Expense>) => void;
  deleteExpense: (id: string) => void;
  addSubscription: (s: Omit<Subscription, "id" | "lastProcessedDate">) => void;
  deleteSubscription: (id: string) => void;
  addSavingGoal: (
    g: Omit<SavingGoal, "id" | "currentAmount" | "deposits">,
  ) => void;
  depositToGoal: (goalId: string, amount: number) => void;
  deleteSavingGoal: (id: string) => void;
  addCard: (card: Omit<MoneyCard, "id">) => void;
  updateCardBalance: (id: string, balance: number) => void;
  deleteCard: (id: string) => void;
  setIncome: (income: number) => void;
  updatePref: <K extends keyof Prefs>(key: K, value: Prefs[K]) => void;
  setCategoryBudget: (categoryKey: string, amount: number) => void;
  clearFinancialData: () => void;
  refreshExchangeRates: () => Promise<void>;
  setTripBudget: (amount: number) => void;
  setPremiumPlan: (plan: PremiumPlan) => void;
  isPremium: boolean;
}

const AppContext = createContext<AppContextType | null>(null);
const STORAGE_KEY = "@extrack_v1";

const INITIAL: AppState = {
  expenses: [],
  subscriptions: [],
  savingGoals: [],
  cards: [],
  income: 3000,
  streak: 0,
  lastTrackedDate: null,
  discipline: EMPTY_DISCIPLINE,
  prefs: {
    currency: "USD",
    haptics: true,
    budgetAlerts: true,
    dailyReminderEnabled: false,
    dailyReminderHour: 20,
    dailyReminderMinute: 0,
    showBalance: true,
    travelMode: false,
    travelCurrency: "EUR",
    tripBudget: 0,
    googleVisionApiKey: "",
  },
  categoryBudgets: {},
  exchangeRates: {},
  ratesUpdatedAt: null,
  premiumPlan: "free",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function normalizeState(value: unknown): AppState {
  const saved = isRecord(value) ? value : {};
  const prefs = isRecord(saved.prefs) ? saved.prefs : {};
  const categoryBudgets = isRecord(saved.categoryBudgets)
    ? Object.fromEntries(
        Object.entries(saved.categoryBudgets).filter(
          (entry): entry is [string, number] =>
            typeof entry[1] === "number" && Number.isFinite(entry[1]),
        ),
      )
    : INITIAL.categoryBudgets;

  return {
    ...INITIAL,
    income: asNumber(saved.income, INITIAL.income),
    streak: asNumber(saved.streak, INITIAL.streak),
    lastTrackedDate:
      typeof saved.lastTrackedDate === "string"
        ? saved.lastTrackedDate
        : INITIAL.lastTrackedDate,
    discipline: (() => {
      const d = isRecord(saved.discipline) ? saved.discipline : {};
      return {
        loggingStreak: asNumber(d.loggingStreak, 0),
        longestLoggingStreak: asNumber(
          d.longestLoggingStreak,
          asNumber(saved.streak, 0),
        ),
        budgetStreak: asNumber(d.budgetStreak, 0),
        longestBudgetStreak: asNumber(d.longestBudgetStreak, 0),
        dayHistory: isRecord(d.dayHistory)
          ? (d.dayHistory as DisciplineState["dayHistory"])
          : {},
        lastEvaluatedDate:
          typeof d.lastEvaluatedDate === "string" ? d.lastEvaluatedDate : null,
      };
    })(),
    expenses: Array.isArray(saved.expenses)
      ? saved.expenses.filter(isRecord).map(
          (expense, index): Expense => ({
            id:
              typeof expense.id === "string"
                ? expense.id
                : `${Date.now()}-${index}`,
            title:
              typeof expense.title === "string"
                ? expense.title
                : "Untitled expense",
            amount: asNumber(expense.amount),
            category:
              typeof expense.category === "string" ? expense.category : "other",
            date:
              typeof expense.date === "string" &&
              !Number.isNaN(new Date(expense.date).getTime())
                ? expense.date
                : new Date().toISOString(),
            note: typeof expense.note === "string" ? expense.note : undefined,
            isTravelExpense:
              typeof expense.isTravelExpense === "boolean"
                ? expense.isTravelExpense
                : false,
            originalAmount:
              typeof expense.originalAmount === "number"
                ? expense.originalAmount
                : undefined,
            originalCurrency:
              typeof expense.originalCurrency === "string"
                ? expense.originalCurrency
                : undefined,
            convertedAmount:
              typeof expense.convertedAmount === "number"
                ? expense.convertedAmount
                : undefined,
            convertedCurrency:
              typeof expense.convertedCurrency === "string"
                ? expense.convertedCurrency
                : undefined,
            exchangeRateAtPurchase:
              typeof expense.exchangeRateAtPurchase === "number"
                ? expense.exchangeRateAtPurchase
                : undefined,
          }),
        )
      : INITIAL.expenses,
    subscriptions: Array.isArray(saved.subscriptions)
      ? saved.subscriptions.filter(isRecord).map(
          (sub, index): Subscription => ({
            id:
              typeof sub.id === "string"
                ? sub.id
                : `sub-${Date.now()}-${index}`,
            title: typeof sub.title === "string" ? sub.title : "Subscription",
            amount: asNumber(sub.amount),
            category: typeof sub.category === "string" ? sub.category : "other",
            period: sub.period === "yearly" ? "yearly" : "monthly",
            startDate:
              typeof sub.startDate === "string"
                ? sub.startDate
                : new Date().toISOString(),
            lastProcessedDate:
              typeof sub.lastProcessedDate === "string"
                ? sub.lastProcessedDate
                : new Date().toISOString(),
          }),
        )
      : INITIAL.subscriptions,
    savingGoals: Array.isArray(saved.savingGoals)
      ? saved.savingGoals.filter(isRecord).map(
          (goal, index): SavingGoal => ({
            id:
              typeof goal.id === "string" ? goal.id : `${Date.now()}-${index}`,
            title: typeof goal.title === "string" ? goal.title : "Savings goal",
            targetAmount: asNumber(goal.targetAmount),
            currentAmount: asNumber(goal.currentAmount),
            deadline:
              typeof goal.deadline === "string" &&
              !Number.isNaN(new Date(goal.deadline).getTime())
                ? goal.deadline
                : new Date().toISOString(),
            color: typeof goal.color === "string" ? goal.color : "#6C3FEF",
            deposits: Array.isArray(goal.deposits)
              ? goal.deposits.filter(isRecord).map(
                  (deposit): Deposit => ({
                    amount: asNumber(deposit.amount),
                    date:
                      typeof deposit.date === "string" &&
                      !Number.isNaN(new Date(deposit.date).getTime())
                        ? deposit.date
                        : new Date().toISOString(),
                  }),
                )
              : [],
          }),
        )
      : INITIAL.savingGoals,
    cards: Array.isArray(saved.cards)
      ? saved.cards.filter(isRecord).map(
          (card, index): MoneyCard => ({
            id:
              typeof card.id === "string"
                ? card.id
                : `card-${Date.now()}-${index}`,
            name:
              typeof card.name === "string" && card.name.trim()
                ? card.name
                : "My card",
            balance: asNumber(card.balance),
            type:
              card.type === "credit" || card.type === "cash"
                ? card.type
                : "debit",
          }),
        )
      : INITIAL.cards,
    prefs: {
      currency:
        typeof prefs.currency === "string"
          ? prefs.currency
          : INITIAL.prefs.currency,
      haptics:
        typeof prefs.haptics === "boolean"
          ? prefs.haptics
          : INITIAL.prefs.haptics,
      budgetAlerts:
        typeof prefs.budgetAlerts === "boolean"
          ? prefs.budgetAlerts
          : INITIAL.prefs.budgetAlerts,
      dailyReminderEnabled:
        typeof prefs.dailyReminderEnabled === "boolean"
          ? prefs.dailyReminderEnabled
          : INITIAL.prefs.dailyReminderEnabled,
      dailyReminderHour: asNumber(
        prefs.dailyReminderHour,
        INITIAL.prefs.dailyReminderHour,
      ),
      dailyReminderMinute: asNumber(
        prefs.dailyReminderMinute,
        INITIAL.prefs.dailyReminderMinute,
      ),
      showBalance:
        typeof prefs.showBalance === "boolean"
          ? prefs.showBalance
          : INITIAL.prefs.showBalance,
      travelMode:
        typeof prefs.travelMode === "boolean"
          ? prefs.travelMode
          : INITIAL.prefs.travelMode,
      travelCurrency:
        typeof prefs.travelCurrency === "string"
          ? prefs.travelCurrency
          : INITIAL.prefs.travelCurrency,
      tripBudget: asNumber(prefs.tripBudget, INITIAL.prefs.tripBudget),
      googleVisionApiKey:
        typeof prefs.googleVisionApiKey === "string"
          ? prefs.googleVisionApiKey
          : INITIAL.prefs.googleVisionApiKey,
    },
    categoryBudgets,
    exchangeRates: isRecord(saved.exchangeRates)
      ? (saved.exchangeRates as Record<string, number>)
      : {},
    ratesUpdatedAt:
      typeof saved.ratesUpdatedAt === "string" ? saved.ratesUpdatedAt : null,
    premiumPlan: saved.premiumPlan === "premium" ? "premium" : "free",
  };
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(INITIAL);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) setState(normalizeState(JSON.parse(raw)));
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)).catch(() => {});
  }, [state, loaded]);

  useEffect(() => {
    if (!loaded) return;
    setState((p) => {
      let newExpenses = [...p.expenses];
      let newSubs = [...p.subscriptions];
      let changed = false;

      newSubs = newSubs.map((sub) => {
        let lastDate = new Date(sub.lastProcessedDate);
        let now = new Date();
        let subChanged = false;

        while (true) {
          let nextDate = new Date(lastDate);
          if (sub.period === "monthly")
            nextDate.setMonth(nextDate.getMonth() + 1);
          else if (sub.period === "yearly")
            nextDate.setFullYear(nextDate.getFullYear() + 1);

          if (nextDate <= now) {
            newExpenses.unshift({
              id: `${Date.now()}-${Math.random()}`,
              title: sub.title,
              amount: sub.amount,
              category: sub.category,
              date: nextDate.toISOString(),
              note: `Auto-generated ${sub.period} subscription`,
            });
            lastDate = nextDate;
            subChanged = true;
            changed = true;
          } else {
            break;
          }
        }

        if (subChanged) {
          return { ...sub, lastProcessedDate: lastDate.toISOString() };
        }
        return sub;
      });

      if (changed) {
        return { ...p, expenses: newExpenses, subscriptions: newSubs };
      }
      return p;
    });
  }, [loaded]);

  const bumpStreak = (prev: AppState): Partial<AppState> => {
    const today = new Date().toDateString();
    if (prev.lastTrackedDate === today) return {};
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    // Non-punitive: gap pauses current run (resets to 1) but longest lives in discipline.
    const streak = prev.lastTrackedDate === yesterday ? prev.streak + 1 : 1;
    return { streak, lastTrackedDate: today };
  };

  const withDisciplineAndWidget = (next: AppState): AppState => {
    const discipline = recomputeDiscipline(
      next.expenses,
      next.categoryBudgets,
      next.income,
      next.discipline,
    );
    const merged = { ...next, discipline };
    const totalExpenses = getTotalExpenses(merged.expenses);
    const balance = getBalance(merged.income, merged.expenses);
    const now = new Date();
    const daysInMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0,
    ).getDate();
    const daysRemaining = Math.max(1, daysInMonth - now.getDate() + 1);
    const totalSaved = merged.savingGoals.reduce(
      (s, g) => s + g.currentAmount,
      0,
    );
    const safeToSpend = Math.max(
      0,
      (merged.income - totalExpenses - totalSaved) / daysRemaining,
    );

    void writeWidgetSnapshot({
      updatedAt: new Date().toISOString(),
      currency: merged.prefs.currency,
      spentThisWeek: computeWeekSpend(merged.expenses),
      safeToSpendToday: safeToSpend,
      balance,
      loggingStreak: Math.max(discipline.loggingStreak, merged.streak),
      showBalance: merged.prefs.showBalance,
    });

    return merged;
  };

  const addExpense = useCallback((e: Omit<Expense, "id">) => {
    setState((p) =>
      withDisciplineAndWidget({
        ...p,
        expenses: [{ ...e, id: `${Date.now()}` }, ...p.expenses],
        ...bumpStreak(p),
      }),
    );
  }, []);

  const editExpense = useCallback((id: string, updates: Partial<Expense>) => {
    setState((p) =>
      withDisciplineAndWidget({
        ...p,
        expenses: p.expenses.map((e) =>
          e.id === id ? { ...e, ...updates } : e,
        ),
      }),
    );
  }, []);

  const deleteExpense = useCallback((id: string) => {
    setState((p) =>
      withDisciplineAndWidget({
        ...p,
        expenses: p.expenses.filter((e) => e.id !== id),
      }),
    );
  }, []);

  const addSubscription = useCallback(
    (s: Omit<Subscription, "id" | "lastProcessedDate">) => {
      setState((p) => ({
        ...p,
        subscriptions: [
          { ...s, id: `sub-${Date.now()}`, lastProcessedDate: s.startDate },
          ...p.subscriptions,
        ],
      }));
    },
    [],
  );

  const deleteSubscription = useCallback((id: string) => {
    setState((p) => ({
      ...p,
      subscriptions: p.subscriptions.filter((s) => s.id !== id),
    }));
  }, []);

  const addSavingGoal = useCallback(
    (g: Omit<SavingGoal, "id" | "currentAmount" | "deposits">) => {
      setState((p) => ({
        ...p,
        savingGoals: [
          { ...g, id: `${Date.now()}`, currentAmount: 0, deposits: [] },
          ...p.savingGoals,
        ],
      }));
    },
    [],
  );

  const depositToGoal = useCallback((goalId: string, amount: number) => {
    setState((p) => ({
      ...p,
      savingGoals: p.savingGoals.map((g) =>
        g.id === goalId
          ? {
              ...g,
              currentAmount: g.currentAmount + amount,
              deposits: [
                ...g.deposits,
                { amount, date: new Date().toISOString() },
              ],
            }
          : g,
      ),
    }));
  }, []);

  const deleteSavingGoal = useCallback((id: string) => {
    setState((p) => ({
      ...p,
      savingGoals: p.savingGoals.filter((g) => g.id !== id),
    }));
  }, []);

  const addCard = useCallback((card: Omit<MoneyCard, "id">) => {
    setState((p) => ({
      ...p,
      cards: [{ ...card, id: `card-${Date.now()}` }, ...p.cards],
    }));
  }, []);

  const updateCardBalance = useCallback((id: string, balance: number) => {
    setState((p) => ({
      ...p,
      cards: p.cards.map((card) =>
        card.id === id ? { ...card, balance: Math.max(0, balance) } : card,
      ),
    }));
  }, []);

  const deleteCard = useCallback((id: string) => {
    setState((p) => ({
      ...p,
      cards: p.cards.filter((card) => card.id !== id),
    }));
  }, []);

  const setIncome = useCallback((income: number) => {
    setState((p) => withDisciplineAndWidget({ ...p, income }));
  }, []);

  const updatePref = useCallback(
    <K extends keyof Prefs>(key: K, value: Prefs[K]) => {
      setState((p) => ({ ...p, prefs: { ...p.prefs, [key]: value } }));
    },
    [],
  );

  const setTripBudget = useCallback((amount: number) => {
    setState((p) => ({
      ...p,
      prefs: { ...p.prefs, tripBudget: Math.max(0, amount) },
    }));
  }, []);

  const setPremiumPlan = useCallback((plan: PremiumPlan) => {
    setState((p) => ({ ...p, premiumPlan: plan }));
  }, []);

  const refreshExchangeRates = useCallback(async () => {
    try {
      setState((p) => {
        const base = p.prefs.currency || "USD";
        fetchExchangeRates(base)
          .then((result) => {
            setState((pp) => ({
              ...pp,
              exchangeRates: result.rates,
              ratesUpdatedAt: result.updatedAt,
            }));
          })
          .catch(() => {});
        return p;
      });
    } catch {}
  }, []);

  // Auto-fetch rates when travel mode is enabled or currencies change
  useEffect(() => {
    if (!loaded) return;
    setState((p) => {
      if (p.prefs.travelMode) {
        fetchExchangeRates(p.prefs.currency || "USD")
          .then((result) =>
            setState((pp) => ({
              ...pp,
              exchangeRates: result.rates,
              ratesUpdatedAt: result.updatedAt,
            })),
          )
          .catch(() => {});
      }
      return p;
    });
  }, [loaded]);

  const setCategoryBudget = useCallback(
    (categoryKey: string, amount: number) => {
      setState((p) =>
        withDisciplineAndWidget({
          ...p,
          categoryBudgets: { ...p.categoryBudgets, [categoryKey]: amount },
        }),
      );
    },
    [],
  );

  const clearFinancialData = useCallback(() => {
    setState((p) =>
      withDisciplineAndWidget({
        ...p,
        expenses: [],
        subscriptions: [],
        savingGoals: [],
        cards: [],
        categoryBudgets: {},
        streak: 0,
        lastTrackedDate: null,
        discipline: EMPTY_DISCIPLINE,
        exchangeRates: {},
        ratesUpdatedAt: null,
      }),
    );
  }, []);

  if (!loaded)
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        isPremium: state.premiumPlan === "premium",
        addExpense,
        editExpense,
        deleteExpense,
        addSubscription,
        deleteSubscription,
        addSavingGoal,
        depositToGoal,
        deleteSavingGoal,
        addCard,
        updateCardBalance,
        deleteCard,
        setIncome,
        updatePref,
        setCategoryBudget,
        clearFinancialData,
        refreshExchangeRates,
        setTripBudget,
        setPremiumPlan,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
