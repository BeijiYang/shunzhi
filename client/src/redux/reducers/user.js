let user = {
  all: []
}

export default function userReducer(state=user, action) {
  switch (action.type) {
    case 'LOAD_USERS':
      return { ...state, all: action.users }
    case 'UPDATE_USER':
      let userId =  action.userId
      let nextState = { ...state, all: { ...state.all, [userId]: action.user }}
      return nextState
    default:
      return state
  }
}
