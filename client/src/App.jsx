import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import './App.css'

import { Home, Books, Authors, Navbar } from './components'

function App() {
  // const hideNavbar = useMatch(['/admin', '/compra'].join('|'));
  // const showAlternateNavbar = useMatch('/compra');
  return (
    <>
    <Navbar></Navbar>
      {/* {!hideNavbar && !showAlternateNavbar && !useMatch('/admin') && <Navbar />}
      {showAlternateNavbar && <AlternateNavbar />} */}
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
 
    </>
  )
}
export default App