import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import TourCalendar from '../utils/TourCalendar';
import Tours from '../utils/Tours';

export default class Booking extends React.Component {
  render() {
    return (
      <View>
        <TourCalendar />
        <Tours />
      </View>
    );
  }
}
