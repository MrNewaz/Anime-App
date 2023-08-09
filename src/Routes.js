import Details from 'pages/Details'
import Home from 'pages/Home'
import MyList from 'pages/MyList'
import MyListDetails from 'pages/MyListDetails'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="mylist" element={<MyList />} />
        <Route path="mylist/:id" element={<MyListDetails />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </main>
  )
}

export default AppRoutes
