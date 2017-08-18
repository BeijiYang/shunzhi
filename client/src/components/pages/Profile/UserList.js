import React, { Component } from 'react'
import './user-list.css'
import Settings from '../../../settings'
import Toggle from 'react-toggle'
import { Link } from 'react-router-dom'

class UserList extends Component {

  state = {
    following: true
  }

  isFriend (id) {
    return  this.props.currentUser.followings.includes(id)
  }

  render(){
    const { users } = this.props
    const listStr = users.map(user => (
      <li className="user-list-item"
      key={user._id}>
       <div style={{ 'backgroundImage': `url(${user.avatar ? `${Settings.host}/uploads/avatars/${user.avatar}` : Settings.defaultAvatar})`}}
         className="user-list-avatar">
       </div>
       <Link to={`/user/${user._id}`} className="user-list-username">
         {user.username} 
       </Link>
       <div className="user-list-switch">
         <label>
           <Toggle
             defaultChecked={this.isFriend(user._id)}
             icons={false}
             onChange={() => this.props.onToggleFollow(user._id)} />
         </label>
       </div>
    </li>
    ))
    return(
      <div className="user-list">
        {listStr}
      </div>
    )
  }
}

export default UserList
