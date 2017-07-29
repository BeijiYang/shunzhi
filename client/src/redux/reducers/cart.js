let cart = {
  total: 2,
  // dishes: ['597be20c2bbfdbaa14bfa248','597be2122bbfdbaa14bfa249'],
  // dishes: {'597be20c2bbfdbaa14bfa248': {
  //   name: '',
  //   poster: '',
  //   price: ''
  // }},
  dishes: {},
  totalPrice: 0
}

export default function cartReducer(state=cart, action) {
  switch (action.type) {
    case 'ADD_CART':
      console.log(action)
      let nextState = { ...state, total: state.total + 1, dishes: {...state.dishes, [action.dishId]: {
        name: action.dish.name,
        poster: action.dish.poster,
        price: action.dish.price,
        desc: action.dish.desc
      }} }
      console.log('====', nextState)
      return nextState
    case 'INCR_CART_ITEM':
      // return { ...state, totalPrice: state.totalPrice + DISHES[action.dishId].price }
      return state
    default:
      return state
  }
}
