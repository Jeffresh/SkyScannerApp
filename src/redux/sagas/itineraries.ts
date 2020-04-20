import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR
} from '../../consts/actionTypes';

import apiCall from '../api'

import { getLocationPayload } from '../actions/itineraries'
import { takeLatest, call, put } from 'redux-saga/effects';

const country = 'ES'
const currency = 'EUR'
const locale = 'en-US'

export function* getLocations( payload :getLocationPayload ) {

  try {
    const url = `/autosuggest/v1.0/${country}/${currency}/${locale}/?query=${payload.payload.query}`
    const method = 'GET'
    const result = yield call(apiCall, url, method,null, null)
    yield put({type: GET_LOCATIONS_SUCCESS, results: result.data.Places})
  } catch (error) {
    yield put({type: GET_LOCATIONS_ERROR, error})
  }
}

export default function * itineraries() {
  yield takeLatest(GET_LOCATIONS_START, getLocations)
}

