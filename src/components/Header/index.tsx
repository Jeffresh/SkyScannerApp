import React from 'react'
import {Header as NBHeader, Left, Body, Right, Thumbnail} from 'native-base'
export const Header = ({imageUri}: any): JSX.Element => {

  return (
    <NBHeader>
      <Left/>
      <Body/>
      <Right>
        <Thumbnail source={{ uri: imageUri && imageUri }} small/>
      </Right>
    </NBHeader>
  );
}
