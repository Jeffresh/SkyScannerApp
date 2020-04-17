import React, { useState , useEffect } from 'react';
import { Form, Input, Item, Label} from 'native-base';

export const SearchComponent = (props : any) => {
  return (
    <Form>
      <Item>
        <Input placeholder="Origin"/>
      </Item>
      <Item>
        <Input placeholder="Destination"/>
      </Item>
    </Form>
  )
}
