import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import ProfileEditable from '../components/pages/Profile/ProfileEditable'
import store from '../redux/store'
import * as types from '../redux/ActionTypes'

class ProfileEditableContainer extends Component {

  state = {
    edit: false,
    image: '',
    slogan: this.props.currentUser.slogan ? this.props.currentUser.slogan : '还没有填写个性签名'
  }

  updateSlogan = (data) => {
    axios.put(`${Settings.host}/user`, data).then( res => {
      store.dispatch({ type: types.UPDATE_USER, currentUser: res.data.user })
    })
  }

  updateAvatar = (formData) => {
    axios.post(`${Settings.host}/avatar`, formData ).then(
      res => {
        store.dispatch({ type: types.UPDATE_USER, currentUser: res.data.user })
      }
    )
  }



  render(){
    return(
      <ProfileEditable
      currentUser={this.props.currentUser}
      onUpdateAvatar={this.updateAvatar}
      onUpdateSlogan={this.updateSlogan}
      />
    )
  }
}

export default ProfileEditableContainer
