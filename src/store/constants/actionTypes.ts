export const GET_LOCATIONS_START = '@udemy:GET_LOCATIONS_START'
export const GET_LOCATIONS_SUCCESS = '@udemy:GET_LOCATIONS_SUCCESS'
export const DEL_LOCATIONS_SUCCESS =  '@udemy: DEL_LOCATIONS'
export const GET_LOCATIONS_ERROR = '@udemy:GET_LOCATIONS_ERROR'

export const GET_ITINERARIES_START = '@udemy:GET_ITINERARIES_START'
export const GET_ITINERARIES_SUCCESS = '@udemy:GET_ITINERARIES_SUCCESS'
export const GET_ITINERARIES_ERROR = '@udemy:GET_ITINERARIES_ERROR'

export const RESTORE_TOKEN   = 'RESTORE_TOKEN'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'


export interface authStateType {
  isLoading: boolean,
  isSignout: boolean,
  userToken: string | null,
}
