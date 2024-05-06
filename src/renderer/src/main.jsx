import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRouter from './routes/routes.jsx'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
)
