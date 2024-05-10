import { useParams } from 'react-router-dom'
import { Editor } from '../components/Editor'
import { ToC } from '../components/ToC'
import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

export function Document() {
  const { id } = useParams()

  const { data: document = [], isFetching } = useQuery({
    queryKey: ['document', id], queryFn: async () => {
      const response = await window.api.getDocumentById({ id })

      return response
    }
  })

  const initialContent = useMemo(() => {
    if (document) {
      return `<h1>${document.title}</h1>${document.content ?? '<p></p>'}`
    }

    return ''

  }, [document])

  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-semibold text-xs">TABLE OF CONTENTS</span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Banco de dados</ToC.Link>
            <ToC.Link>Autenticação</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        {!isFetching && document && <Editor content={initialContent} />}
      </section>
    </main>
  )
}
