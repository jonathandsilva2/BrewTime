import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Header, Icon, Button } from 'react-native-elements';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const GET_MAP_DATA = gql`
  query {
    getMapData(input: { token: 1, brewery_id: 1 }) {
      latitude
      longitude
      latitudeDelta
      longitudeDelta
      brewery {
        name
      }
      locations {
        address
      }
    }
  }
`;

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b7872d',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function Location() {
  const { loading, error, data } = useQuery(GET_MAP_DATA);
  const mapDetails = data.getMapData;
  console.log('mapDetails', mapDetails);
  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error...</Text>;
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
      <View style={{ height: 300 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: mapDetails.latitude,
            longitude: mapDetails.longitude,
            latitudeDelta: mapDetails.latitudeDelta,
            longitudeDelta: mapDetails.longitudeDelta,
          }}
        >
          <Marker
            coordinate={
              (LatLng = {
                latitude: mapDetails.latitude,
                longitude: mapDetails.longitude,
              })
            }
          />
        </MapView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 400,
          backgroundColor: 'black',
        }}
      >
        <Text style={{ color: 'white' }}>
          {mapDetails.locations[0].address}
        </Text>
      </View>
    </View>
  );
}

/*
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: mapDetails.latitude,
            longitude: mapDetails.longitude,
            latitudeDelta: mapDetails.latitudeDelta,
            longitudeDelta: mapDetails.longitudeDelta,
          }}
        >
          <Marker
            coordinate={
              (LatLng = {
                latitude: mapDetails.latitude,
                longitude: mapDetails.longitude,
              })
            }
          />
        </MapView>
        */
