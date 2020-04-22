import React, {SetStateAction, useEffect, useState} from 'react'
import {Container, Content, View, Text, Spinner, Thumbnail} from "native-base"
import styles from './style';
import {getItem} from '../../utils/storage';
import {SECONDARY, USER_INFO} from '../../consts';

export const Profile = () => {
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

  if(!userInfo) {
    return (
      <Spinner color={SECONDARY}/>
    )
  }

  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.imageContainer} >
          <Thumbnail source={{uri: userInfo.photoUrl}} style={styles.profileImage} />
        </View>
        <View style={styles.infoContainer}>
          <Text>{userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      </Content>
    </Container>
  )
}
