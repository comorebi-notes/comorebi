import 'babel-polyfill'

import { createAction } from 'redux-actions'
import { SubmissionError } from 'redux-form'
import Notifications from 'react-notification-system-redux'
import messages from '../constants/messages'
import * as api from '../api'
import scroll from '../utils/scroll'

// ============================================= Simple Actions
export const loading = createAction('LOADING')
export const complete = createAction('COMPLETE')

// ============================================= Notifications
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

  const iconElement = `<span class="icon"><i class="fa fa-${iconClasses[options.level]}"></i></span>`
  if (options.noTitle) {
    options.message = iconElement + options.message
  } else {
    options.title = options.title || `${options.level.toUpperCase()}!`
    options.title = iconElement + options.title
  }

  const notificationsAsLevel = {
    success: Notifications.success(options),
    info: Notifications.info(options),
    warning: Notifications.warning(options),
    error: Notifications.error(options)
  }
  dispatch(notificationsAsLevel[options.level])
}

// ============================================= GET
export const getAllWorks = createAction('GET_ALL_WORKS', api.getAllWorks)

// ============================================= UPDATE
export const editAdminRequest = createAction('EDIT_ADMIN_REQUEST', api.editAdminRequest)
export const editAdminSubmit = () => async (dispatch, getState) => {
  const formData = getState().form.admin.values || {}

  dispatch(loading())
  await dispatch(editAdminRequest(formData))
  dispatch(complete())

  scroll(0)
  const errors = getState().main.errors
  if (errors === '') {
    dispatch(setNotifications(messages.editAdmin.success()))
  } else {
    dispatch(setNotifications(messages.editAdmin.error()))
    throw new SubmissionError(errors)
  }
}
