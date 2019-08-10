
import React,{Component } from 'react';
import { View ,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import style from '../../styles/style';


export default class Saved extends Component{
    static navigationOptions = { header: null }
    render(){
        return(
          <View  style={style.background}>
              <Text style={{fontSize: 35, fontWeight: 'bold',marginTop:50 ,marginLeft:30}}>
              Registered
              </Text>
             
              <TouchableOpacity activeOpacity={0.8} onPress={()=> this.props.navigation.navigate('main')} >
             <Image source={require('../../img/loge.jpg')} style={{width:300, height: 200,margin:30,marginTop:50}} ></Image>
                </TouchableOpacity>
                 </View>
            
        );

    }
}