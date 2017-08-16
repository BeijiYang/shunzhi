let user = {
  all: []
}

export default function userReducer(state=user, action) {
  switch (action.type) {
    case 'LOAD_USERS':
      console.log('LOAD_USERS', action.users)
      // 这里的 action.users 也已经不对了
      return { ...state, all: action.users }
    case 'UPDATE_USER':
      console.log('UPDATE_USER...', action.user)
      let userId =  action.userId
      let nextState = { ...state, all: { ...state.all, [userId]: action.user }}
      return nextState
    default:
      return state
  }
}
