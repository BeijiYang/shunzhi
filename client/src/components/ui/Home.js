import React, { Component } from 'react'
import '../../css/home.css'
import logo from '../../img/logo.svg'

class Home extends Component {
  render() {
    return(
      <div className="home">
        <div className="hero">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="title">
            吮指
          </h1>
          <p className="slogan">
            享受舌尖艳遇
          </p>
        </div>
        <div className="actions">
          <div className="signup">
            注册
          </div>
          <div className="login">
            登录
          </div>
        </div>
      </div>
    )
  }
}

export default Home
