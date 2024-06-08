// src/components/Cart.js
import React from 'react';

export const Cart = ({ cartItems, removeFromCart, closeCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      <button onClick={closeCart}>Fechar Carrinho</button>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <p>R${item.value}</p>
              <button onClick={() => removeFromCart(item.title)}>Remover</button>
            </div>
          ))}
          <h3>Total: R${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

