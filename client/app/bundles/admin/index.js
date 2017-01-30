import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store'
// import adminRoutes from './routes'
import AppContainer from './containers/Admin'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/admin" component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('admin-container')
)
