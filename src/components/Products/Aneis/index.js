import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import { Content, Backgroundproducts, Container, H1, Title2 } from '../stylehomeprod.js';
import { CardProduct } from '../CardProduct.js'; 
import { Box } from '@mui/material';
import { SearchBar } from '../../../Search/searchbar.js';
import stringSimilarity from 'string-similarity';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const Aneis = forwardRef((props, ref) => {
  const [searchInput, setSearchInput] = useState('');
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
  
  const handleSearch = (value) => {
    setSearchInput(value.toLowerCase());
  };

  // Filtrar produtos do tipo 'anel'
  const anelProducts = products.filter(product => product.type.toLowerCase() === 'anel');

  // Filtrar produtos que correspondem diretamente ao termo de busca
  const directMatches = anelProducts.filter((product) =>
    product.title.toLowerCase().includes(searchInput)
  );

  // Filtrar produtos que têm uma similaridade com o termo de busca
  const similarMatches = anelProducts.filter((product) =>
    !directMatches.includes(product) &&
    stringSimilarity.compareTwoStrings(product.title.toLowerCase(), searchInput) > 0.3
  );

  // Combinar ambos os arrays, com directMatches primeiro
  const combinedProducts = [...directMatches, ...similarMatches];

  return (
    <Content className='mt-5 pt-5'>
      <Backgroundproducts ref={ref}>
        <Container>
          <H1 className="text-center">NOVIDADES! COMPRE JÁ - Anéis:</H1>
          <Box sx={{ maxWidth: 800, width: '100%', padding: '0px 20px' }}>
            <SearchBar onSearch={handleSearch} /> {/* Adicione a barra de pesquisa */}
          </Box>
          <Row className="justify-content-center d-flex w-100">
            {combinedProducts.length > 0 ? (
              combinedProducts.map((product, index) => (
                <CardProduct
                  key={index}
                  className="justify-content-center d-flex w-100 products"
                  title={product.title}
                  descript={product.descript}
                  image={`${BASE_URL}${product.image}`}
                  value={product.value}
                  imagem={`${BASE_URL}${product.imagem}`}
                  linkwhats={product.linkwhats}
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
