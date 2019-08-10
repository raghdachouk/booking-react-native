import React,{ Component } from 'react';
import { View ,TouchableOpacity,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


export default class LocButton extends Component{
    static navigationOptions = { header: null }
    render(){
        return(
            <View >
                <View style={{borderRadius:100,width:60,height:60, alignItems:'center',
                justifyContent:'center',backgroundColor:'#fff', elevation: 3}}>
                <Icon name="location-pin" color='rgb(48, 148, 148)' size={43} />

                </View>
            </View>
        );
    }
}