import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import Login from '../components/pages/Login/Login'
import { connect } from 'react-redux'

class LoginContainer extends Component {

  login = (data) => {
    if(data.username === ''){
      this.props.dispatch({ type: 'SHOW_ALERT', message: '用户名不能为空' })
      return
    }
    axios.post(`${Settings.host}/user/login`, data).then(res => {
      if(res.data.username) {
        this.props.dispatch({ type: 'AUTH_USER', username: res.data.username })
        localStorage.setItem('userId', res.data.userId)
        this.props.history.push('/dashboard')
      }
    }).catch(err => {
      if(err.response){
        const { msg } = err.response.data
        this.props.dispatch({ type: 'SHOW_ALERT', message: msg })
      }
      this.loginForm.reset()
    })
  }

  render() {
    return(
      <Login onFormSubmit={this.login} />
    )
  }
}

export default connect(null)(LoginContainer)
