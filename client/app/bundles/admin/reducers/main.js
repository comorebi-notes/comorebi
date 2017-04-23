import { handleActions } from 'redux-actions'

const currentAdmin = window.data.admin || ''
const windowNotification = window.data.notification || {}
const initialNotification = {
  message: windowNotification.message || '',
  level:   windowNotification.level   || ''
}
const initialFilters = {
  words: "",
  status: "",
  categories: [],
  page: 1
}

export const initialState = {
  loading: {},
  errors: '',
  modal: false,
  works: '',
  filters: initialFilters,
  currentAdmin,
  initialNotification
}

export default handleActions({
  LOADING:  (state, action) => ({
    ...state,
    loading: { [action.payload]: true }
  }),
  COMPLETE: (state, action) => ({
    ...state,
    loading: { [action.payload]: false }
  }),
  GET_ALL_WORKS: (state, action) => {
    const data = action.payload.data
    return {
      ...state,
      works:      data.works,
      musics:     data.musics,
      categories: data.categories,
      tags:       data.tags
    }
  },
  CHANGE_FILTERING_WORDS: (state, action) => {
    const filters = Object.assign({}, state.filters)
    filters.words = action.payload
    filters.page = 1
    return Object.assign({}, state, { filters })
  },
  CHANGE_FILTERING_STATUS: (state, action) => {
    const filters = Object.assign({}, state.filters)
    filters.status = action.payload
    filters.page = 1
    return Object.assign({}, state, { filters })
  },
  ADD_FILTERING_CATEGORIES: (state, action) => {
    const filters = Object.assign({}, state.filters)
    const newCategory = action.payload
    if (!filters.categories.includes(newCategory)) {
      filters.categories = filters.categories.concat(newCategory)
    }
    filters.page = 1
    return Object.assign({}, state, { filters })
  },
  DELETE_FILTERING_CATEGORIES: (state, action) => {
    const filters = Object.assign({}, state.filters)
    const targetCategory = action.payload
    const newCategories = filters.categories.filter((category) => category !== targetCategory)
    filters.categories = newCategories
    filters.page = 1
    return Object.assign({}, state, { filters })
  },
  CLEAR_FILTERS: (state) => ({
    ...state,
    filters: initialFilters
  }),
  CHANGE_PAGE: (state, action) => {
    const filters = Object.assign({}, state.filters)
    filters.page = parseInt(action.payload, 10)
    return Object.assign({}, state, { filters })
  },
  ADD_TAG: (state, action) => {
    state[action.payload.target].push(action.payload.name)
    return { ...state }
  },
  UPDATE_ADMIN_REQUEST: {
    next: (state, action) => ({
      ...state,
      currentAdmin: JSON.parse(action.payload.config.data).admin,
      errors: '',
    }),
    throw: (state, action) => ({
      ...state,
      errors: action.payload.response.data.errors
    })
  },
  UPDATE_WORK_REQUEST: {
    next: (state) => ({
      ...state,
      errors: ''
    }),
    throw: (state, action) => ({
      ...state,
      errors: action.payload.response.data.errors
    })
  },
  CREATE_WORK_REQUEST: {
    next: (state) => ({
      ...state,
      errors: ''
    }),
    throw: (state, action) => ({
      ...state,
      errors: action.payload.response.data.errors
    })
  },
  DESTROY_WORK_REQUEST: {
    next: (state) => ({
      ...state,
      errors: ''
    }),
    throw: (state, action) => ({
      ...state,
      errors: action.payload.response.data.errors
    })
  },
  CLEAR_INITIAL_NOTIFICATION: (state) => ({
    ...state,
    initialNotification: {}
  })
}, initialState)
