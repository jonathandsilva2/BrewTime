import React from 'react';
import { View, Text } from 'react-native';

export default function BookingInfo(props) {
  console.log('testing: ', props.navigation);
  const tour = props.navigation.state.params;

  return (
    <View>
      <Text>{tour.guide}</Text>
    </View>
  );
}
