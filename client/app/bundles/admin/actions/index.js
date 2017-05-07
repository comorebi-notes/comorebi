import 'babel-polyfill'

import { createAction } from 'redux-actions'
import { SubmissionError, getFormValues } from 'redux-form'
import { push } from 'react-router-redux'

import setNotifications from './setNotifications'
import messages from '../constants/messages'
import * as api from '../api'
import * as utils from '../utils'

const rootPath = '/admin'
const status = (errors) => (errors ? 'error' : 'success')
const loadingTargetName = (actionType, target) => utils.snakeToCamel(`${actionType}_${target}`)
const afterRequest = (dispatch, actionType, target, errors, messageData) => {
  const nextPath = target === 'admin' ? rootPath : `${rootPath}/${target}`
  dispatch(setNotifications(messages(actionType, target, status(errors), messageData)))
  if (status(errors) === 'success') {
    dispatch(push(nextPath))
  } else {
    throw new SubmissionError(errors)
  }
}

// ============================================= Simple Actions
export const loading  = createAction('LOADING')
export const complete = createAction('COMPLETE')
export const toggleModal = createAction('TOGGLE_MODAL')
export const addTag = createAction('ADD_TAG')
export const clearInitialNotification = createAction('CLEAR_INITIAL_NOTIFICATION')

// ============================================= Filters
export const changeFilteringWords      = createAction('CHANGE_FILTERING_WORDS')
export const changeFilteringStatus     = createAction('CHANGE_FILTERING_STATUS')
export const addFilteringCategories    = createAction('ADD_FILTERING_CATEGORIES')
export const deleteFilteringCategories = createAction('DELETE_FILTERING_CATEGORIES')
export const changePage                = createAction('CHANGE_PAGE')
export const clearFilters              = createAction('CLEAR_FILTERS')

// ============================================= GET
export const getWorks = createAction('GET_WORKS', api.getWorks)
export const getWorksAsync = (target, action) => async (dispatch) => {
  const loadingTarget = action || `${loadingTargetName('get', target)}s`
  dispatch(loading(loadingTarget))
  await dispatch(getWorks(target))
  dispatch(complete(loadingTarget))
}

// ============================================= UPDATE
export const updateAdminRequest = createAction('UPDATE_ADMIN_REQUEST', api.updateAdminRequest)
export const updateAdminSubmit = () => async (dispatch, getState) => {
  const formData = getFormValues('admin')(getState()) || {}
  const loadingTarget = 'updateAdmin'

  dispatch(loading(loadingTarget))
  await dispatch(updateAdminRequest(formData))
  dispatch(complete(loadingTarget))

  afterRequest(dispatch, 'update', 'admin', getState().main.errors, formData.title)
}

export const updateWorkRequest = createAction('UPDATE_WORK_REQUEST', api.updateWorkRequest)
export const updateWorkSubmit = () => async (dispatch, getState) => {
  const state = getState()
  const target = Object.keys(state.form)[0]
  const formData = getFormValues(target)(state) || {}
  const id = utils.getId(state.routing.locationBeforeTransitions.pathname)
  const loadingTarget = loadingTargetName('update', target)

  dispatch(loading(loadingTarget))
  await dispatch(updateWorkRequest(target, formData, id))
  dispatch(complete(loadingTarget))

  afterRequest(dispatch, 'update', `${target}s`, getState().main.errors, formData.title)
}

// ============================================= CREATE
export const createWorkRequest = createAction('CREATE_WORK_REQUEST', api.createWorkRequest)
export const createWorkSubmit = () => async (dispatch, getState) => {
  const state = getState()
  const target = Object.keys(state.form)[0]
  const formData = getFormValues(target)(state) || {}
  const loadingTarget = loadingTargetName('create', target)

  dispatch(loading(loadingTarget))
  await dispatch(createWorkRequest(target, formData))
  dispatch(complete(loadingTarget))

  afterRequest(dispatch, 'create', `${target}s`, getState().main.errors, formData.title)
}

// ============================================= DESTROY
export const destroyWorkRequest = createAction('DESTROY_WORK_REQUEST', api.destroyWorkRequest)
export const destroyWorkSubmit = () => async (dispatch, getState) => {
  const state = getState()
  const target = Object.keys(state.form)[0]
  const formData = getFormValues(target)(state) || {}
  const id = utils.getId(state.routing.locationBeforeTransitions.pathname)
  const loadingTarget = loadingTargetName('destroy', target)

  dispatch(loading(loadingTarget))
  await dispatch(destroyWorkRequest(target, id))
  dispatch(complete(loadingTarget))

  afterRequest(dispatch, 'destroy', `${target}s`, getState().main.errors, formData.title)
}

// ============================================= UPLOAD
export const uploadFileRequest = createAction('UPLOAD_FILE_REQUEST', api.uploadFileRequest)
export const uploadFile = (file, fileType, target) => async (dispatch) => {
  const loadingTarget = loadingTargetName('upload', target)
  dispatch(loading(loadingTarget))
  await dispatch(uploadFileRequest(file, fileType, target))
  dispatch(complete(loadingTarget))
}
