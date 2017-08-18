import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import ProfileEditable from '../components/pages/Profile/ProfileEditable'
import { showAlert, updateSlogan, updateAvatar } from '../redux/actions'
import { connect } from 'react-redux'

class ProfileEditableContainer extends Component {

  state = {
    edit: false,
    image: '',
    slogan: this.props.currentUser.slogan ? this.props.currentUser.slogan : '还没有填写个性签名'
  }

  updateSlogan = (data) => {
    this.props.updateSlogan(data)
  }

  updateAvatar = ({ formData, err }) => {
    if (err) {
      return this.props.showAlert(err)
    } else {
      this.props.updateAvatar(formData)
    }
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

export default connect(null, { showAlert, updateSlogan, updateAvatar })(ProfileEditableContainer)
