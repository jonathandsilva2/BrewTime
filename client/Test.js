import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export default function Test() {
  const GET_STORIES = gql`
    query {
      getStories {
        title
        caption
        description
      }
    }
  `;
  return <View></View>;
  const { loading, error, data } = useQuery(GET_STORIES);
  console.log(data);
}
