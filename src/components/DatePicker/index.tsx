import {Button, Icon, Text} from "native-base";
import styles from './style';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import moment from 'moment';


interface DataPickerProps {
  value: Date,
  onChange?: (date: Date) => void,
  minimumValue?:Date
}

export const DataPicker: React.FC<DataPickerProps> = ({value, onChange, minimumValue}: DataPickerProps) => {
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
      <Button transparent onPress={handleDateBtnPress} style={styles.btnDatePicker}>
        <Icon name="md-calendar" ios="ios-calendar" android='md-calendar' style={styles.icon}/>
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

