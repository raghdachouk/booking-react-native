

import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

import MenuRegistred from './MenuRegistred';
import InviteFriends from './InviteFriends';
import Parametre from './Parametre';
import Voyagers from '../Voyagers';
import CalendarAdd from '../CalendarAdd';
import Saved from './Saved'

const RootStack = createStackNavigator(
  {
    main: {
      screen: MenuRegistred
    },
    param: {
      screen: Parametre
    },
    inviteFrnds: {
      screen: InviteFriends
    },
    voy: {
      screen: Voyagers
    },
    date: {
      screen: CalendarAdd
    },
    saved: {
      screen: Saved
    }
  },
  {
    initialRouteName: 'saved',
  }

);


export default class SavedNavigation extends Component {
  static navigationOptions = { header: null }
  render() {
    return <RootStack />;
  }
}

