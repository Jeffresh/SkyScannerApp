import React from 'react';
import { Card, CardItem, Text } from 'native-base';
import { Linking } from 'react-native'
import styles from './style';

export const Itinerary = ({Itinerary, flightNumber}:any,): JSX.Element => {

  const handleItineraryOptionPress = (name: string) => {
    const url = `https://google.com/search?q=${name}`
    Linking.openURL(url)
  }

  return (

    <Card>
      <CardItem style={styles.cardItem} button onPress={() => handleItineraryOptionPress(Itinerary.Name)}>
        <Text style={styles.placeTitle}>Flight #{flightNumber} </Text>
        <Text style={styles.label}>Id: {Itinerary.CarrierId}</Text>
        <Text style={styles.label}>Name: {Itinerary.Name}</Text>
      </CardItem>
    </Card>
    )
}
