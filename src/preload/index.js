import { contextBridge, ipcRenderer } from 'electron'
import { documentsQuery } from '../renderer/src/models/documentsManager'

import * as ipcs from './ipcs'


/* const addDocument = (body) => {
  console.log('window.api', body)
  documentsQuery.addDocument(body)
}

const getDocumentsById = (id) => {
  return documentsQuery.getDocumentsById(id)
}

const updateDocumentsById = (body, id) => {
  documentsQuery.updateDocumentsById(body, id)
}

const deleteDocumentsById = (id) => {
  documentsQuery.deleteDocumentsById(id)
} */


// Custom APIs for renderer
const api = {
  ...ipcs,

  username: process.env.USER,

  getDocuments(){
    return ipcRenderer.invoke('getDocuments')
  },
  getDocumentById(id){
    return ipcRenderer.invoke('getDocumentById', id)
  },
  addDocument(){
    return ipcRenderer.invoke('addDocument')
  },
  updateDocumentsById(req){
    return ipcRenderer.invoke('updateDocumentsById', req)
  },
  deleteDocumentsById(id){
    return ipcRenderer.invoke('deleteDocumentsById', id)
  },
  fetchDocuments() {
    return ipcRenderer.invoke('fetch-documents')
  }
}
// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.

    //preload-expoe ao processo renderer as apis, possiveis comunic entre main e renderer, ent elas tem q ser delcaradas no preload
  // just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.api = api
}
