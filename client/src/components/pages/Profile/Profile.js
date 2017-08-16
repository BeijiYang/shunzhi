import React , { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import { connect } from 'react-redux'
import './profile.css'
// import ProfileEditable from './ProfileEditable'
import UserList from './UserList'
import { Link } from 'react-router-dom'

class Profile extends Component {

  render() {
    if(this.props.isAuthenticated !== true) {
      return(
        <div className="profile-plz-login">
          请先<Link to="/login">登录</Link>
        </div>
      )
    }else{
      let userId = localStorage.getItem('userId')
      if(this.props.users.length !== 0) {

        const { users } = this.props
        console.log('users', users)
        // users 的 ID 已经变化了
        console.log('userId', userId)

        const user = users.find(item => item._id = userId)
        return(
          <div className="profile">
            <TitleHeader title="个人中心" />
            <div style={{ 'minHeight': `${window.innerHeight - 200}px`}}
              className="profile-details">
              <UserList users={users}/>
            </div>
          </div>
        )
      }else{
        return null
      }
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.user.all,
  isAuthenticated: state.account.isAuthenticated
})

export default connect(mapStateToProps)(Profile)
