import { handleActions } from 'redux-actions'
import deepcopy from 'deepcopy'

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
    const newState = deepcopy(state)
    const newCategory = action.payload
    if (!newState.categories.includes(newCategory)) newState.categories.push(newCategory)
    newState.page = 1
    return newState
  },
  DELETE_FILTERING_CATEGORIES: (state, action) => {
    const newState = deepcopy(state)
    const targetCategory = action.payload
    const newCategories = newState.categories.filter((category) => category !== targetCategory)
    newState.categories = newCategories
    newState.page = 1
    return newState
  },
  CHANGE_PAGE: (state, action) => ({
    ...state,
    page: parseInt(action.payload, 10)
  }),
  CLEAR_FILTERS: () => initialState
}, initialState)
