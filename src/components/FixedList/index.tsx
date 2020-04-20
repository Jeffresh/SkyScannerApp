import React from 'react';
import { Container, Content, List, ListItem, Text, Spinner } from 'native-base';
import {PRIMARY} from '../../consts';
import styles from './style';

export const FixedList = ({places, containerStyle, onItemPress}:any ):JSX.Element => {
  if(!places || !places.length){
    return(
      <Spinner color={PRIMARY}/>
    )
  }

  return (
    <Container style={[styles.container, containerStyle]}>
      <Content>
        <List>
          {places && places.map((place:any, index:number)=>(
            <ListItem key={index} onPress={() => onItemPress(place)}>
              <Text>{place.PlaceName}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}
