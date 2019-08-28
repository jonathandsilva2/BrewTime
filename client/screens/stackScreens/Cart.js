import React, { useState, useContext } from 'React';
import { View, Text, ScrollView } from 'react-native';
import { CartContext } from '../../state/CartContext';

const Cart = props => {
  const userCart = useContext(CartContext);
  console.log('CART: ', Object.values(userCart));
  console.log('cartContext ', userCart);
  if (
    Object.entries(userCart) === undefined || //find cleaner method
    Object.entries(userCart).length == 0
  ) {
    return <Text>Your cart is empty</Text>;
  } else {
    return (
      <ScrollView>
        <Text>CART PAGE</Text>
        {Object.values(userCart).map((input, index) => {
          return (
            <Text key={{ index }}>
              {input.name} {input.quantity}
            </Text>
          );
        })}
      </ScrollView>
    );
  }
};

export default Cart;
