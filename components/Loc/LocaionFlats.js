import React,{Component } from 'react';
import { View ,TouchableOpacity,ScrollView,FlatList,StyleSheet,Dimensions,} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MapView, { Marker,Callout } from 'react-native-maps';
import style from '../../styles/style';
import LocationLog from './LocationLog';
import Mark from './Mark'


const fullsize= {
    
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
export default class LocationFlats extends Component{
    static navigationOptions = { header: null }
    constructor(props) {
        super(props);
      this.state={
          toggle: false
      };
    }
    render(){
        var { navigate } = this.props.navigation;
        return(
            
            <View style={style.background}>
            
                   <View style={{flex:1}}>
           
           <MapView 
           onPress={()=> this.setState({toggle: true})}
               style={[{position:'absolute',left:0,right:0,top:0,bottom:0}, this.state.toggle && fullsize]}
               region={{
               latitude: 37.4442,
               longitude: 10.5962,
               latitudeDelta: 0.722,
               longitudeDelta: 0.221,
               }}
               showsMyLocationButton = {true}
               showsUserLocation={true}
               followsUserLocation={true}>
               
              <Mark/>
               </MapView>
               <View style={{position:'absolute',top:22,left:10,right:10,bottom:0}}>
               <Icon name="x" size={25}  onPress={()=>this.props.navigation.goBack()}/>
               </View>
                </View>
              
                <ScrollView horizontal={true} >
                <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',alignContent:"center"}}>
                <LocationLog nav={{navigate}}  />
                    </View>
                    </ScrollView>
                </View>
        );
    }
}
