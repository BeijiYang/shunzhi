import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import { connect } from 'react-redux'
import './user.css'
import Settings from '../../../settings'
import FriendButton from './FriendButton'


class User extends Component {

  state = {
    isFriend: false
  }

  render(){
    const  userId  = this.props.user._id
    const { user } = this.props
      const { username, slogan, avatar } = user
      const hisAvatar = avatar ? `${Settings.host}/uploads/avatars/${avatar}` : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
      const hisUsername = username ? username : 'no name'
      const hisSlogan =  slogan ? slogan : '还没有填写个性签名'
      return(
        <div className="user">
          <TitleHeader title={username} />
          <div style={{ 'height' : `${window.innerHeight - 160}px`}}
            className="user-info-wrap">
            <div className="user-avatar"
                 style={{ 'backgroundImage' : `url(${hisAvatar})`}}
              >
            </div>
            <div className="user-name">
              {hisUsername}
            </div>
            <div className="user-info-card">
              <div className="user-info-card-title">
                个性签名
              </div>
              <div className="slogan">
                {hisSlogan}
              </div>
            </div>
            <FriendButton user={user} />
          </div>
        </div>
      )

  }
}



export default User
