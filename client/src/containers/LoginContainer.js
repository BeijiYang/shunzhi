import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import Login from '../components/pages/Login/Login'
import { connect } from 'react-redux'
import { setTitle, showAlert } from '../redux/actions'
import * as types from '../redux/ActionTypes'

class LoginContainer extends Component {
  componentWillMount () {
    this.props.setTitle('登录')
  }

  login = (data) => {
    if(data.username === ''){
      this.props.dispatch({ type: 'SHOW_ALERT', message: '用户名不能为空' })
      return
    }
    axios.post(`${Settings.host}/user/login`, data).then(res => {
      this.props.dispatch({ type: types.UPDATE_USER, currentUser: res.data.user })
      localStorage.setItem('userId', res.data.user.userId)
      console.log('aaaa', res.data.user)
      this.props.history.push('/dashboard')
    }).catch(err => {
      console.log('bbbbb')
      if(err.response){
        const { msg } = err.response.data
        this.props.showAlert(msg)
      }
    })
  }

  render() {
    return(
      <Login onFormSubmit={this.login} />
    )
  }
}

export default connect(null, { setTitle, showAlert })(LoginContainer)
