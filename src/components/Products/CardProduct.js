import React from 'react';
import Col from 'react-bootstrap/Col';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Card, Title, Image, Figure, Caption, Image1, BackgroundPratas, Descript, ValueDescript, ValueText, PureText, Icon, Boxtext
} from './stylehomeprod.js';

export const CardProduct = ({ title, descript, image, value, imagem,onAddToCart }) => {
  return (
    <Col lg={3} md={6} sm={12} className="justify-content-center d-flex my-5">
      <Card>
          <BackgroundPratas>
            <Image1 src={imagem} alt='Prata' />
          </BackgroundPratas>
        <Caption>
          <Title className='products'>{title}</Title>
          <Descript>{descript}</Descript>
          <ValueDescript>
            <Figure>
              <Image src={image} width={40} height={40} alt='Prata' />
              <Boxtext>
                <ValueText>R$ {value},00</ValueText>
                <PureText>Prata 925.</PureText>
              </Boxtext>
            </Figure>
            <Button sx={{fontSize:'6px', display:'flex', flexDirection:'column', padding:'0px'}} variant="primary" onClick={onAddToCart}>
              <AddShoppingCartIcon sx={{margin:'3px 0px'}} onClick={onAddToCart}/>
              adcionar<br/>ao carrinho
            </Button>
          </ValueDescript>
        </Caption>
      </Card>
    </Col>
  );
};
