import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,Image
} from "react-native";

class ImageTest extends Component {
    render() {
        return (
            <View style={styles.container}>
  <View style = {styles.backgroundContainer}>
    <Image source = {require('../../../assets/1star.jpg')} resizeMode = 'cover' style = {styles.backdrop} />
  </View>
  <View style = {styles.overlay}>
    <Text style = {styles.headline}>wa</Text>
    <Image style = {styles.logo} source = {require('../../../assets/3stars.jpg')} />
  </View>
</View>
        );  
    }
}
export default ImageTest;

var styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1, height: null, width: null,
                            resizeMode: 'cover', borderRadius: 10,
                            borderWidth: 1, borderColor: '#dddddd',
                            position: 'absolute'
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000'
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }
});