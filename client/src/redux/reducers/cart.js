let cart = {
  total: 0,
  // dishes: {'597be20c2bbfdbaa14bfa248': {
  //   name: '',
  //   poster: '',
  //   price: '',
  //   count: 1
  // }},
  dishes: {},
  totalPrice: 0
}

const calPrice = (dishes) => {
  let totalPrice = 0;
  Object.keys(dishes).map(item => {
    console.log(dishes[item].price)
    totalPrice = totalPrice + parseInt(dishes[item].price) * parseInt(dishes[item].count)
  })
  return totalPrice
}

export default function cartReducer(state=cart, action) {
  let nextDishes
  let nextPrice
  switch (action.type) {
    case 'ADD_CART':
      console.log(action)
      nextDishes = {...state.dishes, [action.dishId]: {
          name: action.dish.name,
          poster: action.dish.poster,
          price: action.dish.price,
          desc: action.dish.desc,
          count: 1
        }
      }
      nextPrice = calPrice(nextDishes)

      return { ...state, total: state.total + 1, dishes: nextDishes, totalPrice: nextPrice }
    case 'INCR_CART_ITEM':
      nextDishes = { ...state.dishes,
                        [action.dishId] : { ...state.dishes[action.dishId],
                         count: state.dishes[action.dishId].count + 1
                      }
                   }
      nextPrice = calPrice(nextDishes)
      return { ...state, dishes: nextDishes, totalPrice: nextPrice }
    case 'DECR_CART_ITEM':
      nextDishes = { ...state.dishes,
                        [action.dishId] : { ...state.dishes[action.dishId],
                         count: state.dishes[action.dishId].count - 1
                      }
                   }
      nextPrice = calPrice(nextDishes)
      return { ...state, dishes: nextDishes, totalPrice: nextPrice }
    default:
      return state
  }
}
