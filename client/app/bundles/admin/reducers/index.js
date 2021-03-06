import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as notifications } from 'react-notification-system-redux'

import main from './main'
import form from './form'
import filters from './filters'
import loading from './loading'

export default combineReducers({
  routing,
  form,
  main,
  filters,
  loading,
  notifications
})
