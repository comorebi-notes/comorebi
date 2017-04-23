import { handleActions } from 'redux-actions'

const initialState = {
  words: "",
  status: "",
  categories: [],
  page: 1
}

export default handleActions({
  CHANGE_FILTERING_WORDS: (state, action) => ({
    ...state,
    words: action.payload,
    page: 1
  }),
  CHANGE_FILTERING_STATUS: (state, action) => ({
    ...state,
    status: action.payload,
    page: 1
  }),
  ADD_FILTERING_CATEGORIES: (state, action) => {
    const newState = Object.assign({}, state)
    const newCategory = action.payload
    if (!newState.categories.includes(newCategory)) {
      newState.categories = newState.categories.concat(newCategory)
    }
    newState.page = 1
    return Object.assign({}, newState)
  },
  DELETE_FILTERING_CATEGORIES: (state, action) => {
    const newState = Object.assign({}, state)
    const targetCategory = action.payload
    const newCategories = newState.categories.filter((category) => category !== targetCategory)
    newState.categories = newCategories
    newState.page = 1
    return Object.assign({}, newState)
  },
  CHANGE_PAGE: (state, action) => ({
    ...state,
    page: parseInt(action.payload, 10)
  }),
  CLEAR_FILTERS: () => initialState
}, initialState)
