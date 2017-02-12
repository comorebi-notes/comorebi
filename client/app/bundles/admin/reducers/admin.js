import { handleActions } from 'redux-actions'

export const initialState = {
  count: 0,
  currentAdmin: window.data.admin || ''
}

export default handleActions({
  INCREMENT_COUNTER: state => ({
    ...state,
    count: state.count + 1
  }),
  DECREMENT_COUNTER: state => ({
    ...state,
    count: state.count - 1
  })
}, initialState)
