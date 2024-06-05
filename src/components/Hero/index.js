import React from 'react';
import {
  Content, BackgroundHero, Container, H1, Title, TextHero
} from './style.js';
import { Box, Button, ThemeProvider } from '@mui/material';
import { theme } from '../../themes/themes.js';

const scrollToSection = (ref) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error('Reference to section is null');
  }
};

const Hero = ({ catalogRef }) => {
  return (
    <Content>
      <ThemeProvider theme={theme}>
        <BackgroundHero>
          <Container>
            <H1 className="text-center">A PRATA DA GATA</H1>
            <Box display="flex" flexWrap='wrap' gap={2} justifyContent='start'>
              <Box my={4} display='flex' alignItems='start' p={2} flexDirection='column' justifyContent='center' maxWidth={652} className='select'>
                <Title>Bem-vindo à prata da gata, onde a sofisticação encontra o brilho da prata!</Title>
                <TextHero>Nossos acessórios de prata são cuidadosamente selecionados para oferecer peças que combinam qualidade e design único. De colares deslumbrantes a anéis detalhadamente trabalhados, temos algo especial para cada ocasião.</TextHero>
                <Button id="botao" variant='contained' onClick={() => scrollToSection(catalogRef)}>CATÁLOGO</Button>
              </Box>
            </Box>
          </Container>
        </BackgroundHero>
      </ThemeProvider>
    </Content>
  );
};

export default Hero;
