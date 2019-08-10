import React,{Component } from 'react';
import { View ,Text,} from 'react-native';
import { Switch } from 'react-native-switch';

import style from '../../styles/style';


class Adultes extends Component{
    state ={
        switchValue : true
    };
    _handelSwitch= ()=> this.setState(this.state= ({
        switchValue : !this.state.switchValue
    }));
    render(){

        return(
           
            <View  
            style={style.switchBt}  >
                <Text>
                    Animaux
                </Text>
                <Switch 
                
                 value={this.state.switchValue}
                 onValueChange={this._handelSwitch}
                 
                 backgroundActive={'rgb(48, 148, 148)'}
                 activeText={'✓'}
                 inActiveText={'X'}
                 renderActiveText={false}
                 renderInActiveText={false}
                 circleSize={27}
            
          />
            </View>
           
        );

    }
}
export default Adultes;