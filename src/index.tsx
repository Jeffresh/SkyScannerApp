import React, {useEffect, useState} from 'react';
import { RootStack as Routes } from './routes';
import { Provider } from 'react-redux'
import  Store  from '~Store'
import * as Font from 'expo-font'
import {ACCESS_TOKEN, ROBOTO_FONT} from '~Constants';
import {getItem} from '~Utils/storage';
import LoadingPage from '~Views/LoadingPage';
const store = Store()

export default (): JSX.Element => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [tokenFetched, setTokenFetched] = useState(false)
  const [userToken, setUserToken] = useState(null as unknown)

  const fetchToken = async () => {
    const token = await getItem(ACCESS_TOKEN)
    setTokenFetched(true)
    setUserToken(token)
    console.log('Token Fetched')
    console.log(token)
    return token
  }
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
    if(!tokenFetched)
      fetchToken()
  }, [fontsLoaded, tokenFetched, userToken])


  if(!fontsLoaded || !tokenFetched) {
    return <LoadingPage />
  }
  return (
    <Provider store={store}>
      <Routes token={userToken}/>
    </Provider>
  )
}
