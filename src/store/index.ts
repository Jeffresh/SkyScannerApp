import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    rungSaga: sagaMiddleware.run(sagas),
  }
}
