import React,{ Component } from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import style from '../../styles/style';

const appartement =[
    {
        imagePath:require('../../img/cuisine.jpg')
    },
    {
        imagePath:require('../../img/salon.jpg')
    },
    {
        imagePath:require('../../img/chambre.jpg')
    },
    {
        imagePath:require('../../img/chambre2.jpg')
    },
]
export default class Visiter extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:appartement,
            navigation:this.props.navigation
         }    
    };
    static navigationOptions = {
        headerTitle: ({ navigation}) => 
          <Icon size={25} style={{position:'absolute',right:20}}
           name="share" onPress={()=> navigation.navigate('Invit')}
          />
    };
    
    render(){
      return(
        <ScrollView >
        <View style={style.background}>
            <Text style={style.textGrand}>
            Ce Logement
                </Text>
                <View  style={{flex:1, flexDirection: 'column', justifyContent: 'space-around',alignItems:'center',
       justifyContent:'center'}}> 
       {this.state.data.map((item,i)=>
    <Image key={i} source={item.imagePath} style={{width: 300 ,height:200,borderRadius:7,margin:10 }} >
    </Image>
    )}
       </View>
            </View>
            </ScrollView>
      );
    }
}