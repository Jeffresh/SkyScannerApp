import React, {useEffect} from 'react'
import {View, Text} from 'react-native';
import { LOGIN } from '../../consts'

export default ({navigation}:any): JSX.Element => {
  useEffect(()=> {
    navigation.navigate(LOGIN)
  })
  return(
    <View><Text>Loading Page</Text></View>
  )
}
