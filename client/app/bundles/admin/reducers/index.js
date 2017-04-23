import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'

import main from './main'
import filters from './filters'

export default combineReducers({
  routing,
  form: formReducer,
  main,
  filters,
  notifications
})
