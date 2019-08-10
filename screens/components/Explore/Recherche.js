import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Recherche extends Component {
    render() {
        return (
            <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Category imageUri={require('../assets/1star.jpg')}
                        name='1 STAR'
                    />
                    <Category imageUri={require('../assets/2stars.jpg')}
                        name='2 STARS'
                    />
                    <Category imageUri={require('../assets/3stars.jpg')}
                        name='3 STARS'
                    />

                    <Category imageUri={require('../assets/4stars.jpg')}
                        name='4 STARS'
                    />
                    <Category imageUri={require('../assets/5stars.jpg')}
                        name='5 STARS'
                    />
                </ScrollView>
            </View>
        );
    }
}
export default Recherche;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});