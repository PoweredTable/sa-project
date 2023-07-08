import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import './Books.css'
import Manga from './Manga'
import api from '../services/api';
import ViewBook from './ViewBook'

import { MangaData } from './MangaData'

function Books() {
  const [generos, setGeneros] = useState([])
  const [mangas, setMangas] = useState([])

  useEffect(() => {
    api.get('/api/v1/books/all').then((response) => {
      setMangas(response.data.result);
    })
    .catch((error) => {
      console.log(error)
    });

    api.get('/api/v1/genres/all').then((response)=>{
      setGeneros(response.data.result)
      console.log(generos)
    })
    .catch((error)=>{
      console.log(error)
    });

  }, []);

  let quantity = mangas.length
  return (

    <div className='structure'>
      {/* <Routes>
        <Route path='/:id' element={<ViewBook />}> </Route>
      </Routes> */}
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
        <h2>Produtos encontrado:<span>{quantity}</span></h2>
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