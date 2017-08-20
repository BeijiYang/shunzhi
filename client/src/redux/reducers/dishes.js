import * as types from '../ActionTypes'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
  switch (action.type) {
    case types.REQUEST_DISHES:
      return true
    case types.RECEIVE_DISHES:
      return false
    default:
      return state
  }
}
// ref: https://egghead.io/lessons/javascript-redux-normalizing-the-state-shape
const byId = (state = {}, action) => {
  // byId 就成了一个数据库的表了
  switch (action.type) {
    case types.RECEIVE_DISHES:
      return {
        ...state,
        ...action.dishes.reduce((obj, dish) => {
          obj[dish._id] = dish
          return obj
        }, {})
      }
    default:
      return state
  }
}

export default combineReducers({
  byId,
  isFetching
})

export const getDish = (state, id) => {
  return  state.byId[id]
}
