import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    Keyboard,
    BackHandler, 
} from "react-native";

import MapView from 'react-native-maps';

import StarRating from 'react-native-star-rating'

import Icon from 'react-native-vector-icons/Ionicons'

import InfoContainer from './InfoContainer'

import HotelDetailsHeader from './HotelDetailsHeader'

import HotelDetailsFooter from './HotelDetailsFooter'

import ReservationView from './ReservationView'

const { height, width } = Dimensions.get('window')

import AsyncImage from '../../../AsyncImage'


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


class HotelDetails extends Component {

    componentWillMount() {
        this.loginHeight = new Animated.Value(0)
        this.scrollY = new Animated.Value(0)
        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }
    }

    render() {

        const { goBack } = this.props.navigation;
        const itemName = this.props.navigation.getParam('itemName', 'NO-ID');
        const category = this.props.navigation.getParam('category', 'NO-Category');
        const price = this.props.navigation.getParam('price', 'NO-Category');
        const address = this.props.navigation.getParam('address', 'NO-Category');
        const info = this.props.navigation.getParam('info', 'NO-Category');
        const longi = this.props.navigation.getParam('longi', 'NO-Category');
        const lati = this.props.navigation.getParam('lati', 'NO-Category');
        const fullAddress = this.props.navigation.getParam('fullAddress', 'NO-Category');
        const number = this.props.navigation.getParam('number', 'NO-Category');
        const web = this.props.navigation.getParam('web', 'NO-Category');
        const pic = this.props.navigation.getParam('pic', 'NO-Category');

        
        const onclick = () => {
            goBack()
        };
        BackHandler.addEventListener('hardwareBackPress', () => { return false });
        //0605
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <HotelDetailsHeader onclick={onclick} />

                    <ScrollView>
                        <View style={{ flex: 1, backgroundColor: 'white' }}>


                            {/*
                            <Image source={require('../../../assets/home2.jpg')}
                                style={{
                                    height: 200, width: SCREEN_WIDTH
                                }}
                            />
                            */}

                            <AsyncImage
                            style={{
                                height: 200,
                                width: SCREEN_WIDTH,
                                
                            }}
                            source={{
                                uri: pic
                            }}
                            placeholderColor='#b3e5fc' />
                            <Text style={styles.ratingText}>
                                {category} STARS
                            </Text>
                            <Text style={styles.titleText}>
                                {itemName}
                            </Text>
                            <ReservationView />
                            
                            <View style={styles.hotelRecapDetail}>
                                <Image source={require('../../../assets/divider.png')}
                                    style={styles.firstSeparation}
                                />
                                <View style={{ marginLeft: 30 }} >
                                    <View style={styles.RecapV1}>
                                        <Icon name="logo-euro" size={15} color='grey' />
                                        <View style={styles.RecapV2}>
                                            <Text style={styles.firstLine}> Price Range</Text>
                                            <Text style={styles.secondLine}> Around  {price}€ per person</Text>
                                        </View>
                                    </View>
                                    <View style={styles.RecapV1}>
                                        <Icon name="ios-map-outline" size={15} color='grey' />
                                        <View style={styles.RecapV2}>
                                            <Text style={styles.firstLine}> Neighborhood</Text>
                                            <Text style={styles.secondLine}> {address}</Text>
                                        </View>
                                    </View>
                                </View >
                                <Image source={require('../../../assets/divider.png')}
                                    style={styles.secondSeparation}
                                />
                            </View>

                            <View style={styles.AboutView}>
                                <Text style={styles.AboutViewTitle}>
                                    About {itemName}
                                 </Text>
                                <Text style={styles.AboutViewDescription}>
                                {info}
                                 </Text>
                            </View>

                            <InfoContainer name={itemName} fullAddress={fullAddress} number={number} web={web} longi={longi} lati={lati} address={address} />

                        </View>
                    </ScrollView>
                </View>

                <HotelDetailsFooter rating={category} name={itemName}/>

            </View >


        );
    }
}
export default HotelDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingText: {
        paddingTop: 10,
        fontSize: 15,
        paddingHorizontal: 20,
        color: 'gray',
        fontWeight: '700'
    },
    titleText: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20
    },
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
    },
    hotelRecapDetail: {
        marginTop: 20
    },
    firstSeparation: {

        width: SCREEN_WIDTH,
        height: 5
    },
    secondSeparation: {
        width: SCREEN_WIDTH, height: 5,
        marginTop: 10
    },
    RecapV1:
    {
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    RecapV2: {
        flexDirection: 'column',
        paddingHorizontal: 15
    },
    firstLine: {
        fontSize: 12, color: 'gray', fontWeight: '700'
    },
    secondLine: {
        fontSize: 10,
        color: 'gray',
        fontWeight: '500'
    },
    AboutView: {
        marginTop: 30,
        backgroundColor: 'white'
    },
    AboutViewTitle: {
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 20
    },
    AboutViewDescription: {
        marginTop: 5,
        fontSize: 12,
        paddingHorizontal: 20,
        color: 'grey'
    },
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
    },
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
        { alignItems: 'center', right: 30, top: 10, position: 'absolute', height: 30, backgroundColor: '#087d87', justifyContent: 'center' }






});


