import React , { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import { connect } from 'react-redux'
import './profile.css'
import ProfileEditable from './ProfileEditable'
import UserList from './UserList'
import { Link } from 'react-router-dom'

class Profile extends Component {

  render() {
    const { currentUser, users } = this.props
    return(
      <div className="profile">
        <TitleHeader title="个人中心" />
        <ProfileEditable currentUser={currentUser} />
        <div style={{ 'minHeight': `${window.innerHeight - 200}px`}}
          className="profile-details">
          <UserList users={users}/>
        </div>
      </div>
    )
  }
}

export default Profile
