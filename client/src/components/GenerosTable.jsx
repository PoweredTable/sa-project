import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './GenerosTable.css'

import { BooksContext } from './contexts/BooksContext';
import { useContext } from 'react';

const GenerosTable = ({ livros }) => {
  // const generos = ['Ação', 'Adulto', 'Artes Marciais', 'Aventura', 'Bizarro', 'Comédia', 'Comida', 'Culinária', 'Demônios', 'Distopia', 'Doujinshi', 'Drama', 'Ecchi', 'Esporte', 'Fantasia', 'Física', 'Guerra', 'Harém', 'Histórico', 'Homenagem', 'Horror', 'Isekai', 'Jogos', 'Josei', 'Kamen Rider', 'Magia', 'Mecha', 'Médico', 'Medieval', 'Memorial', 'Mistério', 'Mitologia', 'Ninja', 'Non-sense', 'Novel', 'Obra Nacional', 'One Shot', 'Psicológico', 'Regressão', 'Romance', 'Sci-fi', 'Seinen', 'Shoujo', 'Shounen', 'Slice of Life', 'Sobrenatural', 'Sobrevivência', 'Suspense', 'Tokusatsu', 'Torre', 'Tragédia', 'Vampiro', 'Vida Escolar', 'Wuxia', 'Yaoi', 'Yuri'];
  const [generos, setGeneros] = useState([]);
  const {setBooks} = useContext(BooksContext)

  const searchBookByGenre = (id) => {
    
    api.get(`/api/v1/books/genres/${id}`).then(({ data }) => {
      setBooks(data.result);
      console.log(data.result)
    })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    api.get('/api/v1/genres/all').then(({ data }) => {
      setGeneros(data.result)
    })
      .catch((error) => {
        console.log(error)
      });


  }, []);


  const renderTableRows = () => {
    const tableRows = [];
    let tableRow = [];

    generos.forEach((genero, index) => {
      tableRow.push(
        <td key={index}>
          <Link to='/books' id='itenList'>
            <p  className='textTable' onClick={() => searchBookByGenre(genero?.cod_genero)}>{genero?.nome}</p>
          </Link>
        </td>
      );
      if ((index + 1) % 5 === 0 || index === generos.length - 1) {
        tableRows.push(
          <tr key={index}>{tableRow}</tr>
        );
        tableRow = [];
      }
    });

    return tableRows;
  };

  return (
    <div>
      <table cellSpacing="6" >
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
};

export default GenerosTable;