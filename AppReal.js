import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'
import {createStackNavigator} from 'react-navigation'
import Explore from './screens/Explore'
import Inbox from './screens/Inbox'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Profile3 from './screens/components/Profile3/'
import Options from './screens/components/Profile3/Options'
import SavedNavigation from './components/Enregistr\u00E9/SavedNavigation';
import Voyage from './components/Voyage';

 class App2 extends React.Component {

  static navigationOptions={
    title:'App2',
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const Profile3Stack = createStackNavigator(
  {
    profile: {
      screen: Profile3,
      path: '/',
    },
    options: {
      screen: Options,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

export default createBottomTabNavigator({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-search-outline" color= {tintColor} size={24} />
      )
    }
  },
  Saved:{
    screen: SavedNavigation,
    navigationOptions:{
      header: null,
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor})=>(
       
        <Icon name="ios-heart-outline" color= {tintColor} size={24} />
      )
    }
  },
  Trips:{
    screen: Trips,
    navigationOptions:{
      tabBarLabel: 'DOTCOM',
      tabBarIcon: ({tintColor})=>(
        <Image source= {require('./assets/Capture.png')} 
        style={{height:24, width: 24}}/>
      )
    }
  },
  Inbox:{
    screen: Voyage,
    navigationOptions:{
      tabBarLabel: 'INBOX',
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-chatboxes-outline" color= {tintColor} size={24} />
      )
    }
  },
  Profile:{
    screen: Profile3Stack,
    navigationOptions:{
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-person-outline" color= {tintColor} size={24} />
      )
    }
  }
},{
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
