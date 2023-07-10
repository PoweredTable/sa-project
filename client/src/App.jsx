import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';


import './App.css'

import {
  Home, Books, Authors, NavbarDefault,
  NavbarCheckout, ViewBook, Checkout
} from './components'

function App() {
  const location = useLocation();

  // Array of routes where NavbarA should be shown
  const navBarA = ['/books', '/authors', '/home'];

  // Array of routes where NavbarB should be shown
  const navbarB = ['/checkout'];

  const showNavbarA = ['/books', '/authors', '/home'].some(path => location.pathname.startsWith(path));

  const showNavbarB = navbarB.includes(location.pathname);

  const hideNavbar = window.location.pathname.startsWith('/admin')
  const showAlternateNavbar = false
  return (
    <>
      {showNavbarA && <NavbarDefault />}
      {showNavbarB && <NavbarCheckout />}
      {!hideNavbar && !showAlternateNavbar && <NavbarDefault />}


      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/:id' element={<ViewBook />} />
          <Route path='/books' element={<Books />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </>
  )
}
export default App