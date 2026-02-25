# Authly - Go API

Stateless Go API that validates JWT tokens issued by Better-Auth via JWKS.

## Setup

```bash
go mod download
go run main.go       # starts on http://localhost:8080
```

Requires the Next.js app running on `:3000` (for JWKS key fetching).

## Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Health check |
| `GET` | `/api/auth/verify` | Validate JWT, return user info |
| `GET` | `/api/me` | Get authenticated user |

All `/api/*` endpoints require a valid `Authorization: Bearer <token>` header.

## Testing

```bash
go test ./...
```

## How It Works

1. Fetches public keys from `http://localhost:3000/api/auth/jwks`
2. Validates incoming JWT tokens against those keys
3. Extracts user claims (id, email, name) from valid tokens
4. Rejects invalid/expired tokens with appropriate errors
