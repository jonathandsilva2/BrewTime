import React, { useState, useContext } from 'React';
import { View, Text } from 'react-native';
import { CartContext } from '../../state/CartContext';

const Cart = () => {
  const userCart = useContext(CartContext);
  console.log('card: ', userCart);
  return (
    <View>
      <Text>CARD PAGE</Text>
    </View>
  );
};

export default Cart;
