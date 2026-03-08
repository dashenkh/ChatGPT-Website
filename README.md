# Mongolia Tender Explorer

English-language explorer for Mongolia public procurement invitations, designed to cover 2019 onward and be deployable on Vercel.

## What this does

- Presents procurement invitation listings in English
- Supports browsing by year from 2019 onward
- Uses **100 records per page**
- Exposes a clean `/api/tenders` backend route
- Tries the **official tender API** first if you provide a bearer token
- Falls back to parsing the **public tender site HTML** if the API token is unavailable
- Falls back again to **mock demo data** so the UI still runs

## Stack

- Next.js App Router
- TypeScript
- Simple CSS
- Cheerio for server-side HTML parsing
- Ready for Vercel deployment

## Local setup

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Environment variables

Create a `.env.local` file if you have official API access:

```bash
TENDER_GOV_TOKEN=your_bearer_token_here
```

If you do **not** have a token, the app can still try the public English/Mongolian invitation pages.

## API route

Example:

```bash
/api/tenders?year=2026&page=1&perPage=100
```

Optional params:

- `query`: keyword search
- `source=open-api|public-html|mock`

Examples:

```bash
/api/tenders?year=2024&page=1&perPage=100&source=public-html
/api/tenders?year=2025&page=1&perPage=100&query=road
```

## Important caveat

The public tender site may change its HTML structure at any time. If that happens, update the selectors in:

```bash
lib/fetchers.ts
```

Specifically, review:

- table selectors
- pagination / total selectors
- link selectors for detail pages

## Recommended next upgrades

1. Add a database (Postgres / Supabase)
2. Backfill all years 2019–present into normalized tables
3. Add translated detail-page extraction
4. Add CSV export
5. Add advanced filters:
   - procuring entity
   - tender type
   - fund source
   - status
   - budget ranges
6. Add change tracking for amended / canceled / result-published tenders
7. Add a scheduled ingestion job

## Recommended Vercel deployment flow

1. Push this folder to GitHub
2. Import the repo into Vercel
3. Add `TENDER_GOV_TOKEN` in Vercel environment variables if you have one
4. Deploy

## Suggested production architecture

For a serious platform, use this pattern:

- **Frontend**: Next.js on Vercel
- **Ingestion job**: scheduled worker / cron
- **Storage**: Postgres
- **Search**: Postgres full text or Typesense / Meilisearch
- **Translation layer**: normalize and translate Mongolian-only fields into English
- **Observability**: log fetch failures and selector drift

## Notes

This project is intentionally built to get you live fast without pretending the source system is clean. The frontend is the easy part; the real work is the ingestion and normalization layer.
