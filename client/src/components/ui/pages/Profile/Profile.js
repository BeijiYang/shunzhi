import React , { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import { connect } from 'react-redux'
import './profile.css'
import ProfileEditable from './ProfileEditable'
import UserList from './UserList'

class Profile extends Component {

  render() {
    let userId = localStorage.getItem('userId')
    if(Object.keys(this.props.users).length !== 0) {
      const { users } = this.props
      const user = users[userId]
      return(
        <div className="profile">
          <TitleHeader title="个人中心" />
          <ProfileEditable user={user} userId={userId}/>
          <div className="profile-details">
            <UserList users={users}/>
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

export default connect(mapStateToProps)(Profile)
