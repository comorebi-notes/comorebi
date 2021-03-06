import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import scroll from './utils/scroll'

import configureStore from './store'
import adminRoutes from './routes'
import { document } from './utils/browser-dependencies'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router
      onUpdate={() => scroll(0)}
      history={history}
      routes={adminRoutes()}
    />
  </Provider>,
  document.getElementById('admin-container')
)
