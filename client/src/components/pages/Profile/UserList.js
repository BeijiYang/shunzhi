import React, { Component } from 'react'
import './user-list.css'
import Settings from '../../../settings'
import Toggle from 'react-toggle'
import { Link } from 'react-router-dom'


class UserList extends Component {

  state = {
    following: true
  }

  toggleFollow = () => {
    // TODO
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
             defaultChecked={this.state.following}
             icons={false}
             onChange={this.toggleFollow} />
         </label>
       </div>
    </li>
    ))
    console.log(listStr)
    return(
      <div className="user-list">
        {listStr}
      </div>
    )
  }
}

export default UserList
