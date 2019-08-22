import React, { useState, useContext } from 'React';
import { View, Button, Image, StyleSheet } from 'react-native';
import { CartContext, AddToCartContext } from '../../state/CartContext';

const styles = StyleSheet.create({
  newStyle: {
    backgroundColor: 'red',
    width: 300,
    height: 500,
    borderWidth: 1,
  },
});

export default function Product(props) {
  const product = props.navigation.state.params;

  const addToCart = useContext(AddToCartContext);

  return (
    <View>
      <Image
        resizeMode="center"
        style={{ width: 300, height: 500 }}
        source={{ uri: product.images[0].uri }}
      />
      <Button title="add to card" onPress={() => addToCart(product)} />
    </View>
  );
}
