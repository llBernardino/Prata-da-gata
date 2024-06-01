
import logoprata from '../../img/logoprata.jpg'
import {
 Content,Header,Figure,Image,Container,Form,Input,Link,Nav,
} from './style.js'
import './style.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, } from 'reactstrap';
import React, { useState } from 'react';
export const SHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Content>
      <Header className='p-2'>
        <Container>
          <Navbar color="light" light expand="md" className="d-flex justify-content-between align-items-center ">
            <NavbarBrand href="/">
              <Figure>
                <Image src = {logoprata} width={60} height={60}/>
              </Figure>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className='justify-content-around mobal'>
              <Form>
                <Input type="text" placeholder='Pesquisar'/>
              </Form>
              <Nav className="mr-auto" navbar>
                <Nav>
                  <Link href='/home'>Contato</Link>
                  <Link href='/sobre'>Favoritos</Link>
                </Nav>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </Header>
    </Content>
    
  );
}


