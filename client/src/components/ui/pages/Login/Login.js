import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../../../../settings'
import Sidebar from '../../shared/Sidebar/Sidebar'
import './login.css'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends Component {

  login = (e) => {
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {username, password}
    if(username === ''){
      this.props.dispatch({ type: 'SHOW_ALERT', message: '用户名不能为空' })
      return
    }
    axios.post(`${Settings.host}/user/login`, data).then(res => {
      console.log(res)
      if(res.data.username) {
        this.props.dispatch({ type: 'AUTH_USER', username: res.data.username })
        localStorage.setItem('userId', res.data.userId)
        this.props.history.push('/dashboard')
      }
    }).catch(err => {
      console.log(err.response.data.msg)
      const { msg } = err.response.data
      this.props.dispatch({ type: 'SHOW_ALERT', message: msg })
      this.loginForm.reset()
    })
  }

  render() {
    return(
      <div className="login" >
        <Sidebar />
        <div className="title-wrap">
          <div className="litte-title">login</div>
          <h1>登录</h1>
          <p className="slogan">连接一个个小而确定的幸福</p>
        </div>
        <div className="form-wrap">
          <form
            ref={value => this.loginForm = value}
            onSubmit={this.login}>
            <div className="input-wrap">
              <div>
                <input ref={value => this.usernameInput = value} type="text" placeholder="用户名" />
              </div>
              <div>
                <input ref={value => this.passwordInput = value} type="password" placeholder="password" />
              </div>
            </div>
            <button className="submit-btn" type="submit">登录</button>
            <Link to='/signup' className="switch-method">
              没有账号？点此注册
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null)(Login)
