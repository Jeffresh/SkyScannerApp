import React, {useEffect, useState} from 'react';
import { RootStack as Routes } from './routes';
import { Provider } from 'react-redux'
import Store from './store'
import * as Font from 'expo-font'
import {Spinner} from 'native-base';
import { ROBOTO_FONT } from './constants';

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
    return <Spinner color="red"/>
  }
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  )
}
