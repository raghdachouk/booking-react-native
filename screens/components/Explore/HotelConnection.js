
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from "react";
import Hotel from './Hotel'


import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableHighlight,
    Dimensions,
    TouchableOpacity
} from "react-native";

const { height, width } = Dimensions.get('window')
class PremiumConnection extends Component {

    render() {
        var { navigate } = this.props.nav;
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
                        <TouchableOpacity onPress={() => {
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
                       <Hotel width={width} nom={nom} adresse={adresse} prix={prix} rating={categogy.nbreEtoile} url={`${image}`}/>
                       </TouchableOpacity>
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