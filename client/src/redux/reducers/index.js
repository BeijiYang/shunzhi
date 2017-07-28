import { combineReducers } from 'redux'

import account from './account'
import cart from './cart'


const rootReducer = combineReducers({
  account,
  cart
})

export default rootReducer
