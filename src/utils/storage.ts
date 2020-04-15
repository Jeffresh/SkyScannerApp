import { AsyncStorage } from 'react-native'

export const saveItem = async (keyName: string, keyValue:string) => {
  try{
    return await AsyncStorage.setItem(keyName, keyValue)
  } catch (e) {
    return false
  }
}

export const getItem = async (keyName:string) => {
  try{
    return await AsyncStorage.getItem(keyName)
  } catch(e) {
    return false
  }
}

export const clearAll = async () => {
  try {
    return await AsyncStorage.clear()
  } catch(e){
    return false
  }

}
