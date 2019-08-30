import React, { useState, useContext } from 'React';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {
  CartContext,
  AddToCartContext,
  RemoveFromCartContext,
  addOne,
  subtractOne,
} from '../../state/CartContext';

const Cart = props => {
  const userCart = useContext(CartContext);
  const addToCart = useContext(AddToCartContext);
  const removeFromCart = useContext(RemoveFromCartContext);
  const [quantity, setQuantity] = useState(0);
  console.log('CART: ', Object.values(userCart));
  console.log('cartContext ', userCart);
  if (Object.entries(userCart).length == 0) {
    return (
      <View
        style={{
          height: 650,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontFamily: 'Rajdhani-Light' }}>
          Your Cart is Empty
        </Text>
      </View>
    );
  } else {
    let cartTotal = 0;
    return (
      <View
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <Text style={styles.title}>CART</Text>
        <ScrollView
          style={styles.parent}
          contentContainerStyle={styles.flexbox}
        >
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
                <View style={styles.midContainer}>
                  <Text style={styles.itemName} key={{ index }}>
                    {input.name}
                  </Text>
                  <Text style={styles.itemCaption}>{input.caption}</Text>
                  <View style={styles.plusMinus}>
                    <TouchableOpacity
                      title="add to cart"
                      onPress={() => setQuantity(quantity + 1)}
                      style={styles.button}
                    >
                      <Text style={styles.textStyles}>+</Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                      }}
                    >
                      {quantity}
                    </Text>
                    <TouchableOpacity
                      title="add to cart"
                      onPress={() => setQuantity(quantity - 1)}
                      style={styles.button}
                    >
                      <Text style={styles.textStyles}>-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.totalPrice}>${totalPrice}.00</Text>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            top: 540,
            display: 'flex',
            width: '100%',
            left: 20,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              borderWidth: 2,
              backgroundColor: 'black',
            }}
          >
            <Text style={{ color: '#B7872D', fontFamily: 'Rajdhani-Light' }}>
              Subtotal
            </Text>
            <Text style={{ color: '#B7872D', fontFamily: 'Rajdhani-SemiBold' }}>
              ${cartTotal}.00
            </Text>
          </View>
          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: '#B7872D',
            }}
          >
            <Text style={{ textAlign: 'center', fontFamily: 'Rajdhani-Bold' }}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'black',

    height: 800,
  },
  title: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#B7872D',

    display: 'flex',
  },
  flexBox: {
    backgroundColor: 'black',
    height: 8000,
  },
  itemBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    borderColor: '#B7872D',
    backgroundColor: 'black',
    alignItems: 'center',
    marginBottom: 10,
    padding: 20,
  },

  image: {
    width: '40%',
    height: 100,
    borderTopWidth: 1,
  },
  midContainer: {
    width: '45%',
    marginLeft: 6,
  },
  itemName: {
    color: '#B7872D',

    fontFamily: 'Rajdhani-SemiBold',
    fontSize: 16,
    marginRight: 5,
  },
  itemCaption: {
    color: '#B7872D',

    fontFamily: 'Rajdhani-Light',
    fontSize: 12,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#B7872D',
    width: '10%',
    color: 'white',
  },
  plusMinus: {
    display: 'flex',
    flexDirection: 'row',

    marginTop: 20,
  },
  totalPrice: {
    fontFamily: 'Rajdhani-Regular',
    color: 'white',
    marginTop: 75,
    fontSize: 20,
  },
  textStyles: {
    textAlign: 'center',
  },
});

export default Cart;
