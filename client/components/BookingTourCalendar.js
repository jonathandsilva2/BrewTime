import React from 'react';
import { AsyncStorage } from 'react-native';

import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState, useContext, useEffect } from 'React';
import { DatesContext, AddToDatesContext } from '../state/DatesContext';

export default function TourCalendar(props) {
  const datesContext = useContext(DatesContext);

  return (
    <View
      style={{
        backgroundColor: 'black',
        // alignItems: 'center',
        // flexDirection: 'column',
      }}
    >
      <Calendar
        minDate={'2019-07-15'}
        markedDates={datesContext.dates}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: 'black',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#B7872D',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#B7872D',
          dayTextColor: 'white',
          textDisabledColor: '#2d4150',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: '#B7872D',
          monthTextColor: '#B7872D',
          indicatorColor: '#B7872D',
          textDayFontFamily: 'Rajdhani-Regular',
          textMonthFontFamily: 'Rajdhani-Regular',
          textDayHeaderFontFamily: 'Rajdhani-Regular',
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      <TouchableOpacity
        title="View Bookings"
        onPress={() => {
          props.navigation.navigate('MyBookings');
        }}
        style={styles.button}
      >
        <Text style={{ fontFamily: 'Rajdhani-Bold' }}>VIEW MY BOOKINGS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B7872D',
    padding: 5,
  },
  buttonText: {
    fontFamily: 'Rajdhani-Regular',
    marginTop: 10,
  },
});
