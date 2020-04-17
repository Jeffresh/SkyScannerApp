import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window")

export default StyleSheet.create({
  form: {
    width,
    paddingLeft: width /14,
    paddingRight: width/14,
  }

})
