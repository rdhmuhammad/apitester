export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS'

export interface AssertionRule {
  id: string
  expression: string
}

export interface CaptureRule {
  id: string
  varName: string
  expression: string
}

export interface TestHeader {
  key: string
  value: string
}

export interface TestStep {
  id: string
  name: string
  method: HttpMethod
  url: string
  headers: TestHeader[]
  body?: string
  assertions: AssertionRule[]
  captures: CaptureRule[]
}

export interface SendResponse {
  status: number
  statusText: string
  headers: Record<string, string>
  body: unknown
  responseTimeMs: number
  timestamp: string
}

export interface AssertionResult {
  ruleId: string
  expression: string
  passed: boolean
  actualValue?: unknown
  expectedValue?: unknown
  error?: string
}

export interface CaptureResult {
  ruleId: string
  varName: string
  expression: string
  value: unknown
  error?: string
}

export interface StepResult {
  stepId: string
  stepIndex: number
  status: 'pending' | 'running' | 'passed' | 'failed' | 'skipped'
  response?: SendResponse
  assertionResults: AssertionResult[]
  captureResults: CaptureResult[]
  durationMs: number
  error?: string
}

export interface TestScenario {
  id: string
  name: string
  filename: string
  description: string
  content: string
  steps: TestStep[]
  lastRunResults?: StepResult[]
  lastRunStatus?: 'passed' | 'failed' | 'unrun'
  lastRunTime?: string
}
