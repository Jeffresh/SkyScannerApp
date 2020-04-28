import {Button, Icon, Item, Text} from "native-base";
import styles from '~Components/SearchComponent/style';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useEffect, useState} from 'react';


export const DataPicker = ({value, onChange}:any):JSX.Element => {
  const[showDataPicker, setShowDataPicker] = useState(false)
  const[date, setDate] = useState(value)


  const handleDateBtnPress = () => {
      setShowDataPicker(true)
  }
  const handleDateChange = (event: Event, value: Date) => {
    setShowDataPicker(false)
    if(event.type === "set") {
      setDate(value)
    }
  }

  return(
    <>
      <Button transparent onPress={handleDateBtnPress} style={styles.input}>
        <Icon name="md-calendar" ios="ios-calendar" android='md-calendar'/>
        <Text style={styles.textDatePicker}> {(moment(date).format('YYYY-MM-DD'))}</Text>
      </Button>
      {showDataPicker && (
        <DateTimePicker
          mode={'date'}
          onChange={handleDateChange}
          minimumDate={new Date()}
          value={date}
        />)}
    </>
  )

}

