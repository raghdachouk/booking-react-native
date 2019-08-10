import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import AsyncImage from '../../../AsyncImage'

class Category extends Component {
    render() {
        return (
            console.log(this.props.uri),
            <View style={styles.container}>
                <View style={{ height: 460, width: 260, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <AsyncImage
                            style={{
                                top: 30,
                                borderRadius: 5,
                                height: 260,
                                width: 260,

                            }}
                            source={{
                                uri: this.props.url
                            }}
                            placeholderColor='#FFAAD4' />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                        <Text>{this.props.name}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});