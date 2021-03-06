import React from 'react';
import Store from '../screens/store/Store';
import Product from '../screens/store/StoreProduct';
import Cart from '../screens/store/Cart';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const StoreNavigator = createStackNavigator({
  Store: {
    screen: Store,
    navigationOptions: props => ({
      headerTitle: (
        <Image
          source={{
            uri:
              'https://static.vinepair.com/wp-content/uploads/2018/08/WeAsked10_Header-1.jpg',
            height: 300,
          }}
        />
      ),
      headerStyle: { backgroundColor: 'black' },
      headerRight: (
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Icon
            name="shopping-cart"
            color="white"
            size="25"
            style={{ right: 20 }}
          />
        </TouchableOpacity>
      ),
    }),
  },
  Product: {
    screen: Product,
    navigationOptions: props => ({
      headerTitle: <Image></Image>,
      headerStyle: { backgroundColor: 'black' },
      headerRight: (
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Icon
            name="shopping-cart"
            color="white"
            size="25"
            style={{ right: 20 }}
          />
        </TouchableOpacity>
      ),
    }),
  },
  Cart: {
    screen: Cart,
    navigationOptions: props => ({
      headerTitle: 'Booking',
      headerStyle: { backgroundColor: 'black' },
      headerRight: (
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Icon
            name="shopping-cart"
            color="white"
            size="25"
            style={{ right: 20 }}
          />
        </TouchableOpacity>
      ),
    }),
  },
});

export default createAppContainer(StoreNavigator);
