import {Button, Icon, Text} from "native-base";
import styles from '~Components/SearchComponent/style';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import moment from 'moment';


interface DataPickerProps {
  value: Date,
  onChange?: (date: Date) => void,
  minimumValue?:Date
}

export const DataPicker = ({value, onChange, minimumValue}:DataPickerProps):JSX.Element => {
  const[showDataPicker, setShowDataPicker] = useState(false)

  const handleDateBtnPress = () => {
      setShowDataPicker(true)
  }
  const handleDateChange = (event: Event, value: Date) => {
    setShowDataPicker(false)
    if(event.type === "set") {
      if (onChange) {
        onChange(value)
      }
    }
  }

  return(
    <>
      <Button transparent onPress={handleDateBtnPress} style={styles.input}>
        <Icon name="md-calendar" ios="ios-calendar" android='md-calendar'/>
        <Text style={styles.textDatePicker}> {(moment(value).format('YYYY-MM-DD'))}</Text>
      </Button>
      {showDataPicker && (
        <DateTimePicker
          mode={'date'}
          onChange={handleDateChange}
          minimumDate={minimumValue}
          value={value}
        />)}
    </>
  )

}

