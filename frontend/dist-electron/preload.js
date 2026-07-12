import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("electronAPI", {
    openFileDialog: () => ipcRenderer.invoke("open-file-dialog"),
});
//# sourceMappingURL=preload.js.map