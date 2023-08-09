import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Single from './Single'

const AppRoutes = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Single />} />
      </Routes>
    </main>
  )
}

export default AppRoutes
