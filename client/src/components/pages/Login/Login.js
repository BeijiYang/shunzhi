import React, { Component } from 'react'
import './login.css'
import {
  Link
} from 'react-router-dom'


class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {username, password}
    this.props.onFormSubmit(data)
  }

  render() {
    return(
      <div style={{ 'height': `${window.innerHeight - 80}px`}}
        className="login">
        <div className="login-content">
        <div className="login-hero" >
          <h1 className="title">
            登录
          </h1>
          <p className="slogan">
            连接小而确定的幸福
          </p>
        </div>
        <form ref={value => this.loginForm = value}
          onSubmit={this.handleSubmit} className="login-form">
          <div className="login-text-inputs">
            <div className="login-text-inputs-inner">
              <input ref={value => this.usernameInput = value }type="text" placeholder="用户名" />
              <input ref={value => this.passwordInput = value }type="password" placeholder="password" />
            </div>
          </div>
          <div className="login-actions">
            <button type="submit">登录</button>
          </div>
        </form>
        <div className="login-other-option">
          <Link to="/signup">没有账号？请先注册</Link>
        </div>
      </div>
      </div>
    )
  }
}

export default Login
