import type { Completion, CompletionContext, CompletionResult } from "@codemirror/autocomplete"

interface ApiEntry {
    label: string
    detail: string
    apply?: string
    children?: ApiEntry[]
}

const pmApi: ApiEntry[] = [
    {
        label: "environment",
        detail: "pm.environment",
        children: [
            { label: "get(key)", detail: "(key: string) => string | undefined", apply: "get(\"$1\")" },
            { label: "set(key, value)", detail: "(key: string, value: string) => void", apply: "set(\"$1\", \"$2\")" },
            { label: "unset(key)", detail: "(key: string) => void", apply: "unset(\"$1\")" },
            { label: "toObject()", detail: "() => Record<string, string>", apply: "toObject()" },
        ],
    },
    {
        label: "collectionVariables",
        detail: "pm.collectionVariables",
        children: [
            { label: "get(key)", detail: "(key: string) => string | undefined", apply: "get(\"$1\")" },
            { label: "set(key, value)", detail: "(key: string, value: string) => void", apply: "set(\"$1\", \"$2\")" },
            { label: "has(key)", detail: "(key: string) => boolean", apply: "has(\"$1\")" },
            { label: "unset(key)", detail: "(key: string) => void", apply: "unset(\"$1\")" },
            { label: "clear()", detail: "() => void", apply: "clear()" },
        ],
    },
    {
        label: "expect",
        detail: "pm.expect(value: any)",
        apply: "expect($1)",
    },
]

const resApi: ApiEntry[] = [
    {
        label: "statusCode",
        detail: "{ statusCode: number }",
    },
    {
        label: "statusText",
        detail: "{ statusText: string }",
    },
    {
        label: "data",
        detail: "Object"
    },
    {
        label: "headers",
        detail: "{ headers: Record<string, string> }",
    },
    {
        label: "json()",
        detail: "{ json(): any }",
        apply: "json()",
    },
    {
        label: "text()",
        detail: "{ text(): string }",
        apply: "text()",
    },
]

const expectChain: ApiEntry[] = [
    { label: "toBe(expected)", detail: "(expected: any) => void", apply: "toBe($1)" },
    { label: "not", detail: "negate assertion", children: [
        { label: "toBe(expected)", detail: "(expected: any) => void", apply: "toBe($1)" },
    ]},
    { label: "include(value)", detail: "(value: any) => void", apply: "include($1)" },
    { label: "equal(value)", detail: "(value: any) => void", apply: "equal($1)" },
    { label: "exist", detail: "assert value is truthy" },
    { label: "be", detail: "language chain", children: [
        { label: "true", detail: "assert true" },
        { label: "false", detail: "assert false" },
        { label: "null", detail: "assert null" },
        { label: "undefined", detail: "assert undefined" },
        { label: "empty", detail: "assert empty" },
    ]},
    { label: "have", detail: "language chain", children: [
        { label: "property(name)", detail: "(name: string) => Assertion", apply: "property(\"$1\")" },
        { label: "length(length)", detail: "(length: number) => Assertion", apply: "length($1)" },
    ]},
]

function toCompletions(entries: ApiEntry[]): Completion[] {
    return entries.map((e) => ({
        label: e.label,
        type: e.children ? "property" : "function",
        detail: e.detail,
        apply: e.apply ?? e.label,
    }))
}

function resolveExpectChain(segments: string[], trailingDot: boolean): ApiEntry[] | null {
    let current = expectChain
    const count = trailingDot ? segments.length : segments.length - 1
    for (let i = 0; i < count; i++) {
        const found = current.find((e) => e.label.startsWith(segments[i]))
        if (!found) return null
        if (!found.children) return i === segments.length - 1 && !trailingDot ? current : []
        current = found.children
    }
    return current
}

export function pmCompletionSource(context: CompletionContext): CompletionResult | null {
    const expectMatch = context.matchBefore(/pm\.expect\([^)]*\)(?:\.[\w]+)*\.?/)
    if (expectMatch) {
        const text = expectMatch.text
        const chainStart = /pm\.expect\([^)]*\)/.exec(text)![0].length
        const afterExpect = text.slice(chainStart)
        if (afterExpect === "") return null

        const chain = afterExpect.replace(/^\./, "")
        const trailingDot = text.endsWith(".")
        const segments = chain.split(".").filter(Boolean)
        const entries = resolveExpectChain(segments, trailingDot)
        if (!entries) return null

        const lastSeg = trailingDot ? "" : (segments[segments.length - 1] ?? "")
        return {
            from: expectMatch.to - lastSeg.length,
            options: toCompletions(entries),
        }
    }

    const word = context.matchBefore(/(?<!\w)pm(?:\.[\w]*)*\.?/)
    if (!word) return null

    const text = word.text
    if (text === "pm") {
        return { from: word.to, options: toCompletions(pmApi) }
    }

    const segments = text.split(".")
    const afterPm = segments.slice(1)
    const methodKey = afterPm[0]

    if (afterPm.length === 1 && !text.endsWith(".")) {
        return { from: word.from + "pm.".length, options: toCompletions(pmApi) }
    }

    const methodDef = pmApi.find((m) => m.label.startsWith(methodKey))
    if (!methodDef?.children) return null

    return {
        from: word.to,
        options: toCompletions(methodDef.children),
    }
}

export function resCompletionSource(context: CompletionContext): CompletionResult | null {
    const word = context.matchBefore(/(?<!\w)response(?:\.[\w]*)*\.?/)
    if (!word) return null

    const text = word.text

    if (text === "response" || text === "response.") {
        return { from: word.to, options: toCompletions(resApi) }
    }

    const segments = text.split(".")
    if (segments.length === 2 && !text.endsWith(".")) {
        const partial = segments[1]
        const filtered = resApi.filter((e) => e.label.startsWith(partial))
        if (filtered.length > 0) {
            return { from: word.from + "response.".length, options: toCompletions(filtered) }
        }
    }

    return null
}
