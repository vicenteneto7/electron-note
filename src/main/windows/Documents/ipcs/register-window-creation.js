import { ipcMain } from 'electron'
import { IPC } from '../../../../../shared/constants'
import { registerWindowCreationByIPC } from '../../../factories'
import { DocumentsWindow } from '..'

export function registerDocumentsWindowCreationByIPC() {
  registerWindowCreationByIPC({
    channel: IPC.WINDOWS.DOCUMENTS.CREATE_WINDOW,
    window: DocumentsWindow,

    callback(window, { sender }) {
      const channel = IPC.WINDOWS.DOCUMENTS.WHEN_WINDOW_CLOSE

      ipcMain.removeHandler(channel)

      window.on('closed', () =>
        sender.send(channel, {
          message: 'About window closed!',
        })
      )
    },
  })
}
