import React, { Component } from 'react'

class User extends Component {
  render(){
    const { userId } = this.props.match.params
    console.log('sdsd', userId)
    return(
      <div className="user">

      </div>
    )
  }
}

export default User
