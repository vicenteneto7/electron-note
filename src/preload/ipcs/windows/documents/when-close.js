import { ipcRenderer } from 'electron'
import { IPC } from '../../../../../shared/constants'

export function whenDocumentsWindowClose(fn) {
  const channel = IPC.WINDOWS.DOCUMENTS.WHEN_WINDOW_CLOSE

  ipcRenderer.on(channel, (_, ...args) => {
    fn(...args)
  })
}
