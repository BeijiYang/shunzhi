import * as types from '../ActionTypes'

const byId = (state={}, action) => {
  switch (action.type) {
    case types.RECEIVE_COMMENTS:
      return {
        ...state,
        ...action.comments.reduce((obj, comment) => {
          obj[comment._id] = comment
          return obj
        }, {})
      }
    default:
      return state
  }
}

export default byId
