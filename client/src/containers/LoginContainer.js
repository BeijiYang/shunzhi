import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import Login from '../components/pages/Login/Login'
import { connect } from 'react-redux'
import { setTitle, showAlert, updateUser } from '../redux/actions'

class LoginContainer extends Component {
  state = {
    referrer: ''
  }

  componentWillMount () {
    this.props.setTitle('登录')
    if (this.props.location.state) {
      const { from } = this.props.location.state
      this.setState({
        referrer: from.pathname
      })
    }
  }

  login = (data) => {
    if(data.username === ''){
      this.props.showAlert("用户名不能为空")
      return
    }
    axios.post(`${Settings.host}/user/login`, data).then(res => {
      this.props.updateUser(res.data.user)
      localStorage.setItem('userId', res.data.user._id)
      let redirectTo = this.state.referrer || '/dashboard'
      this.props.history.push(redirectTo)
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
