let account = {
  currentUser: '',
  isAuthenticated: true
}

export default function accountReducer(state=account, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return { currentUser: action.username, isAuthenticated: true }
    case 'LOG_OUT':
      return { currentUser: '', isAuthenticated: false }
    default:
      return state
  }
}
