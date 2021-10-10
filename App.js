/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import AppContainer from './src/navigations/AppContainer';
import { colors } from './src/styles'


const App: () => React$Node = () => {
  LogBox.ignoreAllLogs()
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={colors.PinkishOrange} />
      <AppContainer />
    </>
  );
};

export default App;
