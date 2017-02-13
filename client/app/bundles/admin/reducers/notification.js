import { handleActions } from 'redux-actions'

export const initialState = {
  message: window.data.notification.message || '',
  type: window.data.notification.type || '',
  show: true
}

export default handleActions({
  SET_NOTIFICATION: (state, actions) => ({
    ...state,
    show: actions.payload
  })
}, initialState)
