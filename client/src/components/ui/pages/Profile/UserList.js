import React, { Component } from 'react'
import './user-list.css'
import Settings from '../../../../settings'

class UserList extends Component {
  render(){
    const { users } = this.props
    const listStr = Object.keys(users).map(id => (
      <li className="user-list-item"
      key={id}>
       <img src={users[id].avatar ? users[id].avatar : Settings.defaultAvatar}
         alt="avatar" />
       <div className="user-list-username">
         {users[id].username}
       </div>
       <div className="user-list-switch">
         switch
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
