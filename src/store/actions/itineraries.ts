import { GET_LOCATIONS_START, GET_ITINERARIES_START } from '~Store/constants/actionTypes';

export interface getLocationPayload {
    query: string
}

export const getLocations = (payload: getLocationPayload) => (
  {
    type: GET_LOCATIONS_START,
    payload: payload
  }
)

export const getItineraries = (payload:any) => ({
  type: GET_ITINERARIES_START,
  payload: payload
})
