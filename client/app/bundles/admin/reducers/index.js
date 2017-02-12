import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import admin from './admin'
import notification from './notification'

export default combineReducers({
  routing,
  form: formReducer,
  admin,
  notification
})
