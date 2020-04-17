import React, {useState, useEffect, SetStateAction} from 'react'
import {Container, Content, Text} from 'native-base';
import { Header } from '../../components/Header'
import { getItem } from '../../utils/storage';
import { USER_INFO } from '../../consts';
import { SearchComponent } from '../../components/SearchComponent';

export const Home = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState(null)

  const loadUserInfo = async () => {
    let userLogged: SetStateAction<any> = await getItem(USER_INFO)
    userLogged = JSON.parse(userLogged)
    setUserInfo(userLogged)
  }
  useEffect(() => {
    if(!userInfo) {
      loadUserInfo()
    }
  },[userInfo])

  return (
    <Container>
      <Header imageUri={ userInfo && userInfo.photoUrl }/>
      <Content>
        <SearchComponent/>
      </Content>
    </Container>
  )
}
