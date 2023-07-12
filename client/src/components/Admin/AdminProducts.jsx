import { useState, useEffect } from 'react'

import AdminSearchbar from './AdminSearchbar'
import AdminTable from './AdminTable'
import ProductDialog from './ProductDialog'
import api from '../../services/api';
import './AdminProducts.css'
import { roRO } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    filterable: false,
    disableColumnMenu: true
  },
  {
    field: 'nome',
    headerName: 'NOME',
    width: 250,
    editable: false,
    disableColumnMenu: true
  },
  {
    field: 'estoque',
    headerName: 'ESTOQUE',
    width: 150,
    editable: false,
    disableColumnMenu: true
  },
  {
    field: 'preco',
    headerName: 'PREÇO',
    type: 'number',
    width: 110,
    editable: false,
    disableColumnMenu: true
  },
];


const AdminProducts = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [books, setBooks] = useState([]);
  const [httpMethod, setHttpMethod] = useState('update');

  const [book, setBook] = useState({
    'autor': null,
    'banner': null,
    'cod_manga': null,
    'genero': null,
    'nome': null,
    'paginas': null,
    'preco_unit': null,
    'quantidade': null,
    'url_capa': null
  });

  const getBookRows = (array_books) => {
    console.log(books)
    return array_books.map((book) => {

      return {
        id: book.cod_manga,
        nome: book.nome,
        estoque: book.quantidade,
        preco: book.preco_unit
      };
    });
  }

  useEffect(() => {
    if (!openDialog) {
      api.getAllBooks()
        .then((response) => {
          setBooks(getBookRows(response.data.result));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [openDialog]);

  return (
    <div className='container-table'>
      <div className='search-area'>
        <AdminSearchbar />
        <ProductDialog
          setHttpMethod={setHttpMethod}
          httpMethod={httpMethod}
          open={openDialog}
          setOpen={setOpenDialog}
          book={book}
          setBook={setBook}
        />
      </div>
      <AdminTable
        setHttpMethod={setHttpMethod}
        columns={columns}
        rows={books}
        setOpenDialog={setOpenDialog}
        setBook={setBook}
      />
    </div>
  )
}


export default AdminProducts
