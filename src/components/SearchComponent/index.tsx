import React, { useState } from 'react';
import {Form, Input, Item, Icon, DatePicker, Picker, Button, Text} from 'native-base';
import moment from 'moment'
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import {getLocations} from '~Store/actions/itineraries';
import { FixedList } from '~Components/FixedList';
import {RESULTS} from '~Constants';
import {RootState} from '~Store/reducers';


export const SearchComponent = ({navigation} : any) => {
  const dispatch = useDispatch()
  const places  = useSelector((state :RootState) => state.itineraries.places)

  const [originPlace, setOriginPlace] = useState({PlaceName:''} as any)
  const [destinationPlace, setDestinationPlace] = useState({PlaceName:''} as any)
  const [outBoundDate, setOutBoundDate] = useState({} as Date)
  const [inBoundDate, setInBoundDate] = useState({} as Date)
  const [adultsNumber, setAdultsNumber] = useState('0')
  const [childrenNumber, setChildrenNumber] = useState('0')
  const [showOriginPlaceList, setShowOriginPlaceList] = useState(false)
  const [showDestinationPlaceList, setShowDestinationPlaceList] = useState(false)

  const handleOriginPlaceChange = (origin:string) => setOriginPlace({PlaceName: origin})
  const handleDestinationPlaceChange = (destination:string) => setDestinationPlace( {PlaceName: destination})

  const handleOutBoundDateChange = (outboundDate: Date) => setOutBoundDate(outboundDate)
  const handleInBoundDateChange = (inboundDate: Date) => setInBoundDate(inboundDate)

  const handleAdultsNumberChange = (adultsNumber: string) => setAdultsNumber(adultsNumber)
  const handleChildrenNumberChange = (childrenNumber: string) => setChildrenNumber(childrenNumber)

  const searchButtonDisabled = () => {
    return !originPlace ||
      !destinationPlace ||
      JSON.stringify(outBoundDate)== "{}" ||
      !adultsNumber;
  }

  const handleSearchBtnClick = () => {
    navigation.navigate(RESULTS, {
      originPlace: originPlace.PlaceId,
      destinationPlace:destinationPlace.PlaceId,
      outBoundDate: moment(outBoundDate).format('YYYY-MM-DD'),
      inBoundDate: moment(inBoundDate).format('YYYY-MM-DD'),
      adultsNumber,
      childrenNumber,
    })
  }

  const handleOriginPlaceKeyPress = ({ nativeEvent }:any) => {
    if(originPlace.PlaceName.length > 2) {
      dispatch(getLocations({ query: originPlace.PlaceName }))
      setShowOriginPlaceList(true)
    }
  }

  const handleDestinationPlaceKeyPress = ({ nativeEvent }:any) => {
    if(destinationPlace.PlaceName.length > 2) {
      dispatch(getLocations({ query: destinationPlace.PlaceName}))
      setShowDestinationPlaceList(true)
    }
  }

  const handleOriginPlaceItemPress = (placeSelected: any) => {
    setOriginPlace(placeSelected)
    setShowOriginPlaceList(false)

  }

  const handleDestinationPlaceItemPress = (placeSelected: any) => {
    setDestinationPlace(placeSelected)
    setShowDestinationPlaceList(false)

  }

  return (
    <Form style={styles.form}>
      <Item>
        <Icon ios='ios-home' android='md-home'/>
        <Input
          placeholder="Origin"
          value={originPlace.PlaceName}
          onChangeText={handleOriginPlaceChange}
          onKeyPress={handleOriginPlaceKeyPress}
          style={styles.input}/>
      </Item>
      {showOriginPlaceList &&
      (<FixedList places={places} containerStyle={{top: 50}} onItemPress={handleOriginPlaceItemPress} /> )}
      <Item>
        <Icon ios='ios-airplane' android='md-airplane'/>
        <Input
          placeholder="Destination"
          value={destinationPlace.PlaceName}
          onChangeText={handleDestinationPlaceChange}
          onKeyPress={handleDestinationPlaceKeyPress}
          style={styles.input}/>
      </Item>
      {showDestinationPlaceList &&
      ( <FixedList places={places} containerStyle={{top: 130}} onItemPress={handleDestinationPlaceItemPress} /> )}
      <Item style={styles.datesContainer}>
        <Icon ios="ios-calendar" android='md-calendar'/>
        <DatePicker
          placeHolderText="Departure date"
          onDateChange={handleOutBoundDateChange}
          minimumDate={new Date()}
        />

        <Icon ios="ios-calendar" android='md-calendar'/>
        <DatePicker
          placeHolderText="Arrival date (optional)"
          onDateChange={handleInBoundDateChange}
          minimumDate={outBoundDate}
        />
      </Item>
      <Item style={styles.pickersContainer}>
        <Icon name='person'/>
        <Picker
          placeholder="Adult's number"
          mode='dropdown'
          selectedValue={adultsNumber}
          onValueChange={handleAdultsNumberChange}
        >
          <Picker.Item label="Adult's number" key="0"/>
          <Picker.Item label="1" value="1"/>
          <Picker.Item label="2" value="2"/>
          <Picker.Item label="3" value="3"/>
          <Picker.Item label="4" value="4"/>
          <Picker.Item label="5" value="5"/>
          <Picker.Item label="6" value="6"/>
          <Picker.Item label="7" value="7"/>
        </Picker>
        <Icon name='person'/>
        <Picker
          placeholder="Children number"
          mode='dropdown'
          selectedValue={childrenNumber}
          onValueChange={handleChildrenNumberChange}
        >
          <Picker.Item label="Children's number" value="0"/>
          <Picker.Item label="1" value="1"/>
          <Picker.Item label="2" value="2"/>
          <Picker.Item label="3" value="3"/>
          <Picker.Item label="4" value="4"/>
          <Picker.Item label="5" value="5"/>
          <Picker.Item label="6" value="6"/>
          <Picker.Item label="7" value="7"/>
        </Picker>
      </Item>
      <Button style={styles.searchBtn} disabled={searchButtonDisabled()} onPress={handleSearchBtnClick}>
        <Icon name="search" style={styles.searchIcon}/>
        <Text style={styles.searchBtnText}>Search</Text>
      </Button>
    </Form>
  )
}
