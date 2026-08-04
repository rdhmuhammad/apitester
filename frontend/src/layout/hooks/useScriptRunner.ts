import type { ScriptLog, SendResponse } from "@/types/response"
import cryptoJsRaw from "crypto-js/crypto-js.js?raw"

interface PreScriptInput {
    script: string
    request: Record<string, unknown>
    variables: Record<string, string>
}

interface PostScriptInput {
    script: string
    response: SendResponse
    variables: Record<string, string>
}

interface ScriptOutput {
    ok: boolean
    result?: unknown
    mutations?: Record<string, string | null>
    request?: Record<string, unknown>
    logs?: ScriptLog[]
    error?: string
}

const WORKER_COMMON = `
    var __mutations = {};
    var __logs = [];

    var __originalConsole = {
        log: self.console.log,
        error: self.console.error,
        warn: self.console.warn,
        info: self.console.info,
    };

    function __captureLog(type) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            var msg = args.map(function(a) { return typeof a === 'object' ? JSON.stringify(a) : String(a); }).join(' ');
            __logs.push({ type: type, message: msg, timestamp: Date.now() });
            __originalConsole[type].apply(self.console, args);
        };
    }

    self.console.log = __captureLog('log');
    self.console.error = __captureLog('error');
    self.console.warn = __captureLog('warn');
    self.console.info = __captureLog('info');

    var pm = {
        environment: {
            get: function(key) { return __vars[key]; },
            set: function(key, value) { __mutations[key] = value; },
            unset: function(key) { delete __mutations[key]; __mutations[key] = null; },
            toObject: function() { return Object.assign({}, __vars, __mutations); }
        }
    };

    function __sandbox() {
        delete self.fetch;
        delete self.XMLHttpRequest;
        delete self.WebSocket;
        delete self.importScripts;
    }

    function __respond(ok, data) {
        self.postMessage({ ok: ok, result: data.result, request: data.request, mutations: __mutations, logs: __logs, error: data.error });
    }
`

const PRE_WORKER_BOOTSTRAP = `
${cryptoJsRaw}
${WORKER_COMMON}
self.onmessage = function(e) {
    var __script = e.data.script;
    var __request = e.data.request;
    var __vars = e.data.variables || {};

    try {
        __sandbox();
        var fn = new Function('request', 'pm', __script);
        var result = fn(__request, pm);
        __respond(true, { result: result, request: __request });
    } catch (err) {
        __respond(false, { error: err.message || 'Script execution failed' });
    }
};
`

const POST_WORKER_BOOTSTRAP = `
${cryptoJsRaw}
${WORKER_COMMON}
self.onmessage = function(e) {
    var __script = e.data.script;
    var __response = e.data.response;
    var __vars = e.data.variables || {};

    try {
        __sandbox();
        var fn = new Function('response', 'pm', __script);
        var result = fn(__response, pm);
        __respond(true, { result: result });
    } catch (err) {
        __respond(false, { error: err.message || 'Script execution failed' });
    }
};
`

function createWorker(bootstrap: string, input: Record<string, unknown>) {
    return new Promise<{ result: unknown; request?: Record<string, unknown>; mutations: Record<string, string | null>; logs: ScriptLog[] }>(
        (resolve, reject) => {
            const blob = new Blob([bootstrap], { type: "application/javascript" })
            const url = URL.createObjectURL(blob)
            const worker = new Worker(url)

            const timer = setTimeout(() => {
                worker.terminate()
                URL.revokeObjectURL(url)
                reject(new Error("Script timed out (5s)"))
            }, 5000)

            worker.onmessage = (e: MessageEvent<ScriptOutput>) => {
                clearTimeout(timer)
                worker.terminate()
                URL.revokeObjectURL(url)
                const { ok, result, request, mutations, error, logs } = e.data
                if (ok) {
                    resolve({ result, request, mutations: mutations || {}, logs: logs || [] })
                } else {
                    reject(new Error(error || "Unknown script error"))
                }
            }

            worker.onerror = (err) => {
                clearTimeout(timer)
                worker.terminate()
                URL.revokeObjectURL(url)
                reject(new Error(err.message || "Worker error"))
            }

            worker.postMessage(input)
        }
    )
}

export function runPreScript(input: PreScriptInput) {
    return createWorker(PRE_WORKER_BOOTSTRAP, input as unknown as Record<string, unknown>)
}

export function runPostScript(input: PostScriptInput) {
    return createWorker(POST_WORKER_BOOTSTRAP, input as unknown as Record<string, unknown>)
}
