import React,{ Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import style from '../../styles/style';
export default class SavoirPlus extends Component {
    static navigationOptions = {
        title: 'DotCOM Help',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft:80
          },
      };
    render(){
      return(
        <View style={style.background}>
            <Text>
               Help
                </Text>
            </View>
      );
    }
}