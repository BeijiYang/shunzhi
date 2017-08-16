import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import Signup from '../components/pages/Signup/Signup'
import { connect } from 'react-redux'

class SignUp extends Component {

  signup = (data) => {
    axios.post(`${Settings.host}/user/signup`, data).then(res => {
      if(res.data.username) {
        this.props.dispatch({ type: 'AUTH_USER', username: res.data.username })
        localStorage.setItem('userId', res.data.userId)
        this.props.history.push('/dashboard')
      }
    }).catch(err => {
      if(err.response) {
        const { msg } = err.response.data
        this.props.dispatch({ type: 'SHOW_ALERT', message: msg })
      }
    })
  }

  render() {
    return(
      <Signup onFormSubmit={this.signup}/>
    )
  }
}

export default connect(null)(SignUp)
