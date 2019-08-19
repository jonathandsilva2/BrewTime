import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import TourCalendar from '../utils/TourCalendar';
import Tours from '../utils/Tours';

export default function Booking(props) {
  console.log('booking props:', props);
  return (
    <View>
      <TourCalendar />
      <Button
        onPress={() => props.navigation.navigate('BookingInfo')}
        title="Go"
      />
      <Tours />
    </View>
  );
}
