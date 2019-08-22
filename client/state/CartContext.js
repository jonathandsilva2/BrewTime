import React, { createContext } from 'react';

const cart = [];

export const CartContext = createContext(cart);

export const AddToCartContext = createContext(item => {
  cart.push(item);
  console.log('Item Added', cart);
});
