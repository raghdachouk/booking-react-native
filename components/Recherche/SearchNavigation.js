

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity ,
  Button,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Search from './Search';
import BarSearch from './BarSearch'

const RootStack = createStackNavigator(
  {
   1: {
    screen: BarSearch
    },
   2:{
    screen: Search
   },
  },
  {
    initialRouteName: '1',
  }
  
);
  

export default class SearchNavigation extends Component {
  render() {
    return <RootStack />;
  }
}

