import { useState, useEffect, useRef } from 'react'
import './Manga.css'

function Manga({ capa, nome, preco }) {

    return (

        <div className="container">
            <div className='hover'>
                <div className='mangas'>
                    <img src={capa} alt="capa do Manga" width='250px' height='400' className='image' />
                </div>
                <div className='descricao'>
                    <p>{nome}</p>
                    <p>{preco}</p>
                </div>
            </div>
        </div>
    )
}

export default Manga