import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Navigator from './navigation/navigator';

import productReducer from './redux/reducer/product_reducer';
import cartReducer from './redux/reducer/cart_reducer';

import OrderForm from './screens/OrderScreen';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});
const store = createStore(rootReducer);

export default function App() {
  return (
   
    <Provider store={store}>
      <Navigator />

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
