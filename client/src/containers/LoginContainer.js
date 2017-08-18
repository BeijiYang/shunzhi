import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import Login from '../components/pages/Login/Login'
import { connect } from 'react-redux'
import { setTitle, showAlert, updateUser } from '../redux/actions'

class LoginContainer extends Component {
  componentWillMount () {
    this.props.setTitle('登录')
  }

  login = (data) => {
    if(data.username === ''){
      this.props.showAlert("用户名不能为空")
      return
    }
    axios.post(`${Settings.host}/user/login`, data).then(res => {
      this.props.updateUser(res.data.user)
      localStorage.setItem('userId', res.data.user._id)

      // then 之中的语句 throw Eror ，也会触发 catch
      this.props.history.push('/dashboard')
    }).catch(err => {
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

export default connect(null, { setTitle, showAlert, updateUser })(LoginContainer)
