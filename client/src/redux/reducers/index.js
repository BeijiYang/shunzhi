import { combineReducers } from 'redux'

import account from './account'
import { user, userById } from './user'
import cart from './cart'
import dish from './dish'
import comment from './comment'

const rootReducer = combineReducers({
  account,
  cart,
  dish,
  comment,
  user,
  userById
})

export default rootReducer
