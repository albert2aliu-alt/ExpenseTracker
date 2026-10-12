import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export type WalletRole = 'owner' | 'editor' | 'viewer';

export type WalletMember = {
  id: string;
  displayName: string;
  role: WalletRole;
};

export type SharedTransaction = {
  id: string;
  walletId: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  createdBy: string;
  /** Per-field versions for LWW conflict resolution */
  fieldUpdatedAt: {
    title: string;
    amount: string;
    category: string;
    note: string;
  };
  note?: string;
  /** Set when a remote edit won a field after local edit */
  editedElsewhere?: boolean;
};

export type SharedWallet = {
  id: string;
  name: string;
  members: WalletMember[];
  /** Personal expenses stay in AppContext; shared txs live here only */
  transactions: SharedTransaction[];
};

type SharedWalletContextType = {
  wallet: SharedWallet | null;
  cloudEnabled: boolean;
  createWallet: (name: string, ownerName: string) => void;
  addMember: (displayName: string, role: WalletRole) => void;
  addSharedTransaction: (
    tx: Omit<SharedTransaction, 'id' | 'walletId' | 'fieldUpdatedAt' | 'editedElsewhere'>,
  ) => void;
  updateSharedTransaction: (
    id: string,
    updates: Partial<Pick<SharedTransaction, 'title' | 'amount' | 'category' | 'note'>>,
  ) => void;
  clearEditedElsewhere: (id: string) => void;
};

const STORAGE_KEY = '@extrack_shared_wallet_v1';
const SharedWalletContext = createContext<SharedWalletContextType | null>(null);

function nowIso() {
  return new Date().toISOString();
}

function mergeField<T>(
  local: T,
  remote: T,
  localAt: string,
  remoteAt: string,
): { value: T; at: string; remoteWon: boolean } {
  if (remoteAt > localAt) return { value: remote, at: remoteAt, remoteWon: true };
  return { value: local, at: localAt, remoteWon: false };
}

