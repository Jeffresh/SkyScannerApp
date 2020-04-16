import React from 'react'
import { Image } from 'react-native'
import { Container, Content, Text, Grid, Button } from 'native-base'
import * as Google from 'expo-google-app-auth'
import styles from './style';
import { saveItem } from '../../utils/storage';

import {ACCESS_TOKEN, USER_INFO, GOOGLE_SUCCESS_MESSAGE} from '../../consts';
import { CLIENT_IDS } from '../../../clientIds'
const GOOGLE_IMAGE = require('../../../assets/google-icon.png')

const Login = ():JSX.Element => {

  const handleLoginPress = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: CLIENT_IDS.androidClientId,
        androidStandaloneAppClientId: CLIENT_IDS.androidStandaloneAppClientId,
      })

      if (result.type === GOOGLE_SUCCESS_MESSAGE) {
        console.log('Success!')
        console.log(result.user)
        try {
          const userResult = await saveItem(USER_INFO, JSON.stringify(result.user))
          if(result.accessToken !== null) {
            const tokenResult = await saveItem(ACCESS_TOKEN, result.accessToken)
          }
          else {
            alert('error: Null access token')
          }
        } catch (e) {
          alert(e)
        }
      } else {
        console.log('Not success')
      }
    }
    catch (e) {
      alert(e)
    }

  }
  return(
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Grid style={styles.grid}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
          <Button light style={styles.googleBtn} onPress={handleLoginPress}>
            <Text> Google </Text>
            <Image source={GOOGLE_IMAGE} style={styles.googleIcon} />
          </Button>
        </Grid>
      </Content>
    </Container>
  )
}

export default Login
