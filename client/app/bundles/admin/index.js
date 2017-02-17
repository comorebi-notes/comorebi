import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import SweetScroll from 'sweet-scroll'

import configureStore from './store'
import adminRoutes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const sweetScroll = new SweetScroll()

render(
  <Provider store={store}>
    <Router
      onUpdate={() => sweetScroll.toTop(0)}
      history={history}
      routes={adminRoutes()}
    />
  </Provider>,
  document.getElementById('admin-container')
)
