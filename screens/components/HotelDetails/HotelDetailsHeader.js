import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity
    
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

class HotelDetailsHeader extends Component {
    render() {
        
        return (
            <Animated.View style={styles.Mainheader}>


                        <Animated.View style={styles.headerView} >
                            <View><TouchableOpacity onPress={this.props.onclick}><Icon name="ios-arrow-back" size={25} style={styles.back} /></TouchableOpacity></View>
                            <Icon name="ios-share-alt" size={25} style={styles.share} />
                            <Icon name="ios-heart" size={25} style={styles.heart} />
                        </Animated.View>
                    </Animated.View>
        );  
    }
}
export default HotelDetailsHeader;

const styles = StyleSheet.create({
    Mainheader: {
        height: 70,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
    headerView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        position: 'relative',
        top: 30
    },
    back: {
        color: '#ed345f'
    },
    share: {
        position: 'absolute',
        right: 30,
        color: '#ed345f',
    },
    heart: {
        position: 'absolute', right: 0, color: '#ed345f'
    }
});