import React from 'react';
import Booking from '../screens/Booking';
import BookingInfo from '../screens/BookingInfo';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Booking: {
    screen: Booking,
    navigationOptions: {
      header: null,
    },
  },
  BookingInfo: {
    screen: BookingInfo,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(StackNavigator);
