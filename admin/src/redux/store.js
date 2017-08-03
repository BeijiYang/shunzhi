import { createStore } from 'redux'

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'XXX':
      return state
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store
