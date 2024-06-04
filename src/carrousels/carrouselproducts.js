import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Row from 'react-bootstrap/Row';
import { products } from '../productsdata/productsData.js';
import { Cardproducts } from '../components/Cards/cardcarrousel';
export const Carrouselproducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{  margin: '90px auto ', textAlign:'center', maxWidth:1400}}>
      <Slider {...settings}>
        {products.map((product, index) => (
          <Box sx={{ margin: '0px auto ', maxWidth:220 }}>
            <Cardproducts 
              key={index}
              title={product.title}
              descript={product.descript}
              image={product.image}
              value={product.value}
              imagem={product.imagem}
              linkwhats={product.linkwhats}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};