import React  from 'react'
import {Container, Content, Text, Grid} from 'native-base';
import { Header } from '../../components/Header'
import { SearchComponent } from '../../components/SearchComponent';
import genericStyles from '../../styles'

export const Home = ({navigation}:any): JSX.Element => {

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
