# Wiki Log

- 2026-10-30: Initialized LLM Wiki knowledge base structure.
- 2026-10-30: Added security threat model (`[[concepts/collection-security-threat-model]]`), browser script runner sandbox pattern (`[[patterns/frontend/sandboxed-script-runner]]`), and collection endpoint hardening decision (`[[decisions/collection-endpoint-hardening]]`).
- 2026-10-31: Fixed multipart/form-data request body mode and Content-Type dispatch when switching body types in RequestConfig.
- 2026-11-01: Added [[concepts/path-variable-lifecycle]] and [[concepts/query-params-lifecycle]] documenting endpoint URL and RequestConfig table synchronization (path variable parsing/editing/resolution and query parameter parsing/reconstruction); updated wiki indexes.
- 2026-11-01: Fixed endpoint input <-> Params tab sync using Redux only (`setUrlRaw` derives query rows and path variables; query reducers rebuild `url.raw`; new `updatePathVariable` and Path Variables table; `:key` resolved at send). Persisted `url.variable` and query `description`/`disabled` in `internal/usecase/watch/dto.go`. Added [[patterns/frontend/redux-endpoint-params-sync]]; linked it from both lifecycle concept pages; updated indexes.
- 2026-11-01: Registered `setBodyMode` and `setBodyModeReducer` in `collectionSlices.ts` and aligned Content-Type resolution in `RequestConfig/index.tsx` so body switching between JSON payload and Multipart Form works cleanly in Redux.
