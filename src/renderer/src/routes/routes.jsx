import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  )
}

export default MyRouter
