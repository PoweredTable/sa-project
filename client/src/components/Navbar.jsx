import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import Searchbar from './Searchbar'
import './Navbar.css'
import Login from './login'
import Logo from './logo'

function Navbar() {

  const [generos, setGeneros] = useState([])
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);



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
            <Link to='/books'>Livros</Link>
          </section>

          <section>
            <Link to='/authors'>Autores</Link>
          </section>

          <section>
            <Typography
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
            <Link to=''>Livros</Link>
            </Typography>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>I use Popover.</Typography>
            </Popover>
          </section>
        </div>
      </nav>
    </div>
  )
}
export default Navbar