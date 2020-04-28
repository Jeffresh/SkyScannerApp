import React from 'react'
import {Spinner as NativeSpinner, Container, Content, Grid } from 'native-base'
import styles from './style'

export const Spinner = (): JSX.Element => {
  return(
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Grid style ={styles.grid}>
          <NativeSpinner color = 'green'/>
        </Grid>
      </Content>
    </Container>
  )
}
