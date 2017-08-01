import React, { Component } from 'react'
import './user-list.css'
import Settings from '../../../../settings'
import Toggle from 'react-toggle'


class UserList extends Component {

  state = {
    following: true
  }

  toggleFollow = () => {

  }

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
