import { handleActions } from 'redux-actions'

export const initialState = { count: 0 }

const reducerMap = {
  INCREMENT_COUNTER(state, action) {
    return {...state, count: state.count + 1}
  },
  DECREMENT_COUNTER(state, action) {
    return {...state, count: state.count - 1}
  },
}

export default handleActions(reducerMap, initialState)
