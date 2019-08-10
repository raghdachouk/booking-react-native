import React,{Component } from 'react';
import { View ,
  Image,
  Text,
  Linking,
  ImageBackground,
  Platform,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';
import style from '../../styles/style';


export default class Parametre extends Component{
    static navigationOptions = { header: null }
    
    constructor (props) {
      super(props);
    }
    render(){
       
    const list=[
      {
          name: 'Gmail',
          avatar:require('../../img/Gmail.png'),
          url : 'https://mail.google.com/mail/mu/mp/821/#co'
          
        },
        {
          name: 'Facebook',
          avatar:require('../../img/fb.png'),
          url : 'https://www.facebook.com/'
        },
        {
          name: 'Instagram',
          avatar:require('../../img/insta.png'),
          url :'https://www.instagram.com/'
        },
        {
          name: 'Messenger',
          avatar:require('../../img/messenger.png'),
          url:'https://www.messenger.com/new'

        },
        {
          name: 'Message',
          avatar:require('../../img/message.png'),
          //url: Text('', 'hello')
        },

        {
          name: 'Google Drive',
          avatar:require('../../img/drive.png'),
          url :'https://drive.google.com/drive/my-drive'
        },
        {
          name: 'Bluetooth',
          avatar:require('../../img/blue.png'),
        },
  ]
  const image = this.props.navigation.getParam('image', 'NO-Category');
        return(   
              <View style={{flex:1}}>
              
                    <ImageBackground
                         blurRadius={ Platform.OS == 'ios' ? 10 : 7 } 
                         style={{width:'100%', height: '100%'}}
                         source={{uri:image}}>
                     <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.goBack()} >
                         <Icon style={{marginTop:25}} name="x" size={25} />
                      </TouchableOpacity >
                    <View style={{flex:1}}>
                       <Image source={{uri:image}}
                         style={{width:300, height: 280, marginHorizontal:30,marginVertical:10, borderRadius:20}} >
                       </Image>
               </View>
              
                <View style={{flex:1}} >
            <List>
           
                <FlatList 
                    data={list} 
                    keyExtractor={(item,i)=>i.toString()} 
                    renderItem= { ({ item }) =>          
                    <ListItem style={{height:50 }}
                        onPress={ ()=> Linking.openURL(item.url) } 
                        roundAvatar
                        avatar={item.avatar}
                        title={item.name}
                    />
                     }
                  />  
                  
           </List>
         </View>
              
               </ImageBackground>
               </View>
           
        );

    }
}
