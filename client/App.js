import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import TabNavigator from './navigation/TabNavigator';
import * as Font from 'expo-font';

import Dashboard from './screens/Dashboard';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/Apollo/ApolloClient';
import { CartContext, AddToCartContext } from './state/CartContext';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { YellowBox } from 'react-native';
import { DatesContext } from './state/DatesContext';
YellowBox.ignoreWarnings(['Remote debugger', 'Require cycle']);
export default function App() {
  const [dates, setDates] = useState({});
  console.log('FULL APP RERENDER');
  const [fontLoaded, setFontLoaded] = useState(false);

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
          <TabNavigator />
        </DatesContext.Provider>
      </ApolloProvider>
    );
  } else {
    return <Text>Loading..</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
