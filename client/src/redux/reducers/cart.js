import * as types from '../ActionTypes'


let cart = {
  total: 0,
  // dishes: {'597be20c2bbfdbaa14bfa248': {
  //   name: '',
  //   poster: '',
  //   price: '',
  //   count: 1
  // }},
  dishes: {},
  cartCount: 0
}

const calPrice = (dishes) => {
  let total = 0;
  Object.keys(dishes).map(item => {
    console.log(dishes[item].price)
    total = total + parseInt(dishes[item].price, 10) * parseInt(dishes[item].count, 10)
    return null
  })
  return total
}

export default function cartReducer(state=cart, action) {
  let nextDishes
  let nextPrice
  switch (action.type) {
    case types.ADD_TO_CART:
      nextDishes = {...state.dishes, [action.dish._id]: {
          name: action.dish.name,
          poster: action.dish.poster,
          price: action.dish.price,
          desc: action.dish.desc,
          count: 1
        }
      }
      nextPrice = calPrice(nextDishes)

      return { ...state, cartCount: state.cartCount + 1, dishes: nextDishes, total: nextPrice }
    case 'INCR_CART_ITEM':
      nextDishes = { ...state.dishes,
                        [action.dishId] : { ...state.dishes[action.dishId],
                         count: state.dishes[action.dishId].count + 1
                      }
                   }
      nextPrice = calPrice(nextDishes)
      return { ...state, dishes: nextDishes, total: nextPrice }
    case 'DECR_CART_ITEM':
      nextDishes = { ...state.dishes,
                        [action.dishId] : { ...state.dishes[action.dishId],
                         count: state.dishes[action.dishId].count - 1
                      }
                   }
      nextPrice = calPrice(nextDishes)
      return { ...state, dishes: nextDishes, total: nextPrice }
    case 'CLEAE_CART':
      return { total: 0, dishes: {}, total: 0 }
    default:
      return state
  }
}
