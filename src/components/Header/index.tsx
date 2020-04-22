import React, {SetStateAction, useEffect, useState} from 'react'
import {Header as NBHeader, Left, Body, Right, Thumbnail, Icon} from 'native-base'
import { PRIMARY_DARK, USER_INFO } from '../../consts';
import { getItem } from '../../utils/storage';

import styles from './style';

export const Header = ({imageUri}: any): JSX.Element => {
  const [userInfo, setUserInfo] = useState(null)

  const loadUserInfo = async () => {
    let userLogged: SetStateAction<any> = await getItem(USER_INFO)
    userLogged = JSON.parse(userLogged)
    setUserInfo(userLogged)
  }
  useEffect(() => {
    if(!userInfo) {
      loadUserInfo()
    }
  },[userInfo])


  return (
    <NBHeader androidStatusBarColor={PRIMARY_DARK} style={styles.header}>
      <Left>
        <Icon android="md-arrow-back" ios="ios-arrow-back" style={styles.backIcon}/>
      </Left>
      <Body/>
      <Right>
        <Thumbnail source={{ uri: userInfo && userInfo.photoUrl }} small/>
      </Right>
    </NBHeader>
  );
}
