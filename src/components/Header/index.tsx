import React from 'react'
import {Header as NBHeader, Left, Body, Right, Thumbnail} from 'native-base'
import { PRIMARY_DARK } from '../../consts';
import styles from './style';

export const Header = ({imageUri}: any): JSX.Element => {
  return (
    <NBHeader androidStatusBarColor={PRIMARY_DARK} style={styles.header}>
      <Left/>
      <Body/>
      <Right>
        <Thumbnail source={{ uri: imageUri && imageUri }} small/>
      </Right>
    </NBHeader>
  );
}
