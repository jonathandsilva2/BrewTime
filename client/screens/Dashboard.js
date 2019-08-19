import React from 'react';
import { Text, View } from 'react-native';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const GET_BREWERY_INFO = gql`
  query {
    getBreweryInfo(input: { token: 1, brewery_id: 1 }) {
      name
      descriptions {
        description
      }
      images {
        uri
        description
        width
        height
      }
    }
  }
`;

export default function Dashboard() {
  const { loading, error, data } = useQuery(GET_BREWERY_INFO);
  console.log('Bookings: ', data);
  return (
    <View>
      <Text>DashBoard</Text>
    </View>
  );
}
