import React from 'react';
import Booking from '../screens/Booking';
import BookingInfo from '../screens/stackScreens/BookingInfo';
import MyBookings from '../screens/stackScreens/MyBookings';
import Cart from '../screens/stackScreens/Cart';
import TabNavigator from './TabNavigator';
import { Text, View } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Booking: {
    screen: Booking,
    navigationOptions: props => ({
      headerTitle: 'Booking',
      headerRight: (
        <Button
          icon={<Icon name="shop" />}
          onPress={() => props.navigation.navigate('Cart')}
          color="pink"
        />
      ),
    }),
  },
  BookingInfo: {
    screen: BookingInfo,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerRight: <Button title="shop" />,
    }),
  },
  MyBookings: {
    screen: MyBookings,
  },
});

export default createAppContainer(StackNavigator);
