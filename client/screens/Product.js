import React from 'React';
import { View, Button, Image } from 'react-native';

export default function Product(props) {
  console.log('single Product: ', props);
  const product = props.navigation.state.params;
  return (
    <View>
      <Image
        resizeMode="center"
        style={{ width: 300, height: 500 }}
        source={{ uri: product.images[0].uri }}
      />
    </View>
  );
}
