import PropTypes from 'prop-types'


import { useContext, createContext, useState } from 'react'


const WindowStoreContext = createContext({})

export function useWindowStore() {
  return useContext(WindowStoreContext)
}

export function WindowStoreProvider({
  children,
}) {
  const [state, setState] = useState({
    documents: { isOpen: false, setDocumentsWindowState },
  })

  function setDocumentsWindowState(value) {
    setState((state) => ({
      ...state,
      documents: {
        ...state.documents,
        isOpen: value,
      },
    }))
  }

  return (
    <WindowStoreContext.Provider value={state}>
      {children}
    </WindowStoreContext.Provider>
  )
}

WindowStoreProvider.propTypes = {
    children: PropTypes.node,
  }
