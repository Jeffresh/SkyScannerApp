import React from 'react';
import { Card, CardItem, Text } from 'native-base';
import styles from './style';

export const Itinerary = ({Itinerary}:any): JSX.Element => {

  console.log(Itinerary)

  return (
    <Card>
      <CardItem style={styles.cardItem}>
        <Text style={styles.placeTitle}>Flight </Text>
        <Text style={styles.label}>Id: {Itinerary.CarrierId}</Text>
        <Text style={styles.label}>Name: {Itinerary.Name}</Text>
      </CardItem>
    </Card>
    )
}
