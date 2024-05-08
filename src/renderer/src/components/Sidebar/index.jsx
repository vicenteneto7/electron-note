import * as Navigation from './Navigation'
import clsx from 'clsx'
import { CaretDoubleLeft } from 'phosphor-react'
import { CreatePage } from './CreatePage'
import { Profile } from './Profile'
import { Search } from './Search'

export function Sidebar() {
  return (
    <aside className="bg-rotion-800 flex-shrink-0 border-r border-rotion-600 h-screen relative group data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut overflow-hidden">
      <button
        className={clsx(
          'absolute h-5 w-5 right-4 text-rotion-200 hover:text-rotion-50 inline-flex items-center justify-center',

          'top-6'
        )}
      >
        <CaretDoubleLeft className="h-4 w-4" />
      </button>

      <div
        className={clsx(
          'flex-1 flex flex-col gap-8 h-full w-[240px] group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0 transition-opacity duration-200'
        )}
      >
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
    </aside>
  )
}
