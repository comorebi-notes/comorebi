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
  currentAdmin,
  initialNotification
}

export default handleActions({
  LOADING:  (state, actions) => ({
    ...state,
    loading: { [actions.payload]: true }
  }),
  COMPLETE: (state, actions) => ({
    ...state,
    loading: { [actions.payload]: false }
  }),
  GET_ALL_WORKS: (state, actions) => {
    const data = actions.payload.data
    return {
      ...state,
      works:      data.works,
      musics:     data.musics,
      categories: data.categories,
      tags:       data.tags
    }
  },
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
      const newWork = action.payload.data
      const target = state.works.findIndex((work) => work.id === newWork.id)
      state.works.splice(target, 1, newWork)
      return {
        ...state,
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
