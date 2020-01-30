import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { GET_MAP_DATA } from '../../api/queries';
import { useQuery } from '@apollo/react-hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Button } from 'react-native-elements';

export default function Location(props) {
  const { loading, error, data } = useQuery(GET_MAP_DATA);
  const mapDetails = data.getMapData;
  console.log('mapDetails', mapDetails);
  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error...</Text>;
  return (
    <View>
      <Header
        rightComponent={
          <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
            <Icon
              name="shopping-cart"
              color="white"
              size="25"
              style={{ right: 10 }}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Image
            style={{ height: 50, width: '22%', bottom: 7 }}
            source={{
              uri:
                'http://static1.squarespace.com/static/55c359fce4b0e87fe8114ca2/t/598a6fc459cc688e546e1888/1567111735225/?format=1500w',
            }}
          />
        }
        containerStyle={{ backgroundColor: 'black' }}
      />
      <View
        style={{
          flexDirection: 'row',

          backgroundColor: 'black',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <Text
          style={{
            fontFamily: 'Rajdhani-Bold',
            color: '#B7872D',
            fontSize: 20,
          }}
        >
          {mapDetails.locations[0].address}
        </Text>
      </View>
      <View style={{ height: 670 }}>
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
    </View>
  );
}

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
