import  { useState, useEffect} from 'react';

import api from '../services/api';


function Authors() {
  const [authors,setAuthors] =useState([]);
  

  useEffect(() => {
    api.get('/api/v1/authors/all').then((response) => {
      setAuthors(response.data.result);
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);




  return (
    <section className='Container'>
      <div>
      {authors.map((author, index) => (
          <div className="card" key={index}>
            <img className='autor' src={author.url_autor} key={index}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Authors