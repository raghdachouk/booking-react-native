import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  scrollView,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default class Voyage extends Component {
  static navigationOptions = { header: null }
  render() {
  	return (
     
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView} >
        <Text style={styles.heading}>
            voyage
        </Text>
        <Text style={styles.description}>
Not every day is filled with adventures, but you can start planning for the next one.{"\n"} 
Tap the heart on any home to start saving your favorites here.{"\n"} 

        </Text>
       
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.findHomesButton}
        onPress={()=>this.props.navigation.goBack()}>
          <Text style={styles.findHomesButtonText}>
            Explorer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
   
  	);
  }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        backgroundColor: '#ffffff',
      },
  scrollView: {
    height: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 40,
    color: '#484848',
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#484848',
    paddingLeft: 20,
    paddingRight: 20,
  },
  footer: {
  	position: 'absolute',
  	width: '100%',
  	height: 80,
  	bottom: 0,
  	borderTopWidth: 1,
  	borderTopColor:  '#dadada',
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  findHomesButton: {
  	paddingTop: 15,
  	paddingBottom: 15,
  	marginTop: 16,
  	borderRadius: 3,
  	backgroundColor:'rgb(48, 148, 148)',
  },
  findHomesButtonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
