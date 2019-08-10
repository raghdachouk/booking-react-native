import React,{Component } from 'react';
import { View ,Text} from 'react-native';

import style from '../../styles/style';
import AddVoyAd from '../AddVoyAd'

class Adultes extends Component{
    render(){

        return(
           
            <View  style={style.Voy} >
                <Text>
                    Adultes 
                </Text>
                    <AddVoyAd />

            </View>
           
        );

    }
}
export default Adultes;