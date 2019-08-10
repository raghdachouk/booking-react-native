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
    BackHandler
} from "react-native";
import Calendar from 'react-native-calendar-select';

import style from '../styles/style';


import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/Explore/Category'

import Premium from './components/Explore/Premium'

import Hotel from './components/Explore/Hotel'

import Tag from './components/Explore/Tag'

import ImageTest from './components/Explore/ImageTest'

const { height, width } = Dimensions.get('window')

import * as Animatable from 'react-native-animatable'
import { white } from "../node_modules/ansi-colors";

import CategoryConnection from './components/Explore/CategoryConnection'
import PremiumConnection from './components/Explore/PremiumConnection'
import HotelConnection from './components/Explore/HotelConnection'

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
    uri: "http://37.187.28.194:3033/graphql",
})


const SCREEN_HEIGHT = Dimensions.get('window').height

class Explore extends Component {
    static navigationOptions = { header: null }
    constructor (props) {
      super(props);
      var today = new Date(),
              date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
              date2 = (today.getFullYear() +1) + '-' + today.getMonth() + '-' + today.getDate();
      this.state = {
        startDate: date1,
        endDate: date2
      };
      this.confirmDate = this.confirmDate.bind(this);
      this.openCalendar = this.openCalendar.bind(this);
    }
  
    confirmDate({startDate, endDate}) {
      this.setState({
        startDate,
        endDate
      });
    }
    openCalendar(){
   this.calendar && this.calendar.open();
    }
    

    componentWillMount() {

        BackHandler.addEventListener('hardwareBackPress', () => { return true }); //toDisableTheBackArrow

        this.loginHeight = new Animated.Value(0)

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
    }

    increaseHeightOfLogin = () => {

        Animated.timing(this.loginHeight, {
            toValue: SCREEN_HEIGHT - 120,
            duration: 500
        }).start(() => {
            this.refs.textInputMobile.focus()
        })
    }

    decreaseHeightOfLogin = () => {
        Keyboard.dismiss()
        Animated.timing(this.loginHeight, {
            toValue: 0,
            duration: 500
        }).start()
    }


    render() {
        let customI18n = {
            'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'text': {
              'start': 'Start Date',
              'end': 'End Date',
              'date': 'Date',
              'save': 'Confirm',
              'clear': 'Reset'
            },
            'date': 'DD / MM' 
          };
          // optional property, too.
          let color = {
            subColor: '#000000'
          };

        var { navigate } = this.props.navigation;
        const onclick = () => {

            navigate("third", {})
        };



        BackHandler.addEventListener("hardwareBackPress", () => {
            this.decreaseHeightOfLogin()
        })

