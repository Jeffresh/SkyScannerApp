import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR
} from '../../consts/actionTypes';

export default function(state:any, action:any) {
  switch (action.type) {
    case GET_LOCATIONS_START:
      return {}
      break;
    case GET_LOCATIONS_SUCCESS:
      return {}
      break
    case GET_LOCATIONS_ERROR:
      return {}
      break;
    default:
      return {}
  }

}
