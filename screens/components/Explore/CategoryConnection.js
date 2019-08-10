
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from "react";

import Category from './Category'

import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableHighlight,
} from "react-native";

class CategoryConnection extends Component {

    render() {
        return (
            <Query query={gql`
    {
        categories
        {  
          image
          nbreEtoile
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
                    if (error) return <View ><Text>Connection problem</Text></View>;
                    console.log(data)
                    
                    return data.categories.map(({ image, nbreEtoile }) => (

                        <View key={nbreEtoile}>
                            {nbreEtoile >1 ? (
                                
                                 <Category url={`${image}`}
                                 name={`${nbreEtoile} Stars`}
                             />
                            ) : (
                                <Category url={`${image}`}
                                name={`${nbreEtoile} Star`}
                            />
                                )}    
                        </View>
                    ));
                }}
            </Query>
        )
    }
}


export default CategoryConnection;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });