import React, { Component } from 'react'
import './user-list.css'
import Settings from '../../../settings'
import Toggle from 'react-toggle'
import { Link } from 'react-router-dom'


class UserList extends Component {

  state = {
    following: true
  }

  toggleFollow = (id) => {
    console.log('toggleFollow....', id)
    if (this.isFriend(id)) {
      // this.props.removeFollowing(id)
    }else {
      // this.props.addFollowing(id)
    }
  }

  isFriend (id) {
    return  this.props.currentUser.followings.includes(id)
  }

  render(){
    const { users, currentUser } = this.props
    const listStr = users.map(user => (
      <li className="user-list-item"
      key={user._id}>
       <div style={{ 'backgroundImage': `url(${user.avatar ? `${Settings.host}/uploads/avatars/${user.avatar}` : Settings.defaultAvatar})`}}
         className="user-list-avatar">
       </div>
       <Link to={`/user/${user._id}`} className="user-list-username">
         {user.username} { this.isFriend(user._id) ? '好友' : '非好友' }
       </Link>
       <div className="user-list-switch">
         <label>
           <Toggle
             defaultChecked={this.isFriend(user._id)}
             icons={false}
             onChange={() => this.toggleFollow(user._id)} />
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
