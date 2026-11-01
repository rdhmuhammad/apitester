# Query Params Lifecycle

**Summary**: Bidirectional synchronization between the endpoint input bar and the Query Params table in RequestConfig, including URL query string parsing, row mutations, and endpoint reconstruction.
**Sources**: `frontend/src/pages/editor/components/RequestConfig/ParamsContent.tsx`, `frontend/src/layout/components/header/RequestHeader.tsx`, `frontend/src/pages/editor/hooks/useRequestConfig.ts`, `internal/service/restrequest/usecase.go`
**Last updated**: 2026-11-01

---

## Data model

Query parameters reside on the request URL model as `Request.URL.Query` (`url.query` in JSON, omitted when empty). In Go, each entry is represented by `collectionService.Property` (`internal/service/collection/dto.go`) containing:
- `id`: unique UUID string
- `key`: query parameter key
- `value`: parameter value (supports `{{variable}}` templates)
- `description`: optional human-readable parameter documentation
- `disabled`: boolean flag indicating whether the parameter is excluded from the outgoing request and raw URL

In the frontend TypeScript definitions (`frontend/src/pages/editor/types/api.ts`), each query parameter item adheres to `ItemUrl`.

## Sync on endpoint change (Endpoint -> Params Table)

When typing or editing in the endpoint bar (`RequestHeader.tsx`):
1. Input changes trigger a debounced (300ms) call to `updateUrl(nextUrl)` via `useDebouncedCallback`.
2. The hook `useRequestConfig` emits the Socket.IO event `request:update:url`.
3. The backend usecase method `UpdateURL` (`internal/service/restrequest/usecase.go`) resolves query parameters from the new raw URL string via `resolveQueryParams(req.URL.Raw)`:
   - Strips any fragment/hash component (`#...`).
   - Slices the query string after `?`.
   - Splits pairs on `&` and partitions keys and values on `=`.
   - Decodes percent-encoded characters using `url.QueryUnescape`.
   - Generates a UUID `id` for each parameter.
4. The updated `RequestURL.Query` is persisted and returned in the socket mutation response.
5. The TanStack Query cache (`["request-config", requestId]`) updates, prompting `ParamsContent.tsx` to re-render the Query Params table with the parsed parameters.

## Sync on table change (Params Table -> Endpoint)

When modifying query parameters in `ParamsContent.tsx`:
- **Editing values or descriptions**: `QueryParamRow` maintains local state while focused and debounces changes (300ms) with `debouncedOnChange.flush()` on blur or unmount.
- **Toggling active state**: Clicking the toggle button flips `disabled: !item.disabled`.
- **Deleting**: Clicking the trash icon removes the parameter by `id`.
- **Adding new rows**: Typing into the bottom draft inputs and clicking add appends a new item with `crypto.randomUUID()`.

All modifications invoke `updateQuery(nextQuery)`:
1. `useRequestConfig` optimistically updates the TanStack Query cache (`(current) => ({ url: { ...current.url, query } })`) for instantaneous UI feedback.
2. The hook emits the `request:update:query` socket event.
3. The backend `UpdateQuery` usecase assigns missing UUIDs and reconstructs the raw endpoint string using `updateRawURLQuery(item.Request.URL.Raw, req.Query)`:
   - `buildQueryString(properties)` omits disabled items and empty key/value pairs.
   - Pairs are serialized as `key=value`, `key` (if value is empty), or `=value` (if key is empty), joined by `&`.
   - The query string replaces any existing query portion in `rawURL` while preserving the base path and fragment.
4. The updated `request.url.raw` returned from the server (and updated in the query cache) triggers the `useEffect` in `RequestHeader.tsx` (`setEditedEndpoint(request?.url?.raw ?? "")`), keeping the URL input in sync with table changes.

## UI

`ParamsContent` shows a **Query Params** table always. Each row provides an editable key, value (with `VariableInput` overlay), description, enable/disable toggle, and delete action. When path variables are also present on the URL, the **Path Variables** table renders beneath it.

## Related pages

- [[patterns/frontend/redux-endpoint-params-sync]] - apitester implementation (Redux reducers instead of socket + TanStack Query)
- [[concepts/path-variable-lifecycle]]
- [[concepts/index]]
- [[index]]
