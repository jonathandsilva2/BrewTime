import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Loading from './Loading';
import TourNavigator from '../navigation/StackNavigator';

export default function Tours() {
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

  const { loading, error, data } = useQuery(GET_TOURS);
  const tourInfo = data.getBookings;
  console.log(data);
  if (!tourInfo) {
    return <Text>loading....</Text>;
  } else {
    return (
      <View>
        <Text>{data.getBookings[0].title}</Text>
        <Text>Available Tours</Text>
      </View>
    );
  }
}
