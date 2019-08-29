import React, { useState, useContext } from 'React';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { CartContext } from '../../state/CartContext';

const Cart = props => {
  const userCart = useContext(CartContext);
  console.log('CART: ', Object.values(userCart));
  console.log('cartContext ', userCart);
  if (Object.entries(userCart).length == 0) {
    return <Text>Your cart is empty</Text>;
  } else {
    let cartTotal = 0;
    return (
      <ScrollView style={styles.parent} contentContainerStyle={styles.flexbox}>
        <Text style={styles.title}>CART</Text>
        {Object.values(userCart).map((input, index) => {
          console.log(input);
          const totalPrice = input.quantity * input.price;
          cartTotal = cartTotal + totalPrice;
          return (
            <View style={styles.itemBox}>
              <Image
                style={styles.image}
                source={{ uri: input.images[0].uri }}
              />
              <Text style={styles.itemMeta} key={{ index }}>
                {input.name} x {input.quantity} = ${totalPrice}
              </Text>
            </View>
          );
        })}
        <Text style={styles.textStyles}>{cartTotal}</Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'black',
  },

  flexBox: {
    backgroundColor: 'black',
    height: '100%',
  },
  itemBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 3,
    justifyContent: 'space-between',
    borderColor: '#B7872D',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 25,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#B7872D',
    marginBottom: 10,
    display: 'flex',
  },
  image: {
    width: '40%',
    height: 180,
    padding: 20,
  },
  itemMeta: {
    color: '#B7872D',
    backgroundColor: 'black',
    fontFamily: 'Rajdhani-SemiBold',
    fontSize: 20,
    marginRight: 5,
    flexWrap: 'wrap',
    display: 'flex',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    color: 'white',
  },
});

export default Cart;
