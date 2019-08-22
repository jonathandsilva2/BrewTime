import React from 'react';
import Booking from '../screens/Booking';
import BookingInfo from '../screens/stackScreens/BookingInfo';
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
          onPress={() => props.navigation.navigate('Store')}
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
});

export default createAppContainer(StackNavigator);
