import app from './app'
import dish from './dish'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  app,
  dish
})

export default rootReducer
