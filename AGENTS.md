# AGENTS.md

Vite + React 18 + TypeScript + Tailwind + shadcn/ui single-page portfolio (Yousef Mahmoud, data analyst). Deployed to Vercel (`portfolio-kohl-nine-61.vercel.app`); a GitHub Actions workflow also deploys `dist/` to GitHub Pages on push to `main`.

## Commands

- `npm run dev` — dev server on port **8080** (host `::`)
- `npm run lint` — ESLint (flat config). This is the **only** verification gate: there is no test suite and no typecheck script; `npm run build` runs only `vite build` (no `tsc`), so type errors will NOT fail the build.
- `npm run build` / `npm run build:dev`
- `npm run dev:cms` — local Decap CMS proxy; requires uncommenting `local_backend: true` in `public/admin/config.yml` first.
- Use **npm**, not bun (CI runs `npm ci`; both lockfiles exist but package-lock.json is canonical).

## Content flow (do not hardcode text)

- All page content lives in `src/lib/portfolio-data.json`, typed by `src/lib/portfolio-data.ts`. Components read from `portfolioData` — edit the JSON, not component JSX, for copy/data changes.
- The JSON is managed via Decap CMS at `/admin` (`public/admin/`). Field schema is in `public/admin/config.yml`; update that file when changing the JSON shape. Media uploads go to `public/uploads`.
- `api/*.ts` are Vercel edge functions implementing Decap CMS GitHub OAuth (`GITHUB_CLIENT_ID` env var on Vercel). They don't run under `vite dev`.

## Component structure & Navigation

- `src/components/Portfolio/` contains the 13 active canonical portfolio components (Header, HeroMinimal, MobileNav, ScrollProgress, DataFieldBackground, AboutEnhanced, Experience, SkillsMinimal, ProjectsModern, EducationMinimal, CertificationsModern, ContactMinimal, Footer). Dead variants have been pruned.
- Navigation items and section ordering are driven centrally by `src/lib/sections.ts` (providing `getHeaderNavItems`, `getMobileNavItems`, `getFooterNavItems`). Edit `sections.ts` to add or reorder portfolio sections.

## Conventions

- Path alias `@` → `src/`.
- New routes must be added above the catch-all `*` route in `src/App.tsx`.
- shadcn/ui primitives live in `src/components/ui` (config in `components.json`).
- tsconfig intentionally loosens TS (`strictNullChecks: false`, `noImplicitAny: false`) — don't tighten globally.
- `vercel.json` sets strict CSP/security headers; new external origins (fonts, APIs) must be added to its CSP or they'll be blocked in production.
