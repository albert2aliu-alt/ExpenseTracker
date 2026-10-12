-- Shared family wallet schema + RLS (run in Supabase SQL editor)
-- Personal expenses stay in the client AppContext store; only shared txs live here.

create table if not exists public.wallets (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.wallet_members (
  wallet_id uuid references public.wallets(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'editor', 'viewer')),
  primary key (wallet_id, user_id)
);

create table if not exists public.shared_transactions (
  id uuid primary key default gen_random_uuid(),
  wallet_id uuid not null references public.wallets(id) on delete cascade,
  title text not null,
  amount numeric not null,
  category text not null,
  note text,
  date timestamptz not null default now(),
  created_by uuid not null references auth.users(id),
  title_updated_at timestamptz not null default now(),
  amount_updated_at timestamptz not null default now(),
  category_updated_at timestamptz not null default now(),
  note_updated_at timestamptz not null default now()
);

alter table public.wallets enable row level security;
alter table public.wallet_members enable row level security;
alter table public.shared_transactions enable row level security;

create or replace function public.is_wallet_member(wid uuid)
returns boolean language sql stable as $$
  select exists (
    select 1 from public.wallet_members m
    where m.wallet_id = wid and m.user_id = auth.uid()
  );
$$;

create or replace function public.can_edit_wallet(wid uuid)
returns boolean language sql stable as $$
  select exists (
    select 1 from public.wallet_members m
    where m.wallet_id = wid and m.user_id = auth.uid()
      and m.role in ('owner', 'editor')
  );
$$;

create policy wallets_select on public.wallets
  for select using (public.is_wallet_member(id));

create policy members_select on public.wallet_members
  for select using (public.is_wallet_member(wallet_id));

create policy txs_select on public.shared_transactions
  for select using (public.is_wallet_member(wallet_id));

create policy txs_insert on public.shared_transactions
  for insert with check (public.can_edit_wallet(wallet_id) and created_by = auth.uid());

create policy txs_update on public.shared_transactions
  for update using (public.can_edit_wallet(wallet_id));

-- Realtime
alter publication supabase_realtime add table public.shared_transactions;
