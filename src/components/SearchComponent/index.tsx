import React, { useState , useEffect } from 'react';
import {Form, Input, Item, Label, Icon, DatePicker} from 'native-base';

export const SearchComponent = (props : any) => {
  return (
    <Form>
      <Item>
        <Icon ios='ios-home' android='md-home'/>
        <Input placeholder="Origin"/>
      </Item>
      <Item>
        <Icon ios='ios-airplane' android='md-airplane'/>
        <Input placeholder="Destination"/>
      </Item>
      <Item>
        <Icon ios="ios-calendar" android='md-calendar'/>
        <DatePicker placeHolderText="Departure date"
        />
      </Item>
      <Item>
        <Icon ios="ios-calendar" android='md-calendar'/>
        <DatePicker placeHolderText="Arrival date (optional)"
        />
      </Item>
    </Form>
  )
}