        const headerTextOpacity = this.loginHeight.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 180],
            outputRange: [0, 1]
        })

        const marginTop = this.loginHeight.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 180],
            outputRange: [25, 60]
        })

        const headerBackArrowOpacity = this.loginHeight.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 180],
            outputRange: [0, 1]
        })


        return (
            <ApolloProvider client={client}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Animated.View style={{
                            height: this.animatedHeaderHeight,
                            backgroundColor: 'white',
                            borderBottomWidth: 1,
                            borderBottomColor: '#dddddd'
                        }}>

                            <TouchableOpacity activeOpacity={0.8}
                                onPress={() => (this.increaseHeightOfLogin(),
                                    console.log('test'))
                                }
                            >
                                <View
                                    pointerEvents="none"
                                    style={{
                                        flexDirection: 'row',
                                        padding: 10, backgroundColor: 'white',
                                        marginHorizontal: 20,
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowColor: 'black',
                                        shadowOpacity: 0.2,
                                        elevation: 1,
                                        marginTop: Platform.OS == 'android' ? 30 : null,

                                    }}>
                                    <Icon name="ios-search" size={25} />
                                    <TextInput
                                        ref="textInputMobile"
                                        underlineColorAndroid="transparent"
                                        placeholder="search something"
                                        placeholderTextColor="grey"
                                        style={{
                                            flex: 1, fontWeight: '700',
                                            backgroundColor: 'white',
                                            marginHorizontal: 10
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Animated.View style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }} >
                               <TouchableOpacity activeOpacity={0.8}  onPress={this.openCalendar}>
                                <Tag name="Date" />
                                </TouchableOpacity>
                                <Calendar
                                openCalendar={this.openCalendar}
                                i18n="en"
                                ref={(calendar) => {this.calendar = calendar;}}
                                customI18n={customI18n}
                                color={color}
                                format="YYYY-MM-DD"
                                minDate={this.state.startDate}
                                maxDate={this.state.endDate}
                                onConfirm={this.confirmDate}
                                />
                                <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('voyagers')}>
                                <Tag name="Voyagers" />
                                </TouchableOpacity>
                            </Animated.View>
                        </Animated.View>



                        <ScrollView
                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [
                                    { nativeEvent: { contentOffset: { y: this.scrollY } } }
                                ]
                            )}
                        >
                            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                    What kind of hotel you're searching for ?
                            </Text>

                                <View style={{ height: 230, marginTop: 20 }}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>

                                        <CategoryConnection />

                                    </ScrollView>


                                </View>
                                <View style={{ height: 230, marginTop: 20 }}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('locFlats')}>
                                        <Category name='Logement Plus' url={'https://pix10.agoda.net/hotelImages/115/1157073/1157073_16062412150044053329.jpg?s=1024x768'}/>
                                        </TouchableOpacity>
                                    </ScrollView>

                                    
                                </View>
                                <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                    <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                        Premium hotels
                                    </Text>
                                    <Text>
                                        Verified stuff here
                                    </Text>
                                    <PremiumConnection nav={{navigate}}/>

                                   {/* <TouchableOpacity onPress={onclick}>
                                        <Premium imageUri={require('../assets/home2.jpg')}
                                            name='example 1' />
                                    </TouchableOpacity>
                                    */}
                                </View>
                            

                            <View style={{ marginTop: 40, backgroundColor: 'white' }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                    Hotels around the world
                                  </Text>
                                 <View style={{
                                    flex: 2, paddingHorizontal: 20, marginTop: 20,
                                    justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap',

                                }}>
                                    {/*    <Hotel width={width} />
                                <Hotel width={width} />
                                <Hotel width={width} />
                                    <Hotel width={width} /> */}
                                    <HotelConnection nav={{navigate}} />
                                </View>
                            </View>
                            </View>
                        </ScrollView>
                    </View>





                    <Animatable.View animation="slideInUp" iterationCount={1} >

                        <Animated.View
                            style={{
                                height: this.loginHeight,
                                backgroundColor: 'white'
                            }}>

                            <Animated.View style={{
                                position: 'absolute',
                                height: 60, width: 60,
                                left: 25,
                                zIndex: 100,
                                top: 30,
                                opacity: headerBackArrowOpacity
                            }} >

                                <TouchableOpacity onPress={() => this.decreaseHeightOfLogin()}  >
                                    <Icon name="md-arrow-back" size={25} />
                                </TouchableOpacity>
                            </Animated.View>

                            <Animated.View style={{
                                opacity: headerTextOpacity, //animated
                                alignItems: 'flex-start',
                                paddingHorizontal: 25,
                                marginTop: marginTop //animated
                            }}>
                                <Text style={{
                                    fontSize: 24
                                }}
                                >Recent researches</Text>
                            </Animated.View>


                            <TouchableOpacity
                                onPress={() => (this.decreaseHeightOfLogin(),
                                    console.log('test'))
                                }
                            >
                                <View style={{
                                    marginTop: 25, //animated
                                    paddingHorizontal: 25,
                                    flexDirection: 'row'
                                }}>
                                    <View
                                        pointerEvents="none"
                                        style={{
                                            flexDirection: 'row',
                                            flex: 1
                                        }} >
                                        <Text style={{
                                            fontSize: 15,
                                            paddingHorizontal: 10
                                        }} >  Grombalia </Text>

                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => (this.decreaseHeightOfLogin(),
                                    console.log('test'))
                                }
                            >
                                <View style={{
                                    marginTop: 25, //animated
                                    paddingHorizontal: 25,
                                    flexDirection: 'row'
                                }}>
                                    <View
                                        pointerEvents="none"
                                        style={{
                                            flexDirection: 'row',
                                            flex: 1
                                        }} >
                                        <Text style={{
                                            fontSize: 15,
                                            paddingHorizontal: 10
                                        }} >  Nabeul </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </Animated.View>

                    </Animatable.View >




                </View >

            </ApolloProvider>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});