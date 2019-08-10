import React ,{ Component}from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import CardFlat from '../CardFlat'
export default class Experience extends Component {
    render(){ 
        return(
       
         
            <View>
  <Text style={styles.header}>
    Experience
  </Text>
  <CardFlat />
  </View>

);
}
}
const styles = StyleSheet.create({
   
    header: {
      fontSize: 20,
    },
})