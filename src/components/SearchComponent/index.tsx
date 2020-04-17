import React, { useState , useEffect } from 'react';
import { Form, Input, Item, Label, Icon} from 'native-base';

export const SearchComponent = (props : any) => {
  return (
    <Form>
      <Item>
        <Icon name='ios-home'/>
        <Input placeholder="Origin"/>
      </Item>
      <Item>
        <Icon name='ios-airplane'/>
        <Input placeholder="Destination"/>
      </Item>
    </Form>
  )
}
