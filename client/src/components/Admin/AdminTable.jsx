import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import api from '../../services/api'

const AdminTable = ({ setOpenDialog, rows, columns, setBook, setHttpMethod}) => {

  const handleRowClick = async (rowData) => {
    const bookId = rowData.row.id;
    try {
      const bookResp = await api.getBookById(bookId);
      const bookData = bookResp.data.result;
      if (Array.isArray(bookData) && bookData.length > 0) {
        setBook({...bookData[0]})
        setOpenDialog(true);
        setHttpMethod('update')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='table'>
      <DataGrid className='rowsStyle'
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}

      />
    </div>
  )
}

export default AdminTable