export function SharedWalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<SharedWallet | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) setWallet(JSON.parse(raw) as SharedWallet);
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(wallet)).catch(() => {});
  }, [wallet, loaded]);

  // Optional realtime when Supabase is configured
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase || !wallet?.id) return;
    const client = supabase;
    const walletId = wallet.id;

    const channel = client
      .channel(`wallet:${walletId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'shared_transactions',
          filter: `wallet_id=eq.${walletId}`,
        },
        (payload) => {
          const remote = payload.new as Record<string, unknown> | null;
          if (!remote || typeof remote.id !== 'string') return;
          const remoteId = remote.id;

          setWallet((prev) => {
            if (!prev) return prev;
            const existing = prev.transactions.find((t) => t.id === remoteId);
            if (!existing) {
              const incoming: SharedTransaction = {
                id: remoteId,
                walletId: String(remote.wallet_id ?? prev.id),
                title: String(remote.title ?? ''),
                amount: Number(remote.amount ?? 0),
                category: String(remote.category ?? 'other'),
                date: String(remote.date ?? nowIso()),
                createdBy: String(remote.created_by ?? 'remote'),
                note: typeof remote.note === 'string' ? remote.note : undefined,
                fieldUpdatedAt: {
                  title: String(remote.title_updated_at ?? nowIso()),
                  amount: String(remote.amount_updated_at ?? nowIso()),
                  category: String(remote.category_updated_at ?? nowIso()),
                  note: String(remote.note_updated_at ?? nowIso()),
                },
                editedElsewhere: true,
              };
              return { ...prev, transactions: [incoming, ...prev.transactions] };
            }

            const titleM = mergeField(
              existing.title,
              String(remote.title ?? existing.title),
              existing.fieldUpdatedAt.title,
              String(remote.title_updated_at ?? existing.fieldUpdatedAt.title),
            );
            const amountM = mergeField(
              existing.amount,
              Number(remote.amount ?? existing.amount),
              existing.fieldUpdatedAt.amount,
              String(remote.amount_updated_at ?? existing.fieldUpdatedAt.amount),
            );
            const categoryM = mergeField(
              existing.category,
              String(remote.category ?? existing.category),
              existing.fieldUpdatedAt.category,
              String(remote.category_updated_at ?? existing.fieldUpdatedAt.category),
            );
            const noteRemote =
              typeof remote.note === 'string' ? remote.note : existing.note;
            const noteM = mergeField(
              existing.note,
              noteRemote,
              existing.fieldUpdatedAt.note,
              String(remote.note_updated_at ?? existing.fieldUpdatedAt.note),
            );

            const remoteWon =
              titleM.remoteWon || amountM.remoteWon || categoryM.remoteWon || noteM.remoteWon;

            return {
              ...prev,
              transactions: prev.transactions.map((t) =>
                t.id === existing.id
                  ? {
                      ...t,
                      title: titleM.value,
                      amount: amountM.value,
                      category: categoryM.value,
                      note: noteM.value,
                      fieldUpdatedAt: {
                        title: titleM.at,
                        amount: amountM.at,
                        category: categoryM.at,
                        note: noteM.at,
                      },
                      editedElsewhere: t.editedElsewhere || remoteWon,
                    }
                  : t,
              ),
            };
          });
        },
      )
      .subscribe();

    return () => {
      void client.removeChannel(channel);
    };
  }, [wallet?.id]);

  const createWallet = useCallback((name: string, ownerName: string) => {
    const ownerId = `member-${Date.now()}`;
    setWallet({
      id: `wallet-${Date.now()}`,
      name: name.trim() || 'Family Wallet',
      members: [{ id: ownerId, displayName: ownerName.trim() || 'Me', role: 'owner' }],
      transactions: [],
    });
  }, []);

  const addMember = useCallback((displayName: string, role: WalletRole) => {
    setWallet((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        members: [
          ...prev.members,
          { id: `member-${Date.now()}`, displayName: displayName.trim(), role },
        ],
      };
    });
  }, []);

  const addSharedTransaction = useCallback(
    (tx: Omit<SharedTransaction, 'id' | 'walletId' | 'fieldUpdatedAt' | 'editedElsewhere'>) => {
      const stamp = nowIso();
      setWallet((prev) => {
        if (!prev) return prev;
        const next: SharedTransaction = {
          ...tx,
          id: `stx-${Date.now()}`,
          walletId: prev.id,
          fieldUpdatedAt: { title: stamp, amount: stamp, category: stamp, note: stamp },
        };
        return { ...prev, transactions: [next, ...prev.transactions] };
      });
    },
    [],
  );

  const updateSharedTransaction = useCallback(
    (
      id: string,
      updates: Partial<Pick<SharedTransaction, 'title' | 'amount' | 'category' | 'note'>>,
    ) => {
      const stamp = nowIso();
      setWallet((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          transactions: prev.transactions.map((t) => {
            if (t.id !== id) return t;
            return {
              ...t,
              ...updates,
              fieldUpdatedAt: {
                title: updates.title !== undefined ? stamp : t.fieldUpdatedAt.title,
                amount: updates.amount !== undefined ? stamp : t.fieldUpdatedAt.amount,
                category: updates.category !== undefined ? stamp : t.fieldUpdatedAt.category,
                note: updates.note !== undefined ? stamp : t.fieldUpdatedAt.note,
              },
            };
          }),
        };
      });
    },
    [],
  );

  const clearEditedElsewhere = useCallback((id: string) => {
    setWallet((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        transactions: prev.transactions.map((t) =>
          t.id === id ? { ...t, editedElsewhere: false } : t,
        ),
      };
    });
  }, []);

  const value = useMemo(
    () => ({
      wallet,
      cloudEnabled: isSupabaseConfigured,
      createWallet,
      addMember,
      addSharedTransaction,
      updateSharedTransaction,
      clearEditedElsewhere,
    }),
    [
      wallet,
      createWallet,
      addMember,
      addSharedTransaction,
      updateSharedTransaction,
      clearEditedElsewhere,
    ],
  );

  return (
    <SharedWalletContext.Provider value={value}>{children}</SharedWalletContext.Provider>
  );
}

export function useSharedWallet() {
  const ctx = useContext(SharedWalletContext);
  if (!ctx) throw new Error('useSharedWallet must be used within SharedWalletProvider');
  return ctx;
}
