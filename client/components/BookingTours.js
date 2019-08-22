import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Text, View, Button, StyleSheet } from 'react-native';
import Loading from '../utils/Loading';
import TourNavigator from '../navigation/StackNavigator';

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

  if (!tourInfo) {
    return <Text>loading....</Text>;
  } else {
    console.log('tourInfo: ', tourInfo);
    console.log(props);
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
