import * as types from '../ActionTypes'


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

export default byId

export const getDish = (state, id) => {
  return  state[id]
}
