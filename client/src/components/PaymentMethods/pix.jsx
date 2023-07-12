import { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import { Routes, Route, Link } from "react-router-dom"
import { CheckoutContext } from '../contexts/InfoCheckout';
import api from '../../services/api';
import './all.css'

function pix() {
    
    const [manga, setManga] = useState()
    const [mangaNew, setMangaNew] = useState([])
    const {setInfo, info } = useContext(CheckoutContext)
    const [valor, setValor] = useState(0)
    const finalizarCompra = async () => {
        try {
            
            await api.updateBookColumnById(info.id, valor)
            console.log("minha pika")

            
        }catch (error) {
        console.log(error);
    } 
    } 

    useEffect(() => {
        
            api.get(`/api/v1/books/${info.id}`).then(({data})=>{
                setManga(data.result[0])
                console.log(data.result[0])
              })
              .catch((error)=>{
                console.log(error)
              });

            //   setMangaNew(...manga, manga.quantidade = valor)
            //   console.log(mangaNew)

    }, []);

    useEffect(() => {
        const quantity = () => {
          if (manga) {
            let valorCorreto = parseFloat(manga?.quantidade) - info?.quantidade;
            setValor(valorCorreto)
            console.log(valorCorreto);
          }
        };
      
        if (manga) {
          quantity();
        }
      }, [manga, info]);


    return (
        <div className='caixa'>
            <div className='caixinha'>
                <div className='QR'>
                    <img className='method' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png' alt="" />
                </div>
            </div>
            <div className='finish'>
              <Link to = '/'>
                <button onClick={finalizarCompra}>
                Finalizar compra
                </button>
                </Link>
            </div>
        </div>

    )



}

export default pix