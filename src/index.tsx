import React, {useEffect, useState} from 'react';
import { RootStack as Routes } from './routes';
import { Provider } from 'react-redux'
import Store from './store'
import * as Font from 'expo-font'
import {Container, Content, Grid, Spinner, Text} from 'native-base';
import { ROBOTO_FONT } from './constants';
import styles from './styles'

const store = Store()

export default (): JSX.Element => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto': ROBOTO_FONT.roboto,
      'Roboto_medium': ROBOTO_FONT.robotoMedium,
    })
    setFontsLoaded(true)
  }
  useEffect( () => {
    if(!fontsLoaded){
      loadFonts()
    }
  }, [fontsLoaded])


  if(!fontsLoaded) {
    return (
      <Container>
        <Content contentContainerStyle={styles.centeredContent}>
          <Grid style ={styles.centeredGrid}>
            <Spinner color = 'green'/>
          </Grid>
        </Content>
      </Container>
    )
  }
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  )
}
