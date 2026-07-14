-- Run this in your Supabase SQL editor (https://supabase.com/dashboard → SQL Editor)
-- This table is optional for now — the site works without Supabase initially.
-- Add this when you want to collect email subscribers or newsletter sign-ups.

create table if not exists subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  injury_interest text,          -- e.g. "acl-tear"
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table subscribers enable row level security;

-- Allow anyone to insert (subscribe), but not read other emails
create policy "Anyone can subscribe"
  on subscribers for insert
  with check (true);

-- Only the service role can read subscriber list
create policy "Service role reads subscribers"
  on subscribers for select
  using (auth.role() = 'service_role');
