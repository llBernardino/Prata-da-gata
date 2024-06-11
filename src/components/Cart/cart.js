// src/components/Cart/cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CardProduct } from '../Products/CardProduct';

import Row from 'react-bootstrap/Row';
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
 
  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          <Row className="justify-content-center d-flex w-100">
            {cartItems.map((product) => (
              <CardProduct
              key={product.id} // Certifique-se de que cada produto tenha um id único
              title={product.title}
              descript={product.descript}
              image={`${BASE_URL}${product.image}`}
              value={product.value}
              imagem={`${BASE_URL}${product.imagem}`}
              
              />
            ))}
          </Row>
        </ul>
      )}
    </div>
  );
};
