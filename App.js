/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoute from './src/navigation';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';

const App: () => React$Node = ({}) => {
  const store = configureStore();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>{<AppRoute />}</NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
