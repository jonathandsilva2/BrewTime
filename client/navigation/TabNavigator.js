import React from 'react';
import Dashboard from '../screens/home/Dashboard';
import Location from '../screens/location/Location';
import StackNavigator from './StackNavigator';
import StoreNavigator from './StoreNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: <Icon color="white" name="home" size="25" />,
      },
    },
    Booking: {
      screen: StackNavigator,
      navigationOptions: {
        tabBarIcon: <Icon color="white" name="calendar" size="18" />,
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
