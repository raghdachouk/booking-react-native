
import React,{ Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import Logement from '../TypesReg/Logement'
import Places from '../TypesReg/Places'
import Experience from '../TypesReg/Experience'
import style from '../../styles/style';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle1: true,
      toggle2: false,
      toggle3: false
    }
}
  render(){
    return(
      <View>
  <NativeRouter>
    <View style={styles.container} >
      <View style={style.nav}>
        <Link
        onPress={()=> this.setState({toggle1: true ,toggle2:false,toggle3:false})}
          to="/"
          underlayColor='#f0f4f7'
          style={[style.navItem,this.state.toggle1 && style.navItemPress]}>
         
            <Text style={[style.navText,this.state.toggle1 && style.navTextPress]} 
            >Experience</Text>
       
        </Link>
        <Link 
        onPress={()=> this.setState({toggle2: true,toggle3:false,toggle1:false})}
          to="/Logement"
          underlayColor='#f0f4f7'
          style={[style.navItem,this.state.toggle2 && style.navItemPress]}>
            <Text style={[style.navText,this.state.toggle2 && style.navTextPress]}
             >Logement</Text>
        </Link>
        <Link
        onPress={()=> this.setState({toggle3: true,toggle1:false,toggle2:false})}
          to="/Places"
          underlayColor='#f0f4f7'
          style={[style.navItem,this.state.toggle3 && style.navItemPress]} >
            <Text style={[style.navText,this.state.toggle3 && style.navTextPress]}
              >Places</Text>
        </Link>
      </View>
      <View  style={style.traitLong} />
      <Route exact path="/" component={Experience} />
      <Route path="/Logement" component={Logement}/>
      <Route path="/Places" component={Places}/>
    </View>
   

  </NativeRouter>
  </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
 
})

