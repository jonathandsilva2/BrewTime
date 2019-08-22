import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import TabNavigator from './navigation/TabNavigator';
import Dashboard from './screens/Dashboard';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/Apollo/ApolloClient';
import { CartContext, AddToCartContext } from './state/CartContext';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger', 'Require cycle']);
export default function App() {
  console.log('FULL APP RERENDER');
  const addToCart = useContext(AddToCartContext);
  addToCart('item 1');
  return (
    <ApolloProvider client={client}>
      <TabNavigator />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
