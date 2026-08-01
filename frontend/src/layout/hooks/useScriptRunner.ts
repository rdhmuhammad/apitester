import type { ScriptLog, SendResponse } from "@/types/response"

interface ScriptInput {
    script: string
    response: SendResponse
    variables: Record<string, string>
}

interface ScriptOutput {
    ok: boolean
    result?: unknown
    mutations?: Record<string, string | null>
    logs?: ScriptLog[]
    error?: string
}

const WORKER_BOOTSTRAP = `
self.onmessage = function(e) {
    var __script = e.data.script;
    var __response = e.data.response;
    var __vars = e.data.variables || {};
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

    try {
        delete self.fetch;
        delete self.XMLHttpRequest;
        delete self.WebSocket;
        delete self.importScripts;

        var fn = new Function('response', 'pm', __script);
        var result = fn(__response, pm);
        self.postMessage({ ok: true, result: result, mutations: __mutations, logs: __logs });
    } catch (err) {
        self.postMessage({ ok: false, error: err.message || 'Script execution failed', logs: __logs });
    }
};
`

export function runScript(
    input: ScriptInput
): Promise<{ result: unknown; mutations: Record<string, string | null>; logs: ScriptLog[] }> {
    return new Promise((resolve, reject) => {
        const blob = new Blob([WORKER_BOOTSTRAP], { type: "application/javascript" })
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
            const { ok, result, mutations, error, logs } = e.data
            if (ok) {
                resolve({ result, mutations: mutations || {}, logs: logs || [] })
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
    })
}
