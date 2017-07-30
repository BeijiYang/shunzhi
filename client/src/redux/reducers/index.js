import { combineReducers } from 'redux'

import account from './account'
import cart from './cart'
import dish from './dish'
import comment from './comment'

const rootReducer = combineReducers({
  account,
  cart,
  dish,
  comment
})

export default rootReducer
