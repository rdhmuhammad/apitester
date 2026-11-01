# Wiki Index

This index lists the maintained knowledge pages for this codebase.

## Patterns

### Implementation
- [[patterns/index]] - Implementation and architectural pattern pages.
- [[patterns/frontend/sandboxed-script-runner]] - Multi-layered browser sandbox for executing Postman pre-request and post-request scripts.
- [[patterns/frontend/redux-endpoint-params-sync]] - Redux reducers keeping the endpoint input, query params, and path variables in sync.

## Decisions

- [[decisions/index]] - Technical decisions recorded for the codebase.
- [[decisions/collection-endpoint-hardening]] - Authentication, schema validation, size limits, and CORS hardening for collection endpoints.

## Concepts

- [[concepts/index]] - Reusable domain and codebase concepts.
- [[concepts/collection-security-threat-model]] - Analysis of XSS, script runner sandboxing, SSRF, and variable parsing threat vectors in `collection.json`.
- [[concepts/path-variable-lifecycle]] - How `:word` endpoint segments become path variables, are synced, edited, and resolved at send time.
- [[concepts/query-params-lifecycle]] - Bidirectional synchronization between endpoint URL query strings and the RequestConfig query params table.

## Tasks

- [[tasks/backlog]] - Living checklist of pending, in-progress, and done tasks for the project.
