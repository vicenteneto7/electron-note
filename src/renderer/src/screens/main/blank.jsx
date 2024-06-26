import { Button } from "../../components/Button"
import { useEffect } from "react"
import { useWindowStore } from "../../store"
import { DocumentsView } from "../../components/Documents"

export function Blank() {

  const store = useWindowStore().about

  useEffect(() => {

    window.api.whenDocumentsWindowClose(({ message }) => {
      console.log(message)


      store.setAboutWindowState(false)

    })
  })

  function openDocumentsWindow() {
    window.api.createDocumentsWindow()

    store.setAboutWindowState(true)

  }

  console.log(window.api)

  return (
    <main className="flex-1 flex items-center flex-col justify-center gap-3 text-rotion-400">
      Selecione ou crie um documento
      <Button
        className={store.isOpen ? 'disabled' : ''}
        onClick={openDocumentsWindow}>
        Veja todos os documentos
      </Button>
    </main>
  )
}