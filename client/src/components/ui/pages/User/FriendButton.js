import React, { Component } from 'react'
import Settings from '../../../../settings'
import axios from 'axios'

class FriendButton extends Component {

  state = {
    isFriend: false
  }

  componentWillMount () {
    this.setState({
      isFriend: false
    })
  }

  addFollowing = () => {
    let data = {
      userId: this.props.user._id,
      currentUserId: localStorage.getItem('userId')
    }
    console.log('add-folg', this.props.user)
    axios.post(`${Settings.host}/add-following`, data).then(
      res => {
        console.log('addFollowing', res.data)
        this.setState({
          isFriend: true
        })
      }
    )
  }

  render(){
    return(
      <div
        onClick={this.addFollowing}
        className="friend-button">
          {this.state.isFriend ? '已是好友' : '加为好友'}
      </div>
    )
  }
}

export default FriendButton
