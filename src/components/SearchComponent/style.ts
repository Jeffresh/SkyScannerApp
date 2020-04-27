import { StyleSheet, Dimensions } from 'react-native';
import {SECONDARY} from '~Constants';
const { width } = Dimensions.get("window")

export default StyleSheet.create({
  form: {
    width,
    paddingLeft: width /14,
    paddingRight: width/14,
  },
  datesContainer: {
    marginTop: 12,
    justifyContent: 'space-between',

  },
  input: {
    marginTop: 12,
    marginBottom: 14
  },
  pickersContainer: {
    marginTop:12,
    marginBottom: 14
  },
  searchBtn: {
    marginTop:14,
    backgroundColor: SECONDARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchIcon: {
    marginRight: -5
  }

})
