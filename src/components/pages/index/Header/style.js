
import styled from '@emotion/styled'
export const Content = styled.div`
  background-color:black;
`

export const Header = styled.header`
  background: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
`
export  const Container = styled.div`
  width: 100%;
  max-width:1200px;
  margin: 0 auto;

`
export const Image = styled.img`
  margin:0px auto;
`
export const Figure = styled.figure`
  text-align:start;
  margin:0px;
  display:flex;
  width: 100%;
  max-width: 200px;

  @media (max-width:760px) {
    max-width: none;
  }
`
export const Nav = styled.nav`
  width: 100%;
  max-width: 200px;
  display:flex;
  justify-content: space-around;
`
export const Boxheader = styled.div`
  height: 100px;
`
export const Link = styled.a`
 
` 
export const Form = styled.form`
  width: 100%;
  max-width: 500px

  @media (max-width:760px) {
    max-width: none;
  }

`
export const Input = styled.input`

  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;

  &:focus{
    border: 1px solid #000000;
    transition: 0.35s ease;
    color: #000000;
    &::-webkit-input-placeholder{
      transition: opacity 0.45s ease; 
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 0.45s ease; 
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 0.45s ease; 
      opacity: 0;
    }    
  }
`