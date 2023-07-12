
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import api from '../services/api';
import './Authors.css'
import CardAuthor from './CardAuthor.jsx'

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [count, setCount] = useState(0);
  const [indiceSelecionado, setIndiceSelecionado] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);



  useEffect(() => {
    api.get('/api/v1/authors/all').then((response) => {
      setAuthors(response.data.result);
      setCount(authors.length)
      console.log(authors.length)
    })
      .catch((error) => {
        console.log(error)
      });
  }, []);


  function abrirModal(index) {
    setIsOpen(true);
    setIndiceSelecionado(index);
  }
  function fecharModal() {
    setIsOpen(false);
  }
  return (


    <div className='container-authors'> 
      
      
      <div className='container-autor'>
        {authors.map((autor, index) => (
          <div key={index} onClick={() => abrirModal(index)}><CardAuthor key={index}{...autor} /></div>
        ))}
      </div>



      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
        className="modal"
        overlayClassName="modal-overlay"

      >

        <section className='titleModal'>
          <h2>
            {authors[indiceSelecionado]?.nome}
            <span>
              {authors[indiceSelecionado]?.pais}
            </span>
          </h2>
        </section>
        <article className='bodyModal'>
          <img  className='iconAuthor' src={authors[indiceSelecionado]?.url_autor} alt="" />
          <div className='bibliografia'>
          {authors[indiceSelecionado]?.bibliografia}
          </div>
        </article>


      </Modal>

    </div>

  )
}

export default Authors