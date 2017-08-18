import { combineReducers } from 'redux'

import account from './account'
import { user, userById } from './user'
import cart, * as fromCart from './cart'
import dish, * as fromDish from './dish'
import comment from './comment'

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
