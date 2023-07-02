import React, { useState, useEffect, useRef } from 'react'
import './Books.css'
import Manga from './Manga'



function Books() {
  const [generos, setGeneros] = useState(['Ação', 'Adulto', 'Artes Marciais', 'Aventura', 'Bizarro', 'Comédia', 'Comida', 'Culinária', 'Demônios', 'Distopia', 'Doujinshi', 'Drama', 'Ecchi', 'Esporte', 'Fantasia', 'Física', 'Guerra', 'Harém', 'Histórico', 'Homenagem', 'Horror', 'Isekai', 'Jogos', 'Josei', 'Magia', 'Mecha', 'Médico', 'Medieval', 'Mistério', 'Mitologia', 'Ninja', 'Non-sense', 'Novel', 'Obra Nacional', 'One Shot', 'Psicológico', 'Reencarnação', 'Regressão', 'Romance', 'Sci-fi', 'Seinen', 'Shoujo', 'Shounen', 'Slice of Life', 'Sobrenatural', 'Sobrevivência', 'Suspense', 'Tokusatsu', 'Torre', 'Tragédia', 'Vampiro', 'Vida Escolar', 'Wuxia', 'Yaoi', 'Yuri'])
  const [mangas, setManga] = useState([])
    const manga1 = {
        capa: "https://www.otakupt.com/wp-content/uploads/2017/08/m1.jpg",
        nome: "Mushoku tensei",
        preco: "R$150"
    }
    const manga2 = {
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rBekuZQsuDISmPyTD_DReMitM5_9ukkMtg&usqp=CAU",
        nome: "Bleach",
        preco: "R$150"
    }
    const manga3 = {
        capa: "https://1.bp.blogspot.com/-26ZwQE6Qt0I/YHpRDJSpHYI/AAAAAAAAhuY/Tzax63E-nngw88QB9lj5M08N9MRwhPVTgCLcBGAsYHQ/s2048/QFDQ.png",
        nome: "Kaiju nº8",
        preco: "R$150"
    }

    for (let i = 0; i < 4; i++) {
        mangas.push(manga1)
        mangas.push(manga2)
        mangas.push(manga3)
    }
    let quantity = mangas.length
  return (
    <div className='structure'>
      <div className='sideBar'>
        <h2 id='title'>Livros</h2>
        <h2 id='subTitle'>Gêneros</h2>
        <ul>
          {generos.map(genero =>{
            return (<li className='list'>{genero}</li>)
          })}
        </ul>
      </div>
      <div className='mangasArea'>
        <h2>Produtos encontrado:<span>{quantity}</span></h2>
        <ul>
        {mangas.map(manga =>{
          return (<li><Manga capa={manga.capa} nome={manga.nome} preco={manga.preco} /></li>)
        })}
        </ul>
      </div>
    </div>
  )
}
export default Books