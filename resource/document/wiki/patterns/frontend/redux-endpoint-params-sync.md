# Redux Endpoint ↔ Params Sync

**Summary**: How apitester keeps the endpoint input, the Query Params table, and the Path Variables table in sync with Redux as the only store (no socket, no TanStack Query).
**Sources**: `frontend/src/lib/urlUtils.ts`, `frontend/src/app/slices/requestSlices.ts`, `frontend/src/layout/view/Header.tsx`, `frontend/src/pages/editor/components/RequestConfig/ParamsContent.tsx`, `internal/usecase/watch/dto.go`
**Last updated**: 2026-11-01

---

This is the Redux version of [[concepts/query-params-lifecycle]] and [[concepts/path-variable-lifecycle]]. The server-side steps from those pages (socket events, `UpdateURL`, TanStack cache) are done here by Redux reducers.

## Source of truth

`request.url.raw` holds the full endpoint, query string included (Postman format). `url.query` and `url.variable` are derived from it, and the query part of `raw` is rebuilt from `url.query`. In example mode the same reducers write to the example's `originalRequest`.

## Endpoint -> tables (`setUrlRaw`)

The endpoint input in `Header.tsx` reads `url.raw` straight from Redux (no local copy) and dispatches `setUrlRaw` on each keystroke. The reducer:

- stores `raw` exactly as typed, so `?` and `&` can be typed freely
- `mergeQueryParams`: matches parsed pairs to the enabled rows by position (keeps `id` and `description`), keeps disabled rows (they are not in the URL), drops rows removed from the URL, and adds new rows
- `syncPathVariables`: one variable per unique `:word` segment; existing values are kept, orphans removed

The input hides a leading `{{base_url}}` or `https://host` prefix (the base URL is picked in its own select) and puts it back when the input changes, so the stored `raw` keeps it.

## Tables -> endpoint

`addQueryParam`, `updateQueryParam`, and `removeQueryParam` call `replaceRawQuery`, which rebuilds the query from enabled rows with non-empty key or value (`key=value`, or `key` when the value is empty). Base path and `#hash` are kept. Only `&`, `#` (and `=` in keys) are escaped, so `{{var}}` stays readable.

`updatePathVariable({ key, value })` changes only the value. Keys are read-only because they come from the endpoint.

## Sending

`getSendEndpoint` in `Header.tsx` takes the path without query or hash, resolves `{{var}}`, then swaps each `:key` for its URL-encoded value (`resolvePathVariables`). A blank value leaves `:key` as is. Query params are still sent from `url.query`.

## Persistence

`internal/usecase/watch/dto.go` keeps `url.variable`, plus `description` and `disabled` on `Property`. Without these fields, pushing the collection would lose path variable values and disabled query rows.

## Related pages

- [[concepts/query-params-lifecycle]]
- [[concepts/path-variable-lifecycle]]
- [[patterns/index]]
