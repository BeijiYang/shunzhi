import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './signup.css'
import {
  Link
} from 'react-router-dom'


class SignUp extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = { username, password }
    this.props.onFormSubmit(data)
  }

  render() {
    return(
      <div className="signup">
        <TitleHeader title="signup" />
        <div className="signup-content">
        <div className="signup-hero" >
          <h1 className="title">
            注册
          </h1>
          <p className="slogan">
            连接小而确定的幸福
          </p>
        </div>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="signup-text-inputs">
            <div className="signup-text-inputs-inner">
              <input ref={value => this.usernameInput = value }type="text" placeholder="用户名" />
              <input ref={value => this.emailInput = value }type="text" placeholder="Email" />
              <input ref={value => this.passwordInput = value }type="password" placeholder="password" />
              <input ref={value => this.passConInput = value }type="password" placeholder="再输一遍" />
            </div>
          </div>
          <div className="signup-actions">
            <button type="submit">注册</button>
          </div>
        </form>
        <div className="signup-other-option">
          <Link to="/login">已有账号？直接登录</Link>
        </div>
      </div>
      </div>
    )
  }
}

export default SignUp
