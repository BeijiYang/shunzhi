import * as types from '../../constants/ActionTypes'
import Settings from '../../settings.js'
import axios from 'axios'

export const getAllDishes = () => dispatch => {
  axios.get(`${Settings.host}/dishes`).then(res => {
    const { dishes } = res.data
    dispatch({ type: types.LOAD_DISHES, dishes })
  })
}

export const submitDish = (data, message) => dispatch => {
  axios.post(`${Settings.host}/dish`, data)
    .then( res => {
      message.info('添加菜品成功');
      dispatch({ type: types.ADD_DISH, dish: res.data.dish })
    })
    .catch( (error) => {
      let errMesg = error.response.data.error
      alert(errMesg)
    })
}
