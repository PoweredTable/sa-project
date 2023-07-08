import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import './Manga.css'

function Manga({ id, capa, nome, preco }) {

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