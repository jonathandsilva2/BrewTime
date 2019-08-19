import React from 'react';
import Store from '../screens/Store';
import Product from '../screens/Product';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const StoreNavigator = createStackNavigator({
  Store: { screen: Store },
  Product: { screen: Product },
});

export default createAppContainer(StoreNavigator);
