import * as types from '../ActionTypes'


const byId = (state = {}, action) => {
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
  return  state.all[id]
}
