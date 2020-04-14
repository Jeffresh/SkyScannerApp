import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  content: {
    flex: 1,
    marginTop: Constants.statusBarHeight

  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
})
