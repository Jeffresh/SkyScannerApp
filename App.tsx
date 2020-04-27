import React from 'react';

import AppContainer from './src'
import Store from '~Store';
import {Provider} from 'react-redux';
const store = Store()

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  )
}
