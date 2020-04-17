import React, { useState, useEffect } from 'react';
import {Form, Input, Item, Label, Icon, DatePicker, Picker, Button, Text} from 'native-base';
import styles from './style';

export const SearchComponent = (props : any) => {
  const [originPlace, setOriginPlace] = useState('')
  const [destinationPlace, setDestinationPlace] = useState('')
  const [outBoundDate, setOutBoundDate] = useState({} as Date)
  const [inBoundDate, setInBoundDate] = useState({} as Date)
  const [adultsNumber, setAdultsNumber] = useState('0')
  const [childrenNumber, setChildrenNumber] = useState('0')

  const handleOriginPlaceChange = (origin:string) => setOriginPlace(origin)
  const handleDestinationPlaceChange = (destination:string) => setDestinationPlace(destination)

  const handleInBoundDateChange = (inboundDate: Date) => setInBoundDate(inboundDate)
  const handleOutBoundDateChange = (outboundDate: Date) => setOutBoundDate(outboundDate)

  const handleAdultsNumberChange = (adultsNumber: string) => setAdultsNumber(adultsNumber)
  const handleChildrenNumberChange = (childrenNumber: string) => setChildrenNumber(childrenNumber)

  return (
    <Form style={styles.form}>
      <Item>
        <Icon ios='ios-home' android='md-home'/>
        <Input placeholder="Origin" value={originPlace} onChangeText={handleOriginPlaceChange} style={styles.input}/>
      </Item>
      <Item>
        <Icon ios='ios-airplane' android='md-airplane'/>
        <Input placeholder="Destination" value={destinationPlace} onChangeText={handleDestinationPlaceChange} style={styles.input}/>
      </Item>
      <Item style={styles.datesContainer}>
        <Icon ios="ios-calendar" android='md-calendar'/>
        <DatePicker placeHolderText="Departure date" onDateChange={handleInBoundDateChange}/>

        <Icon ios="ios-calendar" android='md-calendar'/>
        <DatePicker placeHolderText="Arrival date (optional)" onDateChange={handleOutBoundDateChange}/>
      </Item>
      <Item style={styles.pickersContainer}>
        <Icon name='person'/>
        <Picker
          placeholder="Adult's number"
          mode='dropdown'
          selectedValue={adultsNumber}
          onValueChange={handleAdultsNumberChange}
        >
          <Picker.Item label="Adult's number" key="0"/>
          <Picker.Item label="1" value="1"/>
          <Picker.Item label="2" value="2"/>
          <Picker.Item label="3" value="3"/>
          <Picker.Item label="4" value="4"/>
          <Picker.Item label="5" value="5"/>
          <Picker.Item label="6" value="6"/>
          <Picker.Item label="7" value="7"/>
        </Picker>
        <Icon name='person'/>
        <Picker
          placeholder="Children number"
          mode='dropdown'
          selectedValue={childrenNumber}
          onValueChange={handleChildrenNumberChange}
        >
          <Picker.Item label="Children's number" value="0"/>
          <Picker.Item label="1" value="1"/>
          <Picker.Item label="2" value="2"/>
          <Picker.Item label="3" value="3"/>
          <Picker.Item label="4" value="4"/>
          <Picker.Item label="5" value="5"/>
          <Picker.Item label="6" value="6"/>
          <Picker.Item label="7" value="7"/>
        </Picker>
      </Item>
      <Button style={styles.searchBtn}>
        <Icon name="search" style={styles.searchIcon}/>
        <Text style={styles.searchBtnText}>Search</Text>
      </Button>
    </Form>
  )
}
