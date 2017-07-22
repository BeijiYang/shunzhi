let account = {
  currentUser: '',
  isAuthenticated: false
}

export default function accountReducer(state=account, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return { currentUser: action.username, isAuthenticated: true }
    default:
      return state
  }
}
