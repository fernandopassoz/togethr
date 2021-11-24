const { app, BrowserWindow } = require('electron')
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    title: 'Togethr',
    skipTaskbar: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.setMenuBarVisibility(false)
  win.loadFile('index.html')

}

app.whenReady().then(() => {
  createWindow()
})