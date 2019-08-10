import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import MapView, { Marker } from 'react-native-maps';

import style from '../../styles/style';
import HotelDetailsFooter from '../../screens/components/HotelDetails/HotelDetailsFooter'
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
]
export default class Voyage extends Component {
    static navigationOptions = { header: null }
    constructor(props) {
        super(props);
        this.state={
            data:appartement,
            like:false
         }    
    };
  render() {
   
    
    const category = this.props.navigation.getParam('category', 'NO-Category');
    const itemName = this.props.navigation.getParam('itemName', 'NO-ID');
    const price = this.props.navigation.getParam('price', 'NO-Category');
    const address = this.props.navigation.getParam('address', 'NO-Category');
    const info = this.props.navigation.getParam('info', 'NO-Category');
    const longi = this.props.navigation.getParam('longi', 'NO-Category');
    const lati = this.props.navigation.getParam('lati', 'NO-Category');
    const pic = this.props.navigation.getParam('pic', 'NO-Category');


  	return (
     
    <View style={style.background} >
    
      <ScrollView  >
          <View >
      <ImageBackground source={{uri:pic}} style={{ height:420,
    width:Dimensions.get('window').width}}>
      <View style={styles.posImage}>
      <Icon name="cross"  size={27} color='#fff' onPress={()=>this.props.navigation.goBack()}/>
      <Icon name="share" size={27} color='#fff' onPress={()=>this.props.navigation.navigate('Invit',{image:pic})}/>
      <Icon style={{position:'absolute',top:0,right:40}}  color={this.state.like ? '#C32C5A' : '#fff'}
                     name="heart" size={27}
                     onPress={()=> this.setState({like:!this.state.like})} />
      </View>
      <Button buttonStyle={styles.butSty} 
    title='VISITER CE LOGEMENT' onPress={()=>this.props.navigation.navigate('visiter')}/>
         </ImageBackground>
       </View>
      
      <View style={{marginHorizontal:15}}>
        
          <Text style={{fontSize:15,color:'#848484'}}>
          {"\n"}LOGEMENT ENTIER A LA CAP{"\n"} 
          </Text>
          <Text style={styles.nameSty}>
             {itemName}  {"\n"} 
          </Text>
          <Text style={{fontSize:15}}>
          {"\n"}{info} {"\n"}
          </Text>
          <Text style={{fontSize:14,color:'#848484'}}>
          {"\n"}PRIX: {price} {"\n"}
          </Text>
          <Text style={style.textBold}> {"\n"} 2voyageurs   1chambre   1lit   1salle de bain {"\n"}</Text>
          <View style={style.traitLong}/>
          <Text style={style.textGrand}>
          Visiter cet appartement  {"\n"}
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('visiter')}>
          <View  style={{flex: 1, margin:10,flexDirection: 'row', justifyContent: 'space-around'}}>
            {this.state.data.map((item,i)=>
            <Image source={item.imagePath} style={{width:100,height:100}} key={i}/>
            )}
            </View>
            </TouchableOpacity  >
          <Text style={{fontSize:16,color:'#C32C5A'}}>{"\n"} Découvrir les autres photos{"\n"}</Text>
            </View>

          <View style={styles.savSty}>
            <Text style={style.textGrand}>{"\n"}
            <Text style={{fontSize:20,color:'#C32C5A'}}>DotCOM{"\n"}</Text>
            {"\n"}Une sélection de logements vérifiés selon des critères de qualité et de confort{"\n"}</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('SavPlus')}>
            <Text style={{fontSize:17,color:'#C32C5A'}}> En savoir plus</Text>
            </TouchableOpacity>
              </View>

              <View style={{marginHorizontal:15}}>
          <View style={style.traitLong}/>
    <Text style={style.textGrand}>Emplacement{"\n"}</Text>
    
    <View style={{width:340,height:330}}>
        <MapView 
                    style={[styles.mapSty, this.state.toggle && fullsize]}
                    region={{
                    latitude: lati,
                    longitude: longi,
                    latitudeDelta: 0.222,
                    longitudeDelta: 0.081,
                    }}
                    >
                    <Marker
                    coordinate={{latitude:lati,longitude: longi}}
                     pinColor='#C32C5A'/>
            </MapView>
        </View>
                <Text> {"\n"}{address}{"\n"} </Text> 
                <Text style={{fontSize:15,color:'#848484'}}>Adresse exacte communiqué après la réservation{"\n"}{"\n"}</Text>
                <View style={style.traitLong}/>  
                <Text style={style.textGrand}>Commentaires{"\n"}</Text> 
        </View>
      </ScrollView>
      <HotelDetailsFooter name={itemName}  rating={5}/>
    </View>
   
  	);
  }
}

const styles = StyleSheet.create({
  backImg: {
    height:430,
    width:Dimensions.get('window').width
  },
  posImage:{
    position:'absolute',
    top:22,
    left:10,
    right:10,
    bottom:0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  butSty:{
    backgroundColor: 'rgba(209, 76, 117  , 0.6)',
    width:200,
    borderRadius:5, 
    position:'relative',
    left:0,
    top:360
  },
  mapSty:{
    position:'absolute',
    left:5,
    right:10,
    top:10,
    bottom:10
  },
  savSty:{
    backgroundColor:'#E6E6E6',
    width:Dimensions.get('window').width,
    height:300 ,
    marginBottom:20,
    alignContent:'center',
    alignItems:'center'
  },
  nameSty:{
    color:'#C32C5A',
    fontWeight: 'bold',
    fontSize:25,
    padding:10
  }
});