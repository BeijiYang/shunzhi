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
  console.log('55555555', state)
  console.log('66666666', id)
  return  state.all[id]
}
