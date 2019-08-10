import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import StarRating from 'react-native-star-rating'
import AsyncImage from '../../../AsyncImage'
class Hotel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    width: this.props.width / 2 - 30, height: this.props.width / 2 - 30,
                    borderWidth: 0.5, borderColor: '#dddddd'
                }}>
                    <View style={{ flex: 1 }}>
                    <AsyncImage
                            style={{
                                
                                height: 75,
                                width: 150,

                            }}
                            source={{
                                uri: this.props.url
                            }}
                            placeholderColor='#FFAAD4' />
                    </View >

                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                        <Text style={{ fontSize: 14, color: '#FF0000' }}
                        > {this.props.nom} </Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}
                        > {this.props.adresse}</Text>
                        <Text style={{ fontSize: 12 }}
                        > a partir de {this.props.prix}$ </Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={this.props.rating}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            fullStarColor={'red'}
                            starSize={17}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
export default Hotel;

const styles = StyleSheet.create({
    container: {

    }
});