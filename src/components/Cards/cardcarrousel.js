import React from 'react';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Card, Title, Image, Figure, Caption, Image1, BackgroundPratas, Descript, ValueDescript, ValueText, PureText, Icon, Iconpoints, Boxtext
} from './style.js';
import { Box } from '@mui/material';

export const CardProductsCarrousel = ({ title, descript, image, value, imagem, linkwhats, onAddToCart }) => {
  return (
    <Box sx={{ }}>
      <Card>
        <a href={linkwhats} target="_blank" rel="noopener noreferrer">
          <Figure>
            <Image1 src={imagem} alt='React' />
          </Figure>
        </a>
        <Caption>
          <Title className='products'>{title}</Title>
          <Descript>{descript}</Descript>
          <ValueDescript>
            <Box sx={{  display:'flex' ,}}>
              <Figure>
                <Image src={image} width={40} height={40} />
              </Figure>
                <Boxtext>
                  <ValueText>R$ {value},00</ValueText>
                  <PureText>Prata 925.</PureText>
                </Boxtext>
            </Box>
            <Button sx={{fontSize:'6px', display:'flex', flexDirection:'column', padding:'0px', fontWeight:'bold'}} variant="primary" onClick={onAddToCart}>
              <AddShoppingCartIcon sx={{margin:'3px 0px'}} onClick={onAddToCart}/>
              adcionar<br/>ao carrinho
            </Button>
          </ValueDescript>
        </Caption>
      </Card>
    </Box>
  );
};
