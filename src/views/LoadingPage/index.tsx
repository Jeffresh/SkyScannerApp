import React, {useEffect} from 'react'
import {Spinner, Container, Content, Grid } from 'native-base'
import {ACCESS_TOKEN, HOME, LOGIN} from '~Constants';
import { getItem } from '~Utils/storage'
import styles from './style'

export default (): JSX.Element => {
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
