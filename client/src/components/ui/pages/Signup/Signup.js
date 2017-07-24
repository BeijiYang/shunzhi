import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../../../../settings'
import './signup.css'
import {
  Link
} from 'react-router-dom'

import { connect } from 'react-redux'

class SignUp extends Component {

  signUp = (e) => {
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {username, password}
    axios.post(`${Settings.host}/user/signup`, data).then(res => {
      console.log('...then', res)
      if(res.data.username) {
        this.props.dispatch({ type: 'AUTH_USER', username: res.data.username })
        localStorage.setItem('userId', res.data.userId)
        this.props.history.push('/')
      }
    }).catch(err => {
      const { msg } = err.response.data
      this.props.dispatch({ type: 'SHOW_ALERT', message: msg })
    })
  }

  render() {
    console.log('render...', this.props)
    return(
      <div className="signup" >
        <div className="title-wrap">
          <div className="litte-title">signup</div>
          <h1>注册</h1>
          <p className="slogan">连接一个个小而确定的幸福</p>
        </div>
        <div className="form-wrap">
          <form onSubmit={this.signUp}>
            <div className="input-wrap">
              <div>
                <input ref={value => this.usernameInput = value} type="text" placeholder="用户名" />
              </div>
              <div>
                <input ref={value => this.emailInput = value} type="text" placeholder="Email" />
              </div>
              <div>
                <input ref={value => this.passwordInput = value} type="password" placeholder="password" />
              </div>
              <div>
                <input type="password" placeholder="再输入一次" />
              </div>
            </div>
            <button className="submit-btn" type="submit">注册</button>
            <Link to='/login' className="switch-method">
              已有账号？点此登录
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null)(SignUp)
