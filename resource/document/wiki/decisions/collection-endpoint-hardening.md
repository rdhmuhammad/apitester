# Collection Endpoint Hardening

**Summary**: Architectural decision to enforce authentication, JSON schema unmarshaling, body size limits, and origin-restricted CORS on `/collection/read` and `/collection/write`.
**Sources**: Codebase analysis (`apitester.go`, `internal/usecase/watch/controller.go`, `internal/usecase/watch/usecase.go`, `internal/usecase/auth/usecase.go`, `pkg/middleware/cors.go`).
**Last updated**: 2026-10-30

---

## Context

Because `collection.json` can contain sensitive API tokens (`auth.bearer`, `variable`) and executable browser scripts (`event`), unauthorized read or write access to `/api/v1/collection/read` and `/api/v1/collection/write` allows attackers to steal credentials or plant malicious scripts (stored client-side code execution).

Previously:
1. `middleware.CookieAuth` was defined in `pkg/middleware/auth.go` but never wired to `watch.Controller` routes when admin credentials were enabled.
2. `WriteCollection` wrote raw request bodies directly to disk without bounding body size or validating JSON structure.
3. `middleware.AllowCORS` reflected arbitrary `Origin` headers with `Access-Control-Allow-Credentials: true`, allowing cross-origin sites to read or overwrite local collections.
4. `jwtSecretFromEnv()` fell back to a predictable static string (`"default-secret-change-me"`) when `JWT_SECRET` was unset.

## Decisions

1. **Conditional `CookieAuth` Enforcement on Collection Routes (`apitester.go`, `watch/controller.go`)**:
   - When `authCtrl.Uc.HasAuth()` is `true` (admin credentials configured via `WithCredentials` or `ADMIN_USERNAME`/`ADMIN_PASSWORD`), `watchCtrl` wraps `GET /collection/read` and `PUT /collection/write` with `middleware.CookieAuth(authCtrl.Uc.JWTSecret())`.
   - When credentials are not configured, public mode remains active for local/embedded development convenience.
2. **Input Size Limit & `DocsContent` JSON Validation (`watch/controller.go`, `watch/usecase.go`)**:
   - `Controller.WriteCollection` wraps `r.Body` with `http.MaxBytesReader(w, r.Body, 10<<20)` (10 MB limit).
   - `Usecase.WriteCollection` unmarshals the incoming payload into `DocsContent` before calling `os.WriteFile`, rejecting malformed JSON with `400 Bad Request`.
3. **Origin-Restricted CORS (`pkg/middleware/cors.go`)**:
   - `AllowCORS` only sets `Access-Control-Allow-Origin` and `Access-Control-Allow-Credentials: true` when the request `Origin` matches the server's own `Host` or an explicit origin listed in the `CORS_ALLOWED_ORIGINS` environment variable.
4. **CSPRNG Fallback for JWT Secret (`internal/usecase/auth/usecase.go`)**:
   - When `JWT_SECRET` is unset, `jwtSecretFromEnv()` generates a 32-byte cryptographically random secret via `crypto/rand.Read` at startup instead of using a static string.

## Consequences

- Unauthenticated callers receive `401 Unauthorized` on `/collection/read` and `/collection/write` whenever admin credentials are enabled.
- Malformed or non-JSON payloads cannot corrupt `collection.json` on disk.
- Cross-origin websites visited by a developer can no longer silently read or overwrite a locally running `apitester` instance.

## Related pages

- [[index]]
- [[decisions/index]]
- [[concepts/collection-security-threat-model]]
- [[patterns/frontend/sandboxed-script-runner]]
