import React, { useRef } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Products} from './components/Products/index.js';
import {Headerr} from './components/Header/header.js';
import{Hero} from './components/Hero/index.js';
import {Carrouselprom} from './carrousels/carrouselprom.js'
import {Carrouselproducts} from './carrousels/carrouselproducts.js'

export const AppF = () => {
  const catalogRef = useRef(null);
  return (
    <>
      <Headerr/>
      <Hero catalogRef={catalogRef}/>
      <Carrouselprom/>
      <Carrouselproducts/>
      <Products ref={catalogRef} />
    </>
  );
};
