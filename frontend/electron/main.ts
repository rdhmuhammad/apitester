import {app, BrowserWindow, dialog, ipcMain, Menu} from "electron"
import path from "path"
import {fileURLToPath} from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isDev = process.env.NODE_ENV === "development" || !app.isPackaged

let mainWindow: BrowserWindow | null = null

function createWindow() {
    if (!isDev) {
        Menu.setApplicationMenu(null)
    }

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: isDev
            ? path.join(__dirname, "../public/app.ico")
            : path.join(__dirname, "../dist/app.ico"),
        webPreferences: {
            preload: path.join(__dirname, "preload.cjs"),
            contextIsolation: true,
            nodeIntegration: false,
        },
    })

    if (isDev) {
        mainWindow.loadURL("http://localhost:5173")
        mainWindow.webContents.openDevTools()
    } else {
        mainWindow.loadFile(path.join(__dirname, "../dist/index.html"))
    }

    mainWindow.on("closed", () => {
        mainWindow = null
    })
}

ipcMain.handle("open-file-dialog", async () => {
    const result = await dialog.showOpenDialog(mainWindow!, {
        properties: ["openFile"],
        filters: [{name: "JSON", extensions: ["json"]}],
    })
    return result
})

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow()
    }
})
