import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import './App.css'

import { Home, Books, Authors, Navbar, ViewBook } from './components'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:id' element={<ViewBook/>}/>
          <Route path='/authors' element={<Authors />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </>
  )
}
export default App