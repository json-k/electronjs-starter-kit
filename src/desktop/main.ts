import { app, BrowserWindow, ipcMain, IpcMainEvent } from "electron";
import * as os from 'os';
let dev: boolean = !app.isPackaged;

// This will cause the application to reload when the renderer content changes.
if ( dev ){
    require("electron-reload")('build/renderer');
}

let win: BrowserWindow = null;
let loaded: boolean = false;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    // This shows the browser menu when dev==true
    dev ? {} : win.setMenu(null);
    win.loadFile("renderer/index.html");
    // Sets loaded to true once the window is done loading, we can then assume the renderer can receive events.
    win.webContents.once('did-finish-load', () => loaded = true);
    // Show the dev tools when dev== true
    dev ? win.webContents.openDevTools() : {};
});

app.on("window-all-closed", () => {
    app.quit();
});

/**
 * This can be called from the renderer to return some useful system info.
 */
ipcMain.on("getOsInfo", (event: IpcMainEvent) => {
    event.returnValue = {
        hostname: os.hostname(),
        ostype: os.type(),
        release: os.release(),
        platform: os.platform(),
        architecture: os.arch(),
        user: os.userInfo(),
        home: os.homedir(),
        cpus:os.cpus(),
        memory:{
            total: os.totalmem(),
            free: os.freemem()
        }
    };
});