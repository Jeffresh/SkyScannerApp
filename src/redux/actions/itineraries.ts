import { GET_LOCATIONS_START } from '../../consts/actionTypes';

export interface getLocationPayload {
  payload: {

  }
}

export const getLocations = (payload: getLocationPayload) => (
  {
    type: GET_LOCATIONS_START,
    payload: payload,
  }
)
