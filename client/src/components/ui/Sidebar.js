import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../../css/sidebar.css'

import {
  Link
} from 'react-router-dom'

class Sidebar extends Component {

  state = {
    isOpen: false
  }

  isMenuOpen(state) {
    console.log(state)
  }

  closeMenu = (e) => {
    e.preventDefault()
    this.setState({
      isOpen: false
    })
  }

  render () {
    return (
      <Menu isOpen={this.state.isOpen} onStateChange={ this.isMenuOpen }
            customCrossIcon={ false }>
        <h1>User</h1>
        <Link to="/" className="menu-item" href="/">Home</Link>
        <Link to="/signup" className="menu-item" href="/">注册</Link>
        <button className ="bm-close-button" onClick={this.closeMenu}>关闭</button>
      </Menu>
    );
  }
}

export default Sidebar
