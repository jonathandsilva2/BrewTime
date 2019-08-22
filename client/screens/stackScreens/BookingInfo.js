import React, { useState, useContext } from 'React';
import {
  BookingsContext,
  AddToBookingsContext,
} from '../../state/BookingsContext';

import { View, Text, Button } from 'react-native';
import { AsyncStorage } from 'react-native';
import moment from 'moment';

export default function BookingInfo(props) {
  const tour = props.navigation.state.params;

  const addToBookings = useContext(AddToBookingsContext);

  console.log('BookingInfo: ', tour.time);

  return (
    <View>
      <Text>{tour.guide}</Text>
      <Button
        title="Press"
        onPress={() => {
          addToBookings(tour);
        }}
      />
    </View>
  );
}
