import React, {useEffect} from 'react'
import { View, Text, Spinner, Container, Content, Grid } from 'native-base'
import { LOGIN } from '../../consts'
import styles from './style'

export default ({navigation}:any): JSX.Element => {
  useEffect(()=> {
    navigation.navigate(LOGIN)
  })
  return(
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Grid style ={styles.grid}>
          <Spinner color = 'green'/>
        </Grid>
      </Content>
    </Container>
  )
}
