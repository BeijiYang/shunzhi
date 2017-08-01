let user = {
  all: {}
}

export default function userReducer(state=user, action) {
  switch (action.type) {
    case 'LOAD_USERS':
      return { ...user, all: action.users }
    default:
      return state
  }
}
