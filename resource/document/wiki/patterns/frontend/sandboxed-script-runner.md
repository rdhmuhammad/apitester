# Sandboxed Script Runner

**Summary**: Browser-side isolation pattern in `useScriptRunner.ts` for executing untrusted Postman pre-request and post-request scripts without exposing origin storage, cookies, or network access.
**Sources**: Codebase analysis (`frontend/src/layout/hooks/useScriptRunner.ts`).
**Last updated**: 2026-10-30

---

## Problem

Running user-supplied JavaScript from `collection.json` inside a plain `new Worker(blobUrl)` created on the main application origin is unsafe:
1. A `Blob` Worker inherits the parent page's origin, granting access to `indexedDB`, `caches`, and automatic inclusion of `HttpOnly` session cookies on same-origin requests.
2. Simply calling `delete self.fetch` only deletes an own property (or fails to block `WorkerGlobalScope.prototype.fetch`, `EventSource`, `WebTransport`, `navigator.sendBeacon`, or spawning a nested `new Worker()`).

## Solution Architecture

`frontend/src/layout/hooks/useScriptRunner.ts` enforces three concentric layers of isolation inside `runInSandboxedContext`:

### 1. Opaque-Origin Sandboxed Iframe
- A hidden `<iframe>` is mounted with `sandbox="allow-scripts"` (deliberately omitting `allow-same-origin`).
- The browser assigns the iframe a unique opaque (`null`) origin, completely severing access to the host origin's cookies, `localStorage`, `indexedDB`, and DOM.

### 2. Browser-Enforced Content Security Policy (CSP)
- The iframe's `srcdoc` includes:
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' blob:; worker-src blob:; connect-src 'none';">
  ```
- `connect-src 'none'` and `default-src 'none'` instruct the browser's networking stack to reject all outbound network calls (`fetch`, `XMLHttpRequest`, `WebSocket`, `EventSource`, `WebTransport`, `sendBeacon`).

### 3. Worker Prototype Lockdown & Timeout Termination
- Inside the worker bootstrap (`LOCKDOWN_BOOTSTRAP`), `fetch`, `XMLHttpRequest`, `WebSocket`, `EventSource`, `WebTransport`, `BroadcastChannel`, `Worker`, `SharedWorker`, `importScripts`, `indexedDB`, and `caches` are deleted and locked with `Object.defineProperty(..., { value: undefined, writable: false, configurable: false })` across `self` and its entire prototype chain (`WorkerGlobalScope.prototype`).
- `self.navigator` is replaced with a frozen minimal stub (`{ userAgent: 'ApitesterSandbox' }`).
- User scripts run under `"use strict"` with a hard 5-second timeout that terminates the worker and removes the iframe from the DOM.

## Related pages

- [[index]]
- [[patterns/index]]
- [[concepts/collection-security-threat-model]]
- [[decisions/collection-endpoint-hardening]]
