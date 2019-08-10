import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity

} from "react-native";

import * as Animatable from 'react-native-animatable'

import StarRating from 'react-native-star-rating'

class HotelDetailsFooter extends Component {
    render() {

        return (
            <Animatable.View animation="slideInUp" iterationCount={1} >

                <Animated.View
                    style={styles.bottomView}>
                    <View style={styles.leftBottomView} >
                        <Text> {this.props.name} </Text>
                        <StarRating
                            maxStars={5}
                            rating={this.props.rating}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            fullStarColor={'red'}
                            starSize={15}
                        />
                    </View>
                    <TouchableOpacity style={styles.rightBottomView} >
                        <Text  style={styles.text}>  make reservation </Text>
                    </TouchableOpacity>
                </Animated.View>
            </Animatable.View >
        );
    }
}
export default HotelDetailsFooter;

const styles = StyleSheet.create({
    bottomView: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    leftBottomView: {
        flexDirection: 'column',
        left: 20,
        top: 5
    },
    rightBottomView:
        { 
        alignItems: 'center', 
        right: 30, 
        top: 10, 
        position: 'absolute', 
        height: 30, 
        backgroundColor: '#087d87', 
        justifyContent: 'center' ,
        borderRadius: 4
    },
    text:{
        color:'white'
    }
    


});