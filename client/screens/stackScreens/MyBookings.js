import React, { useState, useContext } from 'React';
import {
  BookingsContext,
  AddToBookingsContext,
} from '../../state/BookingsContext';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { AsyncStorage } from 'react-native';

import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MyBookings() {
  const bookings = useContext(BookingsContext);
  console.log('My Bookings = ', bookings);
  const formatedDate = input => {
    return moment(input).format('YYYY-MM-DD');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>My Bookings</Text>
      {bookings.map(booking => {
        return (
          <View style={styles.bookingContainer}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://static.vinepair.com/wp-content/uploads/2018/08/WeAsked10_Header-1.jpg',
                height: 300,
              }}
            />
            <View style={styles.bookingMeta}>
              <Text style={styles.title}>{booking.title}</Text>
              <Text style={styles.subtitle}>{booking.guide}</Text>
              <Text style={styles.subtitle}>{formatedDate(booking.time)}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Rajdhani-Bold',
    marginTop: 10,
    marginBottom: 10,
  },
  bookingContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 3,
    justifyContent: 'space-between',
    borderColor: '#B7872D',
    backgroundColor: 'black',
    alignItems: 'center',
    marginBottom: 10,
    padding: 20,
  },
  image: {
    width: '30%',
    height: 150,
  },
  title: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#B7872D',
    marginBottom: 10,
    display: 'flex',
  },
  subtitle: {
    color: 'white',
  },
});
