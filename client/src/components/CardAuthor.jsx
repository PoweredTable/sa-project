import { useState, useEffect, useRef } from 'react'
import './Authors.css'
import Modal from 'react-modal';




function cardAuthor({ url_autor, nome }) {

    return (
        <div  className="container-card">
            <div className='hover'>
                <div className='foto'>
                    <img src={url_autor} alt="Foto do autor" className='image' />
                </div>
                <div className='descricao'>
                    <p>{nome}</p>
                </div>
            </div>
        </div>
    )
}

export default cardAuthor

