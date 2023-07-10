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

 export function NavbarDefault() {

  const [generos, setGeneros] = useState(['Ação', 'Adulto', 'Artes Marciais', 'Aventura', 'Bizarro', 'Comédia', 'Comida', 'Culinária', 'Demônios', 'Distopia', 'Doujinshi', 'Drama', 'Ecchi', 'Esporte', 'Fantasia', 'Física', 'Guerra', 'Harém', 'Histórico', 'Homenagem', 'Horror', 'Isekai', 'Jogos', 'Josei', 'Kamen Rider', 'Magia', 'Mecha', 'Médico', 'Medieval', 'Memorial', 'Mistério', 'Mitologia', 'Ninja', 'Non-sense', 'Novel', 'Obra Nacional', 'One Shot', 'Psicológico', 'Reencarnação', 'Regressão', 'Romance', 'Saint Seiya', 'Sci-fi', 'Seinen', 'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen BL', 'Slice of Life', 'Sobrenatural', 'Sobrevivência', 'Suspense', 'Tokusatsu', 'Torre', 'Tragédia', 'Ultraman', 'Vampiro', 'Viagem no tempo', 'Vida Escolar', 'Wuxia', 'Yaoi', 'Yuri'])
  const [anchorEl, setAnchorEl] = React.useState(null);

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
                {/* <table>
                  {generos.map(genero => {
                    return (<tr>
                      <td className='tdEspaco'>{genero}</td>
                      <td className='tdEspaco'>{genero}</td>
                      <td className='tdEspaco'>{genero}</td>
                    </tr>)
                  })
                  }
                </table> */}
                <GenerosTable />
              </Typography>
            </Popover>
          </section>


          <section >
            <Link to='/books'>Livros</Link>
          </section>

        </div>
      </nav>
    </div>
  )
}



 export function NavbarCheckout() {
  return (
    <div>
      <nav className='nav'>
        <div className='align navBarUP'>
          <Link to={''} className='site-title' ><Logo></Logo></Link>
          <h1>FINALIZAR COMPRAR</h1>
        </div>
      </nav>
    </div>
    )
}

