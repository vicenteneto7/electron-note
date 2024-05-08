import * as Navigation from './Navigation'
import clsx from 'clsx'
import { CaretDoubleLeft } from 'phosphor-react'
import { CreatePage } from './CreatePage'
import { Profile } from './Profile'
import { Search } from './Search'
import * as Collapsible from '@radix-ui/react-collapsible'

export function Sidebar() {
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
        <div className=' flex items-center flex-row justify-end p-5'>
          <CaretDoubleLeft className="h-4 w-4" />
        </div>
        

        <Profile />
        <Search />

        <Navigation.Root>
          <Navigation.Section>
            <Navigation.SectionTitle>Workspace</Navigation.SectionTitle>
            <Navigation.SectionContent>
              <Navigation.Link>Untitled</Navigation.Link>
              <Navigation.Link>Discover</Navigation.Link>
              <Navigation.Link>Ignite</Navigation.Link>
              <Navigation.Link>Rocketseat</Navigation.Link>
            </Navigation.SectionContent>
          </Navigation.Section>
        </Navigation.Root>

        <CreatePage />
      </div>
    </Collapsible.Content>
  )
}
