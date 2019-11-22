/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper'
import { Provider } from 'react-redux'
import store from './src/_redux/store'
import Home from './src/screens/Home'


const theme = {
  ...DefaultTheme,
  roundness: 5
}


function App(){
    return(
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Home />
        </PaperProvider>
      </Provider>
    )
}

export default App;
