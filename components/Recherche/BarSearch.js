import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity ,
    Button,
  } from 'react-native';
  import style from '../../styles/style';
  import Icon from 'react-native-vector-icons/Ionicons';


  export default class BarSearch extends Component {
    static navigationOptions = { header: null }
    render() {
        return (
          
      <View style={{flex:1,height:'100%',backgroundColor:'#fff'}}
      style={style.wrapper }>
        <View style={style.searchContainer}>
          <Icon
            name="ios-search"
            size={20}
            color='#919191'
            style={style.searchIcon}
          />
            <TouchableOpacity activeOpacity={0.8} onPress={() =>this.props.navigation.navigate('2')} >
          <Text style={style.textInput} >
         
               Try "Cape Town"
          </Text>
          </TouchableOpacity>
        </View>
      </View>
     
        );
    }
  }