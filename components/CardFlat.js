import React,{Component } from 'react';
import { View ,Text,TextInput,TouchableOpacity,Image,ScrollView } from 'react-native';
import style from '../styles/style';
import { Card } from "react-native-elements";

export default class CardFlat extends Component{
    constructor(props) {
        super(props);
       this.state={
       
           image: require('../img/flat1.jpg'),
           descp:' Sunny Central \n Apartment with style',
           prix:' 30£ par nuit'
       }
    }
    render(){
       
        return(   
            /*
               <View  >
                   <TouchableOpacity >
                    <Image style={{width:150,height:150,borderRadius:10}}
                        source={this.props.updateImage()}  ></Image>
                    <Text  style={{color:'#C32C5A',marginTop:3}}>
                        <Text style={{padding: 15,marginTop: 16,borderRadius:5 ,backgroundColor:'#C32C5A',color:'#fff'}} > 
                         Plus </Text>
                         Verifié. 1LIT 
                    </Text>
                    <Text style={style.textBold}>
                       {this.props.updateDescp()}
                    </Text>
                    <Text>
                       {this.props.updatePrix()}
                    </Text>
                </TouchableOpacity>
              </View>
        */
          
            <View  >
                   <TouchableOpacity activeOpacity={0.8} >
                    <Card image={require('../img/flat2.jpg')}
                   containerStyle={{ padding: 0, width: 230 }}
                   >
                     <Text  style={{color:'#C32C5A',marginTop:3}}>
                        <Text style={{padding: 15,marginTop: 16,borderRadius:5 ,backgroundColor:'#C32C5A',color:'#fff'}} > 
                         Plus </Text>
                         Verifié. 1LIT 
                    </Text>
                    <Text style={style.textBold}>
                    Sunny Central  {"\n"}Apartment with style
                        </Text>
                    <Text>
                    30£ par nuit
                    </Text>
                        </Card>

                </TouchableOpacity>
              </View>
        );

    }
}
