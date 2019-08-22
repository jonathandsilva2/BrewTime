import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StoreProducts from '../components/StoreProducts';

export default function Store(props) {
  return (
    <View>
      <StoreProducts {...props} />
    </View>
  );
}
