import React, {useEffect} from 'react'
import {Container, Content, Grid} from 'native-base';
import { Header } from '~Components/Header'
import { SearchComponent } from '~Components/SearchComponent';
import genericStyles from '~Styles'
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
      <Content contentContainerStyle={genericStyles.centeredContent}>
        <Grid style={genericStyles.centeredGrid}>
          <SearchComponent navigation={navigation}/>
        </Grid>
      </Content>
    </Container>
  )
}
