import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/TabNavigator';
import Dashboard from './screens/Dashboard';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/Apollo/ApolloClient';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default function App() {
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
