import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'phosphor-react'

export function CreatePage() {
  const queryClient = useQueryClient()

  const { isPending: isCreatingNewDocument, mutateAsync: CreateDocument } = useMutation({
    onSuccess: (data) => {
      queryClient.invalidateQueries(['documents'])
      /* queryClient.setQueriesData(['documents'], (documents) => {
        if (documents && documents?.length >= 0) {
          return [...documents, data]
        } else {
          return [data]
        }
      }) */
    },
    mutationFn: async () => {
      const response = await window.api.addDocument()

      console.log(response)

      return response
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