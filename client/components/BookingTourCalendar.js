import React from 'react';
import { AsyncStorage } from 'react-native';

import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState, useContext, useEffect } from 'React';
import { DatesContext, AddToDatesContext } from '../state/DatesContext';

export default function TourCalendar(props) {
  const newDates = useContext(DatesContext);
  useEffect(() => {
    const bookingDate = newDates.map(input => {
      return input;
    });
    console.log('newMap', bookingDate);
  });

  // const newDates = useContext(DatesContext);

  // const bookingDate = newDates.map(input => {
  //   return input;
  // });
  // console.log('newMap', bookingDate);

  return (
    <View>
      <Calendar
        minDate={'2019-07-15'}
        markedDates={{
          '2019-09-24': {
            selected: 'true',
          },
        }}
      />
      <Button
        title="View Bookings"
        onPress={() => {
          props.navigation.navigate('MyBookings');
        }}
      />
    </View>
  );
}
