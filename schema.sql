create table public.balances (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  month date not null,
  contributions numeric not null default 0,
  withdrawals numeric not null default 0,
  ending_balance numeric not null,
  unique (user_id, month)
);
create table public.fund_performance (
  month date primary key,
  return_pct numeric not null
);
alter table public.balances enable row level security;
alter table public.fund_performance enable row level security;
create policy "own balances, mfa only" on public.balances for select to authenticated
  using (user_id = (select auth.uid()) and (select auth.jwt()->>'aal') = 'aal2');
create policy "fund performance, mfa only" on public.fund_performance for select to authenticated
  using ((select auth.jwt()->>'aal') = 'aal2');
