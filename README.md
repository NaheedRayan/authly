# Authly

JWT-based authentication between a **Next.js** frontend ([Better-Auth](https://www.better-auth.com/)) and a **Go** backend, validated via JWKS.


> Companion project to a [Dreams of Code](https://www.youtube.com/@dreamsofcode) video tutorial.

## Architecture

```
Browser  -->  Next.js :3000  -->  PostgreSQL :5432
                 |
            JWT (Bearer)
                 |
              Go API :8080  -->  /api/auth/jwks (fetches public keys from Next.js)
```

- **Next.js app** handles auth (signup, login, sessions) via Better-Auth + JWT plugin
- **Go API** validates JWTs using the JWKS endpoint exposed by Better-Auth
- **PostgreSQL** stores users, sessions, and JWKS keys

## Getting Started

**1. Start the database**

```bash
docker compose up db -d
```

**2. Start the Next.js app**

```bash
cd app
npm install
npm run db:migrate   # run Better-Auth migrations
npm run dev          # http://localhost:3000
```

**3. Start the Go API**

```bash
cd api
go mod download
go run main.go       # http://localhost:8080
```

## Environment Variables

| Variable | Service | Default |
|---|---|---|
| `DATABASE_URL` | app | `postgresql://postgres:postgres@localhost:5432/authly` |
| `BETTER_AUTH_URL` | app | `http://localhost:3000` |
| `GO_API_URL` | app | `http://localhost:8080` |
| `JWKS_URL` | api | `http://localhost:3000/api/auth/jwks` |

## Project Structure

- [`/app`](./app) -- Next.js frontend with Better-Auth
- [`/api`](./api) -- Go API with JWT/JWKS validation
