import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR
} from '../../consts/actionTypes';

import { getLocationPayload } from '../actions/itineraries'
import { takeLatest } from 'redux-saga/effects';

export function* getLocations( payload :getLocationPayload ) {
  try {
    console.log("Im listening!")
  } catch (e) {
    alert(e)
  }
}

export default function * itineraries() {
  yield takeLatest(GET_LOCATIONS_START, getLocations)
}

