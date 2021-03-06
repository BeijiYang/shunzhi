import React, { Component } from 'react'
import editIcon from './editIcon.svg'
import Settings from '../../../settings'

class ProfileEditable extends Component {

  state = {
    edit: false,
    image: '',
    slogan: this.props.currentUser.slogan ? this.props.currentUser.slogan : '还没有填写个性签名'
  }

  handleSloganChange = () => {
    this.setState({
      slogan: this.sloganInput.value
    })
  }

  handleSloganSubmit = (e) => {
    e.preventDefault()
    let slogan = this.sloganInput.value
    let data = {
      username: this.props.currentUser.username,
      slogan
    }
    this.props.onUpdateSlogan(data)
    this.setState({
      edit: false
    })
  }

  edit = () => {
    this.setState({
      edit: true
    })
  }

  handleAvatarChange = (e) => {
    const file = e.target.files[0]

    // 注意：手机上拍照上传会失败，是因为 niginx 对上传文件的大小是有限制的，
    // 最大就是 1M ，可以通过修改 /etc/nginx/site-enabled/xxx.conf 文件来解决
    let formData = new FormData()
    let err
    if (!file.type.match('image.*')) {
      err = '请上传图片'
      this.props.onUpdateAvatar({ err })
    } else if (parseInt(file.size/1024, 10) > 1024) {
      err = `请不要上传大于 1M 的图片，当前图片 ${parseInt(file.size/1024, 10)}K`
      this.props.onUpdateAvatar({ err })
    } else {
      const reader = new FileReader()
      reader.onload = (event) => {
        this.setState({
          image: event.target.result,
        });
        formData.append('avatar', file)
        formData.append('userId', this.props.currentUser._id )
        this.props.onUpdateAvatar({ formData })
      }
      reader.readAsDataURL(file);
    }
  }

  render(){
    const { currentUser } = this.props
    const  { avatar, username } = currentUser
    const hisAvatar = avatar ? `${Settings.host}/uploads/avatars/${avatar}` : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
    const hisUsername = username || 'no name'

    let editForm = (
      <form className="profile-form"
        onSubmit={this.handleSloganSubmit}>
        <input className="profile-slogan-input"
          ref={value => this.sloganInput = value}
          type="text"  value={this.state.slogan}
          onChange={this.handleSloganChange}
          />
        <button type="submit">保存</button>
      </form>
    )

    return(
      <div className="profile-editable">
        <label className="profile-upload-img"
          style={{
            'backgroundImage': `url(${this.state.image ? this.state.image : hisAvatar})`,
           }}
          >
          <input type='file' className='profile-image-input'
            onChange={this.handleAvatarChange}
            />
        </label>

        <div className="profile-username-slogan">
          <div className="profile-username">
            {hisUsername}
          </div>
          <div className="profile-slogan">
            { this.state.edit ? editForm : this.state.slogan }
          </div>
        </div>
        <div onClick={this.edit}
          className="profile-edit-btn">
          <img src={editIcon} alt="edit" />
        </div>
      </div>
    )
  }
}

export default ProfileEditable
