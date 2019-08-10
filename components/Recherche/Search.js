import React,{Component } from 'react';
import { View ,Text,TextInput,TouchableOpacity,AppRegistry} from 'react-native';
import style from '../../styles/style';


export default class Search extends Component{
    state = {
        text: ""
      };
    clear = () => {
        this.textInput.clear();
      }
     
    render(){
        return(
           
              <View style={style.background} >
                    <TouchableOpacity onPress={this.clear} >
                         <Text  style={{marginLeft:300 }}> Clear </Text>
                    </TouchableOpacity>
                    <TextInput style= {style.Input}
                        ref={input => { this.textInput = input }}
                        onChangeText={(text) => this.setState({text})}
                        selectionColor ='#FAA99B'
                        underlineColorAndroid='transparent'
                        placeholder="Where ?"/>
               </View>
           
        );

    }
}
