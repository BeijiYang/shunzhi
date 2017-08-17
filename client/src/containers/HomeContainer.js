import React, { Component } from 'react'
import Home from '../components/pages/Home/Home'
import { connect } from 'react-redux'

class HomeContainer extends Component {

  render() {
    console.log('currentUserxxxxxx', this.props.currentUser)
    let { currentUser } = this.props
    if (Object.keys(currentUser).length === 0) {
      return(
        <Home />
      )
    } else {
      this.props.history.push('/dashboard')
      return null
    }
  }
}

const mapStateToProps= (state) => ({
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps)(HomeContainer)
