import React,{Component } from 'react';
import { View ,Text,TextInput,TouchableOpacity,AppRegistry,Button} from 'react-native';
import style from '../styles/style';
import CalendarStyle from '../node_modules/react-native-calendar-select/CalendarStyle'
import Adultes from './Voyageurs/Adultes';
import Enfants from './Voyageurs/Enfants';
import Bebe from './Voyageurs/Bebe';
import Animaux from './Voyageurs/Animaux';

export default class Voyagers extends Component{
    
   // static navigationOptions = { header: null }
    save(){
        
    }
    render(){
        return(  
            <View style={style.background} >
         
                <Text style={{ fontWeight: 'bold' ,marginBottom:30,marginLeft:20}}>
                    Voyageurs
                </Text>
                    <Adultes/>
                    <View  style={ style.trait}/>
                    <Enfants/>
                    <View  style={ style.trait}/>
                    <Bebe/>
                    <View  style={ style.trait}/>
                    <Animaux/>
                    <View  style={ style.trait}/>

                <View style={{ flex:0.7, flexDirection: 'row', justifyContent: 'space-between', justifyContent: 'center',
    alignItems: 'center'}} >
                <TouchableOpacity activeOpacity={0.8}
                 style={CalendarStyle.confirmContainer} 
                 onPress={()=> {this.props.navigation.goBack(),this.save}} >
                 <Text  style={ style.confirmText}> Save </Text>                    
                </TouchableOpacity>
                </View>
            </View> 
        );
    }
}