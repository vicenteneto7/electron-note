import * as Navigation from './Navigation'
import clsx from 'clsx'
import { CaretDoubleLeft } from 'phosphor-react'
import { CreatePage } from './CreatePage'
import { Profile } from './Profile'
import { Search } from './Search'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useQueries, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function Sidebar() {
  /*const [documents, setDocuments] = useState([])

  useEffect(() => {
    async function loadUsers() {
      await window.api
        .fetchDocuments()
        .then((payload) => {
          setDocuments(payload)

          console.log('deu certo')
        })
        .catch((error) => {
          console.log(`Erro ao buscar dados, erro: ${error}`)
        })
    }

    loadUsers()
  }, []) */


  const { data: documents = [] } = useQuery({
    queryKey: ['documents'], /* refetchInterval: 10000, */ refetchOnWindowFocus: true, refetchOnReconnect: true, queryFn: async () => {
      const res = await window.api.getDocuments()

      console.log('feito do zero')

      console.log(res)

      return res
    }
  })

  return (
    <Collapsible.Content className="bg-rotion-800 flex-shrink-0 border-r border-rotion-600 h-screen relative group data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut overflow-hidden">
      <Collapsible.Trigger
        className={clsx(
          'absolute h-5 w-5 right-4 text-rotion-200 hover:text-rotion-50 inline-flex items-center justify-center',

          'top-6'
        )}
      ></Collapsible.Trigger>

      <div
        className={clsx(
          'flex-1 flex flex-col gap-4 h-full w-[240px] group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0 transition-opacity duration-200'
        )}
      >
        <div className=" flex items-center flex-row justify-end p-5">
          <CaretDoubleLeft className="h-4 w-4" />
        </div>

        <Profile />
        <Search />

        <Navigation.Root>
          <Navigation.Section>
            <Navigation.SectionTitle>Workspace</Navigation.SectionTitle>
            <Navigation.SectionContent>
              {documents?.map((document) => {
                return <Navigation.Link key={document.id}>{document.title}</Navigation.Link>
              })}
            </Navigation.SectionContent>
          </Navigation.Section>
        </Navigation.Root>

        <CreatePage />
      </div>
    </Collapsible.Content>
  )
}
