import React, {SetStateAction, useEffect, useState} from 'react'
import {Container, Content, View, Text, Spinner, Thumbnail, Button, Icon} from "native-base"
import styles from './style';
import {getItem, clearAll} from '~Utils/storage';
import {SECONDARY, USER_INFO } from '~Constants';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {signOut} from '~Store/actions/auth';

export const Profile = () => {
  const [userInfo, setUserInfo] = useState(null)
  const navigation = useNavigation();
  const dispatch = useDispatch()

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
    dispatch(signOut())
    //TODO implements using redux
  }

  const handleBackButtonPress = () => navigation.goBack()


  if(!userInfo) {
    return (
      <Spinner color={SECONDARY}/>
    )
  }

  return (
    <Container>
      <Content contentContainerStyle={styles.content} >
        <View style={styles.imageContainer} >
          <Button transparent style={styles.backButton} onPress={handleBackButtonPress}>
            <Icon name = "md-arrow-back"
              android = "md-arrow-back"
              ios="ios-arrow-back"
              style={styles.backIcon}
            />
          </Button>

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
