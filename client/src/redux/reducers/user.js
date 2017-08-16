import * as types from '../ActionTypes'
let user = {
  all: []
}

export default function userReducer(state=user, action) {
  switch (action.type) {
    case types.LOAD_USERS:
      return { ...state, all: action.users }
    default:
      return state
  }
}
