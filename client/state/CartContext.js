import React, { createContext } from 'react';
import { calendarFormat } from 'moment';

const cart = [];

export const CartContext = createContext(cart);

export const AddToCartContext = createContext((item, quantity) => {
  const hasItem = cart.some(input => item.id === input.id);

  if (hasItem) {
    cart.map((cartItem, index) => {
      if (cartItem.id === item.id) {
        cart[index].quantity += quantity;
      }
    });
  } else {
    cart.push({ ...item, quantity });
  }

  console.log('test', hasItem);

  console.log('Item Added', cart);
});
