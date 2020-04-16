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
    return await AsyncStorage.getItem(keyName)
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
