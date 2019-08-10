import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity,
    ScrollView

} from "react-native";

import * as Animatable from 'react-native-animatable'

import StarRating from 'react-native-star-rating'

class HotelDetailsFooter extends Component {
    render() {

        return (
            <View style={styles.reservationMainView}>
                <View style={{ flexDirection: 'row' }}  >
                    <Text style={styles.reservationRecap}>
                        Reservation for 2. Today,July 26
                                    </Text>
                    <Text style={styles.ReservationChange}>
                        Change
                                    </Text>

                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>07:00 AM</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>08:00 AM</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>09:00 AM</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>10:00 AM</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>11:00 AM</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>12:00 AM</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default HotelDetailsFooter;

const styles = StyleSheet.create({
    reservationMainView: {
        height: 70, marginTop: 20
    },
    reservationRecap: {
        fontSize: 15,
        fontWeight: '700',
        paddingHorizontal: 20
    },
    ReservationChange: {
        position: 'absolute',
        right: 30,
        color: '#087d87'
    },
    scrollView: {
        marginTop: 20,
        paddingHorizontal: 10
    },
    timeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#087d87',
        height: 30,
        width: 100,
        marginLeft: 10,
        borderRadius: 4
    },
    time: {
        color: 'white',
        fontWeight: '500'
    }
});