import React from 'react';
import Booking from '../screens/Booking';
import BookingInfo from '../screens/stackScreens/BookingInfo';
import MyBookings from '../screens/stackScreens/MyBookings';
import Cart from '../screens/stackScreens/Cart';
import TabNavigator from './TabNavigator';
import { Text, View, TouchableOpacity } from 'react-native';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Booking: {
    screen: Booking,
    navigationOptions: props => ({
      headerTitle: 'Booking',
      headerStyle: { backgroundColor: 'black' },
      headerRight: (
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Icon
            name="shopping-cart"
            color="white"
            size="25"
            style={{ right: 20 }}
          />
        </TouchableOpacity>
      ),
    }),
  },
  BookingInfo: {
    screen: BookingInfo,
    navigationOptions: props => ({
      headerTitle: 'Booking',
      headerStyle: { backgroundColor: 'black' },
      headerRight: (
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Icon
            name="shopping-cart"
            color="white"
            size="25"
            style={{ right: 20 }}
          />
        </TouchableOpacity>
      ),
    }),
  },
  MyBookings: {
    screen: MyBookings,
    navigationOptions: props => ({
      headerTitle: 'Booking',
      headerStyle: { backgroundColor: 'black' },
      headerRight: (
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Icon
            name="shopping-cart"
            color="white"
            size="25"
            style={{ right: 20 }}
          />
        </TouchableOpacity>
      ),
    }),
  },
});

export default createAppContainer(StackNavigator);
