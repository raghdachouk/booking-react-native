/*
@CopyRight Raghda Chouk & Anoua Ben Othmen
*/ 


import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Splash from './screens/components/SplashScreen/Splash'
import  App2 from './AppReal'
import HotelDetails from './screens/components/HotelDetails/HotelDetails'

import {createStackNavigator} from 'react-navigation'

//import LocNavigation from './components/Loc/LocNavigation';

import Voyagers from './components/Voyagers';
import LocationLog from './components/Loc/LocationLog';
import Logements from './components/Loc/Logements';
import Visiter from './components/Loc/Visiter';
import SavoirPlus from './components/Loc/SavoirPlus';
import UnLog from './components/Loc/UnLog';
import InviteFriends from './components/Enregistré/InviteFriends'
import LocationFlats from './components/Loc/LocaionFlats';


const Navigation =createStackNavigator({
  First:{screen:Splash,
    navigationOptions: {
      header: null,
    }},
  Second:{screen:App2,
    navigationOptions: {
      header: null,
    }},
    third:{screen:HotelDetails,
      navigationOptions: {
        header: null,
      }},
      voyagers:{
        screen:Voyagers
      },
    
        loc:{
          screen: LocationFlats
         },
      locFlats:{
          screen:Logements
      },
      UnLogement: {
        screen:UnLog
      },
      
      visiter:{
        screen:Visiter
      },
      SavPlus:{
        screen:SavoirPlus
      },
      Invit: {
        screen:InviteFriends
      }
      
})


export default Navigation;

