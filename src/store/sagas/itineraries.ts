import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR,
  GET_ITINERARIES_START,
  GET_ITINERARIES_SUCCESS,
  GET_ITINERARIES_ERROR
} from '../constants/actionTypes';

import apiCall from '../../../services/api'

import { takeLatest, call, put } from 'redux-saga/effects';

const country = 'ES'
const currency = 'EUR'
const locale = 'en-US'

export function* getLocations({payload}:any) {

  try {
    const url = `/autosuggest/v1.0/${country}/${currency}/${locale}/?query=${payload.query}`
    const method = 'GET'
    const result = yield call(apiCall, url, method,null, null)
    yield put({type: GET_LOCATIONS_SUCCESS, results: result.data.Places})
  } catch (error) {
    yield put({type: GET_LOCATIONS_ERROR, error})
  }
}

export function* getItineraries({payload}:any){
  try{
    const url = `/browsequotes/v1.0/${country}/${currency}/${locale}/${payload.originPlace}/${payload.destinationPlace}/${payload.outBoundDate}/?query=${payload.inBoundDate}`
    const method='GET'
    const itineraries = yield call(apiCall, url, method,null,null)
    if(!itineraries.data) {
      yield put({type: GET_ITINERARIES_ERROR, error: 'Results dont found'})
    }
      yield put({type: GET_ITINERARIES_SUCCESS, itineraries: itineraries.data})

  }catch (error) {
    yield put({type: GET_ITINERARIES_ERROR, error})
  }
}

export default function * itineraries() {
  yield takeLatest(GET_LOCATIONS_START, getLocations)
  yield takeLatest(GET_ITINERARIES_START, getItineraries)
}

