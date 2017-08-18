import * as types from '../ActionTypes'
import axios from 'axios'
import Settings from '../../settings'

export const loadCurrentUser = (userId) => dispatch => {
  axios.get(`${Settings.host}/user/${userId}`).then(
    res => {
      dispatch({ type: types.LOAD_CURRENT_USER, currentUser: res.data.user})
    }
  )
}

export const addToCart = (dish) => dispatch => {
  dispatch({ type: types.ADD_TO_CART,  dish: dish })
}

export const decrCartItem = (dishId) => dispatch => {
  dispatch({ type: types.DECR_CART_ITEM, dishId })
}

export const incrCartItem = (dishId) => dispatch => {
  dispatch({ type: types.INCR_CART_ITEM, dishId })
}

export const showAlert = (msg) => dispatch => {
  dispatch({ type: types.SHOW_ALERT, msg })
}

export const updateUser = (currentUser) => dispatch => {
  dispatch({ type: types.UPDATE_USER, currentUser })
}

export const followFriend = (userId) => dispatch => {
  let data = {
    userId,
    currentUserId: localStorage.getItem('userId')
  }
  axios.post(`${Settings.host}/add-following`, data).then(
    res => {
      dispatch({ type: types.UPDATE_USER, currentUser: res.data.user })
    }
  )
}

export const removeFriend = (userId) => dispatch => {
  let data = {
    userId,
    currentUserId: localStorage.getItem('userId')
  }
  axios.post(`${Settings.host}/remove-following`, data).then(
    res => {

      dispatch({ type: types.UPDATE_USER, currentUser: res.data.user })
    }
  )
}

export const setTitle = (title) => dispatch => {
  dispatch({ type: types.SET_TITLE, title })
}
