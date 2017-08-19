import * as types from '../../constants/ActionTypes'

const dishReducer = (state={ all: {} }, action) => {
  switch (action.type) {
    case types.RECEIVE_DISHES:
      return { ...state, all: action.dishes }
    case types.ADD_DISH:
      return { ...state, all: [...state.all,  action.dish] }
    case types.REMOVE_DISH:
      const newAll = state.all.filter(dish => dish._id !== action.id)
      return { ...state, all: newAll }
    default:
      return state
  }
}

export default dishReducer
