import React, { Component } from 'react'
import NewDish from '../components/NewDish'
import  Settings  from '../settings'
import axios from 'axios'



class NewDishContainer extends Component {
  submitDish = (data, message) => {
    axios.post(`${Settings.host}/dish`, data)
      .then( res => {
        console.log('POST /dish', res.data)
        message.info('添加菜品成功');
      })
      .catch( (error) => {
        let errMesg = error.response.data.error
        alert(errMesg)
      })
  }

  uploadAction = {
    action: `${Settings.host}/dish/poster`,
    name: 'poster'
  }


  render = () => {
    return (
      <NewDish onSubmitDish={this.submitDish}
        uploadAction={this.uploadAction}
      />
  )}
}

export default NewDishContainer
