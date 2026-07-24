interface ElectronAPI {
    openFileDialog(): Promise<{canceled: boolean; filePaths: string[]}>
}

interface Window {
    electronAPI: ElectronAPI
}
