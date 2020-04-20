import { GET_LOCATIONS_START } from '../../consts/actionTypes';

export interface getLocationPayload {
    query: string
}

export const getLocations = (payload: getLocationPayload) => (
  {
    type: GET_LOCATIONS_START,
    payload: payload
  }
)
