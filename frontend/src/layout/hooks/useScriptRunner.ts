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

const LOCKDOWN_BOOTSTRAP = `
(function() {
    var blocked = [
        'fetch', 'XMLHttpRequest', 'WebSocket', 'EventSource', 'WebTransport',
        'BroadcastChannel', 'Worker', 'SharedWorker', 'importScripts',
        'indexedDB', 'caches', 'webkitRequestFileSystem', 'webkitResolveLocalFileSystemURL'
    ];
    var targets = [self];
    var proto = Object.getPrototypeOf(self);
    while (proto && proto !== Object.prototype) {
        targets.push(proto);
        proto = Object.getPrototypeOf(proto);
    }
    blocked.forEach(function(prop) {
        targets.forEach(function(t) {
            try { delete t[prop]; } catch (_) {}
            try {
                Object.defineProperty(t, prop, {
                    value: undefined,
                    writable: false,
                    configurable: false
                });
            } catch (_) {}
        });
    });
    if (self.navigator) {
        try {
            Object.defineProperty(self, 'navigator', {
                value: Object.freeze({ userAgent: 'ApitesterSandbox' }),
                writable: false,
                configurable: false
            });
        } catch (_) {}
    }
})();
`;

const WORKER_BOOTSTRAP = `
` + CRYPTO_JS_BOOTSTRAP + LOCKDOWN_BOOTSTRAP + `
self.__runDirect = function(data) {
    var __script = data.script;
    var __response = data.response;
    var __vars = data.variables || {};
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
        var fn = new Function('response', 'pm', '"use strict";\\n' + __script);
        var result = fn(__response, pm);
        return { ok: true, result: result, mutations: __mutations, logs: __logs };
    } catch (err) {
        return { ok: false, error: err.message || 'Script execution failed', logs: __logs };
    }
};
self.onmessage = function(e) {
    var postMsg = self.postMessage.bind(self);
    postMsg(self.__runDirect(e.data));
};
`

const PRE_REQUEST_WORKER_BOOTSTRAP = `
` + CRYPTO_JS_BOOTSTRAP + LOCKDOWN_BOOTSTRAP + `
self.__runDirect = function(data) {
    var __script = data.script;
    var request = data.request || {};
    var __vars = data.variables || {};
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
        var fn = new Function('request', 'pm', '"use strict";\\n' + __script);
        var result = fn(request, pm);
        var finalRequest = (result && typeof result === 'object' && !Array.isArray(result) && (result.method || result.headers || result.url || result.body)) ? Object.assign(request, result) : request;
        return { ok: true, result: result, request: finalRequest, mutations: __mutations, logs: __logs };
    } catch (err) {
        return { ok: false, error: err.message || 'Pre-request script execution failed', logs: __logs };
    }
};
self.onmessage = function(e) {
    var postMsg = self.postMessage.bind(self);
    postMsg(self.__runDirect(e.data));
};
`

const SANDBOX_IFRAME_SRCDOC = `<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' blob:; worker-src blob:; connect-src 'none';">
</head>
<body>
<script>
window.addEventListener('message', function onInit(ev) {
    if (!ev.data || ev.data.__init !== true) return;
    window.removeEventListener('message', onInit);
    var channelId = ev.data.channelId;
    var bootstrap = ev.data.bootstrap;
    var payload = ev.data.payload;
    try {
        var blob = new Blob([bootstrap], { type: 'application/javascript' });
        var url = URL.createObjectURL(blob);
        var worker = new Worker(url);
        worker.onmessage = function(we) {
            worker.terminate();
            URL.revokeObjectURL(url);
            parent.postMessage({ __channelId: channelId, data: we.data }, '*');
        };
        worker.onerror = function(err) {
            worker.terminate();
            URL.revokeObjectURL(url);
            parent.postMessage({ __channelId: channelId, workerError: err.message || 'Worker error' }, '*');
        };
        worker.postMessage(payload);
    } catch (_) {
        try {
            var fn = new Function('__payload', bootstrap + '\\n;return self.__runDirect(__payload);');
            var out = fn(payload);
            parent.postMessage({ __channelId: channelId, data: out }, '*');
        } catch (err2) {
            parent.postMessage({ __channelId: channelId, workerError: (err2 && err2.message) || 'Worker error' }, '*');
        }
    }
});
</script>
</body>
</html>`

function runInSandboxedContext<T>(
    bootstrap: string,
    input: unknown,
    timeoutMessage: string
): Promise<T> {
    if (typeof document !== "undefined" && document.body) {
        return new Promise((resolve, reject) => {
            const channelId = crypto.randomUUID()
            const iframe = document.createElement("iframe")
            iframe.style.display = "none"
            iframe.setAttribute("sandbox", "allow-scripts")
            iframe.srcdoc = SANDBOX_IFRAME_SRCDOC

            const cleanup = () => {
                clearTimeout(timer)
                window.removeEventListener("message", onMessage)
                iframe.remove()
            }

            const timer = setTimeout(() => {
                cleanup()
                reject(new Error(timeoutMessage))
            }, 5000)

            const onMessage = (e: MessageEvent) => {
                if (e.source !== iframe.contentWindow || !e.data || e.data.__channelId !== channelId) return
                cleanup()
                if (e.data.workerError) {
                    reject(new Error(e.data.workerError))
                } else {
                    resolve(e.data.data as T)
                }
            }

            window.addEventListener("message", onMessage)
            iframe.onload = () => {
                iframe.contentWindow?.postMessage({ __init: true, channelId, bootstrap, payload: input }, "*")
            }
            document.body.appendChild(iframe)
        })
    }

    return new Promise((resolve, reject) => {
        const blob = new Blob([bootstrap], { type: "application/javascript" })
        const url = URL.createObjectURL(blob)
        const worker = new Worker(url)

        const timer = setTimeout(() => {
            worker.terminate()
            URL.revokeObjectURL(url)
            reject(new Error(timeoutMessage))
        }, 5000)

        worker.onmessage = (e: MessageEvent<T>) => {
            clearTimeout(timer)
            worker.terminate()
            URL.revokeObjectURL(url)
            resolve(e.data)
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

export function runScript(
    input: ScriptInput
): Promise<{ result: unknown; mutations: Record<string, string | null>; logs: ScriptLog[] }> {
    return runInSandboxedContext<ScriptOutput>(WORKER_BOOTSTRAP, input, "Script timed out (5s)").then(
        ({ ok, result, mutations, error, logs }) => {
            if (ok) {
                return { result, mutations: mutations || {}, logs: logs || [] }
            }
            throw new Error(error || "Unknown script error")
        }
    )
}

export function runPreRequestScript(
    input: PreRequestScriptInput
): Promise<PreRequestScriptOutput> {
    return runInSandboxedContext<PreScriptWorkerOutput>(
        PRE_REQUEST_WORKER_BOOTSTRAP,
        input,
        "Pre-request script timed out (5s)"
    ).then(({ ok, result, request, mutations, error, logs }) => {
        if (ok) {
            return {
                result,
                request: request || input.request,
                mutations: mutations || {},
                logs: logs || [],
            }
        }
        throw new Error(error || "Unknown pre-request script error")
    })
}
