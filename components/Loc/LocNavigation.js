import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

import LocationLog from './LocationLog';
import Flats from './Flats';
import UnLog from './UnLog'
import Visiter from './Visiter'
import SavoirPlus from './SavoirPlus'
import InviteFriends from '../Enregistré/InviteFriends'
import Logements from './Logements';

const RootStack = createStackNavigator(
  {
    loc:{
        screen: LocationLog
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
},
  {
    initialRouteName: 'locFlats',
  }
  
);
  

export default class LocNavigation extends Component {
  
  render() {
    return <RootStack />;
  }
}

