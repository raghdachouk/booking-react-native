    import React,{Component } from 'react';
    import { View ,Text,TextInput,ScrollView,TouchableOpacity,Image} from 'react-native';
    import style from '../../styles/style';
    import { Card } from "react-native-elements";
   
    import Icon from 'react-native-vector-icons/Entypo';
    import { Query,ApolloProvider } from "react-apollo";
    import gql from "graphql-tag";
    import ApolloClient from 'apollo-boost';
/*
    var allFlats=[ 
        {
            imagePath: 'https://ihg.scene7.com/is/image/ihg/holiday-inn-hotel-and-suites-oakland-2533422671-4x3',
            descp:' Sunny Central \n Apartment with style',
            prix:' 30£ ',
            NavLog:'UnLogement',
            save:false
        },
        {
        
            imagePath:'https://img.ev.mu/images/hotels/152/1605x642/579132.jpg',
            descp: 'Private Family Love Villa \n Close to beach',
            prix:' 32£',
            save:false
        }, 
    {
    
    imagePath:'https://img.ev.mu/images/hotels/152/1605x642/579132.jpg',
    descp:'Studio Indépenden \n Apartment with style',
    prix:' 33£ ',
    save:false
    }, 
    {
    
    imagePath:'https://img.ev.mu/images/hotels/152/1605x642/579132.jpg',
    descp:' Sunny Central \n A Beautiful villa',
    prix:' 34£',
    save:false
    },
    {
    
        imagePath:'https://ihg.scene7.com/is/image/ihg/holiday-inn-hotel-and-suites-oakland-2533422671-4x3',
        descp:' Sunny Central \n Villa with style',
        prix:' 35£ ',
        save:false
    },
    {
    
        imagePath:'https://ihg.scene7.com/is/image/ihg/holiday-inn-hotel-and-suites-oakland-2533422671-4x3',
        descp:' Sunny Central \n Apartment with style',
        prix:' 36£ ',
        save:false
    }
    ]
    */
   
   const client = new ApolloClient({
    uri: "http://37.187.28.194:3033/graphql",
  })
    export default class Flats extends Component{
        constructor(props) {
            super(props);
            this.state={
              //  data:allFlats,
                save:false
            }
            
        };
        
    
        render(){
            var { navigate } = this.props.nav;
         //   const { navigate } = this.props.navigation;
            return(
                <ApolloProvider client={client}>
                <Query query={gql`
                {
                    hotels2{
                        id
                        nom
                        imagePath
                        adresse
                        descp
                        prix
                        lat
                        log
                        category2{
                            nbEtoile
                          }
                      }
                  }
                `} >
                    {({ loading, error, data }) => {
                    if (loading) return <View >
                    <Image source={require('../../assets/loading.gif')}
                    style={{
                      height: 300, width: 300
                      
                    }}
                  /></View>;
                  if (error) return <View ><Text>Connection problem </Text></View>;
                    console.log(data);
                    
                    return data.hotels2.map(({id,nom,imagePath,adresse,prix,descp,lat,log,category2})=>(
                   
                <View  key={`${id}`}>
            
                        <TouchableOpacity activeOpacity={0.8} onPress={()=> navigate('UnLogement',{
                            itemName: nom,
                            price: prix,
                            address: adresse,
                            info:descp,
                            longi:log,
                            lati:lat,
                            pic:imagePath,
                           // category:category2.nbEtoile
                        })} >
                        <Card 
                      
                        containerStyle={{ padding: 0, width: 150 ,height:210,borderWidth:0}} >
                        <Image  source={{uri:`${imagePath}`}}
                        style={{width: 150 ,height:110}} />
                    
                        <Icon style={style.heartNotSaved} color={this.state.save ? '#C32C5A' : '#fff'}
                        name="heart" size={23}
                        onPress={()=> this.setState({save:!this.state.save})}/>
                        <Text  style={{color:'#C32C5A',marginTop:3}}>
                            <Text style={{padding: 5,marginTop: 6,backgroundColor:'#C32C5A',color:'#fff'}} > 
                                    Plus </Text>
                                    Verifié. 1LIT 
                        </Text>
                            
                        <Text numberOfLines={2} style={style.textBold}>
                            {`${nom}`}
                            {`${adresse}`}
                        </Text>
                        <Text >
                            {`${prix}`} par nuit
                        </Text> 
                        </Card>  
                        </TouchableOpacity>
                    
                        
                    </View>
                   
                        /*
                        <View  style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around',alignItems:'center',
        justifyContent:'center'}}> 
                        {this.state.data.map((item,i)=>
                        <Card  key={i}
                        title={null}
                        image={{uri:item.imagePath}}
                        imageStyle={{width: 310 ,height:200,borderRadius:10}}
                        containerStyle={{ padding: 0, width: 310 ,height:300,borderWidth:0}} >
                        <Text  style={{color:'#C32C5A',marginTop:3}}>
                                    <Text style={{padding: 5,marginTop: 6,backgroundColor:'#C32C5A',color:'#fff'}} > 
                                    Plus </Text>
                                    Verifié. 1LIT 
                                </Text>
                            
                        <Text numberOfLines={2} style={style.textBold}>
                            {item.descp}
                        </Text>
                        <Text >
                            {item.prix} par nuit
                        </Text> 
                        </Card>  
                        )}
                        
                        </View>
                    */
              
                        ));
                       
                    }}
                </Query>
                </ApolloProvider>
            );

        }
    }
