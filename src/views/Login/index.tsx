import React from 'react'
import { Container, Content, Text, Grid, Button } from 'native-base'
import styles from './style';
const Login = ():JSX.Element => {
  return(
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Grid style={styles.grid}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
          <Button light style={styles.googleBtn}>
            <Text>
              Google
            </Text>
          </Button>
        </Grid>
      </Content>
    </Container>

  )
}

export default Login
