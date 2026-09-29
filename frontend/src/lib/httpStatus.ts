export interface HttpStatusItem {
    code: number
    status: string
}

export interface HttpStatusGroup {
    group: string
    items: HttpStatusItem[]
}

/**
 * Standard HTTP response status codes defined by Mozilla (MDN)
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
 */
export const HTTP_STATUS_GROUPS: HttpStatusGroup[] = [
    {
        group: "1xx Informational",
        items: [
            { code: 100, status: "Continue" },
            { code: 101, status: "Switching Protocols" },
            { code: 102, status: "Processing" },
            { code: 103, status: "Early Hints" },
        ],
    },
    {
        group: "2xx Success",
        items: [
            { code: 200, status: "OK" },
            { code: 201, status: "Created" },
            { code: 202, status: "Accepted" },
            { code: 203, status: "Non-Authoritative Information" },
            { code: 204, status: "No Content" },
            { code: 205, status: "Reset Content" },
            { code: 206, status: "Partial Content" },
            { code: 207, status: "Multi-Status" },
            { code: 208, status: "Already Reported" },
            { code: 226, status: "IM Used" },
        ],
    },
    {
        group: "3xx Redirection",
        items: [
            { code: 300, status: "Multiple Choices" },
            { code: 301, status: "Moved Permanently" },
            { code: 302, status: "Found" },
            { code: 303, status: "See Other" },
            { code: 304, status: "Not Modified" },
            { code: 305, status: "Use Proxy" },
            { code: 307, status: "Temporary Redirect" },
            { code: 308, status: "Permanent Redirect" },
        ],
    },
    {
        group: "4xx Client Error",
        items: [
            { code: 400, status: "Bad Request" },
            { code: 401, status: "Unauthorized" },
            { code: 402, status: "Payment Required" },
            { code: 403, status: "Forbidden" },
            { code: 404, status: "Not Found" },
            { code: 405, status: "Method Not Allowed" },
            { code: 406, status: "Not Acceptable" },
            { code: 407, status: "Proxy Authentication Required" },
            { code: 408, status: "Request Timeout" },
            { code: 409, status: "Conflict" },
            { code: 410, status: "Gone" },
            { code: 411, status: "Length Required" },
            { code: 412, status: "Precondition Failed" },
            { code: 413, status: "Payload Too Large" },
            { code: 414, status: "URI Too Long" },
            { code: 415, status: "Unsupported Media Type" },
            { code: 416, status: "Range Not Satisfiable" },
            { code: 417, status: "Expectation Failed" },
            { code: 418, status: "I'm a teapot" },
            { code: 421, status: "Misdirected Request" },
            { code: 422, status: "Unprocessable Content" },
            { code: 423, status: "Locked" },
            { code: 424, status: "Failed Dependency" },
            { code: 425, status: "Too Early" },
            { code: 426, status: "Upgrade Required" },
            { code: 428, status: "Precondition Required" },
            { code: 429, status: "Too Many Requests" },
            { code: 431, status: "Request Header Fields Too Large" },
            { code: 451, status: "Unavailable For Legal Reasons" },
        ],
    },
    {
        group: "5xx Server Error",
        items: [
            { code: 500, status: "Internal Server Error" },
            { code: 501, status: "Not Implemented" },
            { code: 502, status: "Bad Gateway" },
            { code: 503, status: "Service Unavailable" },
            { code: 504, status: "Gateway Timeout" },
            { code: 505, status: "HTTP Version Not Supported" },
            { code: 506, status: "Variant Also Negotiates" },
            { code: 507, status: "Insufficient Storage" },
            { code: 508, status: "Loop Detected" },
            { code: 510, status: "Not Extended" },
            { code: 511, status: "Network Authentication Required" },
        ],
    },
]

export const HTTP_STATUS_MAP: Record<number, string> = Object.fromEntries(
    HTTP_STATUS_GROUPS.flatMap(g => g.items.map(item => [item.code, item.status]))
)

export const getHttpStatusText = (code: number, defaultText: string = "OK"): string => {
    return HTTP_STATUS_MAP[code] ?? defaultText
}
