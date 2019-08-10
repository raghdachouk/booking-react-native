import React,{Component } from 'react';
import { View ,TouchableOpacity,Text,Image} from 'react-native';

import MapView, { Marker,Callout } from 'react-native-maps';

import { Query,ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "http://37.187.28.194:3033/graphql",
  })
export default class LocationLog extends Component{
  
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
}

render(){
   
  
        return(
            <ApolloProvider client={client}>
            <Query query={gql`
            {
                hotels2{
                    id
                    nom
                    prix
                    lat
                    log
                  }
              }
            `} >
                {({ loading, error, data }) => {
                  
                if (loading) return(null)
              if (error) return(null) ;
            
                console.log(data);

                return data.hotels2.map(({id,nom,prix,lat,log})=>(
                   
               <Marker
                  key={`${id}`}
                   style={{ width: 40,
                       backgroundColor: '#fff',
                       borderWidth: 1,
                       borderRadius: 2,
                       alignItems: 'center',
                       padding: 2}}
                   pinColor='#C32C5A'
                   coordinate= {{
                    latitude:lat,
                    longitude: log}}
                   title={`${prix}`}
                   description={`${nom}`}
                   />
       
    ));
}}
</Query>
</ApolloProvider>
);
}
}