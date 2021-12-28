/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './components/Header'
import List from './components/List'
import DATA from './data/dataset.json'


const App = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <View style={styles.container}>
        <List
          data={DATA.drugs} 
        />
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})



export default App;
