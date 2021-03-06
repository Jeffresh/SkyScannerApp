import React, {SetStateAction, useEffect, useState} from 'react'
import {Header as NBHeader, Left, Body, Right, Thumbnail, Icon, Button} from 'native-base'
import {PRIMARY_DARK, PROFILE, USER_INFO} from '~Constants';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '~Utils/storage';

import styles from './style';

export const Header = ({showBack}: any): JSX.Element => {
  const [userInfo, setUserInfo] = useState(null)
  const navigation = useNavigation()

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
    navigation.goBack();
  }

  const handleProfileImagePress = () => {
    navigation.navigate(PROFILE)
  }

  return (
    <NBHeader androidStatusBarColor={PRIMARY_DARK} style={styles.header}>
      <Left>
        {showBack && (
        <Icon
          name = "md-arrow-back"
          android="md-arrow-back"
          ios="ios-arrow-back"
          style={styles.backIcon}
          onPress={handleBackPress}
        />)}
      </Left>
      <Body/>
      <Right>
        <Button  onPress={handleProfileImagePress} transparent>
          <Thumbnail source={{ uri: userInfo && userInfo.photoUrl }} small />
        </Button>
      </Right>
    </NBHeader>
  );
}
