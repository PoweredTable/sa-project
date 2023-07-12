import React, { useState, useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import api from '../services/api';

import './Home.css'

function Home() {
  const [ banners, setBanners ] = useState([]);

  useEffect(() => {
    api.get('/api/v1/banners/all').then((response) => {
      setBanners(response.data.result);
    })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <>
      <Carousel autoHeigh={true} infiniteLoop autoPlay={true} interval={11500}
        useKeyboardArrows={true} showStatus={false} showThumbs={false} className='carousel-home'>
        {banners.map((banner, index) => (
          <div className="slide" key={index}>
            <img className='banner' src={banner.url_banner} key={index} />
          </div>
        ))}
      </Carousel>
    </>
  )
}
export default Home