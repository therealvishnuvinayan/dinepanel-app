# 🍽️ Dinepanel – Restaurant Dashboard Starter

A modern, production‑ready **Next.js 15** dashboard template for restaurant operations. It ships with **Clerk auth**, **Neon/Postgres + Drizzle ORM**, **shadcn/ui + Radix primitives**, responsive charts, drag & drop, and a clean component architecture.

> Live preview screenshots are included in the repo root under `/docs` (add your own).

---

## ✨ Highlights

- 🔐 Authentication & organizations with **Clerk**
- 🗄️ **Postgres** (Neon/any PG) via **Drizzle ORM**
- 🎛️ Ready‑made dashboard widgets (KPIs, tables, charts, recent activity)
- 🧩 UI kit: **shadcn/ui**, **Radix UI**, **Lucide** icons
- 🗃️ Data tables via **TanStack Table** (sorting, filtering, pagination)
- 🗂️ Drag & drop modules (**dnd-kit**)
- 🎨 Dark mode, themes, layout primitives, responsive design
- 🧭 App Router, file‑based APIs, and server actions
- 🧹 Strict linting, Prettier, Husky, and lint‑staged
- 📦 Zero-config deploy to **Vercel**

---

## 🧰 Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript (5.x)
- **UI:** tailwindcss v4, shadcn/ui, Radix UI, HeroUI, Lucide
- **Auth:** Clerk (OAuth + email, orgs ready)
- **DB:** Postgres (Neon), Drizzle ORM, pg
- **State/Data:** React Hook Form, Zod, Zustand (optional)
- **Charts:** Recharts
- **DevX:** ESLint, Prettier, Husky, lint‑staged
- **Monitoring (optional):** Sentry

---

## 🚀 Quick Start

```bash
# 1) Clone
git clone https://github.com/<your-user>/<your-repo>.git dinepanel
cd dinepanel

# 2) Install deps
pnpm install    # or npm i / yarn

# 3) Configure environment
cp .env.example .env.local  # then edit values (see below)

# 4) (Optional) Initialize DB schema with Drizzle
# Adjust paths to your schema then run:
pnpm drizzle-kit generate
pnpm drizzle-kit push

# 5) Run dev server
pnpm dev
# → http://localhost:3000
```
> **Note:** This starter uses **Turbopack** in dev for great DX. You can switch to `next dev` if preferred.

---

## 🔑 Environment Variables

Create `.env.local` at the repo root and fill in:

```bash
# --- App ---
NEXT_PUBLIC_APP_URL=http://localhost:3000

# --- Clerk (Auth) ---
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_********************************
CLERK_SECRET_KEY=sk_test_********************************

# If using Clerk organizations (optional)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard/overview
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# --- Database (Neon / Postgres) ---
DATABASE_URL=postgres://<user>:<password>@<host>/<db>?sslmode=require

# --- Sentry (optional) ---
SENTRY_AUTH_TOKEN=
SENTRY_ORG=
SENTRY_PROJECT=
```

If you deploy on **Vercel**, replicate these variables in your project settings.

---

## 📂 Project Structure (high level)

```
src/
  app/                 # App Router pages & layouts
    (auth)/           # Clerk auth routes
    dashboard/        # Dashboard routes & widgets
    api/              # Route handlers / server actions
  components/         # Reusable UI and dashboard components
  lib/                # Utilities (db, validation, helpers)
  db/                 # Drizzle schema & migrations (if used here)
public/               # Static assets
```

> The exact folders may vary in your implementation — this starter is flexible.

---

## 🗄️ Database (Drizzle + Neon)

1. Create a Neon (or any Postgres) database and copy the **connection string** into `DATABASE_URL`.
2. Define your schema (e.g., `src/db/schema.ts`).
3. Generate & push migrations:
   ```bash
   pnpm drizzle-kit generate
   pnpm drizzle-kit push
   ```

---

## 🔐 Authentication (Clerk)

1. Create a Clerk app, copy **Publishable** and **Secret** keys.
2. Set redirect URLs as in the env example.
3. Wrap your app root with `ClerkProvider` and protect server/client routes with Clerk helpers (already wired in this starter).

---

## 🧪 Scripts

```bash
pnpm dev              # start dev (Turbopack)
pnpm build            # production build
pnpm start            # run built app
pnpm lint             # lint
pnpm lint:fix         # lint and format
pnpm format           # prettier write
pnpm format:check     # prettier check
```

---

## ☁️ Deployment (Vercel)

1. Push the repo to GitHub.
2. Import the project in **Vercel**.
3. Add the environment variables in Project Settings → Environment Variables.
4. Click **Deploy**. That’s it.

---

## 🧭 Roadmap / Ideas

- Multi‑tenant “locations” for restaurants
- Orders, menu management, waitlist & reservations
- Webhooks for POS integrations
- Real usage data via server actions + Drizzle
- Audit logs & activity feed

---

## 📄 License

MIT © 2025 — You’re free to use this starter in personal and commercial projects. Consider keeping a reference to the original author.

---

### 🙌 Credits

- UI & primitives: shadcn/ui, Radix UI, HeroUI
- Auth: Clerk
- DB: Drizzle ORM + Neon
- Charts: Recharts

---

> Questions or improvements? Open an issue or PR. Happy building! 🚀
