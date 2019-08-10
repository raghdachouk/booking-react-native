import React,{Component } from 'react';
import { View ,Text} from 'react-native';
import style from '../../styles/style';
import AddVoyBe from '../AddVoyBe';


class Bebe extends Component{
    render(){

        return(
           
            <View  style={style.Voy}>
                <Text>
                Bébés {"\n"}
                 Moins de 2 ans
                </Text>
                    <AddVoyBe  />
            </View>
           
        );

    }
}
export default Bebe;