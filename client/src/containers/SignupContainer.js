import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import Signup from '../components/pages/Signup/Signup'
import { setTitle, showAlert } from '../redux/actions'
import { connect } from 'react-redux'
import store from '../redux/store'

class SignupContainer extends Component {
  componentWillMount () {
    this.props.setTitle('注册')
  }

  signup = (data) => {
    axios.post(`${Settings.host}/user/signup`, data).then(res => {
      if(res.data.username) {
        store.dispatch({ type: 'AUTH_USER', username: res.data.username })
        // this.props.dispatch({ type: 'AUTH_USER', username: res.data.username })
        localStorage.setItem('userId', res.data.userId)
        this.props.history.push('/dashboard')
      }
    }).catch(err => {
      if(err.response) {
        const { msg } = err.response.data
        this.props.showAlert(msg)
      }
    })
  }

  render() {
    return(
      <Signup onFormSubmit={this.signup}/>
    )
  }
}

export default connect(null, { setTitle, showAlert})(SignupContainer)
