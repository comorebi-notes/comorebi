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
  modal: false,
  works: [],
  musics: [],
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
  GET_ALL_MUSICS: (state, action) => {
    const data = action.payload.data
    return {
      ...state,
      works:  data.works,
      musics: data.musics
    }
  },
  ADD_TAG: (state, action) => {
    state[action.payload.target].push(action.payload.name)
    return { ...state }
  },
  UPDATE_ADMIN_REQUEST: {
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
  UPDATE_WORK_REQUEST: {
    next: (state) => ({
      ...state,
      errors: ''
    }),
    throw: (state, action) => ({
      ...state,
      errors: action.payload.response.data.errors
    })
  },
  CREATE_WORK_REQUEST: {
    next: (state) => ({
      ...state,
      errors: ''
    }),
    throw: (state, action) => ({
      ...state,
      errors: action.payload.response.data.errors
    })
  },
  DESTROY_WORK_REQUEST: {
    next: (state) => ({
      ...state,
      errors: ''
    }),
    throw: (state, action) => ({
      ...state,
      errors: action.payload.response.data.errors
    })
  },
  CLEAR_INITIAL_NOTIFICATION: (state) => ({
    ...state,
    initialNotification: {}
  })
}, initialState)
