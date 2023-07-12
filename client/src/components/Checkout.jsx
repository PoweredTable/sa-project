import { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import { Routes, Route, Link } from "react-router-dom"
import api from '../services/api';
import './Checkout.css'
import { CheckoutContext } from './contexts/InfoCheckout';



function Checkout() {
    const [compra, setCompra] = useState([])
    const {info} = useContext(CheckoutContext)
    console.log(info)
    


    return (
        <div  >
            <section className='grid-center'>
                <article className='detalhesItem'>
                    <div className='headerIcon'>
                        <div className='icon'>
                            <img src='/src/components/assets/prancheta.png' alt="" />
                        </div>
                    </div>
                    <h3>Informações do pedido</h3>
                    <p><strong>Manga:</strong> {info?.nome}</p>
                    <p><strong>Preço Unitario R$</strong> {info?.preco_unit} </p>
                    <p> <strong>Quantidade</strong> {info?.quantidade}</p>
                    <p> <strong>Preço Total R$ </strong> {info?.preco_total}</p>
                </article>
                <article className='endereco'>
                    <div className='icon'>
                        <img src='/src/components/assets/botao-de-inicio.png' alt="" />
                    </div>

                    <input type="text" placeholder='CEP' />
                    <input type="text" placeholder='Numero' />
                    <input type="text" placeholder='Complemento' />
                    <input type="text" placeholder='Destinatario' />
                </article>
                <article className='formaPagamento'>
                    <div className='icon'>
                        <img src='/src/components/assets/cartao-de-credito.png' alt="" />
                    </div>

                    <h3>Selecione a forma de pagamento</h3>

                    <Link to={'/checkout/payment-method/pix'}><button>PIX</button></Link>
                    <Link to={'/checkout/payment-method/boleto'}><button>Boleto</button></Link>
                    <Link to={'/checkout/payment-method/credito'}><button>Credito</button></Link>

                </article>

            </section>
        </div>
    )
}

export default Checkout