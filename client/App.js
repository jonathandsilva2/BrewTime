import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/TabNavigator';
import Dashboard from './screens/Dashboard';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default function App() {
  return (
    <TabNavigator>
      <Dashboard />
    </TabNavigator>
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
