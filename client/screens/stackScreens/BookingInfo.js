import React, { useState, useContext } from 'React';
import {
  Picker,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  BookingsContext,
  AddToBookingsContext,
} from '../../state/BookingsContext';

import { AsyncStorage } from 'react-native';
import moment from 'moment';

export default function BookingInfo(props) {
  const tour = props.navigation.state.params;

  const addToBookings = useContext(AddToBookingsContext);

  console.log('BookingInfo: ', tour.time);
  const formatedDate = input => {
    return moment(input).format('YYYY-MM-DD');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tour.title}</Text>
      <Text style={styles.subtitle}>Hosted By {tour.guide}</Text>
      <Text style={styles.subtitle}>{formatedDate(tour.time)}</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://static.vinepair.com/wp-content/uploads/2018/08/WeAsked10_Header-1.jpg',
          height: 300,
        }}
      />
      <Text style={styles.description}>{tour.description}</Text>
      <TouchableOpacity
        style={styles.button}
        title="Press"
        onPress={() => {
          addToBookings(tour);
        }}
      >
        <Text style={styles.buttonText}>Book Tour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: 650,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 35,
    color: 'white',
  },
  subtitle: {
    fontFamily: 'Rajdhani-Light',
    color: 'white',
    fontSize: 18,
  },
  image: {
    marginTop: 15,
    width: '80%',
    height: 250,
  },
  description: {
    marginTop: 20,
    fontFamily: 'Rajdhani-Regular',
    fontSize: 17,
    color: 'white',
    padding: 20,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#B7872D',
  },
});
