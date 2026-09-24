import type { ScriptLog, SendResponse } from "@/types/response"
import cryptoJsRaw from "crypto-js/crypto-js.js?raw"
import type {RestRequestResponse} from "@/layout/types/scriptRunner.ts";

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

export interface PreRequestScriptInput {
    script: string
    request: RestRequestResponse
    variables: Record<string, string>
}

export interface PreRequestScriptOutput {
    result: unknown
    request: RestRequestResponse
    mutations: Record<string, string | null>
    logs: ScriptLog[]
}

interface PreScriptWorkerOutput {
    ok: boolean
    result?: unknown
    request?: RestRequestResponse
    mutations?: Record<string, string | null>
    logs?: ScriptLog[]
    error?: string
}

const CRYPTO_JS_BOOTSTRAP = `
${cryptoJsRaw}
self.require = function(moduleName) {
    if (moduleName === 'crypto-js') return self.CryptoJS;
    throw new Error("Module '" + moduleName + "' is not supported");
};
`;

const WORKER_BOOTSTRAP = `
` + CRYPTO_JS_BOOTSTRAP + `
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
            __logs.push({ type: type, message: msg, timestamp: Date.now(), scriptType: 'postrequest' });
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
        },
        variables: {
            get: function(key) { return __vars[key]; },
            set: function(key, value) { __mutations[key] = value; },
            unset: function(key) { delete __mutations[key]; __mutations[key] = null; },
            toObject: function() { return Object.assign({}, __vars, __mutations); }
        },
        CryptoJS: self.CryptoJS
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

const PRE_REQUEST_WORKER_BOOTSTRAP = `
` + CRYPTO_JS_BOOTSTRAP + `
self.onmessage = function(e) {
    var __script = e.data.script;
    var request = e.data.request || {};
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
            __logs.push({ type: type, message: msg, timestamp: Date.now(), scriptType: 'prerequest' });
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
            set: function(key, value) { __mutations[key] = value; __vars[key] = value; },
            unset: function(key) { delete __mutations[key]; __mutations[key] = null; delete __vars[key]; },
            toObject: function() { return Object.assign({}, __vars, __mutations); }
        },
        variables: {
            get: function(key) { return __vars[key]; },
            set: function(key, value) { __mutations[key] = value; __vars[key] = value; },
            unset: function(key) { delete __mutations[key]; __mutations[key] = null; delete __vars[key]; },
            toObject: function() { return Object.assign({}, __vars, __mutations); }
        },
        request: request,
        CryptoJS: self.CryptoJS
    };

    try {
        delete self.fetch;
        delete self.XMLHttpRequest;
        delete self.WebSocket;
        delete self.importScripts;

        var fn = new Function('request', 'pm', __script);
        var result = fn(request, pm);
        var finalRequest = (result && typeof result === 'object' && !Array.isArray(result) && (result.method || result.headers || result.url || result.body)) ? Object.assign(request, result) : request;
        self.postMessage({ ok: true, result: result, request: finalRequest, mutations: __mutations, logs: __logs });
    } catch (err) {
        self.postMessage({ ok: false, error: err.message || 'Pre-request script execution failed', logs: __logs });
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

export function runPreRequestScript(
    input: PreRequestScriptInput
): Promise<PreRequestScriptOutput> {
    return new Promise((resolve, reject) => {
        const blob = new Blob([PRE_REQUEST_WORKER_BOOTSTRAP], { type: "application/javascript" })
        const url = URL.createObjectURL(blob)
        const worker = new Worker(url)

        const timer = setTimeout(() => {
            worker.terminate()
            URL.revokeObjectURL(url)
            reject(new Error("Pre-request script timed out (5s)"))
        }, 5000)

        worker.onmessage = (e: MessageEvent<PreScriptWorkerOutput>) => {
            clearTimeout(timer)
            worker.terminate()
            URL.revokeObjectURL(url)
            const { ok, result, request, mutations, error, logs } = e.data
            if (ok) {
                resolve({
                    result,
                    request: request || input.request,
                    mutations: mutations || {},
                    logs: logs || []
                })
            } else {
                reject(new Error(error || "Unknown pre-request script error"))
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
