import * as types from '../ActionTypes'

import { combineReducers } from 'redux'


const all = (state=[], action) => {
  switch (action.type) {
    case types.RECEIVE_COMMENTS:
      return action.comments
    default:
      return state
  }
}

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

export default combineReducers({
  byId,
  all
})
