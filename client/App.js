import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import client from './utils/Apollo/ApolloClient';
import { ApolloProvider } from '@apollo/react-hooks';

import * as Font from 'expo-font';

import { CartContext } from './context/CartContext';
import { DatesContext } from './context/DatesContext';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  const [dates, setDates] = useState({});
  const [cart, setCart] = useState({});
  const [fontLoaded, setFontLoaded] = useState(false);

  const addToCart = (item, quantity) => {
    if (cart[item.id]) {
      let tempCart = cart;
      tempCart[item.id].quantity += quantity;
      setCart(tempCart);
    } else {
      let tempCart = cart;
      tempCart[item.id] = { ...item, quantity };
      setCart(tempCart);
    }
    console.log('AppJS: ', cart);
  };

  const addOne = (item) => {
    let tempCart = cart;
    tempCart[item.id].quantity++;
    setCart(tempCart);
    console.log('Adding one ', cart[item.id].quantity);
    console.log(cart);
  };

  const subtractOne = (item) => {
    cart[item.id].quantity--;
    console.log('Substracting one ', [cart[item.id].quantity]);
    console.log(item);
  };

  console.log('FULL APP RERENDER');

  useEffect(async () => {
    await Font.loadAsync({
      'Rajdhani-Bold': require('./assets/fonts/Rajdhani/Rajdhani-Bold.ttf'),
      'Rajdhani-SemiBold': require('./assets/fonts/Rajdhani/Rajdhani-SemiBold.ttf'),
      'Rajdhani-Light': require('./assets/fonts/Rajdhani/Rajdhani-Light.ttf'),
      'Rajdhani-Medium': require('./assets/fonts/Rajdhani/Rajdhani-Medium.ttf'),
      'Rajdhani-Regular': require('./assets/fonts/Rajdhani/Rajdhani-Regular.ttf'),
    });

    setFontLoaded(true);
  }, []);
  if (fontLoaded === true) {
    return (
      <ApolloProvider client={client}>
        <DatesContext.Provider value={{ dates, setDates }}>
          <CartContext.Provider
            value={{ cart, setCart, addToCart, addOne, subtractOne }}
          >
            <TabNavigator />
          </CartContext.Provider>
        </DatesContext.Provider>
      </ApolloProvider>
    );
  } else {
    return <Text>Loading..</Text>;
  }
}
