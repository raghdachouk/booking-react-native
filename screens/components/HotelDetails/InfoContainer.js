import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Dimensions

} from "react-native";

import * as Animatable from 'react-native-animatable'

import StarRating from 'react-native-star-rating'

import MapView from 'react-native-maps';

const SCREEN_WIDTH = Dimensions.get('window').width

class HotelDetailsFooter extends Component {
    render() {

        return (
            <View style={styles.partialView} >
                                <MapView style={styles.mapView}

                                    region={{         //have to be set as state
                                        latitude: this.props.lati,
                                        longitude: this.props.longi,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                />
                                <View style={styles.infoMainView} >
                                    <View>
                                        <Text style={styles.infos}>
                                            {this.props.name}
                                    </Text>
                                        <View style={{ borderBottomColor: 'grey' }}>
                                            <Text style={{ marginTop: 5, fontSize: 15, color: 'gray', fontWeight: '200' }}>
                                            {this.props.fullAddress}
                                    </Text>
                                            <View style={{ flexDirection: 'row' }} >
                                                <Text style={styles.infos}>
                                                    {this.props.address}
                                    </Text>
                                                <Text style={styles.infos2}  >
                                                    Directions
                                    </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row' }} >
                                            <Text style={styles.info3}>
                                                Closed
                                    </Text>
                                            <Text style={styles.infos2}  >
                                                Hours
                                    </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }} >
                                            <Text style={styles.info3}>
                                                {this.props.number}
                                    </Text>
                                            <Text style={styles.infos2}  >
                                                Call
                                    </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }} >
                                            <Text style={styles.info3}>
                                                {this.props.web}
                                    </Text>
                                            <Text style={styles.infos2}  >
                                                Website
                                    </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
        );
    }
}
export default HotelDetailsFooter;

const styles = StyleSheet.create({
    partialView: {
        marginLeft: 50, marginTop: 20,
        flexDirection: 'column',
        borderColor: 'grey',
        borderWidth: 0.5,
        width: SCREEN_WIDTH - 100
    },
    mapView: {
        width: 200,
        height: 200,
        width: SCREEN_WIDTH - 100
    },
    infoMainView: {
        marginTop: 10,
        flexDirection: 'column',
        marginLeft: 5
    },
    infos: {
        fontSize: 15,
        color: 'gray',
        fontWeight: '200'
    },
    infos2: {
        marginTop: 5,
        position: 'absolute',
        right: 10, color: 'blue',
        fontSize: 15
    },
    info3: {
        marginTop: 5,
        fontSize: 15,
        color: 'gray',
        fontWeight: '200'
    }
    


});