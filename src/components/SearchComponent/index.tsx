import React, { useState , useEffect } from 'react';
import {Form, Input, Item, Label, Icon, DatePicker, Picker} from 'native-base';

export const SearchComponent = (props : any) => {
  const [originPlace, setOriginPlace] = useState('')
  const [destinationPlace, setDestinationPlace] = useState('')
  const [outBoundDate, setOutBoundDate] = useState({} as Date)
  const [inBoundDate, setInBoundDate] = useState({} as Date)
  const handleOriginPlaceChange = (origin:string) => setOriginPlace(origin)
  const handleDestinationPlaceChange = (destination:string) => setDestinationPlace(destination)
  const handleInBoundDateChange = (inboundDate: Date) => setInBoundDate(inboundDate)
  const handleOutBoundDateChange = (outboundDate: Date) => setOutBoundDate(outboundDate)

  return (
    <Form>
      <Item>
        <Icon ios='ios-home' android='md-home'/>
        <Input placeholder="Origin" value={originPlace} onChangeText={handleOriginPlaceChange}/>
      </Item>
      <Item>
        <Icon ios='ios-airplane' android='md-airplane'/>
        <Input placeholder="Destination" value={destinationPlace} onChangeText={handleDestinationPlaceChange}/>
      </Item>
      <Item>
        <Icon ios="ios-calendar" android='md-calendar'/>
        <DatePicker placeHolderText="Departure date" onDateChange={handleInBoundDateChange}/>
      </Item>
      <Item>
        <Icon ios="ios-calendar" android='md-calendar'/>
        <DatePicker placeHolderText="Arrival date (optional)" onDateChange={handleOutBoundDateChange}/>
      </Item>
      <Item>
        <Picker placeholder="Select your SIM" mode='dropdown'>
          <Picker.Item label="Adult's number" key="0"/>
          <Picker.Item label="1" key="1"/>
          <Picker.Item label="2" key="2"/>
          <Picker.Item label="3" key="3"/>
          <Picker.Item label="4" key="4"/>
          <Picker.Item label="5" key="5"/>
          <Picker.Item label="6" key="6"/>
          <Picker.Item label="7" key="7"/>
        </Picker>
        <Icon name='person'/>
      </Item>
      <Item>
        <Picker placeholder="Select your SIM" mode='dropdown'>
          <Picker.Item label="Children's number" key="0"/>
          <Picker.Item label="1" key="1"/>
          <Picker.Item label="2" key="2"/>
          <Picker.Item label="3" key="3"/>
          <Picker.Item label="4" key="4"/>
          <Picker.Item label="5" key="5"/>
          <Picker.Item label="6" key="6"/>
          <Picker.Item label="7" key="7"/>
        </Picker>
        <Icon name='person'/>
      </Item>
    </Form>
  )
}
