import React, { useState, useContext } from 'React';
import { DatesContext, AddToDatesContext } from '../state/DatesContext';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Text, View, Button, StyleSheet } from 'react-native';
import Loading from '../utils/Loading';
import TourNavigator from '../navigation/StackNavigator';
import moment from 'moment';

const styles = StyleSheet.create({
  borderBox: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default function Tours(props) {
  const GET_TOURS = gql`
    query {
      getBookings(input: { token: 1, brewery_id: 1 }) {
        title
        description
        guide
        time
      }
    }
  `;

  style = { border: '1px solid red' };

  const { loading, error, data } = useQuery(GET_TOURS);
  const tourInfo = data.getBookings;
  console.log('Tour: ', tourInfo);
  const allDates = useContext(AddToDatesContext);

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

    allDates(finalDates);

    console.log(finalDates);

    return (
      <View>
        <Text>Available Tours</Text>
        {tourInfo.slice(0, 3).map((tour, i) => (
          <View key={i}>
            <Text>{tour.guide}</Text>
            <Button
              onPress={() => props.navigation.navigate('BookingInfo', tour)}
              title="Go"
            />
          </View>
        ))}
      </View>
    );
  }
}
