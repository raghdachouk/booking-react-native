import React,{Component } from 'react';
import { View ,Text} from 'react-native';
import style from '../../styles/style';
import AddVoyEn from '../AddVoyEn';


class Enfants extends Component{
    render(){

        return(
           
            <View  style={style.Voy}>
                <Text>
                Enfants {"\n"}
                Tranche d'age:2-12 ans
                </Text>
                    <AddVoyEn/>
            </View>
           
        );

    }
}
export default Enfants;