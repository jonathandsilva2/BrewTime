import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function TourCalendar() {
  return (
    <Calendar
      minDate={'2019-07-15'}
      markedDates={{
        '2019-08-13': {
          marked: true,
          dotColor: 'blue',
        },
      }}
    />
  );
}
