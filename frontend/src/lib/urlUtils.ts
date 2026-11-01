import type {ItemUrl} from "@/pages/editor/types/api.ts";

const PATH_VARIABLE = /^:(\w+)$/
// Leading `{{base_url}}` or `scheme://host` — hidden from the endpoint input (base URL is picked separately).
const ENDPOINT_PREFIX = /^(?:\{\{[^{}]+\}\}|https?:\/\/[^/?#]*)/i

const safeDecode = (value: string) => {
    try {
        return decodeURIComponent(value)
    } catch {
        return value
    }
}

/** Splits a raw URL into base (before `?`), query string (without `?`, null when absent) and hash (with `#`). */
export const splitRawUrl = (raw: string) => {
    const hashIndex = raw.indexOf("#")
    const hash = hashIndex >= 0 ? raw.slice(hashIndex) : ""
    const beforeHash = hashIndex >= 0 ? raw.slice(0, hashIndex) : raw
    const queryIndex = beforeHash.indexOf("?")
    return {
        base: queryIndex >= 0 ? beforeHash.slice(0, queryIndex) : beforeHash,
        query: queryIndex >= 0 ? beforeHash.slice(queryIndex + 1) : null,
        hash,
    }
}

export const splitEndpointPrefix = (raw: string) => {
    const prefix = raw.match(ENDPOINT_PREFIX)?.[0] ?? ""
    return {prefix, endpoint: raw.slice(prefix.length)}
}

export const parseRawToPath = (raw: string): string[] => {
    const {base} = splitRawUrl(raw.trim())
    let pathname = base

    if (/^https?:\/\//i.test(base)) {
        try {
            pathname = new URL(base).pathname
        } catch {
            pathname = base
        }
    }

    return pathname.split("/").filter(Boolean)
}

export const parseQueryParams = (raw: string): Pick<ItemUrl, "key" | "value">[] => {
    const {query} = splitRawUrl(raw)
    if (!query) return []

    return query.split("&").filter(Boolean).map((pair) => {
        const eq = pair.indexOf("=")
        return {
            key: safeDecode(eq >= 0 ? pair.slice(0, eq) : pair),
            value: safeDecode(eq >= 0 ? pair.slice(eq + 1) : ""),
        }
    })
}

/**
 * Applies params parsed from the endpoint onto the table rows.
 * Enabled rows are matched by position (keeping id/description), disabled rows stay untouched
 * because they are not part of the raw URL, extra parsed params become new rows.
 */
export const mergeQueryParams = (existing: ItemUrl[], parsed: Pick<ItemUrl, "key" | "value">[]): ItemUrl[] => {
    const next: ItemUrl[] = []
    let i = 0
    for (const item of existing) {
        if (item.disabled) {
            next.push(item)
            continue
        }
        const param = parsed[i++]
        if (param) next.push({...item, key: param.key, value: param.value})
    }
    for (; i < parsed.length; i++) {
        next.push({id: crypto.randomUUID(), key: parsed[i].key, value: parsed[i].value, description: "", disabled: false})
    }
    return next
}

const escapeQueryPart = (value: string, chars: RegExp) => value.replace(chars, encodeURIComponent)

export const buildQueryString = (params: ItemUrl[]) =>
    params
        .filter((p) => !p.disabled && (p.key || p.value))
        .map((p) => {
            const key = escapeQueryPart(p.key, /[&#=]/g)
            return p.value ? `${key}=${escapeQueryPart(p.value, /[&#]/g)}` : key
        })
        .join("&")

/** Rebuilds the query part of `raw` from the enabled params, keeping base path and hash. */
export const replaceRawQuery = (raw: string, params: ItemUrl[]) => {
    const {base, hash} = splitRawUrl(raw)
    const queryString = buildQueryString(params)
    return `${base}${queryString ? `?${queryString}` : ""}${hash}`
}

export const getPathVariableKeys = (raw: string): string[] => {
    const keys = parseRawToPath(raw)
        .map((segment) => PATH_VARIABLE.exec(segment)?.[1])
        .filter((key): key is string => Boolean(key))
    return [...new Set(keys)]
}

/** One variable per unique `:key` segment; existing values are kept, orphans dropped. */
export const syncPathVariables = (raw: string, existing: ItemUrl[] = []): ItemUrl[] =>
    getPathVariableKeys(raw).map((key) => existing.find((v) => v.key === key) ?? {key, value: ""})

/** Replaces `:key` segments with their (resolved, URL-encoded) value. Blank values leave `:key` as is. */
export const resolvePathVariables = (
    path: string,
    variables: ItemUrl[],
    resolveValue: (value: string) => string = (value) => value
) =>
    path
        .split("/")
        .map((segment) => {
            const key = PATH_VARIABLE.exec(segment)?.[1]
            const value = key ? variables.find((v) => v.key === key)?.value : undefined
            return value ? encodeURIComponent(resolveValue(value)) : segment
        })
        .join("/")
