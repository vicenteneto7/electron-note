import { app, shell, BrowserWindow, ipcMain } from 'electron'
import path, { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'

import { createFileRoute, createURLRoute } from 'electron-router-dom'

import icon from '../../resources/icon.png?asset'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1025,
    height: 700,
    show: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hiddenInset',
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }

  })

  // Don't forget to check if the port is the same as your dev server
  const devServerURL = createURLRoute('http://localhost:5173/', 'main')

  const fileRoute = createFileRoute(path.join(__dirname, '../renderer/index.html'), 'main')

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    //se eu estiver em ambiente de desenv, e a var electronrend-url tiver disponível, eu vou abrir dentro da load url a minha janela de desenvolv, localhost3000
    mainWindow.loadURL(devServerURL)
  } else {
    mainWindow.loadFile(...fileRoute) //mas em ambiente de produção, eu abro o arq direto e n url
  }
}

if (process.platform === 'darwin') {
  app.dock.setIcon(path.resolve(__dirname, 'icon.png'))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  //disparado quando nossa aplicaçãi está pronta para ser exibida em tela
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow() //qundo ela estiver pronta, é executado esse método

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow() //quando o app está aberto, mas sem janelas em foco, ele cria a janela de volta quando o usuário da o foco
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  //quando todas as janelas estiverem fechadas e o SO for diferente de Mac OS, fecha a aplicação
  if (process.platform !== 'darwin') {
    //o comportamento normal no linux e w é quando fecha todas as janelas, o app é fechado tmb
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
