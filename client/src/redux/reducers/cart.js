let cart = {
  total: 2,
  dishes: ['597be20c2bbfdbaa14bfa248','597be2122bbfdbaa14bfa249'],
  totalPrice: 0
}

export default function cartReducer(state=cart, action) {
  switch (action.type) {
    case 'ADD_CART':
      console.log(action)
      return { ...state, total: state.total + 1, dishes: [...state.dishes, action.dishId] }
    case 'INCR_CART_ITEM':
      return { ...state, totalPrice: state.totalPrice + DISHES[action.dishId].price }
    default:
      return state
  }
}
