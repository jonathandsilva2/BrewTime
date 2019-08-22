import React from 'react';
import { AsyncStorage } from 'react-native';

import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function TourCalendar(props) {
  return (
    <View>
      <Calendar
        minDate={'2019-07-15'}
        markedDates={{
          value: {
            marked: true,
            dotColor: 'blue',
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
