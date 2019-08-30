import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default function Products(props) {
  const GET_PRODUCTS = gql`
    query {
      getProducts(input: { token: 1, brewery_id: 1 }) {
        id
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
    <ScrollView style={styles.parent} contentContainerStyle={styles.flexBox}>
      {data.getProducts.map((product, i) => (
        <View key={i} style={styles.flexChild}>
          <Text style={styles.textStyles}>{product.name}</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Product', product)}
            title="Go"
            style={styles.button}
            style={{ width: '100%', height: 300 }}
          >
            <Image
              style={styles.image}
              source={{ uri: product.images[0].uri }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'black',
  },

  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: 'black',
    padding: 5,
  },
  flexChild: {
    width: '50%',
    alignItems: 'center',
    borderWidth: 3,
  },
  image: {
    width: '100%',
    height: 300,
  },
  textStyles: {
    color: 'white',
    fontFamily: 'Rajdhani-Regular',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    color: 'white',
  },
});
