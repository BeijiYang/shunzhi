import { createStore } from 'redux'
import accountReducer from './reducers/account'

const store = createStore(accountReducer)

export default store
