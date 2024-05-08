import { Router, Route } from 'electron-router-dom'

import { Document } from '../pages/document'
import { Default } from '../pages/layouts/default'
import { Blank } from '../pages/blank'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </Route>
      }
    />
  )
}