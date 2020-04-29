import React, {useState} from 'react';
import {Form, Item, Icon, Button, Text} from 'native-base';
import moment from 'moment'
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import {getLocations} from '~Store/actions/itineraries';
import { FixedList } from '~Components/FixedList';
import {RESULTS} from '~Constants';
import {RootState} from '~Store/reducers';
import {DatePicker} from '~Components/DatePicker';
import {Input} from '~Components/Input'
import {Picker,ItemPicker} from '~Components/Picker/Picker';

const generateItemsPicker = (itemNumber: number): ItemPicker[] => {
  let items: ItemPicker[] = []
  for (let i = 1; i <= itemNumber; i ++)
    items.push({label:`${i}`, value:`${i}`})
  return items
}
const itemsPicker: ItemPicker[] = generateItemsPicker(5)

export const SearchComponent = ({navigation} : any) => {
  const dispatch = useDispatch()
  const places  = useSelector((state :RootState) => state.itineraries.places)

  const [originPlace, setOriginPlace] = useState({PlaceName:''} as any)
  const [destinationPlace, setDestinationPlace] = useState({PlaceName:''} as any)
  const [outBoundDate, setOutBoundDate] = useState(new Date() as Date)
  const [inBoundDate, setInBoundDate] = useState(new Date() as Date)
  const [adultsNumber, setAdultsNumber] = useState('0')
  const [childrenNumber, setChildrenNumber] = useState('0')
  const [showOriginPlaceList, setShowOriginPlaceList] = useState(false)
  const [showDestinationPlaceList, setShowDestinationPlaceList] = useState(false)

  const handleOriginPlaceChange = (origin:string) => setOriginPlace({PlaceName: origin})
  const handleDestinationPlaceChange = (destination:string) => setDestinationPlace( {PlaceName: destination})

  const handleOutBoundDateChange = (outboundDate: Date):void=> {
      setOutBoundDate(outboundDate)
      if(outboundDate > inBoundDate) {
        setInBoundDate(outboundDate)
      }
  }

  const handleInBoundDateChange = (inboundDate: Date):void => {
      setInBoundDate(inboundDate)
  }

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
        <Input
          inputPlaceHolder={"Origin"}
          iconName={'md-home'}
          iconIos={'ios-home'}
          iconAndroid={'md-home'}
          inputValue={originPlace.PlaceName}
          onChangeText={handleOriginPlaceChange}
          onKeyPress={handleOriginPlaceKeyPress}
          inputStyle={styles.input}
        />
      </Item>
      {showOriginPlaceList &&
      (<FixedList places={places} containerStyle={{top: 50}} onItemPress={handleOriginPlaceItemPress} /> )}
      <Item>
        <Input
          inputPlaceHolder={"Destination"}
          iconName={'md-airplane'}
          iconIos={'ios-airplane'}
          iconAndroid={'md-airplane'}
          inputValue={destinationPlace.PlaceName}
          onChangeText={handleDestinationPlaceChange}
          onKeyPress={handleDestinationPlaceKeyPress}
          inputStyle={styles.input}
          />
      </Item>
      {showDestinationPlaceList &&
      ( <FixedList places={places} containerStyle={{top: 130}} onItemPress={handleDestinationPlaceItemPress} /> )}

      <Item style={styles.datesContainer}>
        <DatePicker
          value={outBoundDate}
          onChange={handleOutBoundDateChange}
        />
        <DatePicker
          value={inBoundDate}
          minimumValue={outBoundDate}
          onChange={handleInBoundDateChange}
        />
      </Item>
      <Item style={styles.pickersContainer}>
        <Picker
          iconName={'person'}
          pickerPlaceHolder={'Adults'}
          mode={"dropdown"}
          selectedValue={adultsNumber}
          onValueChange={handleAdultsNumberChange}
          items={itemsPicker}

        />
        <Picker
          iconName={'person'}
          pickerPlaceHolder={'Children'}
          mode={"dropdown"}
          selectedValue={childrenNumber}
          onValueChange={handleChildrenNumberChange}
          items={itemsPicker}

        />
      </Item>
      <Button style={styles.searchBtn} disabled={searchButtonDisabled()} onPress={handleSearchBtnClick}>
        <Icon name="search" style={styles.searchIcon}/>
        <Text style={styles.searchBtnText}>Search</Text>
      </Button>
    </Form>
  )
}
