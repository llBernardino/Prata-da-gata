import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagesprom } from './imgscarrousel';

export const Carrouselprom = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
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
    <Box sx={{  margin: '0 auto', textAlign:'center'}}>
      <Slider {...settings}>
        {imagesprom.map((image, index) => (
          <Box key={index} component="img" sx={{ maxWidth: '500px !important', height: 'auto' , textAlign:'center' }} src={image.imgPath} alt={`Image ${index}`} />
        ))}
      </Slider>
    </Box>
  );
};
