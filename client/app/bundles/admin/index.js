import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppContainer from './containers/Admin'
import configureStore from './store/index.js'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('admin-container')
)
