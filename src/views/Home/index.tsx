import React, {useState, useEffect, SetStateAction} from 'react'
import {Container, Content, Text} from 'native-base';
import { Header } from '../../components/Header'

import { getItem } from '../../utils/storage';
import { USER_INFO } from '../../consts';

export const Home = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState(null)

  const loadUserInfo = async () => {
    let userInfo:SetStateAction<any> = await getItem(USER_INFO)
    setUserInfo(userInfo)
  }
  useEffect(() => {
    if(!userInfo){
      loadUserInfo()
    }
  },[userInfo])

  return (
    <Container>
      // @ts-ignore
      <Header imageUri={{uri: userInfo && userInfo.photoUrl }}/>
    </Container>
  )
}
