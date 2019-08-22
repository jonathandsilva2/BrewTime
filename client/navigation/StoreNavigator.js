import React from 'react';
import Store from '../screens/Store';
import Product from '../screens/stackScreens/StoreProduct';
import Cart from '../screens/stackScreens/Cart';
import { Header, Icon, Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const StoreNavigator = createStackNavigator({
  Store: {
    screen: Store,
    navigationOptions: props => ({
      headerTitle: 'Booking',
      headerRight: (
        <Button
          icon={<Icon name="shop" />}
          onPress={() => props.navigation.navigate('StoreProduct')}
          color="pink"
        />
      ),
    }),
  },
  Product: { screen: Product },
  Cart: { screen: Cart },
});

export default createAppContainer(StoreNavigator);
