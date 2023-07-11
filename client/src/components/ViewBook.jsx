import React, { useState, useEffect } from 'react'
import './ViewBook.css'
import { useParams } from 'react-router-dom';
import api from '../services/api';


function ViewBook() {

  const [manga, setManga] = useState()
  const [genero, setGenero] = useState()
  const [author, setAuthor] = useState()
  const { id } = useParams();
  const [banners, setBanners] = useState([])
  const [number, setNumber] = useState(0)
  const [total, setTotal] = useState(0)

  const banner = banners.find((banner) => banner.cod_banner === manga?.banner)

  const plusNumber = () => {
    if (number < manga.quantidade) {
      setNumber(number + 1)
      totalVariable = manga?.preco_unit * number
      setTotal(totalVariable)
    }

  }

  const minusNumber = () => {
    if (number > 0) {
      setNumber(number - 1)
      totalVariable = manga.preco_unit * number
      setTotal(totalVariable)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mangaResponse = await api.get(`/api/v1/books/${id}`);
        const mangaData = mangaResponse.data.result[0];
        setManga(mangaData);

        const idGenero = parseInt(mangaData.genero);
        const generoResponse = await api.get(`/api/v1/genres/${idGenero}`);
        const generoData = generoResponse.data.result[0];
        setGenero(generoData);

        const idAuthor = parseInt(mangaData.autor);
        const authorResponse = await api.get(`/api/v1/authors/${idAuthor}`);
        const authorData = authorResponse.data.result[0];
        setAuthor(authorData);

        const idBanner = parseInt(mangaData.banner);
        const bannerResponse = await api.get(`/api/v1/banners/all`);
        const bannerData = bannerResponse.data.result;
        setBanners(bannerData);

        console.log(mangaData);
        console.log(generoData);
        console.log(authorData)
        console.log(bannerData)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, [id]);


  // style={{ backgroundImage: `url(${banner?.url_banner})` }}

  return (
    <div className='mangaArea1' id='backImg' style={{ backgroundImage: `url(${banner?.url_banner})` }}>

      {manga && (
        <div className='mangaMidle'>
          <div className='mangaImage'>
            <img src={manga?.url_capa} alt='capa manga' className='imgManga' />
          </div>
          <div className='infoManga'>
            <p id='titleName'>{manga.nome}</p>
            <p id='subTitleGenero'>{genero?.nome}</p>
            <p>{author?.nome}</p>
            <hr />
            <p>Preço: {manga.preco_unit}</p>
            <p>Total: R$<span>{total}</span></p>
            <div className='buttonsArea'>
              <div className='quantityArea'>
                <button onClick={minusNumber}><strong>-</strong></button>
                <p id='number'><strong>{number}</strong></p>
                <button><strong onClick={plusNumber}>+</strong></button>
              </div>
              <button id='buyButton'><strong>Comprar</strong></button>
            </div>
            <hr />
            <div className='mangaInformations'>
              <p><b>Informações:</b></p>
              <p><b>Editora:</b> <span>LEW Comics</span></p>
              <p><b>Sinopse:</b> <span>{manga.sinopse}</span></p>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
export default ViewBook