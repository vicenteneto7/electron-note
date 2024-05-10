import db from '../renderer/src/models/DBManager.js'
import { ipcMain } from 'electron'

ipcMain.handle('getDocuments', async () => {
  const query = 'SELECT * FROM documents;'
  const stmt = db.prepare(query)

  return stmt.all()
})


