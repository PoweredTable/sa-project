import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Routes, Route, Link } from "react-router-dom"
import './all.css'


function boleto() {

    return (
        <div className='caixa'>
        <div className='caixinha'>
            <div className='boleto'>
                <img className='pega' src="https://1.bp.blogspot.com/-scgadwZ4RDI/XoSif9g1ZdI/AAAAAAADFyo/vfg33DGAzPQidEwEtHG499FwQZbdiS7xACEwYBhgLKs4DAMBZVoBzgVbE0lMJw7ig2LJTt_C-YuFitdIarh-e6ySj_fDwVlrLSIPljj4jzhQ5yD8GUk6FQ40Pctiv1R1DdHaPUyFI07UKG27keEL79FQ23vMnXjMgXsL0PXqkVMOuFP4Jjp-_6SaQUKQhU19L5iNE_OPFLscg8N8MLiPtIa1Hq_Y6D8zMxP2_zklYwxg5WJHUx_JHuICQv4XKzEiFGqgNbXfwxMzqHADBLseryEp5_4H0hA7gXsS2kzlPGtjxV5s1A2s34iiNWjNXsPHzo3wW3NNjsQ3XOFdELGcwbTx-SWyCUEIcAZb5lCf7NqbPN9fXjrCQ0MB0H455SqyvTA0KkzWkFX0ZK3A_gakdjrIyfKzWjspAiSSpnNaBmmGOlmx0rxarcH-v4LxKLrvAeoxcJAAzs8TTR8Yoo2ngA-SZY4cpy2AVLQ_B7ppce9JzgRm0Hk4awZN_jKr9LmjqG02gVgK1DW3yruorCDuIwVJqKu4XQy_lvBVghsu4XdTPoMPjbl_9ckMeTw1mdhAGnvi-rQpd_CQzamEaxFsMqNq3sguHihUuOiG36Trs4f8iMmk_z6L-PH38viAlHICrdYnSfYAxOWjMNYyi_027MPXNkvQF/s1600/Boleto%2BBancario%2B-%2BPadrao%2BBanco%2Bdo%2BBrasil%2B2.png" alt="" />
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

export default boleto