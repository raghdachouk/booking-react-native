import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import AsyncImage from '../../../AsyncImage'

const { height, width } = Dimensions.get('window')

class Premium extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notLiked: require('../../../assets/heart.png')
        }
    }
    changeLikeState() {
        console.log('state changed!');
        this.setState({
            notLiked: require('../../../assets/fullHeart.png')
        });
    }
    render() {
        return (
                <View style={styles.container}>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>
                        {this.props.name}
                    </Text>
                    <View style={{ width: width - 40, height: 200, marginTop: 5 }}>
                        <View style={styles.backgroundContainer}>
                        <AsyncImage
                            style={{
                                height: 197,
                                width: width - 43,
                                flex: 1, 
                                    borderRadius: 10,
                                    borderWidth: 1, borderColor: '#dddddd'
                            }}
                            source={{
                                uri: this.props.url
                            }}
                            placeholderColor='#FFAAD4' />
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}><TouchableOpacity onPress={() => this.changeLikeState()}>
                                <Image style={styles.logo} source={this.state.notLiked} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        );
    }
}
export default Premium;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    backgroundContainer: {
        flex: 1, width: width - 40, height: 200,
        borderRadius: 10,
        borderWidth: 1, borderColor: '#dddddd',
        position: 'absolute',

    },
    logo: {
        width: 20,
        height: 20,
        marginTop: 10,
        marginRight: 10
    }
});