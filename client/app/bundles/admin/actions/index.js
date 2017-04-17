import 'babel-polyfill'

import { createAction } from 'redux-actions'
import { SubmissionError, getFormValues } from 'redux-form'
import Notifications from 'react-notification-system-redux'

import notificationOptions from './notificationOptions'
import messages from '../constants/messages'
import * as api from '../api'

// ============================================= Simple Actions
export const loading  = createAction('LOADING')
export const complete = createAction('COMPLETE')

// ============================================= Notifications
export const clearInitialNotification = createAction('CLEAR_INITIAL_NOTIFICATION')
export const setNotifications = (customOptions) => (dispatch) => {
  const options = notificationOptions(customOptions)
  const notificationsByLevel = {
    success: Notifications.success(options),
    info: Notifications.info(options),
    warning: Notifications.warning(options),
    error: Notifications.error(options)
  }
  dispatch(notificationsByLevel[options.level])
}

// ============================================= GET
export const getAllWorks = createAction('GET_ALL_WORKS', api.getAllWorks)
export const getAllWorksAsync = (target) => async (dispatch) => {
  dispatch(loading(target))
  await dispatch(getAllWorks())
  dispatch(complete(target))
}

// ============================================= UPDATE
export const editAdminRequest = createAction('EDIT_ADMIN_REQUEST', api.editAdminRequest)
export const editAdminSubmit = () => async (dispatch, getState) => {
  const formData = getFormValues('admin')(getState()) || {}

  dispatch(loading("editAdmin"))
  await dispatch(editAdminRequest(formData))
  dispatch(complete("editAdmin"))

  const errors = getState().main.errors
  if (errors === '') {
    dispatch(setNotifications(messages.editAdmin.success()))
  } else {
    dispatch(setNotifications(messages.editAdmin.error()))
    throw new SubmissionError(errors)
  }
}

export const addTag = createAction('ADD_TAG')
