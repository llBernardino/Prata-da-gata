import React from 'react';
import {
  Content, BackgroundCardcart, Container, H1, Title, TextCardcart
} from './style.js';
import { Box, Button, ThemeProvider } from '@mui/material';
import { theme } from '../../themes/themes.js';

export  const Cardcart = ({}) => {
  return (
    <Content>
      <ThemeProvider theme={theme}>
        <BackgroundCardcart>
          <Container>
           <Cart>
            <Head>
                <TextCardcart>Produto</TextCardcart>
                <TextCardcart>Preço</TextCardcart>
                <TextCardcart>Quantidade</TextCardcart>
                <TextCardcart>Subtotal</TextCardcart>
            </Head>
            <Line/>
            <BodyCart>
                <Figure>
                    <ImageProduct src={image} width={40} height={40} alt='Prata'/>
                    <FigCaption>
                        <Title className='products'>{title}</Title>
                        <Descript>{descript}</Descript>
                    </FigCaption>                
                </Figure>
              <Boxtext>
                <ValueText>R$ {value},00</ValueText>
              </Boxtext>
              <Amount>
                2
              </Amount>
              <Subtotal>
                R$1.200,73
              </Subtotal>
            </BodyCart>
           </Cart>
          </Container>
        </BackgroundCardcart>
      </ThemeProvider>
    </Content>
  );
};


