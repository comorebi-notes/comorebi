import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import admin from './admin'

export default combineReducers({
  routing,
  form: formReducer,
  admin
})
