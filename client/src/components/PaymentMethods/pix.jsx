import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Routes, Route, Link } from "react-router-dom"
import './all.css'

function pix() {


    return (
        <div className='caixa'>
            <div className='caixinha'>
                <div className='QR'>
                    <img className='method' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png' alt="" />
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

export default pix