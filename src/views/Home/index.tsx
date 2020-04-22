import React, {useEffect} from 'react'
import {Container, Content, Text, Grid} from 'native-base';
import { Header } from '../../components/Header'
import { SearchComponent } from '../../components/SearchComponent';
import genericStyles from '../../styles'
import {BackHandler} from 'react-native';

export const Home = ({navigation}:any): JSX.Element => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleHardwareBackPress)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress',()=>false)
    }
  })

  const handleHardwareBackPress = () => true;

  return (
    <Container>
      <Header navigation={navigation} />
      <Content style={genericStyles.centeredContent}>
        <Grid style={genericStyles.centeredGrid}>
          <SearchComponent navigation={navigation}/>
        </Grid>
      </Content>
    </Container>
  )
}
