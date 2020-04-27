import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import {
  LOGIN,
  HOME,
  RESULTS,
  PROFILE,
} from '~Constants';
import  Login from '~Views/Login'
import { Home } from '~Views/Home'
import Results from '~Views/Results'
import { Profile } from '~Views/Profile'
import {useSelector} from 'react-redux';
import { RootState } from '~Store/reducers'

export const RootStack = ():JSX.Element => {
  const Stack = createStackNavigator()

  const userToken = useSelector((state : RootState) => state.auth.userToken)
  console.log('usertoken')
  console.log(userToken)

  const unLoggedStack = () => {
    return (
          <Stack.Screen
            name={LOGIN}
            component={Login}
          />
          )
  }

  const loggedStack = () => {
    return (
      <>
      <Stack.Screen
        name={HOME}
        component={Home}
      />
    <Stack.Screen
      name={RESULTS}
      component={Results}
    />
    <Stack.Screen
      name={PROFILE}
      component={Profile}
    />
    </>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
      {userToken ? loggedStack(): unLoggedStack()}
      </Stack.Navigator>
    </ NavigationContainer>
  )
}

