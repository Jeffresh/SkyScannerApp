import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR
} from '../../consts/actionTypes';

export default function(state:any, action:any) {
  switch (action.type) {
    case GET_LOCATIONS_START:
      return {...state}
      break;
    case GET_LOCATIONS_SUCCESS:
      return {...state, places: action.results}
      break
    case GET_LOCATIONS_ERROR:
      return {...state, places: null, error: action.error}
      break;
    default:
      return {...state}
  }

}
