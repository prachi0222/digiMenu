import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import Dashboard from './pages/admin/Dashboard'
import MenuList from './pages/admin/MenuList'
import AddMenu from './pages/admin/AddMenu'
import EditMenu from './pages/admin/EditMenu'
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
     
         <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/menu' element={<MenuPage/>}/>
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/admin/menu' element={<MenuList/>}/>
          <Route path='/admin/menu/add' element={<AddMenu/>}/>
          <Route path='/admin/menu/edit/:id' element={<EditMenu/>}/>
         </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
