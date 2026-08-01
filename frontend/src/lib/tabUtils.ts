export const TEST_TAB_PREFIX = 'test-'

export const isTestTab = (id: string): boolean => id.startsWith(TEST_TAB_PREFIX)

export const toTestTabId = (id: string): string => `${TEST_TAB_PREFIX}${id}`

export const fromTestTabId = (id: string): string => id.replace(new RegExp(`^${TEST_TAB_PREFIX}`), '')
