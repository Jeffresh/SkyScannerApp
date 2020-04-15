import React from 'react'
import { Image } from 'react-native'
import { Container, Content, Text, Grid, Button } from 'native-base'
import * as Google from 'expo-google-app-auth'
import styles from './style';
import { saveItem } from '../../utils/storage';

import { CLIENT_IDS } from '../../../clientIds'
const GOOGLE_IMAGE = require('../../../assets/google-icon.png')

const Login = ():JSX.Element => {

  const handleLoginPress = async () => {
    try{
      const result = await Google.logInAsync({
        iosClientId: CLIENT_IDS.iosClientId,
        androidClientId: CLIENT_IDS.androidClientId,
        iosStandaloneAppClientId: CLIENT_IDS.iosStandaloneAppClientId,
        androidStandaloneAppClientId: CLIENT_IDS.androidStandaloneAppClientId,
      })
      if(result.type === 'success') {
        const userResult = await saveItem('user-info', JSON.stringify(result.user))
        console.log(userResult)
      }
    } catch (e) {
      console.log(e)
    }
  }
  return(
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Grid style={styles.grid}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
          <Button light style={styles.googleBtn} onPress={handleLoginPress}>
            <Text>
              Google
            </Text>
            <Image source={GOOGLE_IMAGE} style={styles.googleIcon} />
          </Button>
        </Grid>
      </Content>
    </Container>

  )
}

export default Login
