import React from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'

import { Home, Books, Authors, Navbar } from './components'

function App() {
  return (
    <>
    <Navbar />
    <div className='container'> 
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/books' element={<Books/>}/>
        <Route path='/authors' element={<Authors/>}/>
      </Routes>
    </div>
    </>
  )
}
export default App