import type {AssertionResult, CaptureResult, SendResponse} from "@/pages/editor/types/testScenario.ts"

/**
 * Safely extracts a property from an object using a dot-path or bracket string
 * e.g., getValueByPath(res, "response.body.user.id")
 */
export function getValueByPath(obj: unknown, path: string): unknown {
  if (!path || !obj) return undefined

  let normalizedPath = path.trim()

  if (normalizedPath === 'response') return obj
  if (normalizedPath.startsWith('response.')) {
    normalizedPath = normalizedPath.substring(9)
  } else if (normalizedPath.startsWith('response[')) {
    normalizedPath = normalizedPath.substring(8)
  }

  const tokens = normalizedPath
    .replace(/\[(\w+)\]/g, '.$1')
    .replace(/^\./, '')
    .split('.')

  let current: unknown = obj
  for (const token of tokens) {
    if (current === undefined || current === null) return undefined
    current = (current as Record<string, unknown>)[token]
  }

  return current
}

/**
 * Evaluates a single assertion expression against a SendResponse
 */
export function evaluateAssertion(expression: string, response: SendResponse): AssertionResult {
  const expr = expression.trim()

  if (!expr) {
    return {
      ruleId: '',
      expression: expr,
      passed: false,
      error: 'Empty assertion expression',
    }
  }

  try {
    const existsMatch = expr.match(/^(.+?)\s+exists$/i)
    if (existsMatch) {
      const targetPath = existsMatch[1].trim()
      const actualVal = getValueByPath(response, targetPath)
      const passed = actualVal !== undefined && actualVal !== null
      return {
        ruleId: '',
        expression: expr,
        passed,
        actualValue: actualVal === undefined ? 'undefined' : JSON.stringify(actualVal),
        error: passed ? undefined : `Target path '${targetPath}' is undefined or null`,
      }
    }

    const binaryMatch = expr.match(/^(.+?)\s*(===|!==|==|!=|>=|<=|>|<)\s*(.+)$/)
    if (binaryMatch) {
      const leftExpr = binaryMatch[1].trim()
      const operator = binaryMatch[2]
      const rightExpr = binaryMatch[3].trim()

      const leftVal = getValueByPath(response, leftExpr) ?? parseLiteral(leftExpr)
      const rightVal = parseLiteral(rightExpr, response)

      let passed = false
      switch (operator) {
        case '===':
        case '==':
          passed = leftVal == rightVal
          break
        case '!==':
        case '!=':
          passed = leftVal != rightVal
          break
        case '>':
          passed = Number(leftVal) > Number(rightVal)
          break
        case '<':
          passed = Number(leftVal) < Number(rightVal)
          break
        case '>=':
          passed = Number(leftVal) >= Number(rightVal)
          break
        case '<=':
          passed = Number(leftVal) <= Number(rightVal)
          break
      }

      return {
        ruleId: '',
        expression: expr,
        passed,
        actualValue: leftVal,
        expectedValue: rightVal,
        error: passed ? undefined : `Expected ${leftVal} ${operator} ${rightVal}`,
      }
    }

    const result = new Function('response', `return !!(${expr});`)(response)
    return {
      ruleId: '',
      expression: expr,
      passed: Boolean(result),
      actualValue: result,
      error: Boolean(result) ? undefined : `Expression evaluated to ${result}`,
    }
  } catch (err: unknown) {
    return {
      ruleId: '',
      expression: expr,
      passed: false,
      error: err instanceof Error ? err.message : 'Evaluation syntax error',
    }
  }
}

/**
 * Extracts a value from a response using a capture expression
 */
export function evaluateCapture(expression: string, varName: string, response: SendResponse): CaptureResult {
  try {
    const val = getValueByPath(response, expression)
    return {
      ruleId: '',
      varName,
      expression,
      value: val !== undefined ? val : undefined,
      error: val === undefined ? `Value at path '${expression}' not found in response` : undefined,
    }
  } catch (err: unknown) {
    return {
      ruleId: '',
      varName,
      expression,
      value: undefined,
      error: err instanceof Error ? err.message : 'Failed to extract captured value',
    }
  }
}

/**
 * Helper to parse raw right-hand literal expressions
 */
function parseLiteral(token: string, response?: SendResponse): unknown {
  const trimmed = token.trim()

  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1)
  }
  if (!isNaN(Number(trimmed))) {
    return Number(trimmed)
  }
  if (trimmed === 'true') return true
  if (trimmed === 'false') return false
  if (trimmed === 'null') return null

  if (response && trimmed.startsWith('response')) {
    return getValueByPath(response, trimmed)
  }

  return trimmed
}
