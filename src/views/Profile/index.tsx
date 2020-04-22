import React, {SetStateAction, useEffect, useState} from 'react'
import {Container, Content, View, Text, Spinner, Thumbnail, Button} from "native-base"
import styles from './style';
import {getItem, clearAll} from '../../utils/storage';
import {SECONDARY, USER_INFO, LOGIN} from '../../consts';

export const Profile = ({navigation}:any) => {
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

  const handleLogoutPress = async () => {
    await clearAll()
    navigation.navigate(LOGIN)
  }

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
          <Button style={styles.logoutBtn} onPress={handleLogoutPress}>
            <Text>log out</Text>
          </Button>
        </View>

      </Content>
    </Container>
  )
}
