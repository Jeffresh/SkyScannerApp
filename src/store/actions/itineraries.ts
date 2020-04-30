import { GET_LOCATIONS_START, DEL_LOCATIONS_SUCCESS, GET_ITINERARIES_START } from '~Store/constants/actionTypes';

export interface getLocationPayload {
  query: string,
}

export const getLocations = (payload: getLocationPayload) => ({
    type: GET_LOCATIONS_START,
    payload: payload
  }
)

export const delLocations = () => ({
    type: DEL_LOCATIONS_SUCCESS
  }
)

export const getItineraries = (payload:any) => ({
  type: GET_ITINERARIES_START,
  payload: payload
})
