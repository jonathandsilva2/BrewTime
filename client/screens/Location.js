import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
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
    }
  }
`;

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
  if (!mapDetails) {
    return <Text>Loading....</Text>;
  } else {
    return (
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
    );
  }
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
