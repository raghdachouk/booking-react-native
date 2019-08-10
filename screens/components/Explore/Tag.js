import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{
                minHeight: 35, minWidth: 80,
                padding: 5, backgroundColor: 'white',
                borderColor: '#dddddd', borderWidth: 1,
                borderRadius: 2, marginRight: 5
            }}>
                <Text style={{ fontWeight: '600', fontSize: 16 }}
                >{this.props.name}</Text>
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