import * as types from '../ActionTypes'

export function user(state={ all: [] }, action) {
  switch (action.type) {
    case types.LOAD_USERS:
      return { ...state, all: action.users }
    case types.UPDATE_USER:
      let newAll = state.all.map(user => {
        if(user._id === action.user._id) {
          return action.user
        }
        return user
      })
      return { ...state, all: newAll }
    default:
      return state
  }
}

export function userById(state={ all: [] }, action) {
  switch (action.type) {
    case types.LOAD_USERS:
      let newAll = action.users.reduce((obj, user) => {
          obj[user._id] = user
          return obj
        }, {})
      return { ...state, all: newAll }
    default:
      return state
  }
}
