let account = {
  currentUser: 'defaultUser',
  isAuthenticated: false
}

export default function accountReducer(state=account, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return { currentUser: 'petertmp', isAuthenticated: true }
    default:
      return state
  }
}
