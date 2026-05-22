-- WhoToVotePH Initial Schema

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- Officials table (President, VP, Senators, Congressmen)
create table officials (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  full_name text not null,
  position text not null check (position in ('president', 'vice_president', 'senator', 'congressman')),
  party text,
  photo_url text,
  term_start date,
  term_end date,
  bio_en text,
  bio_fil text,
  status text not null default 'current' check (status in ('current', 'former', 'candidate')),
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Categories for organizing facts
create table categories (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name_en text not null,
  name_fil text not null,
  created_at timestamptz default now()
);

-- Facts (achievements, controversies, promises, legislation, statements)
create table facts (
  id uuid primary key default uuid_generate_v4(),
  official_id uuid not null references officials(id) on delete cascade,
  type text not null check (type in ('achievement', 'controversy', 'promise', 'legislation', 'statement')),
  title_en text not null,
  title_fil text not null,
  description_en text not null,
  description_fil text not null,
  source_url text not null,
  source_name text not null,
  date_occurred date,
  verified boolean default true,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Junction table for fact categories
create table fact_categories (
  fact_id uuid not null references facts(id) on delete cascade,
  category_id uuid not null references categories(id) on delete cascade,
  primary key (fact_id, category_id)
);

-- User profiles (extends Supabase auth.users)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  preferred_language text default 'en' check (preferred_language in ('en', 'fil')),
  newsletter_subscribed boolean default false,
  created_at timestamptz default now()
);

-- Bookmarks
create table bookmarks (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  official_id uuid not null references officials(id) on delete cascade,
  created_at timestamptz default now(),
  unique (user_id, official_id)
);

-- Indexes
create index idx_facts_official_id on facts(official_id);
create index idx_facts_type on facts(type);
create index idx_officials_position on officials(position);
create index idx_officials_slug on officials(slug);
create index idx_bookmarks_user_id on bookmarks(user_id);

-- Row Level Security
alter table officials enable row level security;
alter table facts enable row level security;
alter table categories enable row level security;
alter table fact_categories enable row level security;
alter table profiles enable row level security;
alter table bookmarks enable row level security;

-- Public read access for officials, facts, categories
create policy "Officials are viewable by everyone" on officials for select using (true);
create policy "Facts are viewable by everyone" on facts for select using (true);
create policy "Categories are viewable by everyone" on categories for select using (true);
create policy "Fact categories are viewable by everyone" on fact_categories for select using (true);

-- Profiles: users can read/update their own
create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = id);

-- Bookmarks: users can manage their own
create policy "Users can view own bookmarks" on bookmarks for select using (auth.uid() = user_id);
create policy "Users can insert own bookmarks" on bookmarks for insert with check (auth.uid() = user_id);
create policy "Users can delete own bookmarks" on bookmarks for delete using (auth.uid() = user_id);

-- Function to auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, new.raw_user_meta_data->>'display_name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for new user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Updated_at trigger
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger officials_updated_at before update on officials
  for each row execute procedure update_updated_at();

create trigger facts_updated_at before update on facts
  for each row execute procedure update_updated_at();
