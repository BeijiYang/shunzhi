import React, { Component } from 'react'
import '../../css/home.css'
import logo from '../../img/logo.svg'
import {
  Link
} from 'react-router-dom'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'


const DashBoard = () => (
  <div>
    <Sidebar />
    <h1>DashBoard</h1>
  </div>
)
const HomeWelcome = () =>(

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
            <Link to="/signup">
              注册
            </Link>
            <Link to="/login">
              登录
            </Link>
          </div>
        </div>
)

class Home extends Component {
  render() {
    let { isAuthenticated } = this.props
    console.log(isAuthenticated)
    return(
      <div>
        { isAuthenticated ? (<DashBoard />) : (<HomeWelcome />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps)(Home)
