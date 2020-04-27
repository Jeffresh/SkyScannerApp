import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { PRIMARY , WHITE } from '~Constants';

export default StyleSheet.create({
  header: {
    backgroundColor: PRIMARY,
    // marginTop: Constants.platform?.android ? Constants.statusBarHeight:0 | this dont work on my project
  },
  backIcon: {
    color: WHITE,
    marginLeft: 12,
  }
})
