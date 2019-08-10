import React,{Component } from 'react';
import { View ,Text,TextInput,TouchableOpacity,AppRegistry,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import style from '../../styles/style';
import CalendarStyle from '../../node_modules/react-native-calendar-select/CalendarStyle';
import Calendar from 'react-native-calendar-select';

export default class Parametre extends Component{
    static navigationOptions = { header: null }
   
    constructor(props)
    {
        super(props);
        var today = new Date(),
            date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            date2 = (today.getFullYear() +1) + '-' + today.getMonth() + '-' + today.getDate();
    this.state = {
      startDate: date1,
      endDate: date2
    };
    this.confirmDate = this.confirmDate.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
          }
   
          confirmDate({startDate, endDate}) {
            this.setState({
              startDate,
              endDate
            });
          }
          openCalendar(){
         this.calendar && this.calendar.open();
          }
    render(){

        let customI18n = {
            'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'text': {
              'start': 'Start Date',
              'end': 'End Date',
              'date': 'Date',
              'save': 'Confirm',
              'clear': 'Reset'
            },
            'date': 'DD / MM' 
          };
          // optional property, too.
          let color = {
            subColor: '#000000'
          };

        return(
           
              <View style={style.background} >
                  <View   style={{marginTop:30,
                margin:10,
                flexDirection: 'row' ,
                justifyContent: 'space-between',}}
                  >
                    <Icon  name="x" size={25} onPress={() => this.props.navigation.navigate('main')}/>
                  <TouchableOpacity activeOpacity={0.8} onPress={this.delete}>
                  <Text style={style.textBold}>Delete</Text>
                  </TouchableOpacity>
              </View>
              <View style={style.traitLong}/>
              <TouchableOpacity activeOpacity={0.8} onPress={this.openCalendar}>
               <View  style={style.spaceRow} >
                   <Text style={style.textBold}>Dates</Text>
                   <Text style={style.navText}>Edit</Text>
                </View>
                </TouchableOpacity>

             <Calendar
                openCalendar={this.openCalendar}
                i18n="en"
                ref={(calendar) => {this.calendar = calendar;}}
                customI18n={customI18n}
                color={color}
                format="YYYY-MM-DD"
                minDate={this.state.startDate}
                maxDate={this.state.endDate}
                onConfirm={this.confirmDate}
                />

                <View style={style.traitLong}/>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('voy')}>
            <View    style={style.spaceRow}>
            <Text style={style.textBold}>Voyageurs</Text>
            <Text style={style.navText}>Edit</Text>
         </View>
         
         </TouchableOpacity>
         <View style={style.traitLong}/>
          <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'center',flex:0.17,
          position:'relative',top:290}} >
                <TouchableOpacity activeOpacity={0.8}
                 style={CalendarStyle.confirmContainer} 
                 onPress={()=>{this.okButton,this.props.navigation.goBack()}} >
                 <Text  
                 style={ style.confirmText}> OK </Text>                    
                </TouchableOpacity>
                </View>
         </View>
    
        );

    }
}
