import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  fetchDocuments() {
    return ipcRenderer.invoke('fetch-documents')
  }
}

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electronV: () => process.versions.electron,

  // You can also expose variables, not just functions
});

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
