import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default function Products() {
  const GET_PRODUCTS = gql`
    query {
      getProducts(input: { token: 1, brewery_id: 1 }) {
        object
        caption
        created
        description
        name
        price
        package_dimension {
          height
          length
          weight
          width
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  console.log('Products: ', data);

  return <View />;
}
