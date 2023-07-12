import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './AdminSearchbar.css'

import Button from '@mui/material/Button';

const AdminSearchbar = () => {
  return (
    <div className='search-bar-admin'>
      <input />
      {/* <TextField placeholder='Pesquise por um produto'></TextField> */}
      <Button><SearchIcon/></Button>
    </div>
  )
}

export default AdminSearchbar