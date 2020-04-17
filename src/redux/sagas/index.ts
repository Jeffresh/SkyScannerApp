import { all } from 'redux-saga/effects'
import itineraries from './itineraries';

export default function* rootSaga() {
  yield all([itineraries()])
}
