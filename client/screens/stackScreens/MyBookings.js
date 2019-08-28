import React, { useState, useContext } from 'React';
import {
  BookingsContext,
  AddToBookingsContext,
} from '../../state/BookingsContext';
import { View, Text } from 'react-native';
import { AsyncStorage } from 'react-native';

export default function MyBookings() {
  const bookings = useContext(BookingsContext);
  console.log('My Bookins = ', bookings);
  return (
    <View>
      <Text>My Page - </Text>
    </View>
  );
}