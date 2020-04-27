import React, {useEffect} from 'react'
import {Spinner, Container, Content, Grid } from 'native-base'
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
