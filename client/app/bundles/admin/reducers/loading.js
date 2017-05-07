import { handleActions } from 'redux-actions'

export default handleActions({
  LOADING:  (state, action) => ({
    ...state,
    [action.payload]: true
  }),
  COMPLETE: (state, action) => ({
    ...state,
    [action.payload]: false
  })
}, {})
