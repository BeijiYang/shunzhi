import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../../css/sidebar.css'
import { connect } from 'react-redux'

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

  closeMenu = (e) => {
    e.preventDefault()
    this.setState({
      isOpen: false
    })
  }

  render () {
    const { currentUser } = this.props.account
    let userInfo = (
      <div>
      {currentUser}
      </div>
    )
    return (
      <Menu isOpen={this.state.isOpen} onStateChange={ this.isMenuOpen }
            customCrossIcon={ false }>
        {userInfo}
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
