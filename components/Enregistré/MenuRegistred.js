import { View, Text,Image, TouchableOpacity,Button ,StyleSheet,Alert,ScrollView} from 'react-native';
import React,{Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';
import style from '../../styles/style';
import MenuSaved from './MenuSaved'

const pic ='https://ihg.scene7.com/is/image/ihg/holiday-inn-express-and-suites-desoto-4186278663-4x3'
export default class MenuRegistred extends Component{
  static navigationOptions = { header: null }
  view=null;
  constructor(props)
  {
      super(props);
      this.state = {
        isVisible: true
      };
   
      this.deleteView = this.deleteView.bind(this);
  }
  close () {
    this.setState({
      isVisible: false
    });
}
  deleteView(view) {
   this.props.deleteView(this.view)
   this.close()
  }
  
  delete(){
    Alert.alert(
      'Delete list',
      'are you sure?',
      [
        {text: 'Cancel',  style: 'cancel'},
        {text: 'Delete', onPress: () => {this.deleteView}},
      ],
      { cancelable: false }
    )
   }
  render() { 
   
    return(

  // You need to place a MenuContext somewhere in your application, usually at the root.
  // Menus will open within the context, and only one menu can open at a time per context.

  <MenuContext style={style.background} visible={this.state.isVisible}
  ref={(viewRef)=>this.view=viewRef} >
    

 <View style={style.topPage}>
          <Icon name="x" size={25} onPress={() => this.props.navigation.goBack()} />
         
      <View style={{ flex: 1 ,marginLeft:260}}>
       <Icon name="list" size={25} onPress={()=>this.props.navigation.navigate ('param')} />
      </View>
    
    <Menu onSelect={ (value) => this.delete}>
      <MenuTrigger>
      <Icon  name="more-vertical" size={25} />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1} onSelect={()=>{console.log('pressed')} }> 
            <Text >Supprimer</Text>
        </MenuOption>
        <MenuOption value={2} onPress={()=>{console.log('pressed')}}>
          <Text>Publier</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
 

    <View  style={ style.traitLong}/>
    <ScrollView showsVerticalScrollIndicator={false}> 
  <View style={{flex:1,marginTop:20,marginLeft:20}} >
  <Text style={style.textGrand}>Amsterdam    </Text>
    <Text>Available any moment </Text>
    <Text> {"\n"}</Text>
       <View style={style.buttonContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('inviteFrnds',{ image:pic})}>
          <Text style={style.textFrnd}>invite friends +</Text>
          </TouchableOpacity>
        </View>
        
      <MenuSaved />  
      
    </View>
    </ScrollView>
    </MenuContext>
   
    );
  }
}