import React from 'react';
import { Text, View, Button ,TouchableHighlight} from 'react-native';
import Calendar from 'react-native-calendar-select';

import style from '../styles/style';

export default class App extends React.Component {
  static navigationOptions = { header: null }
  constructor (props) {
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
  
  render() {
    
    // It's an optional property, I use this to show the structure of customI18n object.
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
    
    return (
     
      <View style={style.container}  >
      {this.openCalendar()}
      
         <View style={{width: 360 ,height :100 }} >
           <Button 
            title="Dates" onPress={this.openCalendar} />
       </View>
   
     
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
      </View>
     
     
    );
  }
}
