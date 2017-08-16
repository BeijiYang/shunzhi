import React, { Component } from 'react'
import { connect } from 'react-redux'
import Settings from '../settings'
import User from '../components/pages/User/User'
import axios from 'axios'
import * as types from '../redux/ActionTypes'


class UserContainer extends Component {

  addFollowing = (userId) => {
    let data = {
      userId,
      currentUserId: localStorage.getItem('userId')
    }
    axios.post(`${Settings.host}/add-following`, data).then(
      res => {
        this.props.dispatch({ type: types.UPDATE_USER, currentUser: res.data.user })
      }
    )
  }

  render(){
    const { users, currentUser } = this.props
    const { id }    = this.props.match.params
    console.log('111111', users)
    console.log('22222', id)
    console.log('333333', currentUser)
    let dataReady = users.length !== 0 && Object.keys(currentUser).length !== 0
    console.log('444444', dataReady)
    if (dataReady) {
      let user = users.find(user => (
        user._id === id
      ))
      return <User user={user} onAddFllowing={this.addFollowing}
                   isFriend={currentUser.followings.includes(id)} />
    }else {
      return <div className="loading">LOADING... </div>
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.user.all,
  currentUser: state.account.currentUser
  // FIXME: should have a getter in reducers, ref: https://github.com/reactjs/redux/blob/master/examples/shopping-cart/src/reducers/products.js#L16
})

export default connect(mapStateToProps)(UserContainer)
