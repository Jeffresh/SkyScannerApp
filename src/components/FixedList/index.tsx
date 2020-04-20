import React from 'react';
import { Container, Content, List, ListItem, Text, Spinner } from 'native-base';

export const FixedList = ({places}:any):JSX.Element => {
  if(!places || !places.length){
    return(
      <Spinner size={30} />
    )
  }
  return (
    <Container>
      <Content>
        <List>
          {places && places.map((place:any, index:number)=>(
            <ListItem key={index}>
              <Text>{place.PlaceName}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}
