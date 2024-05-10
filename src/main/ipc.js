import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async () => {
  return [
    { id: 1, title: 'React' },
    { id: 2, title: 'Docs' },
    { id: 3, title: 'Electron' },
    { id: 4, title: 'Docs' },
    { id: 5, title: 'Docs5' },
    { id: 6, title: 'SQLite' }
  ]
})
