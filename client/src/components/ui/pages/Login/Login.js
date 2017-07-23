import React, { Component } from 'react'
import axios from 'axios'
import store from '../../../../redux/store'
import Settings from '../../../../settings'
import Sidebar from '../../shared/Sidebar/Sidebar'
import './login.css'
import {
  Link
} from 'react-router-dom'

class Login extends Component {

  signUp = (e) => {
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {username, password}
    axios.post(`${Settings.host}/user/login`, data).then(res => {
      console.log(res)
      if(res.data.username) {
        store.dispatch({ type: 'AUTH_USER', username: res.data.username })
        localStorage.setItem('userId', res.data.userId)
        this.props.history.push('/')
      }
    }).catch(err => {
      console.log(err.response.data.msg)
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
          <form onSubmit={this.signUp}>
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

export default Login
