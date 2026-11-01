# Path Variable Lifecycle

**Summary**: How `:word` segments typed in the endpoint become path variables, are edited in the Params tab, and are resolved when a request is sent.
**Sources**: `internal/service/restrequest/usecase.go`, `internal/service/collection/dto.go`, `frontend/src/pages/editor/components/RequestConfig/ParamsContent.tsx`
**Last updated**: 2026-11-01

---

## Data model

Path variables live in `Request.URL.Variable` (`url.variable` in JSON, omitted when empty). Each item is a `PathVariable` with `id`, `key` and `value` (`internal/service/collection/dto.go`). `Request.URL.Path` is rebuilt from `Raw` (host, query and fragment ignored).

## Sync on endpoint change

Socket event `request:update:url` (`UpdateURL`) calls `RequestURL.ResolvePath()` then, inside the update step, `RequestURL.SyncVariables(old.Variable)`:

- every unique path segment matching `^:\w+$` becomes a variable (`/user/:userId` gives key `userId`)
- duplicate keys are collapsed, so two variables can never share a key
- keys still present keep their previous value, orphans are removed, new keys are added
- any `variable` array sent by the client is ignored; the server is the source of truth

## Editing a value

Socket event `request:edit:path:variable` (`EditPathVariable`, payload `key` + `value`) updates the matching item. Unknown keys fail with `Path variable not found` before anything is written (via the `updateReq.Validate` hook). Keys are read-only in the UI.

## UI

`ParamsContent` shows a **Query Params** table always, and a **Path Variables** table only when `request.url.variable` has items. Only the value column is editable.

## Sending

`useRequestSender` calls `resolvePathVariables` (`useSendRequest.ts`): each `:key` segment is replaced by the variable value (`{{env}}` resolved first, then URL-encoded). Blank values leave `:key` unchanged.

## Known limits

- In example mode the value edit is stored in the example's `originalRequest.url.variable`, but endpoint edits there do not go through `UpdateURL`, so variables are not re-synced.

## Related pages

- [[patterns/frontend/redux-endpoint-params-sync]] - apitester implementation (Redux reducers instead of socket events)
- [[concepts/query-params-lifecycle]]
- [[concepts/index]]
- [[index]]
