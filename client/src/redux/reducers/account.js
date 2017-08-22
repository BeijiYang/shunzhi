import * as types from '../ActionTypes'

// auth 相关： https://github.com/reactjs/redux/issues/826#issuecomment-187913191
let account = {
  isFetching: false,
  isAuthenticated: false,
  currentUser: {},
  showAlert: false,
  alertMessage: '',
  title: ''
}

export default function accountReducer(state=account, action) {
  switch (action.type) {
    case types.REQUEST_CURRENT_USER:
      return { ...state, isFetching: true }
    case types.RECEIVE_CURRENT_USER:
      return {
        ...state, currentUser: action.currentUser,
        isFetching: false,
        isAuthenticated: true
      }
    case types.ADD_NEW_USER:
    case types.UPDATE_USER:
      return {
        ...state,
        currentUser: action.user
      }
    case types.LOGIN_REQUEST:
      return { ...state,
        isFetching: true
      }
    case types.LOGIN_SUCCESS:
      return { ...state,
        currentUser: action.currentUser,
        isAuthenticated: true,
        isFetching: false
       }
    case types.SET_TITLE:
      return { ...state, title: action.title }
    case 'LOG_OUT':
      return { ...state, currentUser: '', isAuthenticated: false }
    case types.SHOW_ALERT:
      return { ...state, showAlert: true, alertMessage: action.msg }
    case 'HIDE_ALERT':
      return { ...state, showAlert: false, alertMessage: '' }
    default:
      return state
  }
}
