import gql from 'graphql-tag';

//Fetches information for specified brewery from 'breweries'
export const GET_BREWERY_INFO = gql`
  query {
    getBreweryInfo(input: { token: 1, brewery_id: 1 }) {
      name
      descriptions {
        description
      }
      images {
        uri
        description
        width
        height
      }
    }
  }
`;

//Fetches a list of all 'products' in the database
export const GET_PRODUCTS = gql`
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

//Fetches a list of all the 'bookings' in the data base
export const GET_TOURS = gql`
  query {
    getBookings(input: { token: 1, brewery_id: 1 }) {
      id
      title
      description
      guide
      time
      images {
        uri
        description
      }
    }
  }
`;

//Fetches the location of the brewery from 'locations'
export const GET_MAP_DATA = gql`
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
