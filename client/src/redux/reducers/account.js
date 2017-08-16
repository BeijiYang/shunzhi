import * as types from '../ActionTypes'


let account = {
  currentUser: {},
  isAuthenticated: false,
  showAlert: false,
  alertMessage: ''
}

export default function accountReducer(state=account, action) {
  switch (action.type) {
    case types.LOAD_CURRENT_USER:
      console.log('-----in reducer', action.currentUser)
      return { ...state, currentUser: action.currentUser }
    case 'AUTH_USER':
      // return { ...state, currentUser: action.username, isAuthenticated: true }
      return state
    case 'LOG_OUT':
      return { ...state, currentUser: '', isAuthenticated: false }
    case 'SHOW_ALERT':
      return { ...state, showAlert: true, alertMessage: action.message }
    case 'HIDE_ALERT':
      return { ...state, showAlert: false, alertMessage: '' }
    default:
      return state
  }
}
