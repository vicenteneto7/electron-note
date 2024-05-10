import db from './dbManager'

const getDocuments = () => {
  const query = 'SELECT * FROM documents;'
  const stmt = db.prepare(query)

  return stmt.all()
}

const addDocument = (payload) => {
  const body = {
    title: payload.title,
    content: payload.content || '',
  }

  const query = `INSERT INTO documents (title, content)
      VALUES (:title, :content)`
  const stmt = db.prepare(query)

  return stmt.run({ ...body })
}

const getDocumentsById = (id) => {
  const query = `SELECT * FROM documents WHERE id = ?`
  const stmt = db.prepare(query)

  return stmt.get(id)
}

const updateDocumentsById = (payload, id) => {
  const body = {
    id,
    title: payload.title || '',
    content: payload.content || '',
  }

  const query = `UPDATE documents SET title = ?, content = ? WHERE id = ?`
  const stmt = db.prepare(query)

  return stmt.run(body.title, body.content, id)
}

const deleteDocumentsById = (id) => {
  const query = `DELETE FROM documents WHERE id = ?`
  const stmt = db.prepare(query)

  return stmt.run(id)
}

export const documentsQuery = {
  getDocuments,
  addDocument,
  getDocumentsById,
  updateDocumentsById,
  deleteDocumentsById
}