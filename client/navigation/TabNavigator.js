import React from 'react';
import Dashboard from '../screens/Dashboard';
import Booking from '../screens/Booking';
import Location from '../screens/Location';
import Store from '../screens/Store';
import StackNavigator from './StackNavigator';
import StoreNavigator from './StoreNavigator';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: { screen: Dashboard },
    Location: { screen: Location },
    Booking: StackNavigator,
    Store: StoreNavigator,
  },
  {
    tabBarOptions: {
      activeTintColor: '#B7872D',
      inactiveTintColor: 'white',

      style: {
        backgroundColor: 'black',
      },
    },
  },
);

export default createAppContainer(TabNavigator);
