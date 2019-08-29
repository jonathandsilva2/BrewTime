import React, { useState, useContext } from 'React';
import { DatesContext, AddToDatesContext } from '../state/DatesContext';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Loading from '../utils/Loading';
import TourNavigator from '../navigation/StackNavigator';
import moment from 'moment';

export default function Tours(props) {
  const GET_TOURS = gql`
    query {
      getBookings(input: { token: 1, brewery_id: 1 }) {
        title
        description
        guide
        time
        images {
          uri
          description
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_TOURS);
  const tourInfo = data.getBookings;
  console.log('Tour: ', tourInfo);
  const dateContext = useContext(DatesContext);

  console.log('alldates: ');

  // To get an array of dates of all bookings that will be stored in a global context to be used in the Calender component

  if (!tourInfo) {
    return <Text>loading....</Text>;
  } else {
    const newDates = tourInfo.map(input => {
      return input.time;
    });

    console.log(newDates);

    const formatedDate = input => {
      return moment(input).format('YYYY-MM-DD');
    };

    const finalDates = newDates.map(formatedDate);

    console.log('Dates Array;', finalDates);

    const newDateArray = finalDates.reduce((acc, date) => {
      console.log(acc);
      acc[date] = { selected: 'true' };
      return acc;
    }, {});

    console.log('Final Dates Array:', newDateArray);

    if (!Object.keys(dateContext.dates).length) {
      dateContext.setDates(newDateArray);
    }

    return (
      <View>
        <Text>Available Tours</Text>
        {tourInfo.slice(0, 4).map((tour, i) => (
          <View style={styles.mapBox} key={i}>
            <View style={styles.tourMeta}>
              <Text style={styles.textBase}>{tour.title}</Text>
              <Text style={styles.textBase}>Hosted by: {tour.guide}</Text>

              <Text style={styles.textBase}>
                Date: {formatedDate(tour.time)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('BookingInfo', tour)}
              title="Go"
              style={styles.button}
            >
              <Text style={{ alignContent: 'center' }}>View</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderBox: {
    borderWidth: 1,
    borderColor: 'red',
  },
  mapBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
    padding: 5,
  },
  textBase: {
    fontFamily: 'Rajdhani-Regular',
    color: 'white',
  },
  button: {
    backgroundColor: '#B7872D',
    justifyContent: 'center',
    padding: 5,
  },
});
