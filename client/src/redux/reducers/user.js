import * as types from '../ActionTypes'
let user = {
  all: []
}

export default function userReducer(state=user, action) {
  switch (action.type) {
    case types.LOAD_USERS:
      return { ...state, all: action.users }
    case types.UPDATE_USER:
      let newAll = state.all.map(user => {
        if(user._id === action.currentUser._id) {
          return action.currentUser
        }
        return user
      })
      return { ...state, all: newAll }
    default:
      return state
  }
}
