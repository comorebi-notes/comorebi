import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store'
import adminRoutes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router
      onUpdate={() => window.scrollTo(0, 0)}
      // notification をクリアする
      history={history}
      routes={adminRoutes()}
    />
  </Provider>,
  document.getElementById('admin-container')
)
