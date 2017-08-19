import * as types from '../../constants/ActionTypes'
import Settings from '../../settings.js'
import axios from 'axios'

export const getAllDishes = () => dispatch => {
  dispatch({ type: types.REQUEST_DISHES })
  axios.get(`${Settings.host}/dishes`).then(res => {
    const { dishes } = res.data
    dispatch({ type: types.RECEIVE_DISHES , dishes })
  })
}

export const submitDish = (data, message, history) => dispatch => {
  axios.post(`${Settings.host}/dish`, data)
    .then( res => {
      message.info('添加菜品成功');
      dispatch({ type: types.ADD_DISH, dish: res.data.dish })
      history.push('/dashboard/dishes')
    })
    .catch( (error) => {
      let errMesg = error.response.data.error
      alert(errMesg)
    })
}

export const deleteDish = (id, message) => dispatch => {
  axios.delete(`${Settings.host}/dish/${id}`)
  .then(
    res => {
      message.info('删除甜点成功')
      dispatch({ type: types.REMOVE_DISH, id })
    }
  )
}
