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
