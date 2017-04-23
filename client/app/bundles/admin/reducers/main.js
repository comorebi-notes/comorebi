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
  categories: []
}

export const initialState = {
  loading: {},
  modal: false,
  errors: '',
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
  TOGGLE_MODAL: (state) => ({
    ...state,
    modal: !state.modal
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
    return Object.assign({}, state, { filters })
  },
  CHANGE_FILTERING_STATUS: (state, action) => {
    const filters = Object.assign({}, state.filters)
    filters.status = action.payload
    return Object.assign({}, state, { filters })
  },
  ADD_FILTERING_CATEGORIES: (state, action) => {
    const filters = Object.assign({}, state.filters)
    const newCategory = action.payload
    if (!filters.categories.includes(newCategory)) {
      filters.categories = filters.categories.concat(newCategory)
    }
    return Object.assign({}, state, { filters })
  },
  DELETE_FILTERING_CATEGORIES: (state, action) => {
    const filters = Object.assign({}, state.filters)
    const targetCategory = action.payload
    const newCategories = filters.categories.filter((category) => category !== targetCategory)
    filters.categories = newCategories
    return Object.assign({}, state, { filters })
  },
  CLEAR_FILTERS: (state) => ({
    ...state,
    filters: initialFilters
  }),
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
