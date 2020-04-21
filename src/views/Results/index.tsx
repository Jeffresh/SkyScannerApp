import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {View, Text} from 'react-native';
import {getItineraries} from '../../redux/actions/itineraries';
import {Container, Content} from 'native-base';
import { Itinerary } from '../../components/Itinerary'
import { Header } from '../../components/Header';

export default (navigation : any): JSX.Element =>
{
  const dispatch = useDispatch()

  const [hasFetched, setHasFetched] = useState(false)
  const itineraries = useSelector(state => state.itineraries.itineraries)
  console.log(itineraries)
  const renderItineraries = ():JSX.Element => {
    if(itineraries && itineraries.Carriers) {
       return itineraries.Carriers.map((itinerary: any, index: any) => (
        <Itinerary key={index} Itinerary={itinerary}/>
        ))
    }
    else{
      return <></>
    }
  }

  console.log(itineraries)

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

  useEffect(() => {
    if(!hasFetched) {
      dispatch(getItineraries({
        adultsNumber,
        childrenNumber,
        originPlace,
        destinationPlace,
        inBoundDate,
        outBoundDate
      }))
      setHasFetched(true)
    }
  })
  return(
      <Container>
        <Header />
        <Content>
          {renderItineraries()}
        </Content>
      </Container>
  )
}
