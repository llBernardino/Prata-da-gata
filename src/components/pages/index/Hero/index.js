import React from 'react';
import Row from 'react-bootstrap/Row';
import logoprata from '../../img/logoprata.jpg'
import {
 Content,BackgroundHero, Container, H1,
} from './style.js'
import {
  Col1
 } from './col1.js'
export const Hero = () => {

  return (
    <Content>
      <BackgroundHero>
          <Container>
            <H1 className="text-center">NOVIDADES! COMPRE JÁ:</H1>
            <Row className="justify-content-center d-flex w-100">
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
              <Col1 title={'Pulseira Bolinha'} 
              descript={'Lorem ipsum dolor sit amet ons ec tetur adip iscing elit...'} 
              image={logoprata} 
              value={'R$55'}/>
            </Row>
          </Container>
        </BackgroundHero>
    </Content>
    
  );
}


