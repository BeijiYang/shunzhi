import * as types from '../ActionTypes'

let dish = {
  all: {}
}

export default function dishReducer(state=dish, action) {
  switch (action.type) {
    case types.LOAD_DISHES:
      return { ...dish, all: action.dishes }
    default:
      return state
  }
}

export const getDish = (state, id) => {
  console.log('getDish-------+++', state, id)
  return  state.all[id]
}
