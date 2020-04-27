import React, {useState} from 'react'
import { Image } from 'react-native'
import { Container, Content, Text, Grid, Button } from 'native-base'
import * as Google from 'expo-google-app-auth'
import styles from './style';
import { saveItem } from '~Utils/storage';
import environment from '../../../env'
import {ACCESS_TOKEN, USER_INFO, GOOGLE_SUCCESS_MESSAGE} from '~Constants';
const GOOGLE_IMAGE = require('~Assets/google-icon.png')
const { iosClientId, androidClientId, iosStandaloneAppClientId, androidStandaloneAppClientId } = environment()
import genericStyles from '~Styles'
import {useDispatch} from 'react-redux';
import {signIn} from '~Store/actions/auth';


const Login = ():JSX.Element => {
  const dispatch = useDispatch()

  const handleLoginPress = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId,
        androidClientId,
        iosStandaloneAppClientId,
        androidStandaloneAppClientId,
      })

      if (result.type === GOOGLE_SUCCESS_MESSAGE) {
        const userResult = await saveItem(USER_INFO, JSON.stringify(result.user))
        if(result.accessToken !== null) {
          const tokenResult = await saveItem(ACCESS_TOKEN, result.accessToken)
          if(userResult && tokenResult) {
            dispatch(signIn({token: result.accessToken}))
          }
          else {
            alert('Error: failed singing in')
          }
        }
        else {
          alert('error: Null access token')
        }
      } else {
        alert('Error: Cannot connect with google.')
      }
    }
    catch (e) {
      alert(e)
    }

  }

    return (
      <Container>
        <Content contentContainerStyle={[genericStyles.centeredContent, styles.content]}>
          <Grid style={[genericStyles.centeredGrid, styles.grid]}>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
            <Button light style={styles.googleBtn} onPress={handleLoginPress}>
              <Text>Google</Text>
              <Image source={GOOGLE_IMAGE} style={styles.googleIcon}/>
            </Button>
          </Grid>
        </Content>
      </Container>
    )
  }


export default Login
