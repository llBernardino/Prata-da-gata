import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Content, Backgroundproducts, Container, H1,Title2 } from './style.js';
import { Col1 } from './col1.js';
import {Box} from '@mui/material';
import {SearchBar} from '../../Search/searchbar.js';
import { products } from '../../productsdata/productsData.js';// Importa os dados dos produtos
import stringSimilarity from 'string-similarity'; 

export const Products = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (value) => {
    setSearchInput(value.toLowerCase());
  };

  // Filtrar produtos que correspondem diretamente ao termo de busca
  const directMatches = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput)
  );

  // Filtrar produtos que têm uma similaridade com o termo de busca
  const similarMatches = products.filter((product) =>
    !directMatches.includes(product) &&
    stringSimilarity.compareTwoStrings(product.title.toLowerCase(), searchInput) > 0.3
  );

  // Combinar ambos os arrays, com directMatches primeiro
  const combinedProducts = [...directMatches, ...similarMatches];

  return (
    <Content>
      <Backgroundproducts>
        <Container>
          <H1 className="text-center">NOVIDADES! COMPRE JÁ:</H1>
          <Box sx={{maxWidth:800, width:'100%', padding:'0px 20px'}}>
            <SearchBar onSearch={handleSearch} /> {/* Adicione a barra de pesquisa */}
          </Box>
          <Row className="justify-content-center d-flex w-100">
            {combinedProducts.length > 0 ? (
              combinedProducts.map((product, index) => (
                <Col1
                  key={index}
                  className="justify-content-center d-flex w-100 products"
                  title={product.title}
                  descript={product.descript}
                  image={product.image}
                  value={product.value}
                  imagem={product.imagem}
                  linkwhats={product.linkwhats}
                />
              ))
            ) : (
              <Box display="flex" justifyContent='center' alignItems={'center'} sx={{ padding:'50px', minHeight:400 }}>
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
};
