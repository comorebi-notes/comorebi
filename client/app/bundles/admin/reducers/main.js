import { handleActions } from 'redux-actions'

const currentAdmin = window.data.admin || ''
const windowNotification = window.data.notification || {}
const initialNotification = {
  message: windowNotification.message || '',
  level:   windowNotification.level   || ''
}

export const initialState = {
  loading: {},
  errors: '',
  works: '',
  filters: {},
  currentAdmin,
  initialNotification
}

export default handleActions({
  LOADING:  (state, action) => ({
    ...state,
    loading: { [action.payload]: true }
  }),
  COMPLETE: (state, action) => ({
    ...state,
    loading: { [action.payload]: false }
  }),
  GET_ALL_WORKS: (state, action) => {
    const data = action.payload.data
    return {
      ...state,
      works:      data.works,
      musics:     data.musics,
      categories: data.categories,
      tags:       data.tags
    }
  },
  CHANGE_FILTER_WORDS: (state, action) => {
    const words = action.payload.trim().split(/\s+/)
    if (!words) {
      return state
    } else {
      const filters = Object.assign({}, state.filters)
      if (words[0] === '') {
        delete filters.words
      } else {
        filters.words = words
      }
      return Object.assign({}, state, { filters })
    }
  },
  CLEAR_FILTERS: (state) => ({
    ...state,
    filters: {}
  }),
  ADD_TAG: (state, action) => {
    state[action.payload.target].push(action.payload.name)
    return { ...state }
  },
  EDIT_ADMIN_REQUEST: {
    next: (state, action) => ({
      ...state,
      currentAdmin: JSON.parse(action.payload.config.data).admin,
      errors: '',
    }),
    throw: (state, action) => ({
      ...state,
      errors: action.payload.response.data.errors
    })
  },
  EDIT_WORK_REQUEST: {
    next: (state, action) => {
      const newState = Object.assign({}, state)
      const newWork = action.payload.data
      const target = state.works.findIndex((work) => work.id === newWork.id)
      newState.works.splice(target, 1, newWork)
      return {
        ...newState,
        errors: '',
      }
    },
    throw: (state, action) => ({
      ...state,
      errors: action.payload.data.errors
    })
  },
  CLEAR_INITIAL_NOTIFICATION: (state) => ({
    ...state,
    initialNotification: {}
  })
}, initialState)
