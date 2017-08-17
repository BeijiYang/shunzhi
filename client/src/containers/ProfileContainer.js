import React , { Component } from 'react'
import LoginFirst from '../components/shared/LoginFirst'
import Profile from '../components/pages/Profile/Profile'
import { connect } from 'react-redux'
import { removeFriend } from '../redux/actions'

class ProfileContainer extends Component {

  onToggleFollow = (userId) => {
    console.log('onToggleFollow----', userId)
    this.props.removeFriend(userId)
  }

  render() {
    const { users, currentUser } = this.props
    if(localStorage.getItem('userId') === 'undefined') {
      return(
        <LoginFirst />
      )
    }
    let dataReady = Object.keys(currentUser).length !== 0 &&
                    Object.keys(users).length !== 0
    if (dataReady) {
      console.log('ProfileContainer', currentUser)
      return(
        <Profile currentUser={currentUser} users={users} onToggleFollow={this.onToggleFollow}/>

      )
    }else {
      return(
        <div className="loading">
          loading ...
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.user.all,
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps, { removeFriend })(ProfileContainer)
