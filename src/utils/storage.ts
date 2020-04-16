import { AsyncStorage } from 'react-native'

export const saveItem = async (keyName: string, keyValue:string) => {
  try{
    await AsyncStorage.setItem(keyName, keyValue)
    return true
  } catch (e) {
    return false
  }
}

export const getItem = async (keyName:string) => {
  try{
    await AsyncStorage.getItem(keyName)
    return true
  } catch(e) {
    return false
  }
}

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
    return true
  } catch(e){
    return false
  }

}
