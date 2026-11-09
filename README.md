# Tartan Hub — CMU-Africa

A responsive campus portal built with **Next.js 15 App Router**, **React 19**, **TypeScript**, and **Lucide icons**. Based on the supplied HTML design.

## Requirements

- Node.js 20 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push the `tartan-hub` folder to a GitHub repository.
2. Import that repository into Vercel.
3. Choose the Next.js framework preset and deploy.

## File guide

- `app/page.tsx` — Main home page and external links. **Edit the `LINKS` object** to change destinations.
- `components/HubCard.tsx` — Reusable card component. Props control title, description, icon, status, and destination.
- `app/globals.css` — Colors, typography, layout, responsive breakpoints, hover effects.
- `app/layout.tsx` — Shared HTML layout and browser metadata.

## Important notes

- **Events** and **Opportunities** link to the URLs from the reference HTML. Verify that they still work before launch.
- **Knowledge Bank** and **Guild Updates** are marked *Coming soon* and link to their explanatory sections; no backend or submissions system is claimed.
- A text-based CMU-inspired mark is used instead of the remote logo URL. Replace it with an approved university logo asset when available.
- Original Opportunity Tracker contributor credit is preserved.
- No database, login, or CMS is required for this MVP.

## Future improvements

Add an admin-managed Guild Updates feed, a searchable Knowledge Bank, and opt-in People/Clubs directories when you have verified content and appropriate consent.
