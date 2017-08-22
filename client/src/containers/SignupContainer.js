import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import Signup from '../components/pages/Signup/Signup'
import { setTitle, showAlert, signup } from '../redux/actions'
import { connect } from 'react-redux'

class SignupContainer extends Component {
  componentWillMount () {
    this.props.setTitle('注册')
  }

  signup = (data) => {
    this.props.signup(data, this.props.history)
  }

  render() {
    return(
      <Signup onFormSubmit={this.signup}/>
    )
  }
}

export default connect(null, { setTitle, showAlert, signup })(SignupContainer)
