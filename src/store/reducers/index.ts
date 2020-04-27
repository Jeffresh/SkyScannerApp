import { combineReducers } from 'redux'
import {itinerariesReducer} from './itineraries'
import {authReducer} from './auth'

const rootReducer = combineReducers({
  itineraries: itinerariesReducer,
  auth: authReducer,
})

export default rootReducer
