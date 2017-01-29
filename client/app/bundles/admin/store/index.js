import { createStore } from 'redux'
import counterReducer, { initialState } from '../reducers'

export default (preloadState = {}) => {
  return createStore(counterReducer, {...initialState, ...preloadState})
}
