/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import Header from './components/Header'
import List from './components/List'

import DATA from './data/dataset.json'


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      <Header />
      <View style={{ flex: 1 }}>
        <List
          data={DATA.drugs} 
        />
      </View>
    </SafeAreaView>
  );
};



export default App;
