import React from 'react';
import Dashboard from '../screens/Dashboard';
import Booking from '../screens/Booking';
import Location from '../screens/Location';
import Store from '../screens/Store';
import StackNavigator from './StackNavigator';
import StoreNavigator from './StoreNavigator';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
  {
    Booking: {
      screen: StackNavigator,
      navigationOptions: {
        tabBarIcon: <Icon color="white" name="calendar" size="18" />,
      },
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: <Icon color="white" name="home" size="25" />,
      },
    },
    Location: {
      screen: Location,
      navigationOptions: {
        tabBarIcon: <Icon color="white" name="map-marker" size="25" />,
      },
    },

    Store: {
      screen: StoreNavigator,
      navigationOptions: {
        tabBarIcon: <Icon color="white" name="beer" size="22" />,
      },
    },
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
