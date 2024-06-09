import React from 'react';
import Col from 'react-bootstrap/Col';
import pontos from '../../img/3pontoswhite.png';
import {
  Card, Title, Image, Figure, Caption, Image1, BackgroundPratas, Descript, ValueDescript, ValueText, PureText, Icon, Iconpoints, Boxtext
} from './stylehomeprod.js';

export const CardProduct = (props) => {
  return (
    <Col lg={3} md={6} sm={12} className="justify-content-center d-flex my-5">
      <Card>
        <a href={props.linkwhats} target="_blank" rel="noopener noreferrer">
          <BackgroundPratas>
            <Image1 src={props.imagem} alt='Prata' />
          </BackgroundPratas>
        </a>
        <Caption>
          <Title className='products'>{props.title}</Title>
          <Descript>{props.descript}</Descript>
          <ValueDescript>
            <Figure>
              <Image src={props.image} width={40} height={40} alt='Prata' />
              <Boxtext>
                <ValueText>R$ {props.value},00</ValueText>
                <PureText>Prata 925.</PureText>
              </Boxtext>
            </Figure>
            <Icon>
              <Iconpoints src={pontos} />
            </Icon>
          </ValueDescript>
        </Caption>
      </Card>
    </Col>
  );
};
