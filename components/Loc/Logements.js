
import React,{Component } from 'react';
import { View ,Text,TextInput,TouchableOpacity,Image,ScrollView} from 'react-native';
import style from '../../styles/style';
import Flats from './Flats';
import LocButton from './LocButton';
import Icon from 'react-native-vector-icons/Entypo';

export default class Logements extends Component{
    constructor(props) {
        super(props);
        this.state={
           
           navigation: this.props.navigation
         }    
    };
    /*
    static navigationOptions = { headerTitle: ({ navigation }) => 
    <Icon size={25} style={{position:'absolute',left:15}} onPress={()=>navigation.goBack()}
     name="cross" 
    />
    }
    */
    render(){
        var { navigate } = this.props.navigation;
        return(
          <View  style={style.background}>
               <View style={{marginTop:20}}>
                <Text style={style.textGrand}>
                    Voici DotCOM Plus
                </Text>
                <Text style={style.description}>
                    une nouvelle sélection de logements vérifiés selon des critère 
                    de qualité et confort
                </Text>
                </View>
             
                <ScrollView >
            <View  style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'space-around'}}> 
            <Flats nav={{navigate}}  />
                 </View>

                 <Text>{'\n'}</Text>
                    <Text style={style.textGrand}>
                        Découvrez plus de 200 logements
                        </Text>
            </ScrollView>
            <View style={{position: 'absolute',bottom:25,right:25}}>
                        <TouchableOpacity activeOpacity={0.9} onPress={()=>this.props.navigation.navigate('loc')} >
                            <LocButton/>
                        </TouchableOpacity>
                            </View>
            </View>
        );

    }
}