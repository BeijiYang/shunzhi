import * as types from '../ActionTypes'
import axios from 'axios'

export const loadCurrentUser = (userId) => dispatch => {
  axios.get(`http://localhost:3008/user/${userId}`).then(
    res => {
      dispatch({ type: types.LOAD_CURRENT_USER, currentUser: res.data.user})
    }
  )
}
