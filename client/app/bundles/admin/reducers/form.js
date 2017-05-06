import { reducer as formReducer } from 'redux-form'

const form = formReducer.plugin({
  music: (state, action) => {
    switch (action.type) {
      case "UPLOAD_FILE_REQUEST": {
        return {
          ...state,
          values: {
            ...state.values,
            [action.payload.config.targetField]: {
              ...action.payload.data
            }
          }
        }
      }
      default: {
        return state
      }
    }
  }
})

export default form
