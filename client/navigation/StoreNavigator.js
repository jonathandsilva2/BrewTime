import React from 'react';
import Store from '../screens/Store';
import Product from '../screens/stackScreens/StoreProduct';
import Cart from '../screens/stackScreens/Cart';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const StoreNavigator = createStackNavigator({
  Store: { screen: Store },
  Product: { screen: Product },
  Cart: { screen: Cart },
});

export default createAppContainer(StoreNavigator);
