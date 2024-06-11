import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardProductsCarrousel } from '../components/Cards/cardcarrousel';
import { CartContext } from '../context/CartContext';
const BASE_URL = process.env.REACT_APP_BACKEND_URL;


export const Carrouselproducts = () => {
  const { addToCart } = useContext(CartContext);
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

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
    <Box sx={{  margin: '90px auto ', textAlign:'center', maxWidth:1400 ,padding:'30px 0px'}}>
      <Slider {...settings}>
        {products.map((product, index) => (
          <Box sx={{ margin: '0px auto ', maxWidth:220 }}>
            <CardProductsCarrousel
              key={index}
              title={product.title}
              descript={product.descript}
              image={`${BASE_URL}${product.image}`}
              value={product.value}
              imagem={`${BASE_URL}${product.imagem}`}
              onAddToCart={() => addToCart(product)}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
