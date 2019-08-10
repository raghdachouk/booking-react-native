import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

import Test from './Test'

import * as Animatable from 'react-native-animatable'

import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
  uri: "http://37.187.28.194:3033/graphql",
})

class Splash extends Component {

  static navigationOptions = {
    title: 'Splash Screen',
  }

  render() {

    var { navigate } = this.props.navigation;
    const onclick = () => {

      navigate("Second", {})
    };
    return (
      <ApolloProvider client={client}>
      <Animatable.View
        animation="zoomIn"
        style={styles.container}
        iterationCount={1}  >
        <TouchableHighlight onPress={onclick}>
          <Image source={require('../../../assets/icone.gif')}
            style={{
              height: 70, width: 70
            }}
          />
            
        </TouchableHighlight>

        <Test nav={{navigate}}/>


      </Animatable.View>

    </ApolloProvider>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
