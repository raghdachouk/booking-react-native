import React,{Component } from 'react';
import { View ,TouchableOpacity,Text,ScrollView,FlatList,StyleSheet,Dimensions,Image} from 'react-native';

import MapView, { Marker,Callout } from 'react-native-maps';
import style from '../../styles/style';
import { Card } from "react-native-elements";
import Icon from 'react-native-vector-icons/Feather';
import { Query,ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import ApolloClient from 'apollo-boost';
/*
const data=[ 
    {
       
        imagePath: require('../../img/flat1.jpg'),
        title:' Sunny Central 1',
        descp:' Apartment with style ',
        prix:' 30£ ',
        NavLog:'UnLogement',
        coordinate: {
        latitude: 36.43608,
	    longitude: 10.52134}
    },
    {
       
        imagePath:require('../../img/flat2.jpg'),
        title:' Sunny Central 2',
        descp:' Apartment with style ',
        prix:' 32£ ',
        coordinate: {
        latitude: 36.44607,
	    longitude: 10.59133}
    }, 
 {
   
   imagePath:require('../../img/flat3.jpg'),
   title:' Sunny Central 3',
   descp:' Apartment with style ',  
    prix:' 33£ ',
    coordinate: {
    latitude: 36.45606,
	longitude: 10.50137}
 }, 
 {
   
   imagePath:require('../../img/flat4.jpg'),
   title:' Sunny Central 4',
   descp:' Apartment with style ',
    prix:' 34£ ',
    coordinate: {
    latitude: 36.46605,
	longitude: 10.531348}
 },
 {
   
    imagePath:require('../../img/flat5.jpg'),
    title:' Sunny Central 5',
    descp:' Apartment with style ',    
    prix:' 35£ ',
    coordinate: {
    latitude: 36.47604,
	longitude: 10.58131}
  },
  {
   
    imagePath:require('../../img/flat6.jpg'),
    title:' Sunny Central 6',
    descp:' Apartment with style ',  
    prix:' 34£ ',
    coordinate: {
    latitude: 36.40603,
	longitude: 10.51130}
  }
]
*/


  const client = new ApolloClient({
    uri: "http://37.187.28.194:3033/graphql",
  })
export default class LocationLog extends Component{
  
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
}
/*
handleScroll(event:Object) {
    console.log(event.nativeEvent.contentOffset.x);
   }
   */
  
render(){
   
    var { navigate } = this.props.nav;
        return(
            <ApolloProvider client={client}>
            <Query query={gql`
            {
                hotels2{
                    id
                    nom
                    imagePath
                    adresse
                    descp
                    prix
                    lat
                    log
                  }
              }
            `} >
                {({ loading, error, data }) => {
                if (loading) return <View >
                <Image source={require('../../assets/loading.gif')}
                style={{
                  height: 300, width: 300
                  
                }}
              /></View>;
              if (error) return <View ><Text>Connection problem </Text></View>;
                console.log(data);
             
                return data.hotels2.map(({id,nom,imagePath,adresse,prix,descp,lat,log})=>(
                   
            <View key={`${id}`}>
          {/*
            <View style={{flex:1}}>
           
                <MapView 
                onPress={()=> this.setState({toggle: true})}
                    style={[{position:'absolute',left:0,right:0,top:0,bottom:0}, this.state.toggle && fullsize]}
                    region={{
                    latitude: 36.36559,
                    longitude: 10.44925,
                    latitudeDelta: 0.722,
                    longitudeDelta: 0.221,
                    }}
                    showsMyLocationButton = {true}
                    showsUserLocation={true}
                    followsUserLocation={true}>
                    
                    {this.state.data.map((item,index)=>
                    <Marker
                        key={index}
                        style={{ width: 40,
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderRadius: 2,
                            alignItems: 'center',
                            padding: 2}}
                        pinColor='#C32C5A'
                        coordinate={item.coordinate}
                        title={item.prix}
                        description={item.title}
                        />
                    )}
                    </MapView>
                    <View style={{position:'absolute',top:22,left:10,right:10,bottom:0}}>
                    <Icon name="x" size={25}  onPress={()=>this.props.navigation.goBack()}/>
                    </View>
                </View>
                */}
       
           
               <TouchableOpacity activeOpacity={0.8} onPress={()=> navigate('UnLogement',{ itemName: nom,
                            price: prix,
                            address: adresse,
                            info:descp,
                            longi:log,
                            lati:lat,
                            pic:imagePath})}>
                    <Card 
                    title={null}
                    containerStyle={{ padding: 0, width: 240 ,height:250,borderWidth:0}} >
                     <Image  source={{uri:`${imagePath}`}}
                        style={{width: 240 ,height:150}} />
                    <Text  style={{color:'#C32C5A',marginTop:3}}>
                                <Text style={{padding: 15,marginTop: 16,borderRadius:5 ,backgroundColor:'#C32C5A',color:'#fff'}} > 
                                Plus </Text>
                                 Verifié. 1LIT 
                            </Text>
                            <Text numberOfLines={1} style={style.textBold}>
                            {`${nom}`}
                    </Text>
                    <Text numberOfLines={1} style={style.textBold}>
                    {`${adresse}`}
                    </Text>
                    <Text >
                    {`${prix}`} par nuit
                    </Text>
                    </Card>    
                    </TouchableOpacity>       
      
         </View>
       
            ));
     }}
        </Query>
        </ApolloProvider>
        );
    }
}