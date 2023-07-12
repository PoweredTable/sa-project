import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import './Books.css'
import Manga from './Manga'
import api from '../services/api';
import ViewBook from './ViewBook'

import { BooksContext } from './contexts/BooksContext';
import { useContext } from 'react';


function Books() {
  const [generos, setGeneros] = useState([])
  const { books: mangas } = useContext(BooksContext);
  let quantity = mangas.length
  
  useEffect(() => {
    api.get('/api/v1/genres/all').then((response)=>{
      setGeneros(response.data.result)

    })
    .catch((error)=>{
      console.log(error)
    });

  }, []);

  return (

    <div className='structure'>
      <div className='sideBar'>
        <h2 id='title'>Livros</h2>
        <h2 id='subTitle'>Gêneros</h2>
        <ul>
          {generos.map(genero => {
            return (<li className='list'>{genero.nome}</li>)
          })}
        </ul>
      </div>
      <div className='mangasArea'>
        <h2>Produtos encontrado:<span> {quantity}</span></h2>
        <ul>
          {mangas.map(manga => {
            return (
              <Link to={`/books/${manga.cod_manga}`}>
                <li>
                  <Manga
                    id={manga.cod_manga}
                    capa={manga.url_capa}
                    nome={manga.nome}
                    preco={manga.preco_unit}
                  />
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default Books