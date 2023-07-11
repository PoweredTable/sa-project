import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import GenerosTable from './GenerosTable';
import Button from '@mui/material/Button';

import Searchbar from './Searchbar'
import './Navbar.css'
import Login from './login'
import Logo from './logo'
import { BooksContext } from './contexts/BooksContext';
import { useContext } from 'react';
import { AlertTitle } from '@mui/material';

import api from '../services/api';


export function NavbarDefault() {
const { setBooks } = useContext(BooksContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const setAllBooks = () => {
    api.get('/api/v1/books/all').then((response)=>{
      setBooks(response.data.result)
    })   
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (

    <div>
      <nav className='nav'>
        <div className='align navBarUP'>
          <Link to='' className='site-title' ><Logo></Logo></Link>
          <Searchbar></Searchbar>
          <Login></Login>
        </div>

        <div className='navBarDown'>
          <section>
            <Link to='/authors'>Autores</Link>
          </section>
          <section >
            <p className='elementsPopover' aria-describedby={id} onClick={handleClick}>
              Gêneros
            </p>

            <Popover
              className='popover'
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }} className='popoverInSide'
                aria-haspopup="true"
              >
                <GenerosTable />
              </Typography>
            </Popover>
          </section>


          <section onClick={setAllBooks} >
            <Link to='/books'>Livros</Link>
          </section>

        </div>
      </nav>
    </div>
  )
}


export function NavbarCheckout() {
  return (
    <div >
      <nav className='nav'>
        <div className='checkout'>
          <div className='align navBarUP'>
            <Link to={''} className='site-title' ><Logo></Logo></Link>
            <h1 className=''>FINALIZAR COMPRA</h1>
          </div>
        </div>
      </nav>
    </div>
  )
}


