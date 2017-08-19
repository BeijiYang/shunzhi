import * as types from '../ActionTypes'
// ref: https://github.com/reactjs/redux/blob/master/examples/shopping-cart/src/reducers/cart.js

let initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      if(state.indexOf(action.dishId) !== -1) {
        return state
      }
      return [ ...state, action.dishId]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  const { dishId } = action
  switch (action.type) {
    case types.ADD_TO_CART:
      return { ...state,
        [dishId]: 1
      }
    case types.INCR_CART_ITEM:
      return { ...state,
        [dishId]: state[dishId] + 1
      }
    case types.DECR_CART_ITEM:
      if (state[dishId] === 0) return state
      return { ...state,
        [dishId]: state[dishId] - 1
      }
    default:
      return state
  }
}


export const getQuantity = (state, dishId) => {
  console.log('xxxxx--getQuantity', state.quantityById[dishId])
  state.quantityById[dishId]
}

export const getAddedIds = state => {
  console.log('xxxxx-getAddedIds', state.addedIds)
  return state.addedIds
}

export default function cartReducer(state=initialState, action) {
  switch (action.type) {
    case types.CHECKOUT_REQUEST:
      return  initialState
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}
