import React, { Fragment, useState, useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {getItineraries} from '../../redux/actions/itineraries';
import {CardItem, Container, Content, Text} from 'native-base';
import { Itinerary } from '../../components/Itinerary'
import { Header } from '../../components/Header';
import styles from './style';


export default (navigation : any): JSX.Element =>
{
  const dispatch = useDispatch()

  const [hasFetched, setHasFetched] = useState(false)
  const itineraries = useSelector(state => state.itineraries.itineraries)
  console.log(itineraries)

  const renderItineraries = ():JSX.Element => {
    if(itineraries && itineraries.Carriers) {
       return itineraries.Carriers.map((itinerary: any, index: any) => (
        <Itinerary key={index} Itinerary={itinerary} flightNumber={index+1}/>
        ))
    }
      return <></>

  }

  const renderFlightStations = ():JSX.Element => {
    if(itineraries && itineraries.Places) {
      return (
        <Fragment>
          <CardItem style={styles.cardItem}>
            <Text style={styles.placeTitle}>Origin Place</Text>
            <Text style={styles.label}>City Name:{itineraries.Places[0].CityName}</Text>
            <Text style={styles.label}>Airport :{itineraries.Places[0].Name}</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.placeTitle}>Destination Place: </Text>
            <Text style={styles.label}>City Name:{itineraries.Places[1].CityName}</Text>
            <Text style={styles.label}>Airport :{itineraries.Places[1].Name}</Text>
          </CardItem>
        </Fragment>
      )
    }
    return <></>

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
          {renderFlightStations()}
        </Content>
        <Content>
          {renderItineraries()}
        </Content>
      </Container>
  )
}
