let cart = {
  total: 0,
  dishes: [],
  totalPrice: 60
}

export default function cartReducer(state=cart, action) {
  switch (action.type) {
    case 'ADD_CART':
      console.log(action)
      return { ...state, total: state.total + 1, dishes: [...state.dishes, action.dishId] }
    default:
      return state
  }
}
