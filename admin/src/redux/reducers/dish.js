const dishReducer = (state={ all: {} }, action) => {
  switch (action.type) {
    case 'LOAD_DISHES':
      return { ...state, all: action.dishes }
    default:
      return state
  }
}

export default dishReducer
