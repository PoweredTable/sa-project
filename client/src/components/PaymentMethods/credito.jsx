import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Routes, Route, Link } from "react-router-dom"

import './all.css'

function credito() {



    return (
        <div className='caixa'>
            <div className='caixinha'>
                <div className='credito'>
                    <h3>Insira as informações do cartão</h3>
                    <input type="text" placeholder='Nome do titular' />
                    <input type="text" placeholder='Numero do cartão'/>
                    <input type="text" placeholder='Data de vencimento'/>
                </div>
            </div>
            <div className='finish'>
                <button>
                    Finalizar compra
                </button>
            </div>
        </div>


    )

}

export default credito
