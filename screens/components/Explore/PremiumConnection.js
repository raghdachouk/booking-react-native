
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from "react";

import Premium from './Premium'

import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";

class PremiumConnection extends Component {

    render() {
        var { navigate } = this.props.nav;
        const onclick = (test) => {

            navigate("third", test)
        };
        const a = 2
        return (
            <Query query={gql`
    {
        hotels{
            id
            nom
            image
            verified
            adresse
            about
            longitude
            latitude
            fullAdresse
            website
            prix
            phoneNumber
            categogy {
              nbreEtoile
                }
          }
      }
    `}
            >
                {({ loading, error, data }) => {
                    if (loading) return <View style={styles.container}>
                    <Image source={require('../../../assets/loading.gif')}
                    style={{
                      height: 300, width: 300
                      
                    }}
                  /></View>;
                    if (error) return <View ><Text>Connection problem </Text></View>;
                    console.log(data)
                    return data.hotels.map(({ nom, verified, image, categogy, prix, adresse,about,longitude,fullAdresse,website,phoneNumber,latitude}) => (

                        <View key={nom}>
                            {verified ? (
                                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                    navigate('third', {
                                        itemName: nom,
                                        category: categogy.nbreEtoile,
                                        price: prix,
                                        address: adresse,
                                        info:about,
                                        longi:longitude,
                                        lati:latitude,
                                        fullAddress:fullAdresse,
                                        number:phoneNumber,
                                        web:website,
                                        pic:image
                                    });
                                }}>
                                    <Premium 
                                        name={`${nom}`} url={`${image}`} />
                                </TouchableOpacity>
                            ) : (
                                    <View></View>
                                )}
                        </View>
                    ));
                }}
            </Query>
        )
    }
}


export default PremiumConnection;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });