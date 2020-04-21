import React from 'react';
import { Card, CardItem, Text } from 'native-base';

export const Itinerary = ({Itinerary}:any): JSX.Element => {

  console.log(Itinerary)

  return (
    <Card>
      <CardItem header>
        <Text>Id: {Itinerary.CarrierId}</Text>
        <Text>Name: {Itinerary.Name}</Text>
      </CardItem>
    </Card>
    )
}
