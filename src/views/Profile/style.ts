import {Dimensions, StyleSheet} from 'react-native';
import Constants from 'expo-constants'
import {PRIMARY, SECONDARY, WHITE} from '../../constants';
const { width }  = Dimensions.get("window")

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
  profileImage: {
    width: width/3,
    height: width/3,
  },
  logoutBtn: {
    backgroundColor: SECONDARY,
    marginTop: 2,
  },
  backIcon: {
    color: WHITE
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
  }

})

export default styles
