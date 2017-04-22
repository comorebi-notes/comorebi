import 'babel-polyfill'

import { createAction } from 'redux-actions'
import { SubmissionError, getFormValues } from 'redux-form'
import { push } from 'react-router-redux'
import Notifications from 'react-notification-system-redux'

import notificationOptions from './notificationOptions'
import messages from '../constants/messages'
import * as api from '../api'
import * as utils from '../utils'

// ============================================= Simple Actions
export const loading  = createAction('LOADING')
export const complete = createAction('COMPLETE')
export const addTag   = createAction('ADD_TAG')
export const changeFilteringWords  = createAction('CHANGE_FILTERING_WORDS')
export const changeFilteringStatus = createAction('CHANGE_FILTERING_STATUS')
export const clearFilters          = createAction('CLEAR_FILTERS')

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
  const loadingTarget = 'editAdminSubmit'

  dispatch(loading(loadingTarget))
  await dispatch(editAdminRequest(formData))
  dispatch(complete(loadingTarget))

  const errors = getState().main.errors
  if (errors === '') {
    dispatch(setNotifications(messages.editAdmin.success()))
  } else {
    dispatch(setNotifications(messages.editAdmin.error()))
    throw new SubmissionError(errors)
  }
}

export const editWorkRequest = createAction('EDIT_WORK_REQUEST', api.editWorkRequest)
export const editWorkSubmit = () => async (dispatch, getState) => {
  const state = getState()
  const formData = getFormValues('work')(state) || {}
  const id = utils.getId(state.routing.locationBeforeTransitions.pathname)
  const loadingTarget = 'editWorkSubmit'

  dispatch(loading(loadingTarget))
  await dispatch(editWorkRequest(formData, id))
  dispatch(complete(loadingTarget))

  const errors = getState().main.errors
  if (errors === '') {
    dispatch(setNotifications(messages.editWork.success(formData.title)))
    dispatch(push("/admin"))
  } else {
    dispatch(setNotifications(messages.editWork.error(formData.title)))
    throw new SubmissionError(errors)
  }
}
