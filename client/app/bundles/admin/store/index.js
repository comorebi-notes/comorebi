import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'

const isDev = process.env.NODE_ENV === 'development'
const router = routerMiddleware(browserHistory)

const middlewares = [
  thunk,
  promiseMiddleware,
  router
]

if (isDev) {
  const logger = createLogger()
  middlewares.push(logger)
}

const composeEnhancers = (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore)

const configure = (initialState) => {
  const store = createStoreWithMiddleware(rootReducer, { ...initialState })

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configure
