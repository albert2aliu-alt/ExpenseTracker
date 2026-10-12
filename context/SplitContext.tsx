/**
 * SplitContext.tsx
 * Manages split bills, group members, and IOU balances.
 * Persisted via AsyncStorage.
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Member {
  id: string;
  name: string;
  color: string;
}

export type SplitMode = 'equal' | 'exact' | 'percentage';

export interface SplitShare {
  memberId: string;
  /** For exact mode: the dollar amount they owe.
   *  For percentage mode: their percentage.
   *  For equal mode: ignored (auto-computed). */
  value: number;
}

export interface SplitBill {
  id: string;
  title: string;
  totalAmount: number;
  currency: string;
  date: string;
  paidByMemberId: string;
  splitMode: SplitMode;
  shares: SplitShare[];   // one entry per participant, including the payer's own share
  note?: string;
  settled: boolean;
}

export interface Settlement {
  id: string;
  fromMemberId: string;
  toMemberId: string;
  amount: number;
  date: string;
  billId?: string;
}

/** Net balance map: positive = is owed money, negative = owes money */
export type BalanceMap = Record<string, number>;

// ─── Context ──────────────────────────────────────────────────────────────────

interface SplitState {
  members: Member[];
  bills: SplitBill[];
  settlements: Settlement[];
}

interface SplitContextType extends SplitState {
  addMember: (name: string) => Member;
  removeMember: (id: string) => void;
  addBill: (bill: Omit<SplitBill, 'id' | 'date' | 'settled'>) => void;
  deleteBill: (id: string) => void;
  settleBill: (id: string) => void;
  addSettlement: (s: Omit<Settlement, 'id' | 'date'>) => void;
  getNetBalances: () => BalanceMap;
  getMinimalTransactions: () => { from: Member; to: Member; amount: number }[];
}

const STORAGE_KEY = '@extrack_splits_v1';

const MEMBER_COLORS = [
  '#6C3FEF', '#FF6B7A', '#34C47C', '#FFAD0D',
  '#3C82FF', '#AF52DE', '#4ECDC4', '#FF9F0A',
  '#5AC8FA', '#FF2D55',
];

const SplitContext = createContext<SplitContextType | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function SplitProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SplitState>({
    members: [],
    bills: [],
    settlements: [],
  });
  const [loaded, setLoaded] = useState(false);

  // Load from storage
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((raw) => {
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as SplitState;
          setState(parsed);
        } catch {}
      }
      setLoaded(true);
    });
  }, []);

  // Persist on change
  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state, loaded]);

  // ── Members ──

  const addMember = useCallback((name: string): Member => {
    const id = `m_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    const color = MEMBER_COLORS[Math.floor(Math.random() * MEMBER_COLORS.length)];
    const member: Member = { id, name: name.trim(), color };
    setState((s) => ({ ...s, members: [...s.members, member] }));
    return member;
  }, []);

  const removeMember = useCallback((id: string) => {
    setState((s) => ({ ...s, members: s.members.filter((m) => m.id !== id) }));
  }, []);

  // ── Bills ──

  const addBill = useCallback(
    (bill: Omit<SplitBill, 'id' | 'date' | 'settled'>) => {
      const newBill: SplitBill = {
        ...bill,
        id: `b_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        date: new Date().toISOString(),
        settled: false,
      };
      setState((s) => ({ ...s, bills: [newBill, ...s.bills] }));
    },
    []
  );

  const deleteBill = useCallback((id: string) => {
    setState((s) => ({ ...s, bills: s.bills.filter((b) => b.id !== id) }));
  }, []);

  const settleBill = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      bills: s.bills.map((b) => (b.id === id ? { ...b, settled: true } : b)),
    }));
  }, []);

  // ── Settlements ──

  const addSettlement = useCallback(
    (s: Omit<Settlement, 'id' | 'date'>) => {
      const settlement: Settlement = {
        ...s,
        id: `st_${Date.now()}`,
        date: new Date().toISOString(),
      };
      setState((prev) => ({
        ...prev,
        settlements: [settlement, ...prev.settlements],
      }));
    },
    []
  );

  // ── Balance Computation ──

  const getNetBalances = useCallback((): BalanceMap => {
    const balances: BalanceMap = {};

    // Init all members to 0
    state.members.forEach((m) => (balances[m.id] = 0));

    // Process unsettled bills
    state.bills
      .filter((b) => !b.settled)
      .forEach((bill) => {
        const payer = bill.paidByMemberId;
        const payerHasShare = bill.shares.some((share) => share.memberId === payer);

        if (bill.splitMode === 'equal') {
          const participantCount = payerHasShare ? bill.shares.length : bill.shares.length + 1;
          const perPerson = participantCount > 0 ? bill.totalAmount / participantCount : 0;
          bill.shares.forEach((share) => {
            if (share.memberId !== payer) {
              balances[payer] = (balances[payer] ?? 0) + perPerson;
              balances[share.memberId] = (balances[share.memberId] ?? 0) - perPerson;
            }
          });
          return;
        }

        bill.shares.forEach((share) => {
          if (share.memberId === payer) return;

          const amount =
            bill.splitMode === 'percentage'
              ? (share.value / 100) * bill.totalAmount
              : share.value;

          balances[payer] = (balances[payer] ?? 0) + amount;
          balances[share.memberId] = (balances[share.memberId] ?? 0) - amount;
        });
      });

    // Subtract settled amounts
    state.settlements.forEach((s) => {
      balances[s.fromMemberId] = (balances[s.fromMemberId] ?? 0) + s.amount;
      balances[s.toMemberId] = (balances[s.toMemberId] ?? 0) - s.amount;
    });

    return balances;
  }, [state.bills, state.settlements, state.members]);

  /**
   * Greedy debt-simplification algorithm.
   * Reduces n*(n-1) potential transactions to at most n-1.
   */
  const getMinimalTransactions = useCallback((): {
    from: Member;
    to: Member;
    amount: number;
  }[] => {
    const balances = getNetBalances();
    const creditors: { id: string; amount: number }[] = [];
    const debtors: { id: string; amount: number }[] = [];

    Object.entries(balances).forEach(([id, amount]) => {
      if (amount > 0.005) creditors.push({ id, amount });
      else if (amount < -0.005) debtors.push({ id, amount: -amount });
    });

    const result: { from: Member; to: Member; amount: number }[] = [];
    let ci = 0;
    let di = 0;

    while (ci < creditors.length && di < debtors.length) {
      const credit = creditors[ci];
      const debt = debtors[di];
      const settle = Math.min(credit.amount, debt.amount);

      const fromMember = state.members.find((m) => m.id === debt.id);
      const toMember = state.members.find((m) => m.id === credit.id);
      if (fromMember && toMember) {
        result.push({ from: fromMember, to: toMember, amount: settle });
      }

      credit.amount -= settle;
      debt.amount -= settle;
      if (credit.amount < 0.005) ci++;
      if (debt.amount < 0.005) di++;
    }

    return result;
  }, [getNetBalances, state.members]);

  return (
    <SplitContext.Provider
      value={{
        ...state,
        addMember,
        removeMember,
        addBill,
        deleteBill,
        settleBill,
        addSettlement,
        getNetBalances,
        getMinimalTransactions,
      }}
    >
      {children}
    </SplitContext.Provider>
  );
}

export function useSplit() {
  const ctx = useContext(SplitContext);
  if (!ctx) throw new Error('useSplit must be used within SplitProvider');
  return ctx;
}
