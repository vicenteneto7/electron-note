import Database from 'better-sqlite3'
import * as path from 'path'

const dbPath =
  process.env.NODE_ENV === 'development'
    ? './database/mydb.db'
    : path.join(process.resourcesPath, './database/mydb.db')

const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

exports.db = db
