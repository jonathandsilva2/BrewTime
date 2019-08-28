import React, { useState, useContext } from 'React';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {
  CartContext,
  AddToCartContext,
  RemoveFromCartContext,
} from '../../state/CartContext';

export default function Product(props) {
  const product = props.navigation.state.params;

  const addToCart = useContext(AddToCartContext);
  const removeFromCart = useContext(RemoveFromCartContext);

  console.log(product);
  return (
    <ScrollView
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.flexBox}>
        <Text style={[styles.textStyles, styles.title]}>{product.name}</Text>
        <Image style={styles.image} source={{ uri: product.images[0].uri }} />
        <Text style={styles.caption}>{product.caption}</Text>
        <Text style={styles.textStyles}>{product.description}</Text>
        <TouchableOpacity
          title="add to cart"
          onPress={() => addToCart(product, 1)}
          style={styles.button}
        >
          <Text style={styles.textStyles}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="add to cart"
          onPress={() => removeFromCart(product, 1)}
          style={styles.button}
        >
          <Text style={styles.textStyles}>-</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  flexBox: {
    display: 'flex',
    width: '80%',
    marginTop: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',

    height: '100%',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    flex: 1,
  },

  textStyles: {
    color: 'white',
    fontFamily: 'Rajdhani-Regular',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Rajdhani-Bold',
    marginBottom: 15,
  },
  caption: {
    fontFamily: 'Rajdhani-Light',
    color: 'white',
    marginTop: 25,
  },
  description: {},
  button: {
    backgroundColor: '#B7872D',
    padding: 5,
    marginTop: 15,
  },
});
