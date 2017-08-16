import React , { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './profile.css'
import ProfileEditableContainer from '../../../containers/ProfileEditableContainer'
import UserList from './UserList'

class Profile extends Component {

  render() {
    const { currentUser, users } = this.props
    return(
      <div className="profile">
        <TitleHeader title="个人中心" />
        <ProfileEditableContainer currentUser={currentUser} />
        <div style={{ 'minHeight': `${window.innerHeight - 200}px`}}
          className="profile-details">
          <UserList users={users}/>
        </div>
      </div>
    )
  }
}

export default Profile
