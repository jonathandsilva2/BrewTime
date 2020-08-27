import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import TimedSlideshow from 'react-native-timed-slideshow';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GET_BREWERY_INFO } from '../../api/queries';

export default function Dashboard(props) {
  const { loading, error, data } = useQuery(GET_BREWERY_INFO);
  const breweryMeta = data.getBreweryInfo;

  console.log('test', !!data);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;

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
            style={{ height: 50, width: 50, bottom: 7 }}
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
          height: 375,
          backgroundColor: 'red',
        }}
      >
        <TimedSlideshow
          duration="5000"
          showProgressBar={false}
          items={breweryImages}
        />
      </View>
      <View>
        <ScrollView
          style={{ backgroundColor: 'black', padding: 35 }}
          contentContainerStyle={{ height: 600 }}
        >
          {/* <View
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
        </View> */}

          <View style={{ height: 250, backgroundColor: 'black' }}>
            <Text
              style={{
                fontFamily: 'Rajdhani-Regular',
                color: 'white',
                fontSize: 20,
              }}
            >
              {breweryMeta.descriptions[0].description}
            </Text>
            <Text
              style={{
                fontFamily: 'Rajdhani-Regular',
                color: 'white',
                fontSize: 20,
                marginTop: 20,
              }}
            >
              {breweryMeta.descriptions[1].description}
            </Text>
            <Text
              style={{
                fontFamily: 'Rajdhani-Regular',
                color: 'white',
                fontSize: 20,
                marginTop: 20,
              }}
            >
              {breweryMeta.descriptions[2].description}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
