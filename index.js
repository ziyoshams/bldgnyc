import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import BuildingList from './src/components/BuildingList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Asset'} />
    <BuildingList />
  </View>
);

AppRegistry.registerComponent('buildings', () => App);
