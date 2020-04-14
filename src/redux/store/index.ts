import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    rungSaga: sagaMiddleware,run(sagas),
  }
}
