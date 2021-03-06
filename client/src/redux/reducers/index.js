import { combineReducers } from 'redux'

import account from './account'
import { user, userById } from './user'
import cart, * as fromCart from './cart'
import dish, * as fromDish from './dishes'
import comment from './comments'

const getDish = (state, id) => fromDish.getDish(state.dish, id)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getAddedIds = state => fromCart.getAddedIds(state.cart)

const rootReducer = combineReducers({
  account,
  cart,
  dish,
  comment,
  user,
  userById
})


export const getTotal = state => {
  let total = getAddedIds(state)
    .reduce((total, id) =>
      total + getDish(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)
  return total
}


export const getCartDishes = state => {
  let cartDishes = getAddedIds(state).map(id => {
    return {
      ...getDish(state, id),
      quantity: getQuantity(state, id)
    }
  })
  return cartDishes
}


export default rootReducer
