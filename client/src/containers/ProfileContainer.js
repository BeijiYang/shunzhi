import React , { Component } from 'react'
import LoginFirst from '../components/shared/LoginFirst'
import Profile from '../components/pages/Profile/Profile'
import { connect } from 'react-redux'
import { removeFriend, followFriend, setTitle, loadUsers } from '../redux/actions'
import Spinner from 'react-spinner'
import 'react-spinner/react-spinner.css'
import styled from 'styled-components'

const StyledSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
`

class ProfileContainer extends Component {
  componentDidMount () {
    // 使用 DidMount 让页面刷新的时候，不至于因为等待数据而空白很长时间
    this.props.setTitle('个人中心')
    this.props.loadUsers()
  }

  onToggleFollow = (userId) => {
    if (this.props.currentUser.followings.includes(userId)) {
      this.props.removeFriend(userId)
    } else {
      this.props.followFriend(userId)
    }
  }

  render() {
    const { users, currentUser } = this.props
    const usersWithoutMe = users.filter(item => {
      return item._id !== currentUser._id
    })
    if(localStorage.getItem('userId') === 'undefined') {
      return(
        <LoginFirst />
      )
    }
    let dataReady = Object.keys(currentUser).length !== 0 &&
                    Object.keys(users).length !== 0
    // Dan 的做法是在 store 中专门设置一个状态位叫做 isFetching: https://egghead.io/lessons/javascript-redux-displaying-loading-indicators
    if (dataReady) {
      return(
        <Profile currentUser={currentUser} users={usersWithoutMe} onToggleFollow={this.onToggleFollow}/>
      )
    }else {
      return(
        <StyledSpinner />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.user.all,
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps, {
  removeFriend,
  followFriend,
  setTitle,
  loadUsers
})(ProfileContainer)
