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
      console.log('user, from server...', res.data)
      store.dispatch({ type: types.UPDATE_USER, user: res.data.user })
    })
  }

  updateAvatar = (event) => {
    // 注意：手机上拍照上传会失败，是因为 niginx 对上传文件的大小是有限制的，
    // 最大就是 1M ，可以通过修改 /etc/nginx/site-enabled/xxx.conf 文件来解决
      const file = event.target.files[0];
      let formData = new FormData()
      if (!file.type.match('image.*')) {
        console.log('请上传图片');
      } else {
        const reader = new FileReader();
        reader.onload = (event) => {
          console.log('onload.....');
          this.setState({
            image: event.target.result,
          });
          // console.log('image staee', this.state.image)
          formData.append('avatar', file)
          formData.append('userId', this.props.userId )
          console.log('formData..', formData)
          axios.post(`${Settings.host}/avatar`, formData ).then(
            res => {
              console.log(res.data)
              this.props.dispatch({ type: 'UPDATE_USER', userId: this.props.userId , user: { ...this.props.user, avatar: res.data.user.avatar }})
            }
          )

        }
        console.log('reader.read....')
        reader.readAsDataURL(file);
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

export default ProfileEditableContainer
