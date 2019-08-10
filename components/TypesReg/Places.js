import React ,{ Component}from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Experience extends Component {
    render(){ 
        return(
            <View>
  <Text style={styles.header}>
   Places
  </Text>
  </View>
);
}
}
const styles = StyleSheet.create({
   
    header: {
      fontSize: 20,
    },
})