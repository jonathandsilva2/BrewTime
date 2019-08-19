import React from 'react';
import { Text, View, Image } from 'react-native';
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
  console.log('Dashboard: ', data);

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 120,
        padding: 20,
        backgroundColor: 'red',
      }}
    >
      <Text>DashBoard</Text>
      <Image
        style={{ height: 400, width: 600 }}
        source={{
          uri:
            'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1563460379919-SYA7QLASX45002KNBZ9F/ke17ZwdGBToddI8pDm48kH2tcVPxrHjlNBy3DN2qdb17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USen6zmnKCKCvBRpthH2f819Vc-dg8SrmdbOUVLfQHKwIeAend6sbk36Ssanx5fwTw/331A1415.jpg?format=1500w',
        }}
      />
    </View>
  );
}
