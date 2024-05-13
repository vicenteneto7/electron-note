import { useWindowStore } from "../../store"
import { useEffect } from "react"

const { api } = window


export function Blank() {

  const store = useWindowStore().documents

  useEffect(() => {
    api.sayHelloFromBridge()

    api.whenDocumentsWindowClose(({ message }) => {
      console.log(message)

      store.setDocumentsWindowState(false)
    })
  }, [])

  function openDocumentsWindow() {
    api.createDocumentsWindow()
    store.setDocumentsWindowState(true)
  }

  return (
    <main className="flex-1 flex items-center justify-center gap-3 text-rotion-400">
      Selecione ou crie um documento
      <button
        onClick={openDocumentsWindow}>
        Veja todos os documentos
      </button>
    </main>
  )
}