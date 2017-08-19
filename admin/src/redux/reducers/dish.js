const dishReducer = (state={ all: {} }, action) => {
  switch (action.type) {
    case 'RECEIVE_DISHES':
      return { ...state, all: action.dishes }
    case 'ADD_DISH':
      return { ...state, all: Object.assign(state.all, { [action.dish._id]: action.dish}) }
    default:
      return state
  }
}

export default dishReducer
