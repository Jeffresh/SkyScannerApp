import React from 'react';
import { RootStack as Routes } from './routes';
import { Provider } from 'react-redux'
import Store from './redux/store'

const store = Store()

export default (): JSX.Element => (
  <Provider store={store}>
    <Routes />
  </Provider>
)
