import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  SET_LOGIN_USER,
  SET_LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
  LOGOUT_USER
} from './../actions/types'

const initialState = {
  isLoading: false,
  error: {

  },
  user: {

  }
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_RESPONSE:
      return {
        ...state,
        isLoading: false
      }
    case SET_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_LOGIN_USER:
      return {
        ...state,
        user: action.payload
      }
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        error: {}
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: {}
      }
    default:
      return state
  }
}