import { Router, Route } from 'electron-router-dom'

import { Default } from '../screens/main/layouts/default'
import { Blank } from '../screens/main/blank'
import { DocumentsScreen } from '../screens/documents'
import { Document } from '../screens/main/document'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/documents/:id" element={<Document />} />
        </Route>
      }
      documents={
        <Route path="/" element={<DocumentsScreen />} />
      }
    />
  )
}