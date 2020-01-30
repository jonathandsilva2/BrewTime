import React, { useState, useContext } from 'React';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import { CartContext } from '../../context/CartContext';

export default function Product(props) {
  const product = props.navigation.state.params;
  const cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

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
        <View style={styles.priceFlexBox}>
          <Text
            style={{
              color: 'white',
              padding: 10,
              fontFamily: 'Rajdhani-SemiBold',
              fontSize: 18,
            }}
          >
            ${product.price}.00
          </Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity + 1);
                console.log(quantity);
              }}
            >
              <Text style={styles.plusMinus}>+</Text>
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                paddingHorizontal: 10,
                justifyContent: 'center',
              }}
            >
              {quantity}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity - 1);
                console.log(quantity);
              }}
            >
              <Text style={styles.plusMinus}>-</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            title="add to cart"
            onPress={() => {
              cartContext.addToCart(product, quantity);
              setQuantity(0);
              alert('Item has been added');
            }}
            style={styles.button}
          >
            <Text style={styles.textStyles}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 25,
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
    height: 200,
  },
  imageContainer: {
    height: 300,
  },
  textStyles: {
    color: 'white',
    fontFamily: 'Rajdhani-Regular',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Rajdhani-Bold',
    marginBottom: 15,
  },
  caption: {
    fontFamily: 'Rajdhani-Light',
    color: 'white',
    marginTop: 25,
  },
  description: {
    marginTop: 25,
  },
  button: {
    backgroundColor: '#B7872D',
    padding: 5,
    marginTop: 15,
    fontSize: 25,
  },
  priceFlexBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: 20,
  },
  quantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#B7872D',
    marginBottom: 20,
  },
  plusMinus: {
    fontSize: 25,
    color: 'white',
    backgroundColor: '#B7872D',
    paddingHorizontal: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'red',
    color: 'white',
  },
});
