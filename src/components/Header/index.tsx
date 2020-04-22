import React, {SetStateAction, useEffect, useState} from 'react'
import {Header as NBHeader, Left, Body, Right, Thumbnail, Icon} from 'native-base'
import { PRIMARY_DARK, USER_INFO } from '../../consts';
import { getItem } from '../../utils/storage';
import {NavigationActions} from 'react-navigation'

import styles from './style';

export const Header = ({showBack, navigation}: any): JSX.Element => {
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

  const handleBackPress = () => {
    console.log(navigation)
    navigation.navigation.goBack();
  }


  return (
    <NBHeader androidStatusBarColor={PRIMARY_DARK} style={styles.header}>
      <Left>
        {showBack && (
        <Icon
          android="md-arrow-back"
          ios="ios-arrow-back"
          style={styles.backIcon}
          onPress={handleBackPress}
        />)}
      </Left>
      <Body/>
      <Right>
        <Thumbnail source={{ uri: userInfo && userInfo.photoUrl }} small/>
      </Right>
    </NBHeader>
  );
}
