import React from 'react'
import {View, Text} from 'react-native';
import {getItineraries} from '../../redux/actions/itineraries';

export default (navigation : any): JSX.Element =>
{
  const {
    route: {
      params: {
        adultsNumber,
        childrenNumber,
        originPlace,
        destinationPlace,
        inBoundDate,
        outBoundDate,
      }
    }
  } = navigation

  return(
    <View>
      <Text>Results</Text>
    </View>
  )
}
