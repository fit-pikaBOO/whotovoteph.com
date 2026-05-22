# WhoToVotePH

A bilingual (EN/FIL) voter education platform helping Filipinos make informed decisions based on facts.

## Tech Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Hosting**: Vercel
- **Database/Auth**: Supabase (PostgreSQL + Auth)
- **Email**: Resend
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **i18n**: next-intl (English + Filipino)

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check

## Project Structure
- `src/app/[locale]/` — All pages are locale-prefixed for bilingual support
- `src/components/ui/` — shadcn/ui primitives
- `src/components/` — App-specific components
- `src/lib/supabase/` — Supabase client/server utilities
- `src/i18n/messages/` — Translation JSON files (en.json, fil.json)
- `src/types/` — Shared TypeScript types

## Conventions
- All user-facing text must exist in both `en.json` and `fil.json`
- Every fact displayed must have a `source_url` — never show unsourced claims
- Use server components by default; client components only when interactivity needed
- Supabase queries go through server components or API routes (never expose service key client-side)
- Follow shadcn/ui patterns for all UI components
- Mobile-first responsive design (target budget Android phones on slow connections)

## Database
- Supabase project with RLS enabled on all tables
- Key tables: officials, facts, categories, fact_categories, users, bookmarks
- All content columns have `_en` and `_fil` variants (e.g., `title_en`, `title_fil`)

## Non-Partisanship Rules
- Equal depth/structure for ALL officials regardless of political alignment
- Every fact requires a verifiable source URL
- No editorializing — present facts, let users decide
- No endorsements, rankings, or "recommended" candidates
- Achievement and controversy sections must be equally prominent

## Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service key (server only)
- `RESEND_API_KEY` — Resend API key for emails
- `NEXT_PUBLIC_SITE_URL` — Production URL (whotovoteph.com)
