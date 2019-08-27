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
      headerTitle: 'Store',
      headerRight: (
        <Button
          icon={<Icon type="evilicon" name="cart" color="black" />}
          onPress={() => props.navigation.navigate('Cart')}
          color="pink"
        />
      ),
    }),
  },
  Product: { screen: Product },
  Cart: { screen: Cart },
});

export default createAppContainer(StoreNavigator);
