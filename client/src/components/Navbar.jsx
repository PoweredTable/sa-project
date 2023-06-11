import React from 'react'
import { Link } from "react-router-dom"

import Searchbar from './Searchbar'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav'>
      <Link to='' className='site-title'>LEW|BOOKS</Link>
      <ul>

        <li>
          <Link to='/books'>LIVROS</Link>
        </li>

        <li>
          <Link to='/authors'>AUTORES</Link>
        </li>

        <li>
          <Searchbar></Searchbar>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar