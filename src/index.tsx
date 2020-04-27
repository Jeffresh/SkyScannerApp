import React, {useEffect, useState} from 'react';
import { RootStack as Routes } from './routes';
import { Provider } from 'react-redux'
import  Store  from '~Store'
import * as Font from 'expo-font'
import {ACCESS_TOKEN, ROBOTO_FONT} from '~Constants';
import {getItem} from '~Utils/storage';
import LoadingPage from '~Views/LoadingPage'
import {useDispatch, useSelector } from 'react-redux';
import {authReducer} from '~Store/reducers/auth';
import {RESTORE_TOKEN} from '~Store/constants/actionTypes';
import {restoreToken} from '~Store/actions/auth';

export default (): JSX.Element => {

  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [tokenFetched, setTokenFetched] = useState(false)
  const dispatch = useDispatch()

  const fetchToken = async () => {
    const token = await getItem(ACCESS_TOKEN)
    setTokenFetched(true)
    if(token)
    dispatch(restoreToken({token: token}))
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
  }, [fontsLoaded, tokenFetched])


  if(!fontsLoaded || !tokenFetched) {
    return <LoadingPage />
  }
  return (
      <Routes/>
  )
}
