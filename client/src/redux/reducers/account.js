let account = {
  currentUser: '',
  isAuthenticated: false,
  user: {
    username: '',
    avatar: '',
    slogan: ''
  },
  showAlert: false,
  alertMessage: ''
}

export default function accountReducer(state=account, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return { ...state, currentUser: action.username, isAuthenticated: true }
    case 'LOAD_USER':
      console.log('LOAD_USER', action.user)
      return { ...state, user: {
        username: action.user.username,
        avatar: action.user.avater ? action.user.avatar: '',
        slogan: action.user.slogan ? action.user.slogan: ''
      }}
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
