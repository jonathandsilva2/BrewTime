import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import TimedSlideshow from 'react-native-timed-slideshow';
import { Header, Icon, Button } from 'react-native-elements';

import Location from './Location';

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
  const breweryMeta = data.getBreweryInfo;
  console.log('Dashboard: ', data);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;
  console.log('IMages', breweryMeta.images[0].uri);
  const breweryImages = [
    { uri: breweryMeta.images[0].uri },
    { uri: breweryMeta.images[1].uri },
    { uri: breweryMeta.images[2].uri },
    { uri: breweryMeta.images[3].uri },
  ];

  return (
    <View>
      <Header
        rightComponent={
          <Button
            icon={<Icon name="shop" />}
            onPress={() => props.navigation.navigate('Store')}
          />
        }
        centerComponent={{ text: 'Location' }}
        containerStyle={{ backgroundColor: '#B7872D' }}
      />
      <View
        style={{
          flexDirection: 'row',
          height: 300,

          backgroundColor: 'red',
        }}
      >
        <TimedSlideshow
          duration="5000"
          showProgressBar={false}
          items={breweryImages}
        />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            backgroundColor: 'black',
          }}
        >
          <Image
            style={{ width: 300, height: 50 }}
            source={{
              uri:
                'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1502247476859-L71N0D17R3NOWLD6KZNN/ke17ZwdGBToddI8pDm48kBcGZOReEipFMovpq749Z4tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIB4NS3mksLJ1u0PhpecSUAK4X7jjjiNEzEgImJ9BtUMU/image-asset.png?format=300w',
            }}
          />
        </View>

        <View style={{ height: 250, backgroundColor: 'black' }}>
          <Text style={{ color: 'white' }}>
            {breweryMeta.descriptions[0].description}
          </Text>
          <Text style={{ color: 'white' }}>
            {breweryMeta.descriptions[1].description}
          </Text>
          <Text style={{ color: 'white' }}>
            {breweryMeta.descriptions[2].description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
