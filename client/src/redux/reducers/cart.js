let cart = {
  total: 0
}

export default function cartReducer(state=cart, action) {
  switch (action.type) {
    case 'ADD_CART':
      return { ...state, total: state.total + 1 }
    default:
      return state
  }
}
