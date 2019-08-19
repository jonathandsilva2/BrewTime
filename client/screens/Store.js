import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Products from '../utils/Products';

export default function Store(props) {
  return (
    <View>
      <Text>Store</Text>
      <Products {...props} />
    </View>
  );
}
