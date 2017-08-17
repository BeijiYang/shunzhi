import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/pages/User/User'
import { followFriend } from '../redux/actions'


class UserContainer extends Component {

  addFollowing = (userId) => {
    this.props.followFriend(userId)
  }

  render(){
    const { users, currentUser } = this.props
    const { id }    = this.props.match.params
    let dataReady = Object.keys(users).length !== 0 && Object.keys(currentUser).length !== 0
    if (dataReady) {
      return <User user={users[id]} onAddFllowing={this.addFollowing}
                   isFriend={currentUser.followings.includes(id)} />
    }else {
      return <div className="loading">LOADING... </div>
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.userById.all,
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps, { followFriend })(UserContainer)
