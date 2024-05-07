import { Router, Route } from 'electron-router-dom'
import { Docs } from '../pages/DocsBar'

export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Docs />} />
        </>
      }
    />
  )
}