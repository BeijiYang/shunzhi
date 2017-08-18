import React , { Component } from 'react'
import './profile.css'
import ProfileEditableContainer from '../../../containers/ProfileEditableContainer'
import UserList from './UserList'

class Profile extends Component {

  render() {
    const { currentUser, users } = this.props
    return(
      <div className="profile">
        <ProfileEditableContainer currentUser={currentUser} />
        <div style={{ 'minHeight': `${window.innerHeight - 200}px`}}
          className="profile-details">
          <UserList users={users}
            onToggleFollow={this.props.onToggleFollow}
            currentUser={currentUser}/>
        </div>
      </div>
    )
  }
}

export default Profile
