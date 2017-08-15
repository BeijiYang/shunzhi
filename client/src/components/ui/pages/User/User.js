import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import { connect } from 'react-redux'
import './user.css'
import Settings from '../../../../settings'
import axios from 'axios'


const FriendButton = ({ user, isFriend }) => {

  const addFollowing = () => {
      let data = {
        userId: user._id,
        currentUserId: localStorage.getItem('userId')
      }
      axios.post(`${Settings.host}/add-following`, data).then(
        res => {
          console.log('addFollowing', res.data)
        }
      )
    }

  return (<div onClick={addFollowing}
    className="user-follow-btn">
    {isFriend ? '已是好友' : '加为好友'}
  </div>)
}
class User extends Component {

  state = {
    isFriend: false
  }


  render(){
    const { userId } = this.props.match.params
    const { users } = this.props
    if(Object.keys(users).length !== 0){
      const user = users[userId]
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
            <FriendButton user={users[userId]} isFriend={true} />
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.user.all
})

export default connect(mapStateToProps)(User)
