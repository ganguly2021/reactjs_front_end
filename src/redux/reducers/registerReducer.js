import {
  REGISTER_REQUEST,
  REGISTER_RESPONSE,
  SET_REGISTER_ERROR,
  CLEAR_REGISTER_ERROR
} from './../actions/types'

const initialState = {
  isLoading: false,
  error: {

  }
}

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case REGISTER_RESPONSE:
      return {
        ...state,
        isLoading: false
      }
    case SET_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_REGISTER_ERROR:
      return {
        ...state,
        error: {}
      }
    default:
      return state
  }
}