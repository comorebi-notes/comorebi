import { handleActions } from 'redux-actions'

export const initialState = { count: 0 }

export default handleActions({
  'INCREMENT_COUNTER' (state, actions) {
    return {
      ...state,
      count: state.count + 1
    }
  },
  'DECREMENT_COUNTER' (state) {
    return {
      ...state,
      count: state.count - 1
    }
  },
}, initialState)
