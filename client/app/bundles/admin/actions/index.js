import 'babel-polyfill'
import { createAction } from 'redux-actions'
import Notifications from 'react-notification-system-redux'
import * as api from '../api'

export const increment = createAction('INCREMENT_COUNTER')
export const decrement = createAction('DECREMENT_COUNTER')

export const loading = createAction('LOADING')
export const complete = createAction('COMPLETE')

export const editAdminRequest = createAction('EDIT_ADMIN_REQUEST', api.editAdminRequest)

export const clearInitialNotification = createAction('CLEAR_INITIAL_NOTIFICATION')
export const setNotifications = (customOptions) => (dispatch) => {
  const defaultOptions = {
    level: 'info',
    position: 'br',
    autoDismiss: 5
  }
  const iconClasses = {
    success: 'check-circle',
    info: 'info-circle',
    warning: 'exclamation-circle',
    error: 'exclamation-triangle'
  }
  const options = Object.assign(defaultOptions, customOptions)

  const iconTarget = options.title ? 'title' : 'message'
  const iconElement = `<span class="icon"><i class="fa fa-${iconClasses[options.level]}"></i></span>`
  options[iconTarget] = iconElement + options[iconTarget]

  const notificationsAsLevel = {
    success: Notifications.success(options),
    info: Notifications.info(options),
    warning: Notifications.warning(options),
    error: Notifications.error(options)
  }
  dispatch(notificationsAsLevel[options.level])
}

export const editAdminSubmit = () => async (dispatch, getState) => {
  const formData = getState().form.admin.values || {}
  const id = getState().main.currentAdmin.id

  dispatch(loading())
  await dispatch(editAdminRequest('admin', formData, id))
  dispatch(complete())

  if (getState().main.error === '') {
    dispatch(setNotifications({ level: 'success' }))
  } else {
    dispatch(setNotifications({ level: 'error' }))
    window.scrollTo(0, 0)
  }
}
