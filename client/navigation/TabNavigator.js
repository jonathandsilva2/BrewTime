import React from 'react';
import Dashboard from '../screens/Dashboard';
import Booking from '../screens/Booking';
import Location from '../screens/Location';
import Store from '../screens/Store';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Dashboard: { screen: Dashboard },
  Location: { screen: Location },
  Booking: { screen: Booking },
  Store: { screen: Store },
});

export default createAppContainer(TabNavigator);