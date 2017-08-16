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
    console.log('edit')
    this.setState({
      edit: true
    })
  }

  render(){
    const { currentUser } = this.props
    const  { avatar, username } = currentUser
    const hisAvatar = avatar ? `${Settings.host}/uploads/avatars/${avatar}` : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
    const hisUsername = username ? username : 'no name'

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
            onChange={this.props.onUpdateAvatar}
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
