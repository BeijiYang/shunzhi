import * as types from '../ActionTypes'
let user = {
  all: []
}

export default function userReducer(state=user, action) {
  switch (action.type) {
    case 'LOAD_USERS':
      return { ...state, all: action.users }
    case types.UPDATE_USER:
      // FIXME
      let nextState = state
      return nextState
    default:
      return state
  }
}
