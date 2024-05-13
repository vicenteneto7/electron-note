import { ipcRenderer } from 'electron'
import { IPC } from '../../../../../shared/constants'

export function createDocumentsWindow() {
  const channel = IPC.WINDOWS.DOCUMENTS.CREATE_WINDOW

  ipcRenderer.invoke(channel)
}
