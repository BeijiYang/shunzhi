import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './user.css'
import Settings from '../../../settings'

class User extends Component {

  handleFriendClick = () => {
    this.props.onAddFllowing(this.props.user._id)
  }
  render () {
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
            <div
              onClick={this.handleFriendClick}
              className="friend-button">
                {this.props.isFriend ? '已是好友' : '加为好友'}
            </div>
          </div>
        </div>
      )

  }
}



export default User
