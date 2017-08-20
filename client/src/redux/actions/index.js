import * as types from '../ActionTypes'
import axios from 'axios'
import Settings from '../../settings'

export const loadCurrentUser = (userId) => dispatch => {
  dispatch({ type: types.REQUEST_CURRENT_USER })
  axios.get(`${Settings.host}/user/${userId}`).then(
    res => {
      dispatch({ type: types.RECEIVE_CURRENT_USER, currentUser: res.data.user})
    }
  )
}

export const loadUsers = () => dispatch => {
  axios.get(`${Settings.host}/users`).then(
    res => {
      dispatch({ type: types.LOAD_USERS, users: res.data.users })
    }
  )
}

export const loadDishes = () => dispatch => {
  dispatch({ type: types.REQUEST_DISHES })
  axios.get(`${Settings.host}/dishes`).then(res => {
      dispatch({ type: types.RECEIVE_DISHES, dishes: res.data.dishes })
    }
  )
}

export const addToCart = (dishId) => dispatch => {
  dispatch({ type: types.ADD_TO_CART,  dishId })
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

export const checkout = () => dispatch => {
  dispatch({ type: types.CHECKOUT_REQUEST })
}

export const updateUser = (currentUser) => dispatch => {
  dispatch({ type: types.UPDATE_USER, currentUser })
}

export const updateSlogan = (data) => dispatch => {
  axios.put(`${Settings.host}/user`, data).then( res => {
    updateUser(res.data.user)
  })
}

export const updateAvatar = (formData) => dispatch => {
  axios.post(`${Settings.host}/avatar`, formData ).then(
    res => {
      updateUser(res.data.user)
    }
  )
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

export const loadComments = () => dispatch => {
  axios.get(`${Settings.host}/comments`).then(
    res => {
      const { comments } = res.data
      dispatch({ type: types.RECEIVE_COMMENTS , comments })
    }
  )
}

export const login = (data, referrer, history) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST })
  axios.post(`${Settings.host}/user/login`, data).then(res => {
    dispatch({ type: types.LOGIN_SUCCESS, currentUser: res.data.user })
    localStorage.setItem('userId', res.data.user._id)
    let redirectTo = referrer || '/dashboard'
    console.log('xxxxxxx redirectTo', redirectTo)
    console.log('xxxx history', history)
    history.push(redirectTo)
    // 注意：重定向到 cart 后，要保证用户已经登录了，不然还会跳回来
  }).catch(err => {
    if(err.response){
      const { msg } = err.response.data
      dispatch({ type: types.SHOW_ALERT, msg })
    }
  })
}
