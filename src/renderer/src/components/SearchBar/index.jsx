import { useQuery } from '@tanstack/react-query'
import { Command } from 'cmdk'
import { File, MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

export function SearchBar({ open, onOpenChange }) {

  const navigate = useNavigate()

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [onOpenChange, open])

  const { data: documents = [] } = useQuery({
    queryKey: ['documents'], /* refetchInterval: 10000, */ refetchOnWindowFocus: true, refetchOnReconnect: true, queryFn: async () => {
      const res = await window.api.getDocuments()

      console.log(res)

      return res
    }
  })

  function handleOpenDocument(id) {
    navigate(`/documents/${id}`)
    onOpenChange(!open)
  }

  return (
    <Command.Dialog
      className="fixed top-24 left-1/2 -translate-x-1/2 w-[480px] max-w-full bg-rotion-800 rounded-md shadow-2xl text-rotion-100 border border-rotion-600"
      open={open}
      onOpenChange={onOpenChange}
      label="Search"
    >
      <div className="flex items-center gap-2 border-b border-rotion-700 p-4">
        <MagnifyingGlass className="w-5 h-5" />
        <Command.Input
          autoFocus
          placeholder="Buscar documentos..."
          className="w-full bg-transparent focus:outline-none text-sm text-rotion-50 placeholder:text-rotion-200"
        />
      </div>
      <Command.List className="py-2 max-h-48 scrollbar-thin scrollbar-thumb-rotion-600 scrollbar-track-rotion-800">
        <Command.Empty className="py-3 px-4 text-rotion-200 text-sm">
          Nenhum documento encontrado.
        </Command.Empty>

        {documents?.map((document) => {
          return (
            <Command.Item
              onSelect={() => handleOpenDocument(document.id)}
              key={document.id}
              className="py-3 px-4 text-rotion-50 text-sm flex items-center gap-2 hover:bg-rotion-700 aria-selected:!bg-rotion-600">
              <File className="w-4 h-4" />
              {document.title}
            </Command.Item>
          )
        })}

      </Command.List>
    </Command.Dialog>
  )
}

SearchBar.propTypes = {
  open: PropTypes.bool,
  onOpenChange: PropTypes.func
}