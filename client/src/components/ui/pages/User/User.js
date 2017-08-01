import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import { connect } from 'react-redux'

class User extends Component {
  render(){
    const { userId } = this.props.match.params
    const { users } = this.props
    if(Object.keys(users).length !== 0){
      console.log('users-inif', users)
      const user = users[userId]
      const { username, slogan, avatar } = user
      const hisAvatar = avatar ? avatar : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
      const hisUsername = username ? username : 'no name'
      const hisSlogan =  slogan ? slogan : '此人很个性，还没有填写个性签名'
      return(
        <div className="user">
          <TitleHeader title="peter" />
          <img src={hisAvatar} alt="avatar" />
          <div className="user-name">
            {hisUsername}
          </div>
          <div className="slogan">
            {hisSlogan}
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
