import React from 'react';
import { Text, View, Button, Image, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default function Products(props) {
  const GET_PRODUCTS = gql`
    query {
      getProducts(input: { token: 1, brewery_id: 1 }) {
        name
        caption
        description
        price
        images {
          uri
          description
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const product = data.getProducts;
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error..</Text>;

  console.log('test', data.getProducts);
  console.log('image', product[0].images[0].uri);

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View>
        {data.getProducts.map((product, i) => (
          <View key={i}>
            <Text>
              {product.name} {i}
            </Text>

            <Image
              style={{ width: 300, height: 500, resizeMode: 'center' }}
              source={{ uri: product.images[0].uri }}
            />

            <Button
              onPress={() => props.navigation.navigate('Product', product)}
              title="Go"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
