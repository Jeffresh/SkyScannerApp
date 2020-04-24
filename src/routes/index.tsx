import React, {useEffect, useState} from 'react';
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

export const RootStack = ({token}:any):JSX.Element => {
  const [isLogged, setIsLogged] = useState(token)
  const Stack = createStackNavigator()

  console.log('Route')
  console.log(isLogged)

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
    <NavigationContainer independent={true}>
      <Stack.Navigator headerMode='none'>
      {isLogged ? loggedStack(): unLoggedStack()}
      </Stack.Navigator>
    </ NavigationContainer>
  )
}

