import { handleActions } from 'redux-actions'

const currentAdmin = window.data.admin || ''
const initialNotification = {
  message: window.data.notification.message || '',
  level: window.data.notification.level || ''
}

export const initialState = {
  loading: false,
  error: '',
  currentAdmin,
  initialNotification
}

export default handleActions({
  LOADING: (state) => ({
    ...state,
    loading: true
  }),
  COMPLETE: (state) => ({
    ...state,
    loading: false
  }),
  EDIT_ADMIN_REQUEST: {
    next: (state) => ({
      ...state,
      error: '',
    }),
    throw: (state, action) => ({
      ...state,
      error: action.payload
    })
  },
  CLEAR_INITIAL_NOTIFICATION: (state) => ({
    ...state,
    initialNotification: {}
  })
}, initialState)
