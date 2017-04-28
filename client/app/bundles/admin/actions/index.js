import 'babel-polyfill'

import { createAction } from 'redux-actions'
import { SubmissionError, getFormValues } from 'redux-form'
import { push } from 'react-router-redux'

import setNotifications from './setNotifications'
import messages from '../constants/messages'
import * as api from '../api'
import * as utils from '../utils'

const rootPath = "/admin"

// ============================================= Simple Actions
export const loading  = createAction('LOADING')
export const complete = createAction('COMPLETE')
export const addTag   = createAction('ADD_TAG')
export const clearInitialNotification = createAction('CLEAR_INITIAL_NOTIFICATION')

// ============================================= Filters
export const changeFilteringWords      = createAction('CHANGE_FILTERING_WORDS')
export const changeFilteringStatus     = createAction('CHANGE_FILTERING_STATUS')
export const addFilteringCategories    = createAction('ADD_FILTERING_CATEGORIES')
export const deleteFilteringCategories = createAction('DELETE_FILTERING_CATEGORIES')
export const changePage                = createAction('CHANGE_PAGE')
export const clearFilters              = createAction('CLEAR_FILTERS')

// ============================================= GET
export const getAllArticles = createAction('GET_ALL_ARTICLES', api.getAllArticles)
export const getAllArticlesAsync = (target) => async (dispatch) => {
  dispatch(loading(target))
  await dispatch(getAllArticles())
  dispatch(complete(target))
}
export const getAllMusics = createAction('GET_ALL_MUSICS', api.getAllMusics)
export const getAllMusicsAsync = () => async (dispatch) => {
  const loadingTarget = 'getAllMusics'

  dispatch(loading(loadingTarget))
  await dispatch(getAllMusics())
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

  const errors = getState().main.errors
  if (errors === '') {
    dispatch(setNotifications(messages.updateAdmin.success()))
  } else {
    dispatch(setNotifications(messages.updateAdmin.error()))
    throw new SubmissionError(errors)
  }
}

export const updateArticleRequest = createAction('UPDATE_ARTICLE_REQUEST', api.updateArticleRequest)
export const updateArticleSubmit = () => async (dispatch, getState) => {
  const state = getState()
  const formData = getFormValues('article')(state) || {}
  const id = utils.getId(state.routing.locationBeforeTransitions.pathname)
  const loadingTarget = 'updateArticle'

  dispatch(loading(loadingTarget))
  await dispatch(updateArticleRequest(formData, id))
  dispatch(complete(loadingTarget))

  const errors = getState().main.errors
  if (errors === '') {
    dispatch(setNotifications(messages.updateArticle.success(formData.title)))
    dispatch(push(rootPath))
  } else {
    dispatch(setNotifications(messages.updateArticle.error(formData.title)))
    throw new SubmissionError(errors)
  }
}

// ============================================= CREATE
export const createArticleRequest = createAction('CREATE_ARTICLE_REQUEST', api.createArticleRequest)
export const createArticleSubmit = () => async (dispatch, getState) => {
  const state = getState()
  const formData = getFormValues('article')(state) || {}
  const loadingTarget = 'createArticle'

  dispatch(loading(loadingTarget))
  await dispatch(createArticleRequest(formData))
  dispatch(complete(loadingTarget))

  const errors = getState().main.errors
  if (errors === '') {
    dispatch(setNotifications(messages.createArticle.success(formData.title)))
    dispatch(push(rootPath))
  } else {
    dispatch(setNotifications(messages.createArticle.error(formData.title)))
    throw new SubmissionError(errors)
  }
}

// ============================================= DESTROY
export const destroyArticleRequest = createAction('DESTROY_ARTICLE_REQUEST', api.destroyArticleRequest)
export const destroyArticleSubmit = () => async (dispatch, getState) => {
  const state = getState()
  const formData = getFormValues('article')(state) || {}
  const id = utils.getId(state.routing.locationBeforeTransitions.pathname)
  const loadingTarget = 'destroyArticle'

  dispatch(loading(loadingTarget))
  await dispatch(destroyArticleRequest(id))
  dispatch(complete(loadingTarget))

  const errors = getState().main.errors
  if (errors === '') {
    dispatch(setNotifications(messages.destroyArticle.success(formData.title)))
    dispatch(push(rootPath))
  } else {
    dispatch(setNotifications(messages.destroyArticle.error(formData.title)))
    throw new SubmissionError(errors)
  }
}
