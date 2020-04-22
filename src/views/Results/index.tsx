import React, { Fragment, useState, useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {getItineraries} from '../../redux/actions/itineraries';
import {CardItem, Container, Content, Grid, Spinner, Text} from 'native-base';
import { Itinerary } from '../../components/Itinerary'
import { Header } from '../../components/Header';
import styles from './style';
import {SECONDARY} from '../../consts';
import genericStyles from '../../styles'


export default (navigation : any): JSX.Element =>
{
  const dispatch = useDispatch()

  const [hasFetched, setHasFetched] = useState(false)
  const itineraries = useSelector(state => state.itineraries.itineraries)
  const error = useSelector(state => state.itineraries.error)

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
  console.log("Itineraries")
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

  const renderContent = () => {
    let messageContent;

    if(!itineraries && !error) {
      messageContent = (
        <Fragment>
          <Spinner  color={SECONDARY}/>
          <Text> Fetching results...</Text>
        </Fragment>
      )
    }
    else if(itineraries && !itineraries.Carriers.length) {
      messageContent = <Text> :( Results not found </Text>

    }
    else if(error) {
      messageContent = <Text> Oops, something went wrong. Try again</Text>
    }

      if (!messageContent) {
        return (
          <Fragment>
            <Content>
              {renderFlightStations()}
            </Content>
            <Content>
              {renderItineraries()}
            </Content>
          </Fragment>
        )
      }

    return (
      <Content contentContainerStyle={genericStyles.centeredGrid}>
        <Grid style={[genericStyles.centeredGrid, styles.grid]}>
          {messageContent}
        </Grid>
      </Content>
    )

  }


  return(
      <Container>
        <Header />
          {renderContent()}
      </Container>
  )
}
