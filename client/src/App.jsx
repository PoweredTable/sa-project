import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import './App.css'

import { Home, Books, Authors, Navbar, Admin, ViewBook } from './components'

function App() {
  const hideNavbar = window.location.pathname.startsWith('/admin');
  const showAlternateNavbar = false;
  return (
    <>
      {!hideNavbar && !showAlternateNavbar && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:id' element={<ViewBook/>}/>
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>

    </>
  )
}
export default App