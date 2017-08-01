import React, { Component } from 'react'
import editIcon from './editIcon.svg'
import axios from 'axios'
import Settings from '../../../../settings'
import { connect } from 'react-redux'

class ProfileEditable extends Component {

  state = {
    edit: false,
    image: ''
  }

  edit = () => {
    console.log('edit')
    this.setState({
      edit: true
    })
  }

  updateUser = (e) => {
    e.preventDefault()
    let slogan = this.sloganInput.value
    let data = {
      username: this.props.user.username,
      slogan
    }
    console.log(data)
    axios.put(`${Settings.host}/user`, data).then( res => {
      console.log('user, from server...', res.data)
      this.props.dispatch({ type: 'UPDATE_USER', user: res.data.user, userId: this.props.userId  })
      this.setState({
        edit: false
      })
    })

  }

  handleChange = (event) => {
      const file = event.target.files[0];
      console.log('-------haaaaaa-----', file)
      let formData = new FormData()

      if (!file.type.match('image.*')) {
        console.log('请上传图片');
      } else {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.setState({
            image: event.target.result,
          });
          console.log('image staee', this.state.image)
          formData.append('avatar', file)
          formData.append('userId', this.props.userId )
          console.log('-------bbbbbb-----', file)
          axios.post(`${Settings.host}/avatar`, formData ).then(
            res => {
              console.log(res)
            }
          )

        }
        reader.readAsDataURL(file);
      }
    }

  render(){
    const { user } = this.props
    const  { avatar, username, slogan } = user
    const hisAvatar = avatar ? avatar : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
    const hisUsername = username ? username : 'no name'
    const hisSlogan =  slogan ? slogan : '此人很个性，还没有填写个性签名'

    let editForm = (
      <form className="profile-form"
        onSubmit={this.updateUser}>
        <input className="profile-slogan-input"
          ref={value => this.sloganInput = value}
          type="text" placeholder={hisSlogan} />
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
            onChange={this.handleChange}
            />
        </label>

        <div className="profile-username-slogan">
          <div className="profile-username">
            {hisUsername}
          </div>
          <div className="profile-slogan">
            { this.state.edit ? editForm : hisSlogan }
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

export default connect(null)(ProfileEditable)
