import React, { createContext } from 'react';
import { calendarFormat } from 'moment';

const cart = {};

export const CartContext = createContext(cart);

export const AddToCartContext = createContext((item, quantity) => {
  console.log('Item Added');
  if (cart[item.id]) {
    cart[item.id].quantity += quantity;
    console.log(
      'new Quantity of ',
      cart[item.id].name,
      'is ',
      cart[item.id].quantity,
    );
  } else {
    cart[item.id] = { ...item, quantity };
    console.log('Item Removed');
    console.log(
      'new Quantity of ',
      cart[item.id].name,
      'is ',
      cart[item.id].quantity,
    );
  }
  // const hasItem = cart.some(input => item.id === input.id);

  // if (hasItem) {
  //   cart.map((cartItem, index) => {
  //     if (cartItem.id === item.id) {
  //       cart[index].quantity += quantity;
  //     }
  //   });
  // } else {
  //   cart.push({ ...item, quantity });
  // }

  // console.log('test', hasItem);

  console.log('Item Added', cart);
});

export const RemoveFromCartContext = createContext((item, quantity) => {
  if (!cart[item.id]) {
    console.log('No item of this kind in cart');
  } else if (cart[item.id].quantity > 0 && cart[item.id].quantity !== 1) {
    cart[item.id].quantity -= quantity;
    console.log(
      'new Quantity of ',
      cart[item.id].name,
      'is ',
      cart[item.id].quantity,
    );
  } else if (cart[item.id].quantity == 1) {
    console.log('Item: ', cart[item.id].name, ' has been removed');
    delete cart[item.id];
    console.log(cart);
  }
});

// <TouchableOpacity
//             title="add to cart"
//             onPress={() => removeFromCart(product, 1)}
//             style={styles.button}
//           ></TouchableOpacity>

export const addOne = item => {
  cart[item.id].quantity++;
  console.log('Adding one ', [cart[item.id].quantity]);
  console.log(item);
};

export const subtractOne = item => {
  cart[item.id].quantity--;
  console.log('Substracting one ', [cart[item.id].quantity]);
  console.log(item);
};
