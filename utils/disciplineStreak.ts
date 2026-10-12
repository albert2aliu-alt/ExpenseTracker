/**
 * Non-punitive discipline streaks.
 * Missed days pause the current run; they never wipe longest-run history.
 */
export type DayDiscipline = {
  logged: boolean;
  underBudget: boolean;
};

export type DisciplineState = {
  /** Consecutive days with ≥1 expense logged (current run; 0 if paused). */
  loggingStreak: number;
  longestLoggingStreak: number;
  /** Consecutive under-budget calendar days (current run). */
  budgetStreak: number;
  longestBudgetStreak: number;
  /** ISO date keys (YYYY-MM-DD) → day flags. History is retained. */
  dayHistory: Record<string, DayDiscipline>;
  lastEvaluatedDate: string | null;
};

export const EMPTY_DISCIPLINE: DisciplineState = {
  loggingStreak: 0,
  longestLoggingStreak: 0,
  budgetStreak: 0,
  longestBudgetStreak: 0,
  dayHistory: {},
  lastEvaluatedDate: null,
};

export function toDateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function shiftDateKey(key: string, deltaDays: number): string {
  const [y, m, d] = key.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + deltaDays);
  return toDateKey(dt);
}

function countBackwardRun(
  history: Record<string, DayDiscipline>,
  fromKey: string,
  predicate: (day: DayDiscipline) => boolean,
): number {
  let run = 0;
  let cursor = fromKey;
  while (true) {
    const day = history[cursor];
    if (!day || !predicate(day)) break;
    run += 1;
    cursor = shiftDateKey(cursor, -1);
  }
  return run;
}

export type ExpenseLike = { date: string; amount: number };
export type BudgetMap = Record<string, number>;

/**
 * Recompute discipline from expenses + category budgets.
 * Under-budget day = day's spend ≤ (sum of monthly category budgets / days-in-month),
 * or ≤ income/days-in-month when no category budgets are set.
 */
export function recomputeDiscipline(
  expenses: ExpenseLike[],
  categoryBudgets: BudgetMap,
  income: number,
  previous: DisciplineState,
): DisciplineState {
  const todayKey = toDateKey();
  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
  ).getDate();

  const monthlyBudgetCap =
    Object.values(categoryBudgets).reduce((s, n) => s + (Number.isFinite(n) ? n : 0), 0) ||
    Math.max(0, income);
  const dailyCap = monthlyBudgetCap > 0 ? monthlyBudgetCap / daysInMonth : Infinity;

  const spendByDay: Record<string, number> = {};
  for (const e of expenses) {
    const key = toDateKey(new Date(e.date));
    spendByDay[key] = (spendByDay[key] ?? 0) + e.amount;
  }

  // Merge today's observation into history (preserve older days).
  const dayHistory = { ...previous.dayHistory };
  const todaySpend = spendByDay[todayKey] ?? 0;
  const logged = todaySpend > 0 || Boolean(dayHistory[todayKey]?.logged);
  const underBudget = logged ? todaySpend <= dailyCap : Boolean(dayHistory[todayKey]?.underBudget);

  // Backfill any expense days present in data (last 90 days) without wiping gaps.
  const cutoff = shiftDateKey(todayKey, -90);
  for (const [key, spend] of Object.entries(spendByDay)) {
    if (key < cutoff) continue;
    dayHistory[key] = {
      logged: true,
      underBudget: spend <= dailyCap,
    };
  }
  if (logged || dayHistory[todayKey]) {
    dayHistory[todayKey] = {
      logged: Boolean(dayHistory[todayKey]?.logged || logged),
      underBudget: dayHistory[todayKey]?.logged || logged ? underBudget : false,
    };
  }

  const loggingStreak = countBackwardRun(dayHistory, todayKey, (d) => d.logged);
  const budgetStreak = countBackwardRun(
    dayHistory,
    todayKey,
    (d) => d.logged && d.underBudget,
  );

  return {
    loggingStreak,
    longestLoggingStreak: Math.max(previous.longestLoggingStreak, loggingStreak),
    budgetStreak,
    longestBudgetStreak: Math.max(previous.longestBudgetStreak, budgetStreak),
    dayHistory,
    lastEvaluatedDate: todayKey,
  };
}

/** Heatmap cells for the last N days (oldest → newest). Gaps are neutral, not punitive. */
export function buildHeatmap(
  history: Record<string, DayDiscipline>,
  days = 14,
): { key: string; status: 'logged_ok' | 'logged_over' | 'gap' }[] {
  const today = toDateKey();
  const cells: { key: string; status: 'logged_ok' | 'logged_over' | 'gap' }[] = [];
  for (let i = days - 1; i >= 0; i -= 1) {
    const key = shiftDateKey(today, -i);
    const day = history[key];
    if (!day?.logged) cells.push({ key, status: 'gap' });
    else if (day.underBudget) cells.push({ key, status: 'logged_ok' });
    else cells.push({ key, status: 'logged_over' });
  }
  return cells;
}
