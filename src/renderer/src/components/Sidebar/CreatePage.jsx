import { useMutation } from '@tanstack/react-query'
import { Plus } from 'phosphor-react'

export function CreatePage() {

  const { isPending: isCreatingNewDocument, mutateAsync: CreateDocument } = useMutation({
    mutationFn: async () => {
      const response = await window.api.addDocument()


      return response.data
    }
  })

  return (
    <button
      onClick={() => CreateDocument()}
      disabled={isCreatingNewDocument}
      className="flex w-[240px] px-5 items-center text-sm gap-2 absolute bottom-0 left-0 right-0 py-4 border-t border-rotion-600 hover:bg-rotion-700 disabled:opacity-60">
      <Plus className="h-4 w-4" />
      Novo documento
    </button>
  )
}