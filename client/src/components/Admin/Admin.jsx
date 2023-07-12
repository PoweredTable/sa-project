import React from 'react'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"

import './Admin.css'

import Sidebar from './Sidebar'
import AdminProducts from './AdminProducts'

const Admin = () => {

  return (
    <>
      <div className='container-admin'>
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/products' element={<AdminProducts />} />
          <Route path='/' element={<Navigate to="products" />} />
        </Routes>
      </div >
    </>
  )
}

export default Admin