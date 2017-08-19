import * as types from '../ActionTypes'


let account = {
  currentUser: {},
  showAlert: false,
  alertMessage: '',
  title: ''
}

export default function accountReducer(state=account, action) {
  switch (action.type) {
    case types.LOAD_CURRENT_USER:
      return { ...state, currentUser: action.currentUser }
    case types.UPDATE_USER:
      return { ...state, currentUser: action.currentUser }
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
