const { app, BrowserWindow } = require('electron')

const WINDOW_OPTION = {
  width: 1920,
  height: 1080,
  webPreferences: {
    nodeIntegration: true
  }
}

function createWindow() {
  const win = new BrowserWindow(WINDOW_OPTION)
  
  win.setMenuBarVisibility(false)
  win.maximize()
  win.loadURL(`file://${__dirname}/html/index.html`)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length == 0) {
    createWindow()
  }
})