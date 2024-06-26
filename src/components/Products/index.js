import React, { useState, useEffect, forwardRef, useContext } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import { Content, Backgroundproducts, Container, H1, Title2 } from './stylehomeprod.js';
import { CardProduct } from './CardProduct.js';
import { Box } from '@mui/material';
import { SearchBar } from '../../Search/searchbar.js';
import stringSimilarity from 'string-similarity';
import { CartContext } from '../../context/CartContext'; // Certifique-se de importar seu contexto de carrinho

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const Products = forwardRef((props, ref) => {
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

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

  const handleSearch = (value) => {
    setSearchInput(value.toLowerCase());
  };

  const directMatches = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput)
  );

  const similarMatches = products.filter((product) =>
    !directMatches.includes(product) &&
    stringSimilarity.compareTwoStrings(product.title.toLowerCase(), searchInput) > 0.3
  );

  const combinedProducts = [...directMatches, ...similarMatches];

  return (
    <Content>
      <Backgroundproducts ref={ref}>
        <Container>
          <H1 className="text-center">NOVIDADES! COMPRE JÁ:</H1>
          <Box sx={{ maxWidth: 800, width: '100%', padding: '0px 20px' }}>
            <SearchBar onSearch={handleSearch} />
          </Box>
          <Row className="justify-content-center d-flex w-100">
            {combinedProducts.length > 0 ? (
              combinedProducts.map((product) => (
                <CardProduct
                  key={product.id} // Certifique-se de que cada produto tenha um id único
                  title={product.title}
                  descript={product.descript}
                  image={`${BASE_URL}${product.image}`}
                  value={product.value}
                  imagem={`${BASE_URL}${product.imagem}`}
                  onAddToCart={() => addToCart(product)} // Passar a função onAddToCart como prop
                />
              ))
            ) : (
              <Box display="flex" justifyContent="center" alignItems={'center'} sx={{ padding: '50px', minHeight: 400 }}>
                <Box>
                  <Title2>Esse produto ainda não se encontra em nossa loja.</Title2>
                </Box>
              </Box>
            )}
          </Row>
        </Container>
      </Backgroundproducts>
    </Content>
  );
});
