import React from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'

import { Home, Books, Authors, Navbar, ViewBook, BooksContextProvider } from './components'


function App() {

  return (
    <>
      <BooksContextProvider>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books/:id' element={<ViewBook />} />
            <Route path='/books' element={<Books />} />
            <Route path='/authors' element={<Authors />} />
          </Routes>
        </div>
      </BooksContextProvider>
    </>
  )
}
export default App