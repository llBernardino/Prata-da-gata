
import styled from '@emotion/styled'
import bannerprata from '../../img/bannerprata.jpg'

const background = () => `url('${ bannerprata}')`
export const Content = styled.div`
  background-color:black;
  padding-top: 100px;
`
export const BackgroundHero = styled.div`
  min-height:700px;
  width:100%;
  background: ${background};
  background-position: center;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: calc(45% + -0.0938rem) -38rem,calc(50% + -14.2062rem) 19.5625rem,0 0;
  
  @media (max-width: 1024px) {
    background-position: calc(45% + -0.0938rem) 0rem, calc(50% + -14.2062rem) 19.5625rem, 0 0;
  }
  @media (max-width: 320px) {
    background-position: calc(45% + -7.0938rem) 0rem,calc(50% + -14.2062rem) 19.5625rem,0 0;
    min-height: 500px;
  }
  
`

export const H1 = styled.h1`
  color:white;
  padding-top: 100px;
  font-family: auto;
  letter-spacing: 10px;
  font-size: 55px;
`
export const Title = styled.h3`
  margin-bottom:30px;
  font-size: 30px;
  font-weight: 700;
  color: white;
  font-family: 'Raleway';
`
export const TextHero = styled.p`
margin-bottom:30px;
font-size: 20px;
color: aliceblue;
`
export  const Container = styled.div`
  width: 100%;
  max-width:1200px;
  margin: 0 auto;

`

