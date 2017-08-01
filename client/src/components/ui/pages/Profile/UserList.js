import React, { Component } from 'react'
import './user-list.css'

class UserList extends Component {
  render(){
    const { users } = this.props
    const listStr = Object.keys(users).map(id => (
      <li className="user-list-item"
      key={id}>
       <img src={users[id].avatar} alt="avatar" />
       {users[id].username}
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
