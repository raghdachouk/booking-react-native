import React, { Component } from 'react';


import {
    Text,
     View,
      TouchableOpacity
} from 'react-native';
import style from '../../styles/style';

export default class CounterComponent extends Component {
    render() {
        return (
            <View style={style.container}
            style={{ height: 50,  flexDirection: 'row' ,marginRight :10}}>
                    <TouchableOpacity activeOpacity={0.8}
                        style={style.counterButon}
                        onPress={
                            this.props.decreaseCount
                        }>
                        <Text style={style.plusMoins}> - </Text>
                    </TouchableOpacity>
                  
                    <Text 
                     style={{ height: 50, margin: 50,marginLeft :30 ,marginRight :30}}
                    style={style.plusMoins}
                    >
                   {this.props.countValue3} +
                </Text>
                
                <TouchableOpacity activeOpacity={0.8}
                         style={style.counterButon}
                        onPress={                         
                            this.props.increaseCount
                        }>
                          <Text style={style.plusMoins}> + </Text>
                    </TouchableOpacity>
                       
                   
               
              
            </View>);
    }
}