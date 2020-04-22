import React from 'react'
import {Container, Content, View, Text} from "native-base"
import styles from './style';

export const Profile = () => {

  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.imageContainer} >
          <Text> Avatar</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>Information</Text>
        </View>
      </Content>
    </Container>
  )
}
