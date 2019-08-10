
import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
  background:{
    flex: 1,
    height:'100%',
    width:'100%',
    backgroundColor:'#fff'
  },
    wrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(255,255,255,0.9)',
      width: '100%',
      height: 80,
      zIndex: 99,
    },
    topPage :{
      padding: 7, 
      flexDirection: 'row',
      marginTop:25,
      marginRight:5
    },
    confirmText: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color :'#FFFFFF'
    },
    switchBt:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft:30,
      marginRight :30 
    },
    Voy:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft:30,
    },
    trait:{
      borderBottomColor: 'rgb(213, 216, 220)',
      marginBottom: 20,
      marginRight: 20,
      marginLeft: 20,
      borderWidth:0.3,
      borderBottomWidth: 0.2,
      elevation: 1,
    },
    traitLong:{
      borderColor:'rgb(213, 216, 220)',
      borderBottomColor: 'rgb(213, 216, 220)',
      marginBottom: 20,
      borderWidth:0.4,
      elevation: 1,
      width:'100%'
    },
    Input:
    {
      fontWeight: 'bold',
      borderBottomColor :'rgba(0,0,0,0.5)',
      width :'100%',
      fontSize: 30,
      height: 100,
      lineHeight: 40,
      elevation: 3,
      backgroundColor: 'white',
      shadowColor: 'rgba(0,0,0,0.1)',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.7,
      shadowRadius: 10,
    },
    container: {
        flex : 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      plusMoins :{
          color :'rgb(48, 148, 148)',
          fontSize: 20,
      },
      counterButon :{
         marginLeft:20,
         marginRight:20,
       borderWidth:2,
       borderColor:'rgb(48, 148, 148)',
       alignItems:'center',
       justifyContent:'center',
       width:35,
       height:35,
       backgroundColor:'#fff',
       borderRadius:100,
      },
    searchContainer: {
        display: 'flex',
        borderWidth: 1,
        borderColor: '#b3b3b3',
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 2,
        borderRadius: 3,
        height: 40,
        marginTop: 28,
        marginLeft: 21,
        marginRight: 21,
    },
    searchIcon: {
        position: 'absolute',
        left: 18,
        top: 9,
    },
    textInput: {
      display: 'flex',
      marginTop: 11,
      marginLeft: 44,
      color: '#919191',
    },
    heartSaved:{
      position:'absolute',
      right:5,top:5,
      
    },
    heartNotSaved:{
      position:'absolute',
      right:5,top:5,
     
    },
    buttonContainer: {
      width:140,
      height:37,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      borderWidth:2,
      borderColor:'rgb(48, 148, 148)',
    
    },
    textFrnd: {
      display: 'flex',
      marginTop: 7,
      marginLeft: 23,
      color: 'rgb(48, 148, 148)',
    },
    
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop :30,
   
  },
  navItem: {
    alignItems: 'center',
    padding: 10,
   backgroundColor:'#fff'
    
  },
  navItemPress: {
    alignItems: 'center',
    padding: 10,
    backgroundColor:'rgb(48, 148, 148)',
    borderRadius:5
    
  },
  navTextPress:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
    
  },
  navText:{
    color:'rgb(48, 148, 148)',
    fontSize:15,
    fontWeight:'bold',
    opacity:0.7
  },
  textBold:{
    fontWeight: 'bold',
    fontSize:16
  },
  textGrand:{
    fontWeight: 'bold',
    fontSize:25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  spaceRow:{
    
    margin:10,
    height: 40,  
    flexDirection: 'row' ,
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#484848',
    paddingLeft: 20,
    paddingRight: 20,
  },
map :{
  left:0,
  right:0,
  top:0,
  position:'absolute'
}
 
  });
  