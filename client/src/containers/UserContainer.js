import React, { Component } from 'react'
import { connect } from 'react-redux'
import Settings from '../settings'
import User from '../components/pages/User/User'

class UserContainer extends Component {

  render(){
    const { users } = this.props
    console.log('uuuuu', users)

    if(Object.keys(users).length !== 0){
      let user = users.find(user => (
        user._id === this.props.match.params.id
      ))
      return <User user={user} />
    }else{
      return <div className="loading">LOADING... </div>
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.user.all
  // FIXME: should have a getter in reducers, ref: https://github.com/reactjs/redux/blob/master/examples/shopping-cart/src/reducers/products.js#L16
})

export default connect(mapStateToProps)(UserContainer)
