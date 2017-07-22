import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../../css/sidebar.css'
import { connect } from 'react-redux'
import store from '../../redux/store'

import {
  Link
} from 'react-router-dom'

class Sidebar extends Component {

  state = {
    isOpen: true
  }

  isMenuOpen(state) {
    console.log(state)
  }

  closeMenu = () => {
    this.setState({
      isOpen: false
    })
  }

  logout = () => {
    localStorage.removeItem('userId')
    store.dispatch({ type: 'LOG_OUT' })
    this.props.history.push('/')
  }

  render () {
    const { currentUser, isAuthenticated } = this.props.account
    let userInfo = (
      <div>
        {currentUser}
        <Link to="" onClick={this.logout}>退出</Link>
      </div>
    )
    return (
      <Menu isOpen={this.state.isOpen} onStateChange={ this.isMenuOpen }
            customCrossIcon={ false }>
        {isAuthenticated ? userInfo : ''}
        <Link onClick={this.closeMenu} to="/" className="menu-item" href="/">Home</Link>
        <Link onClick={this.closeMenu} to="/signup" className="menu-item" href="/">注册</Link>
        <button onClick={this.closeMenu} className ="bm-close-button" >关闭</button>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state
})

export default connect(mapStateToProps)(Sidebar)
