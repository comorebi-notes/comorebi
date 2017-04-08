import { handleActions } from 'redux-actions'

const currentAdmin = window.data.admin || ''
const windowNotification = window.data.notification || {}
const initialNotification = {
  message: windowNotification.message || '',
  level:   windowNotification.level   || ''
}

export const initialState = {
  loading: false,
  errors: '',
  works: '',
  currentAdmin,
  initialNotification
}

export default handleActions({
  LOADING:  (state) => ({ ...state, loading: true }),
  COMPLETE: (state) => ({ ...state, loading: false }),
  GET_ALL_WORKS: (state, actions) => ({
    ...state,
    works: actions.payload.data
  }),
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
  CLEAR_INITIAL_NOTIFICATION: (state) => ({
    ...state,
    initialNotification: {}
  })
}, initialState)
