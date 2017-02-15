import { handleActions } from 'redux-actions'

export const initialState = {
  count: 0,
  currentAdmin: window.data.admin || '',
  initialNotification: {
    message: window.data.notification.message || '',
    level: window.data.notification.level || ''
  }
}

export default handleActions({
  INCREMENT_COUNTER: state => ({
    ...state,
    count: state.count + 1
  }),
  DECREMENT_COUNTER: state => ({
    ...state,
    count: state.count - 1
  }),

  CLEAR_INITIAL_NOTIFICATION: state => ({
    ...state,
    initialNotification: {}
  })
}, initialState)
