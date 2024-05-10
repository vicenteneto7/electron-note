import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { documentsQuery } from '../renderer/src/models/documentsManager'


const addDocument = (body) => {
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
}


// Custom APIs for renderer
const api = {
  getDocuments(){
    return ipcRenderer.invoke('getDocuments')
  },
  getDocumentsById(id){
    return ipcRenderer.invoke('getDocumentsById', id)
  },
  addDocument(req){
    return ipcRenderer.invoke('addDocument', req)
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
if (process.contextIsolated) {
  //se context...existe dentro do process
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI) //preload-expoe ao processo renderer as apis, possiveis comunic entre main e renderer, ent elas tem q ser delcaradas no preload
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
