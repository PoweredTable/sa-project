import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';


import './App.css'
import {
  Home, Books, Authors, NavbarDefault,
  NavbarCheckout, ViewBook, Checkout, PayBoleto,
  PayCredito, PayPIX, BooksContextProvider
} from './components'

function App() {
  const location = useLocation();


  const showNavbarA = ['/books', '/authors', '/home'].some(path => location.pathname.startsWith(path));

  const showNavbarB = ['/checkout'].some(path=> location.pathname.startsWith(path));

  const hideNavbar = ['/admin','/checkout'].some(path => location.pathname.startsWith(path));
 
  const showAlternateNavbar = false
  return (
    <>
     <BooksContextProvider>
      {showNavbarA && <NavbarDefault/>}
      {showNavbarB && <NavbarCheckout/>}
      {!hideNavbar && !showAlternateNavbar && <NavbarDefault/>}


      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/:id' element={<ViewBook />} />
          <Route path='/books' element={<Books />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/payment-method/boleto' element={<PayBoleto />} />
          <Route path='/checkout/payment-method/credito' element={<PayCredito />} />
          <Route path='/checkout/payment-method/pix' element={<PayPIX />} />
        </Routes>
      </div>
     </BooksContextProvider>

    </>
  )
}
export default App