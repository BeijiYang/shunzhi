import * as types from '../../constants/ActionTypes'
import Settings from '../../settings.js'
import axios from 'axios'

export const getAllDishes = () => dispatch => {
  axios.get(`${Settings.host}/dishes`).then(res => {
    const { dishes } = res.data
    dispatch({ type: types.LOAD_DISHES, dishes })
  })
}
