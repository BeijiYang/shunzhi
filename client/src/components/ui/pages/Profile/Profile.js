import React , { Component } from 'react'
import Sidebar from '../../shared/Sidebar/Sidebar'

class Profile extends Component {
  render() {
    return(
      <div className="profile">
        <Sidebar />
        个人中心
      </div>
    )
  }
}

export default Profile
