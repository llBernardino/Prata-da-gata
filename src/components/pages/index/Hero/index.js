import React from 'react';
import Row from 'react-bootstrap/Row';
import logoprata from '../../img/logoprata.jpg'
import pulseiraa from '../../img/pulseiraa.jpg'
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
              <Col1 
              title={'Pulseira Bolinha'} 
              descript={'Pulseira de Prata 925.'} 
              image={logoprata} 
              value={'R$55'}
              imagem ={pulseiraa}
              linkwhats = {'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20na%20Pulseira%20de%20Bolinha.'}
              />
              <Col1 
              title={'Pulseira Bolinha'} 
              descript={'Pulseira de Prata 925.'} 
              image={logoprata} 
              value={'R$55'}
              imagem ={pulseiraa}
              linkwhats = {'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20na%20Pulseira%20de%20Bolinha.'}
              />
              <Col1 
              title={'Pulseira Bolinha'} 
              descript={'Pulseira de Prata 925.'} 
              image={logoprata} 
              value={'R$55'}
              imagem ={pulseiraa}
              linkwhats = {'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20na%20Pulseira%20de%20Bolinha.'}
              />
              <Col1 
              title={'Pulseira Bolinha'} 
              descript={'Pulseira de Prata 925.'} 
              image={logoprata} 
              value={'R$55'}
              imagem ={pulseiraa}
              linkwhats = {'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20na%20Pulseira%20de%20Bolinha.'}
              />
              <Col1 
              title={'Pulseira Bolinha'} 
              descript={'Pulseira de Prata 925.'} 
              image={logoprata} 
              value={'R$55'}
              imagem ={pulseiraa}
              linkwhats = {'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20na%20Pulseira%20de%20Bolinha.'}
              />
              <Col1 
              title={'Pulseira Bolinha'} 
              descript={'Pulseira de Prata 925.'} 
              image={logoprata} 
              value={'R$55'}
              imagem ={pulseiraa}
              linkwhats = {'https://wa.me/558599623339?text=Bom%20dia!%20Estou%20interessado(a)%20na%20Pulseira%20de%20Bolinha.'}
              />
            </Row>
          </Container>
        </BackgroundHero>
    </Content>
    
  );
}


