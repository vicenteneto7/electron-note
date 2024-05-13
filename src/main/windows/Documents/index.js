import { createWindow } from '../../factories'

export * from './ipcs'

export function DocumentsWindow() {
  const window = createWindow({
    id: 'documents',
    title: `Documents`,
    width: 450,
    height: 350,
    show: false,
    resizable: false,
    alwaysOnTop: true,
    autoHideMenuBar: true,
  })

  window.webContents.on('did-finish-load', () => window.show())

  return window
}
