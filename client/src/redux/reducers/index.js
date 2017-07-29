import { combineReducers } from 'redux'

import account from './account'
import cart from './cart'
import dish from './dish'


const rootReducer = combineReducers({
  account,
  cart,
  dish
})

export default rootReducer
