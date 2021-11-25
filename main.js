const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path");
const Server = require('./src/server/server')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    title: 'Togethr',
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

app.on('window-all-closed', () => {
  app.quit()
})

let serverState = false
let server

ipcMain.on('start-stop-server', (event, arg) => {
  
  if(serverState){
    server.stopServer()
    delete server
    console.log('Stopping server.');
  }else{
    server = new Server()
    server.startServer()
    console.log('Starting server.');
  }
  serverState = !serverState
  console.log(serverState);
})

ipcMain.on('server-state', (event, arg) => {
  event.returnValue = serverState
})