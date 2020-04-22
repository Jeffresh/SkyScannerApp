import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import {PRIMARY} from '../../consts';

const styles = StyleSheet.create({
  content: {
    flex:1,
    // marginTop: Constants.platform?.android ? Constants.statusBarHeight:0

  },
  imageContainer: {
    flex:2,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    flex:3,
    alignItems: "center",
    paddingTop: 12,
  },

})

export default styles
