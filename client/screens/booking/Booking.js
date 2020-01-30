import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import BookingTourCalendar from '../../components/BookingTourCalendar';
import BookingTours from '../../components/BookingTours';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Booking(props) {
  console.log('booking props:', props);
  return (
    <View style={{ backgroundColor: 'black', height: 730 }}>
      <BookingTourCalendar {...props} />

      <BookingTours {...props} />
    </View>
  );
}
