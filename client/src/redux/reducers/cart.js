let cart = {
  total: 2,
  dishes: ['597be20c2bbfdbaa14bfa248','597be2122bbfdbaa14bfa249'],
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
