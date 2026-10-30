# Collection Security Threat Model

**Summary**: Analysis of security threat vectors introduced when reading, rendering, and executing Postman `collection.json` files in `apitester`.
**Sources**: Codebase analysis (`apitester.go`, `internal/usecase/watch`, `frontend/src/layout/hooks`).
**Last updated**: 2026-10-30

---

Although `collection.json` is a static JSON file, consuming it in a web-based API testing tool exposes four primary threat vectors depending on where fields are rendered and executed.

## 1. Stored Cross-Site Scripting (XSS) in the Web UI

- **Vector**: Malicious HTML or JavaScript payloads placed in collection names, folder names, request names, descriptions, or example responses inside `collection.json`.
- **Architecture in `apitester`**:
  - The frontend renders collection metadata, folder trees, and request tabs using standard React 19 JSX interpolation (`{collectionInfo?.name}`, `{node.name}`, `{tab.label}`), which automatically escapes HTML entities.
  - Script editors use `SandpackScriptEditor` with `autorun: false` and no preview frame, preventing automatic execution when inspecting a request's scripts.
  - PDF binary responses rendered via `<iframe>` in `ResponseView.tsx` enforce `sandbox=""` to block active script execution inside embedded documents.
  - Assertion evaluation in `assertionEngine.ts` uses a static property-path and binary operator parser rather than `new Function()`.

## 2. Sandbox Escape / Malicious Runner Execution

- **Vector**: Postman collections store executable JavaScript inside the `event` array (`prerequest` and `test` scripts).
- **Architecture in `apitester`**:
  - **Server-Side (Safe by Design)**: The Go backend (`internal/usecase/watch`) never evaluates JavaScript from `collection.json`, eliminating Server-Side Remote Code Execution (RCE).
  - **Client-Side (Isolated Browser Runner)**: Pre-request and post-request scripts execute in the user's browser via [[patterns/frontend/sandboxed-script-runner]], which isolates execution inside an opaque-origin `<iframe sandbox="allow-scripts">` with a strict Content Security Policy (`connect-src 'none'`) and prototype-chain API lockdown.

## 3. Server-Side Request Forgery (SSRF)

- **Vector**: Requests in `collection.json` targeting internal addresses such as `http://localhost:8080` or cloud metadata (`http://169.254.169.254`).
- **Architecture in `apitester`**:
  - The Go server does not proxy or execute user API requests. Instead, `useSendRequest.ts` dispatches HTTP requests directly from the user's browser using Axios.
  - Because requests originate from the client browser rather than the Go host, the server is not vulnerable to SSRF against backend internal networks. Users testing untrusted collections remain subject to standard browser CORS enforcement.

## 4. Template Injection in Variable Parsing

- **Vector**: Injecting executable expressions inside `{{variable}}` placeholders.
- **Architecture in `apitester`**:
  - Both `useSendRequest.ts` (`resolveVariables`) and `Header.tsx` (`resolveVariableValue`) resolve `{{key}}` tokens strictly via `String.prototype.replace(/\{\{([^{}]+)\}\}/g, ...)` dictionary lookups without `eval()` or template engine compilation.

## Related pages

- [[index]]
- [[concepts/index]]
- [[patterns/frontend/sandboxed-script-runner]]
- [[decisions/collection-endpoint-hardening]]
