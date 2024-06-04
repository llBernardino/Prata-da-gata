import React from 'react';
import Col from 'react-bootstrap/Col';
import pontos from '../../img/3pontos.png';
import {
  Card, Title, Image, Figure, Caption, Image1, BackgroundPratas, Descript, ValueDescript, ValueText, PureText, Icon, Iconpoints, Boxtext
} from './style.js';
import { Box } from '@mui/material';

export const Cardproducts = (props) => {
  return (
    <Box sx={{ }}>
      <Card>
        <a href={props.linkwhats} target="_blank" rel="noopener noreferrer">
          <Figure>
            <Image1 src={props.imagem} alt='React' />
          </Figure>
        </a>
        <Caption>
          <Title className='products'>{props.title}</Title>
          <Descript>{props.descript}</Descript>
          <ValueDescript>
            <Box sx={{  display:'flex' ,}}>
              <Figure>
                <Image src={props.image} width={40} height={40} />
              </Figure>
                <Boxtext>
                  <ValueText>{props.value}</ValueText>
                  <PureText>Prata 925.</PureText>
                </Boxtext>
            </Box>
            <Icon>
              <Iconpoints src={pontos} />
            </Icon>
          </ValueDescript>
        </Caption>
      </Card>
    </Box>
  );
};
