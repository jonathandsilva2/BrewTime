import React, { useState, useContext } from 'React';
import { View, Text, ScrollView } from 'react-native';
import { CartContext } from '../../state/CartContext';

const Cart = props => {
  const userCart = useContext(CartContext);
  console.log('card: ', userCart);

  if (userCart[0] == undefined) {
    return <Text>Your cart is empty</Text>;
  } else {
    return (
      <ScrollView>
        <Text>CART PAGE</Text>
        {userCart.map((item, i) => (
          <Text style={{ color: 'black' }}>{item.name}</Text>
        ))}
      </ScrollView>
    );
  }
};

export default Cart;
