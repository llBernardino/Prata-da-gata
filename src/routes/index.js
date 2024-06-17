import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {Products } from '../components/Products/index'
import { AppF } from '../page.js';
import { Pulseiras } from '../components/Products/Pulseiras/index.js';
import { Aneis } from '../components/Products/Aneis/index.js';
import { Brincos } from '../components/Products/Brinco/index.js';
import { Colares } from '../components/Products/Colar/index.js';
import { Cart } from '../components/Cart/cart.js';
export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<AppF/>}/>
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      <Route path="/Home" element={<AppF/>} />
      <Route path="/Produtos" element={<Products/>} />
      <Route path="/Pulseiras" element={< Pulseiras/>} />
      <Route path="/Anéis" element={<Aneis/>} />
      <Route path="/Brincos" element={<Brincos/>} />
      <Route path="/Colares" element={<Colares/>} />
      <Route path="/cart" element={<Cart />} /> 
      {/* <Route path="/Conjuntos" element={<Conjuntos/>} />
      <Route path="/Coleções" element={<Coleçoes/>} />
      <Route path="/Contato" element={<Contato/>} /> */}
    </Routes>
  );
};
