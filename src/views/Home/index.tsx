import React, {useState, useEffect, SetStateAction} from 'react'
import {Container, Content, Text, Grid} from 'native-base';
import { Header } from '../../components/Header'
import { getItem } from '../../utils/storage';
import { USER_INFO } from '../../consts';
import { SearchComponent } from '../../components/SearchComponent';
import genericStyles from '../../styles'

export const Home = ({navigation}:any): JSX.Element => {
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
      <Content style={genericStyles.centeredContent}>
        <Grid style={genericStyles.centeredGrid}>
          <SearchComponent navigation={navigation}/>
        </Grid>
      </Content>
    </Container>
  )
}
