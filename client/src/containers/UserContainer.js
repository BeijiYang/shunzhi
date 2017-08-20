import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/pages/User/User'
import { followFriend, setTitle } from '../redux/actions'
import Spinner from 'react-spinner'
import 'react-spinner/react-spinner.css'
import styled from 'styled-components'

const StyledSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
`

class UserContainer extends Component {
  componentWillMount () {
    this.props.setTitle('用户')
  }

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
      return <StyledSpinner />
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.userById.all,
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps, { followFriend, setTitle })(UserContainer)
