import React from 'react';
import Booking from '../screens/Booking';
import BookingInfo from '../screens/BookingInfo';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Booking: { screen: Booking },
  BookingInfo: { screen: BookingInfo },
});

export default createAppContainer(StackNavigator);
