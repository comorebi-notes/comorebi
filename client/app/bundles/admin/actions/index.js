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
const afterRequest = (dispatch, actionType, target, errors, messageData) => {
  dispatch(setNotifications(messages(actionType, target, status(errors), messageData)))

  if (status(errors) === 'success') {
    dispatch(push(rootPath))
  } else {
    throw new SubmissionError(errors)
  }
}

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

  afterRequest(dispatch, 'update', 'admin', getState().main.errors, formData.title)
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

  afterRequest(dispatch, 'update', 'article', state.main.errors, formData.title)
}

export const updateMusicRequest = createAction('UPDATE_MUSIC_REQUEST', api.updateMusicRequest)
export const updateMusicSubmit = () => async (dispatch, getState) => {
  const state = getState()
  const formData = getFormValues('music')(state) || {}
  const id = utils.getId(state.routing.locationBeforeTransitions.pathname)
  const loadingTarget = 'updateMusic'

  dispatch(loading(loadingTarget))
  await dispatch(updateMusicRequest(formData, id))
  dispatch(complete(loadingTarget))

  afterRequest(dispatch, 'update', 'music', state.main.errors, formData.title)
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

  afterRequest(dispatch, 'create', 'article', state.main.errors, formData.title)
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

  afterRequest(dispatch, 'destroy', 'article', state.main.errors, formData.title)
}
