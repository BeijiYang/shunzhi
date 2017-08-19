import * as types from '../../constants/ActionTypes'

const initState = {
  isFetching: false
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case types.REQUEST_DISHES:
      return { ...state, isFetching: true }
    case types.RECEIVE_DISHES:
      return { ...state, isFetching: false }
    default:
      return state
  }
}

export default appReducer
