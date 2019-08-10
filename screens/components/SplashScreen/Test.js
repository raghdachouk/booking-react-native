import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from "react";
import {
    Text,
  } from "react-native";

 class Test extends Component{
    render (){      
        var { navigate } = this.props.nav;
        return(
    <Query query={gql`
    {
        hotels{
            nom
        }
      }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <Text>Loading ...</Text>;
            if (error) return <Text>Connection error</Text>;
            return  (
                navigate("Second", {})
                /*<Text>Tap to continue</Text>*/
            );
        }}   
    </Query>
        )
    }
}

export default Test;