import { combineReducers } from 'redux'
import itineraries from './itineraries'
import {authReducer} from './auth'

export default combineReducers({
  itineraries,
  authReducer,
})
