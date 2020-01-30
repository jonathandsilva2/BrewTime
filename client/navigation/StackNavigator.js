import React from 'react';
import Booking from '../screens/booking/Booking';
import BookingInfo from '../screens/booking/BookingInfo';
import MyBookings from '../screens/booking/MyBookings';
import { TouchableOpacity } from 'react-native';
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
