# Authly - Next.js App

Next.js 15 frontend with [Better-Auth](https://www.better-auth.com/) for authentication and JWT token generation.

## Stack

- Next.js 15 (App Router)
- Better-Auth with JWT plugin
- PostgreSQL (via `pg` driver)
- Tailwind CSS 4 + Shadcn UI

## Setup

```bash
npm install
npm run db:migrate   # run Better-Auth database migrations
npm run dev          # starts on http://localhost:3000
```

Requires PostgreSQL running (see root [docker-compose](../docker-compose.yml)).

## Key Files

| File | Purpose |
|---|---|
| `src/lib/auth.ts` | Better-Auth server config (DB, JWT plugin) |
| `src/lib/auth-client.ts` | Better-Auth client for React |
| `src/app/api/auth/[...all]/route.ts` | Auth API handler (includes JWKS endpoint) |
| `src/app/api/[...path]/route.ts` | Proxy to Go API (injects JWT automatically) |
| `src/app/login/page.tsx` | Login page |
| `src/app/signup/page.tsx` | Signup page |

## How It Works

1. Users sign up / log in via Better-Auth (email + password)
2. Better-Auth issues a JWT signed with a private key stored in PostgreSQL
3. The JWKS endpoint (`/api/auth/jwks`) exposes the public key for external validation
4. API requests to Go are proxied through Next.js, which injects the JWT as a Bearer token
