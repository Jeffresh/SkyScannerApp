import React from 'react'
import {Container, Content, View, Text} from "native-base"
import styles from './style';

export const Profile = () => {

  return (
    <Container>
      <Content>
        <View >
          <Text> Avatar</Text>
        </View>
        <View>
          <Text>Information</Text>
        </View>
      </Content>
    </Container>
  )
}
